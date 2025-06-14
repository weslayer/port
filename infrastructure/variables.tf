variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "Name of the S3 bucket for static website hosting"
  type        = string
  default     = "weslayer-portfolio"
}

variable "domain_name" {
  description = "Domain name for the website (e.g., portfolio.weslayer.xyz)"
  type        = string
  default     = "portfolio.weslayer.xyz"
}

variable "create_route53" {
  description = "Whether to create Route53 records (requires existing hosted zone)"
  type        = bool
  default     = false
}

variable "hosted_zone_name" {
  description = "Name of the Route53 hosted zone (e.g., weslayer.xyz)"
  type        = string
  default     = "weslayer.xyz"
} 