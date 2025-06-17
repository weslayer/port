terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-east-1"
}

# S3 bucket for static website hosting
resource "aws_s3_bucket" "portfolio" {
  bucket = "weslayer-portfolio"

  lifecycle {
    prevent_destroy = true  # Prevent accidental deletion of the bucket
  }
}

# S3 bucket configuration for static website hosting
resource "aws_s3_bucket_website_configuration" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

# Add CloudFront Origin Access Identity
resource "aws_cloudfront_origin_access_identity" "portfolio" {
  comment = "OAI for portfolio CloudFront"
}

# CloudFront distribution
resource "aws_cloudfront_distribution" "portfolio" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  price_class         = "PriceClass_100"  # Use only North America and Europe edge locations

  aliases = ["portfolio.weslayer.xyz"]

  origin {
    domain_name = aws_s3_bucket.portfolio.bucket_regional_domain_name
    origin_id   = "S3-${aws_s3_bucket.portfolio.bucket}"
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.portfolio.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "S3-${aws_s3_bucket.portfolio.bucket}"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 3600
    max_ttl     = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = "arn:aws:acm:us-east-1:${data.aws_caller_identity.current.account_id}:certificate/94ffc565-02ec-4606-bae6-193f37cc7ea2"
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  # Custom error response for SPA routing
  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }
}

# Output the CloudFront distribution domain name
output "cloudfront_domain" {
  value = aws_cloudfront_distribution.portfolio.domain_name
}

# Output the CloudFront distribution ID
output "cloudfront_id" {
  value = aws_cloudfront_distribution.portfolio.id
}

# Output the S3 bucket website endpoint
output "s3_website_endpoint" {
  value = aws_s3_bucket_website_configuration.portfolio.website_endpoint
}

# Get current AWS account ID
data "aws_caller_identity" "current" {}

# Route53 zone
data "aws_route53_zone" "selected" {
  name = "weslayer.xyz"
}

# Route53 record for the CloudFront distribution
resource "aws_route53_record" "portfolio" {
  zone_id = data.aws_route53_zone.selected.zone_id
  name    = "portfolio.weslayer.xyz"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.portfolio.domain_name
    zone_id               = aws_cloudfront_distribution.portfolio.hosted_zone_id
    evaluate_target_health = false
  }
}

# Output the Route53 record name
output "domain_name" {
  value = aws_route53_record.portfolio.name
}

# S3 bucket policy to allow CloudFront access
resource "aws_s3_bucket_policy" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          AWS = aws_cloudfront_origin_access_identity.portfolio.iam_arn
        }
        Action = "s3:GetObject"
        Resource = "${aws_s3_bucket.portfolio.arn}/*"
      }
    ]
  })
}

# Output the bucket name for reference
output "bucket_name" {
  value = aws_s3_bucket.portfolio.bucket
} 
