# Portfolio Infrastructure

This directory contains Terraform configuration for deploying the portfolio website to AWS using S3 and CloudFront.

## Prerequisites

1. AWS CLI installed and configured with appropriate credentials
2. Terraform installed (version >= 1.2.0)
3. Domain name (optional, for custom domain setup)

## Setup

1. Initialize Terraform:
   ```bash
   terraform init
   ```

2. Review the planned changes:
   ```bash
   terraform plan
   ```

3. Apply the configuration:
   ```bash
   terraform apply
   ```

## Configuration

The following variables can be customized in `terraform.tfvars`:

- `aws_region`: AWS region to deploy resources (default: us-west-2)
- `bucket_name`: Name of the S3 bucket (default: weslayer-portfolio)
- `domain_name`: Custom domain name (optional)
- `create_route53`: Whether to create Route53 records (default: false)

## Deployment

After applying the Terraform configuration:

1. Build your Next.js application:
   ```bash
   npm run build
   ```

2. Upload the contents of the `out` directory to the S3 bucket:
   ```bash
   aws s3 sync out/ s3://your-bucket-name --delete
   ```

3. Invalidate the CloudFront cache:
   ```bash
   aws cloudfront create-invalidation --distribution-id your-distribution-id --paths "/*"
   ```

## Cleanup

To destroy all created resources:
```bash
terraform destroy
```

## Notes

- The S3 bucket is configured for static website hosting
- CloudFront distribution is set up with HTTPS
- Custom error responses are configured for SPA routing
- The S3 bucket is private and only accessible through CloudFront using an Origin Access Identity (OAI)
- Caching is optimized for static content 