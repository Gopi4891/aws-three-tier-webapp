# aws-three-tier-webapplicaton

## Architecture
- Frontend: React app on EC2 (Public Subnet)
- Backend**: Node.js/Express on EC2 (Private Subnet)
- Database**: Amazon RDS (MySQL)
- IaC: Terraform

## AWS Services Used
- EC2, VPC, Subnets, IGW, NAT Gateway, RDS, CloudWatch, IAM, Terraform

## How to Deploy
1. cd infrastructure && terraform apply
2. Deploy Frontend React in EC2.
3. Deploy Backend Node.js API.
4. Connect Backend to RDS (MySQL).
