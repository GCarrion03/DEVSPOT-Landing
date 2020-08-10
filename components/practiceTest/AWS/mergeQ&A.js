const questionBank = [
    {
        "questionId": 590,
        "questionText": "A Developer created an AWS Lambda function and has asked the SysOps Administrator to make this function run every 15 minutes. What is the MOST efficient way to accomplish this request?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create an Amazon EC2 instance and schedule a cron to invoke the Lambda function."
            },
            {
                "optionId": "B",
                "optionText": "Create a Repeat Time variable inside the Lambda function to invoke the Lamdba function."
            },
            {
                "optionId": "C",
                "optionText": "Create a second Lambda function to monitor and invoke the first Lamdba function."
            },
            {
                "optionId": "D",
                "optionText": "Create an Amazon CloudWatch scheduled event to invoke the Lambda function."
            }
        ]
    },
    {
        "questionId": 591,
        "questionText": "A company’s Auditor implemented a compliance requirement that all Amazon S3 buckets must have logging enabled. How should the SysOps Administrator ensure this compliance requirement is met, while still permitting Developers to create and use new S3 buckets?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Add AWS CloudTrail logging for the S3 buckets."
            },
            {
                "optionId": "B",
                "optionText": "Implement IAM policies to allow only the Storage team to create S3 buckets."
            },
            {
                "optionId": "C",
                "optionText": "Add the AWS Config managed rule S3_BUCKET_LOGGING_ENABLED."
            },
            {
                "optionId": "D",
                "optionText": "Create an AWS Lambda function to delete the S3 buckets if logging is not turned on."
            }
        ]
    },
    {
        "questionId": 592,
        "questionText": "An organization is concerned that its Amazon RDS databases are not protected. The solution to address this issue must be low cost, protect against table corruption that could be overlooked for several days, and must offer a 30-day window of protection. How can these requirements be met?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Enable Multi-AZ on the RDS instance to maintain the data in a second Availability Zone."
            },
            {
                "optionId": "B",
                "optionText": "Create a read replica of the RDS instance to maintain the data in a second region."
            },
            {
                "optionId": "C",
                "optionText": "Ensure that automated backups are enabled and set the appropriate retention period."
            },
            {
                "optionId": "D",
                "optionText": "Enable versioning in RDS to recover altered table data when needed."
            }
        ]
    },
    {
        "questionId": 593,
        "questionText": "An organization is running multiple applications for their customers. Each application is deployed by running a base AWS CloudFormation template that configures a new VPC. All applications are run in the same AWS account and AWS Region. A SysOps Administrator has noticed that when trying to deploy the same AWS CloudFormation stack, it fails to deploy. What is likely to be the problem?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "The Amazon Machine image used is not available in that region."
            },
            {
                "optionId": "B",
                "optionText": "The AWS CloudFormation template needs to be updated to the latest version."
            },
            {
                "optionId": "C",
                "optionText": "The VPC configuration parameters have changed and must be updated in the template."
            },
            {
                "optionId": "D",
                "optionText": "The account has reached the default limit for VPCs allowed."
            }
        ]
    },
    {
        "questionId": 594,
        "questionText": "Based on the AWS Shared Responsibility Model, which of the following actions are the responsibility of the customer for an Aurora database?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Performing underlying OS updates"
            },
            {
                "optionId": "B",
                "optionText": "Provisioning of storage for database"
            },
            {
                "optionId": "C",
                "optionText": "Scheduling maintenance, patches, and other updates"
            },
            {
                "optionId": "D",
                "optionText": "Executing maintenance, patches, and other updates"
            }
        ]
    },
    {
        "questionId": 595,
        "questionText": "A web-commerce application stores its data in an Amazon Aurora DB cluster with an Aurora replica. The application displays shopping cart information by reading data from the reader endpoint. When monitoring the Aurora database, the SysOps Administrator sees that the AuroraReplicaLagMaximum metric for a single replica is high. What behavior is the application MOST likely exhibiting to users?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Users cannot add any items to the shopping cart."
            },
            {
                "optionId": "B",
                "optionText": "Users intermittently notice that the cart is not updated correctly."
            },
            {
                "optionId": "C",
                "optionText": "Users cannot remove any items from the shopping cart."
            },
            {
                "optionId": "D",
                "optionText": "Users cannot use the application because it is falling back to an error page."
            }
        ]
    },
    {
        "questionId": 596,
        "questionText": "A company would like to review each change in the infrastructure before deploying updates in its AWS CloudFormation stacks. Which action will allow an Administrator to understand the impact of these changes before implementation?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Implement a blue/green strategy using AWS Elastic Beanstalk."
            },
            {
                "optionId": "B",
                "optionText": "Perform a canary deployment using Application Load Balancers and target groups."
            },
            {
                "optionId": "C",
                "optionText": "Create a change set for the running stack."
            },
            {
                "optionId": "D",
                "optionText": "Submit the update using the UpdateStack API call."
            }
        ]
    },
    {
        "questionId": 597,
        "questionText": "A Systems Administrator is responsible for maintaining custom, approved AMIs for a company. These AMIs must be shared with each of the company’s AWS accounts. How can the Administrator address this issue?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Contact AWS Support for sharing AMIs with other AWS accounts. "
            },
            {
                "optionId": "B",
                "optionText": "Modify the permissions on the AMIs so that they are publicly accessible."
            },
            {
                "optionId": "C",
                "optionText": "Modify the permissions on the IAM role that are associated with the AMI."
            },
            {
                "optionId": "D",
                "optionText": "Share the AMIs with each AWS account using the console or CLI."
            }
        ]
    },
    {
        "questionId": 598,
        "questionText": "A company’s data retention policy dictates that backups be stored for exactly two years. After that time, the data must be deleted. How can Amazon EBS snapshots be managed to conform to this data retention policy?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use an Amazon S3 lifecycle policy to delete snapshots older than two years."
            },
            {
                "optionId": "B",
                "optionText": "Configure Amazon Inspector to find and delete old EBS snapshots."
            },
            {
                "optionId": "C",
                "optionText": "Schedule an AWS Lambda function using Amazon CloudWatch Events to periodically run a script to delete old snapshots."
            },
            {
                "optionId": "D",
                "optionText": "Configure an Amazon CloudWatch alarm to trigger the launch of an AWS CloudFormation template that will clean the older snapshots."
            }
        ]
    },
    {
        "questionId": 599,
        "questionText": "A SysOps Administrator must devise a strategy for enforcing tagging of all EC2 instances and Amazon Elastic Block Store (Amazon EBS) volumes. What action can the Administrator take to implement this for real-time enforcement?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use the AWS Tag Editor to manually search for untagged resources and then tag them properly in the editor."
            },
            {
                "optionId": "B",
                "optionText": "Set up AWS Service Catalog with the TagOptions Library rule that enforces a tagging taxonomy proactively when instances and volumes are launched."
            },
            {
                "optionId": "C",
                "optionText": "In a PowerShell or shell script, check for untagged items by using the resource tagging GetResources API action, and then manually tag the reported items."
            },
            {
                "optionId": "D",
                "optionText": "Launch items by using the AWS API. Use the TagResources API action to apply the required tags when the instances and volumes are launched."
            }
        ]
    },
    {
        "questionId": 600,
        "questionText": "During a security investigation, it is determined that there is a coordinated attack on the web applications deployed on Amazon EC2. The attack is performed through malformed HTTP headers. What AWS service of feature would prevent this traffic from reaching the EC2 instances?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Amazon Inspector"
            },
            {
                "optionId": "B",
                "optionText": "Amazon Security Groups"
            },
            {
                "optionId": "C",
                "optionText": "AWS WAF"
            },
            {
                "optionId": "D",
                "optionText": "Application Load Balancer (ALB)"
            }
        ]
    },
    {
        "questionId": 601,
        "questionText": "A company is deploying a legacy web application on Amazon EC2 instances behind an ELB Application Load Balancer. The application worked well in the test environment. However, in production, users report that they are prompted to log in to the system several times an hour. Which troubleshooting step should be taken to help resolve the problem reported by users?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Confirm that the Application Load Balancer is in a multi-AZ configuration."
            },
            {
                "optionId": "B",
                "optionText": "Enable health checks on the Application Load Balancer."
            },
            {
                "optionId": "C",
                "optionText": "Ensure that port 80 is configured on the security group."
            },
            {
                "optionId": "D",
                "optionText": "Enable sticky sessions on the Application Load Balancer."
            }
        ]
    },
    {
        "questionId": 602,
        "questionText": "A company has mandated the use of multi-factor authentication (MFA) for all IAM users, and requires users to make all API-calls using the CLI. However, users are not prompted to enter MFA tokens, and are able to run CLI commands without MFA. In an attempt to enforce MFA, the company attached an IAM policy to all users that denies API calls that have not been authenticated with MFA. What additional step must be taken to ensure that API calls are authenticated using MFA?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Enable MFA on IAM roles, and require IAM users to use role credentials to sign API calls."
            },
            {
                "optionId": "B",
                "optionText": "Ask the IAM users to log into the AWS Management Console with MFA before making API calls using the CLI."
            },
            {
                "optionId": "C",
                "optionText": "Restrict the IAM users to use of the console, as MFA is not supported for CLI use."
            },
            {
                "optionId": "D",
                "optionText": "Require users to use temporary credentials from the get-session token command to sign API calls."
            }
        ]
    },
    {
        "questionId": 603,
        "questionText": "An application is being developed that will be served across a fleet of Amazon EC2 instances, which require a consistent view of persistent data. Items stored vary in size from 1KB to 300MB; the items are read frequently, created occasionally, and often require partial changes without conflict. The data store is not expected to grow beyond 2TB, and items will be expired according to age and content type. Which AWS service solution meets these requirements?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Amazon S3 buckets with lifecycle policies to delete old objects."
            },
            {
                "optionId": "B",
                "optionText": "Amazon RDS PostgreSQL and a job that deletes rows based on age and file type columns."
            },
            {
                "optionId": "C",
                "optionText": "Amazon EFS and a scheduled process to delete files based on age and extension."
            },
            {
                "optionId": "D",
                "optionText": "An EC2 instance store synced on boot from a central Amazon EBS-backed instance."
            }
        ]
    },
    {
        "questionId": 604,
        "questionText": "A SysOps Administrator created an Amazon VPC with an IPv6 CIDR block, which requires access to the internet. However, access from the internet towards the VPC is prohibited. After adding and configuring the required components to the VPC, the Administrator is unable to connect to any of the domains that reside on the internet. What additional route destination rule should the Administrator add to the route tables?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Route ::/0 traffic to a NAT gateway"
            },
            {
                "optionId": "B",
                "optionText": "Route ::/0 traffic to an internet gateway"
            },
            {
                "optionId": "C",
                "optionText": "Route 0.0.0.0/0 traffic to an egress-only internet gateway"
            },
            {
                "optionId": "D",
                "optionText": "Route ::/0 traffic to an egress-only internet gateway"
            }
        ]
    },
    {
        "questionId": 605,
        "questionText": "A recent organizational audit uncovered an existing Amazon RDS database that is not currently configured for high availability. Given the critical nature of this database, it must be configured for high availability as soon as possible. How can this requirement be met?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Switch to an active/passive database pair using the create-db-instance-read-replica with the - -availability-zone flag."
            },
            {
                "optionId": "B",
                "optionText": "Specify high availability when creating a new RDS instance, and live-migrate the data."
            },
            {
                "optionId": "C",
                "optionText": "Modify the RDS instance using the console to include the Multi-AZ option."
            },
            {
                "optionId": "D",
                "optionText": "Use the modify-db-instance command with the - -ha flag."
            }
        ]
    },
    {
        "questionId": 606,
        "questionText": "A company must ensure that any objects uploaded to an S3 bucket are encrypted.  Which of the following actions will meet this requirement? (Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Implement AWS Shield to protect against unencrypted objects stored in S3 buckets."
            },
            {
                "optionId": "B",
                "optionText": "Implement Object access control list (ACL) to deny unencrypted objects from being uploaded to the S3 bucket."
            },
            {
                "optionId": "C",
                "optionText": "Implement Amazon S3 default encryption to make sure that any object being uploaded is encrypted before it is stored."
            },
            {
                "optionId": "D",
                "optionText": "Implement Amazon Inspector to inspect objects uploaded to the S3 bucket to make sure that they are encrypted."
            },
            {
                "optionId": "E",
                "optionText": "Implement S3 bucket policies to deny unencrypted objects from being uploaded to the buckets."
            }
        ]
    },
    {
        "questionId": 607,
        "questionText": "When the AWS Cloud infrastructure experiences an event that may impact an organization, which AWS service can be used to see which of the organization’s resources are affected?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "AWS Service Health Dashboard"
            },
            {
                "optionId": "B",
                "optionText": "AWS Trusted Advisor"
            },
            {
                "optionId": "C",
                "optionText": "AWS Personal Health Dashboard"
            },
            {
                "optionId": "D",
                "optionText": "AWS Systems Manager"
            }
        ]
    },
    {
        "questionId": 608,
        "questionText": "A company’s static website hosted on Amazon S3 was launched recently, and is being used by tens of thousands of users. Subsequently, website users are experiencing 503 service unavailable errors. Why are these errors occurring?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "The request rate to Amazon S3 is too high."
            },
            {
                "optionId": "B",
                "optionText": "There is an error with the Amazon RDS database."
            },
            {
                "optionId": "C",
                "optionText": "The requests to Amazon S3 do not have the proper permissions."
            },
            {
                "optionId": "D",
                "optionText": "The users are in a different geographical region and Amazon Route 53 is restricting access."
            }
        ]
    },
    {
        "questionId": 609,
        "questionText": "An organization has two AWS accounts: Development and Production. A SysOps Administrator manages access of IAM users to both accounts. Some IAM users in Development should have access to certain resources in Production. How can this be accomplished?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create an IAM role in the Production account with the Development account as a trusted entity and then allow those users from the Development account to assume the Production account IAM role."
            },
            {
                "optionId": "B",
                "optionText": "Create a group of IAM users in the Development account, and add Production account service ARNs as resources in the IAM policy."
            },
            {
                "optionId": "C",
                "optionText": "Establish a federation between the two accounts using the on-premises Microsoft Active Directory, and allow the Development account to access the Production account through this federation."
            },
            {
                "optionId": "D",
                "optionText": "Establish an Amazon Cognito Federated Identity between the two accounts, and allow the Development account to access the Production account through this federation."
            }
        ]
    },
    {
        "questionId": 610,
        "questionText": "A SysOps Administrator is responsible for managing a set of 12.micro Amazon EC2 instances. The Administrator wants to automatically reboot any instance that exceeds 80% CPU utilization. Which of these solutions would meet the requirements?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create an Amazon CloudWatch alarm on the CPUCreditBalance metric and specify a terminate alarm action. "
            },
            {
                "optionId": "B",
                "optionText": "Create an Amazon CloudWatch alarm on the CPUUtilization metric and specify a reboot alarm action."
            },
            {
                "optionId": "C",
                "optionText": "Create an Amazon CloudWatch alarm on the CPUCreditBalance metric and specify a reboot alarm action."
            },
            {
                "optionId": "D",
                "optionText": "Create an Amazon CloudWatch alarm on the CPUUtilization metric and specify a terminate alarm action."
            }
        ]
    },
    {
        "questionId": 611,
        "questionText": "A company’s customers are reporting increased latency while accessing static web content from Amazon S3. A SysOps Administrator observed a very high rate of read operations on a particular S3 bucket. What will minimize latency by reducing load on the S3 bucket?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Migrate the S3 bucket to a region that is closer to end users’ geographic locations."
            },
            {
                "optionId": "B",
                "optionText": "Use cross-region replication to replicate all of the data to another region."
            },
            {
                "optionId": "C",
                "optionText": "Create an Amazon CloudFront distribution with the S3 bucket as the origin."
            },
            {
                "optionId": "D",
                "optionText": "Use Amazon ElastiCache to cache data being served from Amazon S3."
            }
        ]
    },
    {
        "questionId": 612,
        "questionText": "A company requires that all access from on-premises applications to AWS services go over its AWS Direct Connect connection rather than the public internet. How would a SysOps Administrator implement this requirement?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Implement an IAM policy that uses the aws:sourceConnection condition to allow access from the AWS Direct Connect connection ID only"
            },
            {
                "optionId": "B",
                "optionText": "Set up a public virtual interface on the AWS Direct Connect connection"
            },
            {
                "optionId": "C",
                "optionText": "Configure AWS Shield to protect the AWS Management Console from being accessed by IP addresses other than those within the data center ranges"
            },
            {
                "optionId": "D",
                "optionText": "Update all the VPC network ACLs to allow access from the data center IP ranges"
            }
        ]
    },
    {
        "questionId": 613,
        "questionText": "A SysOps Administrator must find a way to set up alerts when Amazon EC2 service limits are close to being reached. How can the Administrator achieve this requirement?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use Amazon Inspector and Amazon CloudWatch Events."
            },
            {
                "optionId": "B",
                "optionText": "Use AWS Trusted Advisor and Amazon CloudWatch Events."
            },
            {
                "optionId": "C",
                "optionText": "Use the Personal Health Dashboard and CloudWatch Events."
            },
            {
                "optionId": "D",
                "optionText": "Use AWS CloudTrail and CloudWatch Events."
            }
        ]
    },
    {
        "questionId": 614,
        "questionText": "A web application accepts orders from online users and places the orders into an Amazon SQS queue. Amazon EC2 instances in an EC2 Auto Scaling group read the messages from the queue, process the orders, and email order confirmations to the users. The Auto Scaling group scales up and down based on the queue depth. At the beginning of each business day, users report confirmation emails are delayed. What action will address this issue?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create a scheduled scaling action to scale up in anticipation of the traffic."
            },
            {
                "optionId": "B",
                "optionText": "Change the Auto Scaling group to scale up and down based on CPU utilization."
            },
            {
                "optionId": "C",
                "optionText": "Change the launch configuration to launch larger EC2 instance types."
            },
            {
                "optionId": "D",
                "optionText": "Modify the scaling policy to deploy more EC2 instances when scaling up."
            }
        ]
    },
    {
        "questionId": 615,
        "questionText": "A company creates custom AMI images by launching new Amazon EC2 instances from an AWS CloudFormation template. It installs and configures necessary software through AWS OpsWorks, and takes images of each EC2 instance. The process of installing and configuring software can take between 2 to 3 hours, but at times, the process stalls due to installation errors. The SysOps Administrator must modify the CloudFormation template so if the process stalls, the entire stack will fail and roll back. Based on these requirements, what should be added to the template?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Conditions with a timeout set to 4 hours."
            },
            {
                "optionId": "B",
                "optionText": "CreationPolicy with a timeout set to 4 hours."
            },
            {
                "optionId": "C",
                "optionText": "DependsOn with a timeout set to 4 hours."
            },
            {
                "optionId": "D",
                "optionText": "Metadata with a timeout set to 4 hours."
            }
        ]
    },
    {
        "questionId": 616,
        "questionText": "A SysOps Administrator must take a team’s single existing AWS CloudFormation template and split it into smaller, service-specific templates. All of the services in the template reference a single, shared Amazon S3 bucket. What should the Administrator do to ensure that this S3 bucket can be referenced by all the service templates?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Include the S3 bucket as a mapping in each template."
            },
            {
                "optionId": "B",
                "optionText": "Add the S3 bucket as a resource in each template."
            },
            {
                "optionId": "C",
                "optionText": "Create the S3 bucket in its own template and export it."
            },
            {
                "optionId": "D",
                "optionText": "Generate the S3 bucket using StackSets."
            }
        ]
    },
    {
        "questionId": 617,
        "questionText": "After installing and configuring the Amazon CloudWatch agent on an EC2 instance, the anticipated system logs are not being received by CloudWatch Logs. Which of the following are likely to be the cause of this problem? (Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "A custom of third-party solution for logs is being used."
            },
            {
                "optionId": "B",
                "optionText": "The IAM role attached to the EC2 instance does not have the proper permissions."
            },
            {
                "optionId": "C",
                "optionText": "The CloudWatch agent does not support the operating system used."
            },
            {
                "optionId": "D",
                "optionText": "A billing constraint is limiting the number of CloudWatch Logs within this account."
            },
            {
                "optionId": "E",
                "optionText": "The EC2 instance is in a private subnet, and the VPC does not have a NAT gateway."
            }
        ]
    },
    {
        "questionId": 618,
        "questionText": "A SysOps Administrator found that a newly-deployed Amazon EC2 application server is unable to connect to an existing Amazon RDS database. After enabling VPC Flow Logs and confirming that the flow log is active on the console, the log group cannot be located in Amazon CloudWatch. What are the MOST likely reasons for this situation? (Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "The Administrator must configure the VPC Flow Logs to have them sent to AWS CloudTrail."
            },
            {
                "optionId": "B",
                "optionText": "The Administrator has waited less than ten minutes for the log group to be created in CloudWatch."
            },
            {
                "optionId": "C",
                "optionText": "The account VPC Flow Logs have been disabled by using a service control policy."
            },
            {
                "optionId": "D",
                "optionText": "No relevant traffic has been sent since the VPC Flow Logs were created"
            },
            {
                "optionId": "E",
                "optionText": "The account has Amazon GuardDuty enabled."
            }
        ]
    },
    {
        "questionId": 619,
        "questionText": "An HTTP web application is launched on Amazon EC2 instances behind an ELB Application Load Balancer. The EC2 instances run across multiple Availability Zones. A network ACL and a security group for the load balancer and EC2 instances allow inbound traffic on port 80. After launch, the website cannot be reached over the internet. What additional step should be taken?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Add a rule to the security group allowing outbound traffic on port 80."
            },
            {
                "optionId": "B",
                "optionText": "Add a rule to the network ACL allowing outbound traffic on port 80."
            },
            {
                "optionId": "C",
                "optionText": "Add a rule to the security group allowing outbound traffic on ports 1024 through 65535."
            },
            {
                "optionId": "D",
                "optionText": "Add a rule to the network ACL allowing outbound traffic on ports 1024 through 65535."
            }
        ]
    },
    {
        "questionId": 620,
        "questionText": "A company has an application that is running on an EC2 instance in one Availability Zone. A SysOps Administrator has been tasked with making the application highly available. The Administrator created a launch configuration from the running EC2 instance. The Administrator also properly configured a load balancer. What step should the Administrator complete next to make the application highly available?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create an Auto Scaling group by using the launch configuration across at least 2 Availability Zones with a minimum size of 1, desired capacity of 1, and a maximum size of 1."
            },
            {
                "optionId": "B",
                "optionText": "Create an Auto Scaling group by using the launch configuration across at least 3 Availability Zones with a minimum size of 2, desired capacity of 2, and a maximum of 2."
            },
            {
                "optionId": "C",
                "optionText": "Create an Auto Scaling group by using the launch configuration across at least 2 regions with a minimum size of 1, desired capacity of 1, and a maximum size of 1."
            },
            {
                "optionId": "D",
                "optionText": "Create an Auto Scaling group by using the launch configuration across at least 3 regions with a minimum size of 2, desired capacity of 2, and a maximum size of 2."
            }
        ]
    },
    {
        "questionId": 621,
        "questionText": "An Applications team has successfully deployed an AWS CloudFormation stack consisting of 30 t2-medium Amazon EC2 instances in the us-west-2 Region. When using the same template to launch a stack in useast- 2, the launch failed and rolled back after launching only 10 EC2 instances. What is a possible cause of this failure?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "The IAM user did not have privileges to launch the CloudFormation template."
            },
            {
                "optionId": "B",
                "optionText": "The t2.medium EC2 instance service limit was reached."
            },
            {
                "optionId": "C",
                "optionText": "An AWS Budgets threshold was breached."
            },
            {
                "optionId": "D",
                "optionText": "The application’s Amazon Machine Image (AMI) is not available in us-east-2."
            }
        ]
    },
    {
        "questionId": 622,
        "questionText": "A SysOps Administrator stores crash dump files in Amazon S3. New security and privacy measures require that crash dumps older than 6 months be deleted. Which approach meets this requirement?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use Amazon CloudWatch Events to delete objects older than 6 months."
            },
            {
                "optionId": "B",
                "optionText": "Implement lifecycle policies to delete objects older than 6 months."
            },
            {
                "optionId": "C",
                "optionText": "Use the Amazon S3 Standard-Infrequent Access (S3 Standard-IA) storage class to automatically delete objects older than 6 months."
            },
            {
                "optionId": "D",
                "optionText": "Create versioning rules to delete objects older than 6 months."
            }
        ]
    },
    {
        "questionId": 623,
        "questionText": "The Accounting department would like to receive billing updates more than once a month. They would like  the updates to be in a format that can easily be viewed with a spreadsheet application. How can this request be fulfilled?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use Amazon CloudWatch Events to schedule a billing inquiry on a bi-weekly basis. Use AWS Glue to convert the output to CSV."
            },
            {
                "optionId": "B",
                "optionText": "Set AWS Cost and Usage Reports to publish bills daily to an Amazon S3 bucket in CSV format."
            },
            {
                "optionId": "C",
                "optionText": "Use the AWS CLI to output billing data as JSON. Use Amazon SES to email bills on a daily basis."
            },
            {
                "optionId": "D",
                "optionText": "Use AWS Lambda, triggered by CloudWatch, to query billing data and push to Amazon RDS."
            }
        ]
    },
    {
        "questionId": 624,
        "questionText": "A SysOps Administrator is troubleshooting an AWS CloudFormation template whereby multiple Amazon EC2 instances are being created. The template is working in us-east-1, but it is failing in us-west-2 with the error code: AMI [ami-12345678] does not exist How should the Administrator ensure that the AWS CloudFormation template is working in every region?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Copy the source region’s Amazon Machine Image (AMI) to the destination region and assign it the same ID."
            },
            {
                "optionId": "B",
                "optionText": "Edit the AWS CloudFormation template to specify the region code as part of the fully qualified AMI ID."
            },
            {
                "optionId": "C",
                "optionText": "Edit the AWS CloudFormation template to offer a drop-down list of all AMIs to the user by using the AWS::EC2::AMI::ImageID control."
            },
            {
                "optionId": "D",
                "optionText": "Modify the AWS CloudFormation template by including the AMI IDs in the “Mappings” section. Refer to the proper mapping within the template for the proper AMI ID."
            }
        ]
    },
    {
        "questionId": 625,
        "questionText": "A SysOps Administrator needs to confirm that security best practices are being followed with the AWS account root user. How should the Administrator ensure that this is done?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Change the root user password by using the AWS CLI routinely."
            },
            {
                "optionId": "B",
                "optionText": "Periodically use the AWS CLI to rotate access keys and secret keys for the root user."
            },
            {
                "optionId": "C",
                "optionText": "Use AWS Trusted Advisor security checks to review the configuration of the root user."
            },
            {
                "optionId": "D",
                "optionText": "Periodically distribute the AWS compliance document from AWS Artifact that governs the root user configuration."
            }
        ]
    },
    {
        "questionId": 626,
        "questionText": "The networking team has created a VPC in an AWS account. The application team has asked for access to resources in another VPC in the same AWS account. The SysOps Administrator has created the VPC peering connection between both the accounts, but the resources in one VPC cannot communicate with the resources in the other VPC. What could be causing this issue?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "One of the VPCs is not sized correctly for peering."
            },
            {
                "optionId": "B",
                "optionText": "There is no public subnet in one of the VPCs."
            },
            {
                "optionId": "C",
                "optionText": "The route tables have not been updated."
            },
            {
                "optionId": "D",
                "optionText": "One VPC has disabled the peering flag."
            }
        ]
    },
    {
        "questionId": 627,
        "questionText": "An organization has been running their website on several m2 Linux instances behind a Classic Load Balancer for more than two years. Traffic and utilization have been constant and predictable.  What should the organization do to reduce costs?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Purchase Reserved Instances for the specific m2 instances."
            },
            {
                "optionId": "B",
                "optionText": "Change the m2 instances to equivalent m5 types, and purchase Reserved Instances for the specific m5 instances."
            },
            {
                "optionId": "C",
                "optionText": "Change the Classic Load Balancer to an Application Load Balancer, and purchase Reserved Instances for the specific m2 instances."
            },
            {
                "optionId": "D",
                "optionText": "Purchase Spot Instances for the specific m2 instances."
            }
        ]
    },
    {
        "questionId": 628,
        "questionText": "A company is storing monthly reports on Amazon S3. The company’s security requirement states that traffic from the client VPC to Amazon S3 cannot traverse the internet. What should the SysOps Administrator do to meet this requirement?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use AWS Direct Connect and a public virtual interface to connect to Amazon S3."
            },
            {
                "optionId": "B",
                "optionText": "Use a managed NAT gateway to connect to Amazon S3."
            },
            {
                "optionId": "C",
                "optionText": "Deploy a VPC endpoint to connect to Amazon S3."
            },
            {
                "optionId": "D",
                "optionText": "Deploy an internet gateway to connect to Amazon S3."
            }
        ]
    },
    {
        "questionId": 629,
        "questionText": "An application resides on multiple EC2 instances in public subnets in two Availability Zones. To improve security, the Information Security team has deployed an Application Load Balancer (ALB) in separate subnets and pointed the DNS at the ALB instead of the EC2 instances. After the change, traffic is not reaching the instances, and an error is being returned from the ALB. What steps must a SysOps Administrator take to resolve this issue and improve the security of the application? (Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Add the EC2 instances to the ALB target group, configure the health check, and ensure that the instances report healthy."
            },
            {
                "optionId": "B",
                "optionText": "Add the EC2 instances to an Auto Scaling group, configure the health check to ensure that the instances report healthy, and remove the public IPs from the instances."
            },
            {
                "optionId": "C",
                "optionText": "Create a new subnet in which EC2 instances and ALB will reside to ensure that they can communicate, and remove the public IPs from the instances."
            },
            {
                "optionId": "D",
                "optionText": "Change the security group for the EC2 instances to allow access from only the ALB security group, and remove the public IPs from the instances."
            },
            {
                "optionId": "E",
                "optionText": "Change the security group to allow access from 0.0.0.0/0, which permits access from the ALB."
            }
        ]
    },
    {
        "questionId": 630,
        "questionText": "A SysOps Administrator is implementing SSL for a domain of an internet-facing application running behind an Application Load Balancer (ALB). The Administrator decides to use an SSL certificate from Amazon Certificate Manager (ACM) to secure it. Upon creating a request for the ALB fully qualified domain name (FQDN), it fails, and the error message “Domain Not Allowed” is displayed. How can the Administrator fix this issue?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Contact the domain registrar and ask them to provide the verification required by AWS."
            },
            {
                "optionId": "B",
                "optionText": "Place a new request with the proper domain name instead of the ALB FQDN"
            },
            {
                "optionId": "C",
                "optionText": "Select the certificate request in the ACM console and resend the validation email."
            },
            {
                "optionId": "D",
                "optionText": "Contact AWS Support and verify the request by answering security challenge questions."
            }
        ]
    },
    {
        "questionId": 631,
        "questionText": "A SysOps Administrator runs a web application that is using a microservices approach whereby different  responsibilities of the application have been divided in a separate microservice running on a different Amazon EC2 instance. The Administrator has been tasked with reconfiguring the infrastructure to support this approach. How can the Administrator accomplish this with the LEAST administrative overhead?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use Amazon CloudFront to log the URL and forward the request."
            },
            {
                "optionId": "B",
                "optionText": "Use Amazon CloudFront to rewrite the header based on the microservice and forward the request."
            },
            {
                "optionId": "C",
                "optionText": "Use an Application Load Balancer (ALB) and do path-based routing."
            },
            {
                "optionId": "D",
                "optionText": "Use a Network Load Balancer (NLB) and do path-based routing."
            }
        ]
    },
    {
        "questionId": 632,
        "questionText": "A company is running a popular social media site on EC2 instances. The application stores data in an Amazon RDS for MySQL DB instance and has implemented read caching by using an ElastiCache for Redis (cluster mode enabled) cluster to improve read times. A social event is happening over the weekend, and the SysOps Administrator expects website traffic to triple. What can a SysOps Administrator do to ensure improved read times for users during the social event?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use Amazon RDS Multi-AZ."
            },
            {
                "optionId": "B",
                "optionText": "Add shards to the existing Redis cluster."
            },
            {
                "optionId": "C",
                "optionText": "Offload static data to Amazon S3."
            },
            {
                "optionId": "D",
                "optionText": "Launch a second Multi-AZ Redis cluster."
            }
        ]
    },
    {
        "questionId": 633,
        "questionText": "After a particularly high AWS bill, an organization wants to review the use of AWS services. What AWS service will allow the SysOps Administrator to quickly view this information to share it, and will also forecast expenses for the current billing period?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "AWS Trusted Advisor"
            },
            {
                "optionId": "B",
                "optionText": "Amazon QuickSight"
            },
            {
                "optionId": "C",
                "optionText": "AWS Cost and Usage Report"
            },
            {
                "optionId": "D",
                "optionText": "AWS Cost Explorer"
            }
        ]
    },
    {
        "questionId": 634,
        "questionText": "A company has adopted a security policy that requires all customer data to be encrypted at rest. Currently, customer data is stored on a central Amazon EFS file system and accessed by a number of different applications from Amazon EC2 instances. How can the SysOps Administrator ensure that all customer data stored on the EFS file system meets the new requirement?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Update the EFS file system settings to enable server-side encryption using AES-256."
            },
            {
                "optionId": "B",
                "optionText": "Create a new encrypted EFS file system and copy the data from the unencrypted EFS file system to the new encrypted EFS file system."
            },
            {
                "optionId": "C",
                "optionText": "Use AWS CloudHSM to encrypt the files directly before storing them in the EFS file system."
            },
            {
                "optionId": "D",
                "optionText": "Modify the EFS file system mount options to enable Transport Layer Security (TLS) on each of the EC2 instances."
            }
        ]
    },
    {
        "questionId": 635,
        "questionText": "The Database Administration team is interested in performing manual backups of an Amazon RDS Oracle DB instance. What steps should be taken to perform the backups? ",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Attach an Amazon EBS volume with Oracle RMAN installed to the RDS instance."
            },
            {
                "optionId": "B",
                "optionText": "Take a snapshot of the EBS volume that is attached to the DB instance."
            },
            {
                "optionId": "C",
                "optionText": "Install Oracle Secure Backup on the RDS instance and back up the Oracle database to Amazon S3."
            },
            {
                "optionId": "D",
                "optionText": "Take a snapshot of the DB instance."
            }
        ]
    },
    {
        "questionId": 636,
        "questionText": "An Auto Scaling group scales up and down based on Average CPU Utilization. The alarm is set to trigger a scaling event when the Average CPU Utilization exceeds 80% for 5 minutes. Currently, the Average CPU has been 95% for over two hours and new instances are not being added. What could be the issue?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "A scheduled scaling action has not been defined."
            },
            {
                "optionId": "B",
                "optionText": "In the field Suspend Process, “ReplacesUnhealthy” has been selected."
            },
            {
                "optionId": "C",
                "optionText": "The maximum size of the Auto Scaling group is below or at the current group size."
            },
            {
                "optionId": "D",
                "optionText": "The Health Check Grace Period is set to less than 300 seconds."
            }
        ]
    },
    {
        "questionId": 637,
        "questionText": "An application running on Amazon EC2 instances needs to write files to an Amazon S3 bucket. What is the MOST secure way to grant the application access to the S3 bucket?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create an IAM user with the necessary privileges. Generate an access key and embed the key in the code running on the EC2 instances."
            },
            {
                "optionId": "B",
                "optionText": "Install secure FTP (SFTP) software on the EC2 instances. Use an AWS Lambda function to copy the files from the EC2 instances to Amazon S3 using SFTP."
            },
            {
                "optionId": "C",
                "optionText": "Create an IAM role with the necessary privileges. Associate the role with the EC2 instances at launch."
            },
            {
                "optionId": "D",
                "optionText": "Use rsync and cron to set up the transfer of files from the EC2 instances to the S3 bucket. Enable AWS Shield to protect the data."
            }
        ]
    },
    {
        "questionId": 638,
        "questionText": "In configuring an Amazon Route 53 health check, a SysOps Administrator selects ‘Yes’ to the String Matching option in the Advanced Configuration section. In the Search String box, the Administrator types the following text: /html. This is to ensure that the entire page is loading during the health check. Within 5 minutes of enabling the health check, the Administrator receives an alert stating that the check failed. However, when the Administrator navigates to the page, it loads successfully. What is the MOST likely cause of this false alarm?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "The search string is not HTML-encoded."
            },
            {
                "optionId": "B",
                "optionText": "The search string must be put in quotes."
            },
            {
                "optionId": "C",
                "optionText": "The search string must be escaped with a backslash (\\) before the forward slash (/)."
            },
            {
                "optionId": "D",
                "optionText": "The search string is not in the first 5120 bytes of the tested page."
            }
        ]
    },
    {
        "questionId": 639,
        "questionText": "A company has created a separate AWS account for all development work to protect the production environment. In this development account, developers have permission to manipulate IAM policies and roles. Corporate policies require that developers are blocked from accessing some services. What is the BEST way to grant the developers privileges in the development account while still complying with corporate policies?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create a service control policy in AWS Organizations and apply it to the development account."
            },
            {
                "optionId": "B",
                "optionText": "Create a customer managed policy in IAM and apply it to all users within the development account. "
            },
            {
                "optionId": "C",
                "optionText": "Create a job function policy in IAM and apply it to all users within the development account."
            },
            {
                "optionId": "D",
                "optionText": "Create an IAM policy and apply it in API Gateway to restrict the development account."
            }
        ]
    },
    {
        "questionId": 640,
        "questionText": "Company A purchases Company B and inherits three new AWS accounts. Company A would like to centralize billing and Reserved Instance benefits but wants to keep all other resources separate. How can this be accomplished?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Implement AWS Organizations and create a service control policy that defines the billing relationship with the new master account."
            },
            {
                "optionId": "B",
                "optionText": "Configure AWS Organizations Consolidated Billing and provide the finance team with IAM access to the billing console."
            },
            {
                "optionId": "C",
                "optionText": "Send Cost and Usage Reports files to a central Amazon S3 bucket, and load the data into Amazon Redshift. Use Amazon QuickSight to provide visualizations to the finance team."
            },
            {
                "optionId": "D",
                "optionText": "Link the Reserved Instances to the master payer account and use Amazon Redshift Spectrum to query Detailed Billing Report data across all accounts."
            }
        ]
    },
    {
        "questionId": 641,
        "questionText": "A website uses Elastic Load Balancing (ELB) in front of several Amazon EC2 instances backed by an Amazon RDS database. The content is dynamically generated for visitors of a webpage based on their geographic location. and is updated daily. Some of the generated objects are large in size and are taking longer to download than they should, resulting in a poor user experience. Which approach will improve the user experience?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Implement Amazon ElastiCache to cache the content and reduce the load on the database."
            },
            {
                "optionId": "B",
                "optionText": "Enable an Amazon CloudFront distribution with Elastic Load Balancing as a custom origin."
            },
            {
                "optionId": "C",
                "optionText": "Use Amazon S3 to store and deliver the content."
            },
            {
                "optionId": "D",
                "optionText": "Enable Auto Scaling for the EC2 instances so that they can scale automatically."
            }
        ]
    },
    {
        "questionId": 642,
        "questionText": "While setting up an AWS managed VPN connection, a SysOPs Administrator creates a customer gateway resource in AWS. The customer gateway device resides in a data center with a NAT gateway in front of it. What address should be used to create the customer gateway resource?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "The private IP address of the customer gateway device"
            },
            {
                "optionId": "B",
                "optionText": "The MAC address of the NAT device in front of the customer gateway device"
            },
            {
                "optionId": "C",
                "optionText": "The public IP address of the customer gateway device"
            },
            {
                "optionId": "D",
                "optionText": "The public IP address of the NAT device in front of the customer gateway device"
            }
        ]
    },
    {
        "questionId": 643,
        "questionText": "A SysOps Administrator attempting to delete an Amazon S3 bucket ran the following command: aws s3 rb s3://my bucket The command failed and bucket still exists. The administrator validated that no files existed in the bucket by running aws s3 1s s3://mybucket and getting an empty response. Why is the Administrator unable to delete the bucket, and what must be done to accomplish this task?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "The bucket has MFA Delete enabled, and the Administrator must turn it off."
            },
            {
                "optionId": "B",
                "optionText": "The bucket has versioning enabled, and the Administrator must permanently delete the objects’ delete markers."
            },
            {
                "optionId": "C",
                "optionText": "The bucket is storing files in Amazon Glacier, and the Administrator must wait 3-5 hours for the files to delete. "
            },
            {
                "optionId": "D",
                "optionText": "The bucket has server-side encryption enabled, and the Administrator must run the aws s3 rb s3:// my bucket -- sse command."
            }
        ]
    },
    {
        "questionId": 644,
        "questionText": "A SysOps Administrator must provide data to show the overall usage of Amazon EC2 instances within each department, and must determine if the purchased Reserved Instances are being used effectively. Which service should be used to provide the necessary information?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "AWS Personal Health Dashboard"
            },
            {
                "optionId": "B",
                "optionText": "AWS Cost Explorer"
            },
            {
                "optionId": "C",
                "optionText": "AWS Service Catalog"
            },
            {
                "optionId": "D",
                "optionText": "AWS Application Discovery Service"
            }
        ]
    },
    {
        "questionId": 645,
        "questionText": "A company has multiple web applications running on Amazon EC2 instances in private subnets. The EC2 instances require connectivity to the internet for patching purposes, but cannot be publicly accessible. Which step will meet these requirements?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Add an internet gateway and update the route tables."
            },
            {
                "optionId": "B",
                "optionText": "Add a NAT gateway to the VPC and update the route tables."
            },
            {
                "optionId": "C",
                "optionText": "Add an interface endpoint and update the route tables."
            },
            {
                "optionId": "D",
                "optionText": "Add a virtual gateway to the VPC and update the route tables."
            }
        ]
    },
    {
        "questionId": 646,
        "questionText": "A company has 50 AWS accounts and wants to create an identical Amazon VPC in each account. Any changes the company makes to the VPCs in the future must be implemented on every VPC. What is the SIMPLEST method to deploy and update the VPCs in each account?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create an AWS CloudFormation template defines the VPC. Log in to the AWS Management Console under each account and create a stack from the template."
            },
            {
                "optionId": "B",
                "optionText": "Create a shell script that configures the VPC using the AWS CLI. Provide a list of accounts to the script from a text file, then create the VPC in every account in the list."
            },
            {
                "optionId": "C",
                "optionText": "Create an AWS Lambda function that configures the VPC. Store the account information in Amazon DynamoDB, grant Lambda access to the DynamoDB table, then create the VPC in every account in the list."
            },
            {
                "optionId": "D",
                "optionText": "Create an AWS CloudFormation template that defines the VPC. Create an AWS CloudFormation StackSet based on the template, then deploy the template to all accounts using the stack set."
            }
        ]
    },
    {
        "questionId": 647,
        "questionText": "After a network change, application servers cannot connect to the corresponding Amazon RDS MySQL database. What should the SysOps Administrator analyze?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "VPC Flow Logs"
            },
            {
                "optionId": "B",
                "optionText": "Elastic Load Balancing logs"
            },
            {
                "optionId": "C",
                "optionText": "Amazon CloudFront logs"
            },
            {
                "optionId": "D",
                "optionText": "Amazon RDS MySQL error logs"
            }
        ]
    },
    {
        "questionId": 648,
        "questionText": "A company wants to ensure that each department operates within their own isolated environment, and they are only able to use pre-approved services.  How can this requirement be met?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Set up an AWS Organization to create accounts for each department, and apply service control policies to control access to AWS services."
            },
            {
                "optionId": "B",
                "optionText": "Create IAM roles for each department, and set policies that grant access to specific AWS services."
            },
            {
                "optionId": "C",
                "optionText": "Use the AWS Service Catalog to create catalogs of AWS services that are approved for use by each department."
            },
            {
                "optionId": "D",
                "optionText": "Request that each department create and manage its own AWS account and the resources within it."
            }
        ]
    },
    {
        "questionId": 649,
        "questionText": "A SysOps Administrator is receiving multiple reports from customers that they are unable to connect to the company’s website. which is being served through Amazon CloudFront. Customers are receiving HTTP response codes for both 4XX and 5XX errors. Which metric can the Administrator use to monitor the elevated error rates in CloudFront?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "TotalErrorRate"
            },
            {
                "optionId": "B",
                "optionText": "RejectedConnectionCount"
            },
            {
                "optionId": "C",
                "optionText": "NetworkTransmitThroughput"
            },
            {
                "optionId": "D",
                "optionText": "HealthyHostCount"
            }
        ]
    },
    {
        "questionId": 650,
        "questionText": "A company is using AWS Organizations to manage all their accounts. The Chief Technology Officer wants to prevent certain services from being used within production accounts until the services have been internally certified. They are willing to allow developers to experiment with these uncertified services in development accounts but need a way to ensure that these services are not used within production accounts. Which option ensures that services are not allowed within the production accounts, yet are allowed in separate development accounts within the LEAST administrative overhead?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use AWS Config to shut down non-compliant services found within the production accounts on a periodic basis, while allowing these same services to run in the development accounts."
            },
            {
                "optionId": "B",
                "optionText": "Apply service control policies to the AWS Organizational Unit (OU) containing the production accounts to whitelist certified services. Apply a less restrictive policy to the OUs containing the development accounts."
            },
            {
                "optionId": "C",
                "optionText": "Use IAM policies applied to the combination of user and account to prevent developers from using these services within the production accounts. Allow the services to run in development accounts."
            },
            {
                "optionId": "D",
                "optionText": "Use Amazon CloudWatch to report on the use of non-certified services within any account, triggering an AWS Lambda function to terminate only those non-certified services when found in a production account."
            }
        ]
    },
    {
        "questionId": 651,
        "questionText": "A SysOps Administrator has configured health checks on a load balancer. An Amazon EC2 instance attached to this load balancer fails the health check. What will happen next? (Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "The load balancer will continue to perform the health check on the EC2 instance."
            },
            {
                "optionId": "B",
                "optionText": "The EC2 instance will be terminated based on the health check failure."
            },
            {
                "optionId": "C",
                "optionText": "The EC2 instance will be rebooted."
            },
            {
                "optionId": "D",
                "optionText": "The load balancer will stop sending traffic to the EC2 instance."
            },
            {
                "optionId": "E",
                "optionText": "A new EC2 instance will be deployed to replace the unhealthy instance."
            }
        ]
    },
    {
        "questionId": 652,
        "questionText": " An Application performs read-heavy operations on an Amazon Aurora DB instance. The SysOps Administrator monitors the CPUUtilization CloudWatch metric and has recently seen it increase to 90%. The Administrator would like to understand what is driving the CPU surge. Which of the following should be Administrator additionally monitor to understand the CPU surge?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "FreeableMemory and DatabaseConnections to understand the amount of available RAM and number of connections to DB instance."
            },
            {
                "optionId": "B",
                "optionText": "FreeableMemory and EngineUptime to understand the amount of available RAM and the amount of time the instance has been up and running."
            },
            {
                "optionId": "C",
                "optionText": "DatabaseConnections and AuroraReplicaLag for the number of connections to the DB instance and the amount of lag when replicating updates from the primary instance."
            },
            {
                "optionId": "D",
                "optionText": "DatabaseConnections and InsertLatency for the number of connections to the DB instance and latency for insert queries."
            }
        ]
    },
    {
        "questionId": 653,
        "questionText": "A SysOps Administrator must use a bastion host to administer a fleet of Amazon EC2 instances. All access to the bastion host is managed by the Security team. What is the MOST secure way for the Security team to provide the SysOps Administrator access to the bastion host?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Assign the same IAM role to the Administrator that is assigned to the bastion host."
            },
            {
                "optionId": "B",
                "optionText": "Provide the Administrator with the SSH key that was used for the bastion host when it was originally launched."
            },
            {
                "optionId": "C",
                "optionText": "Create a new IAM role with the same permissions as the Security team, and assign it to the Administrator."
            },
            {
                "optionId": "D",
                "optionText": "Create a new administrative account on the bastion host, and provide those credentials to the Administrator using AWS Secrets Manager."
            }
        ]
    },
    {
        "questionId": 654,
        "questionText": "A database is running on an Amazon RDS Multi-AZ DB instance. A recent security audit found the database to be out of compliance because it was not encrypted. Which approach will resolve the encryption requirement?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Log in to the RDS console and select the encryption box to encrypt the database."
            },
            {
                "optionId": "B",
                "optionText": "Create a new encrypted Amazon EBS volume and attach it to the instance."
            },
            {
                "optionId": "C",
                "optionText": "Encrypt the standby replica in the secondary Availability Zone and promote it to the primary instance."
            },
            {
                "optionId": "D",
                "optionText": "Take a snapshot of the RDS instance, copy and encrypt the snapshot, and then restore to the new RDS instance."
            }
        ]
    },
    {
        "questionId": 655,
        "questionText": "An Amazon EC2 instance is unable to connect an SMTP server in a different subnet. Other instances are successfully communicating with the SMTP server, however VPC Flow Logs have been enabled on the SMTP server’s network interface and show the following information: 2 223342798652 eni-abe77dab 10.1.1.200 10.100.1.10 1123 25 17 70 48252 1515534437 1515535037 REJECT OK What can be done to correct this problem?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Add the instance to the security group for the SMTP server and ensure that is permitted to communicate over TCP port 25."
            },
            {
                "optionId": "B",
                "optionText": "Disable the iptables service on the SMTP server so that the instance can properly communicate over the network."
            },
            {
                "optionId": "C",
                "optionText": "Install an email client on the instance to ensure that it communicates correctly on TCP port 25 to the  SMTP server."
            },
            {
                "optionId": "D",
                "optionText": "Add a rule to the security group for the instance to explicitly permit TCP port 25 outbound to any address."
            }
        ]
    },
    {
        "questionId": 656,
        "questionText": "A company’s use of AWS Cloud services is quickly growing, so a SysOps Administrator has been asked to generate details of daily spending to share with management. Which method should the Administrator choose to produce this data?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Share the monthly AWS bill with management."
            },
            {
                "optionId": "B",
                "optionText": "Use AWS CloudTrail Logs to access daily costs in JSON format."
            },
            {
                "optionId": "C",
                "optionText": "Set up a daily Cost and Usage Report and download the output from Amazon S3."
            },
            {
                "optionId": "D",
                "optionText": "Monitor AWS costs with Amazon CloudWatch and create billing alerts and notifications."
            }
        ]
    },
    {
        "questionId": 657,
        "questionText": "A company’s Security team wants to track data encryption events across all company AWS accounts. The team wants to capture all AWS KMS events related to deleting or rotating customer master keys (CMKs) from all production AWS accounts. The KMS events will be sent to the Security team’s AWS account for monitoring. How can this be accomplished?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create an AWS Lambda function that will run every few minutes in each production account, parse the KMS log for KMS events, and sent the information to an Amazon SQS queue managed by the Security team."
            },
            {
                "optionId": "B",
                "optionText": "Create an event bus in the Security team’s account, create a new Amazon CloudWatch Events rule that matches the KMS events in each production account, and then add the Security team’s event bus as the target."
            },
            {
                "optionId": "C",
                "optionText": "Set up AWS CloudTrail for KMS events in every production account, and have the logs sent to an Amazon S3 bucket that is managed by the Security team."
            },
            {
                "optionId": "D",
                "optionText": "Create an AWS Config rule that checks for KMS keys that are in a pending deletion or rotated state in every production account, then send Amazon SNS notifications of any non-compliant KMS resources to the Security team."
            }
        ]
    },
    {
        "questionId": 658,
        "questionText": "A workload has been moved from a data center to AWS. Previously, vulnerability scans were performed nightly by an external testing company. There is a mandate to continue the vulnerability scans in the AWS environment with third-party testing occurring at least once each month. What solution allows the vulnerability scans to continue without violating the AWS Acceptable Use Policy?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "The existing nightly scan can continue with a few changes. The external testing company must be notified of the new IP address of the workload and the security group of the workload must be modified to allow scans from the external company’s IP range."
            },
            {
                "optionId": "B",
                "optionText": "If the external company is a vendor in the AWS Marketplace, notify them of the new IP address of the workload."
            },
            {
                "optionId": "C",
                "optionText": "Submit a penetration testing request every 90 days and have the external company test externally when the request is approved."
            },
            {
                "optionId": "D",
                "optionText": "AWS performs vulnerability testing behind the scenes daily and patches instances as needed. If a vulnerability cannot be automatically addressed, a notification email is distributed."
            }
        ]
    },
    {
        "questionId": 659,
        "questionText": "A SysOps Administrator is writing a utility that publishes resources from an AWS Lambda function in AWS Account A to an Amazon S3 bucket in AWS Account B. The Lambda function is able to successfully write new objects to the S3 bucket, but IAM users in Account B are unable to delete objects written to the bucket by Account A.  Which step will fix this issue?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Add s3:DeleteObject permission to the IAM execution role of the AWS Lambda function in Account A."
            },
            {
                "optionId": "B",
                "optionText": "Change the bucket policy of the S3 bucket in Account B to allow s3:DeleteObject permission for Account A."
            },
            {
                "optionId": "C",
                "optionText": "Disable server-side encryption for objects written to the S3 bucket by the Lambda function."
            },
            {
                "optionId": "D",
                "optionText": "Call the S3:PutObjectAcl API operation from the Lambda function in Account A to specify bucket owner, full control."
            }
        ]
    },
    {
        "questionId": 660,
        "questionText": "An organization would like to set up an option for its Developers to receive an email whenever production Amazon EC2 instances are running over 80% CPU utilization. How can this be accomplished using an Amazon CloudWatch alarm?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Configure the alarm to send emails to subscribers using Amazon SES."
            },
            {
                "optionId": "B",
                "optionText": "Configure the alarm to send emails to subscribers using Amazon SNS."
            },
            {
                "optionId": "C",
                "optionText": "Configure the alarm to send emails to subscribers using Amazon Inspector."
            },
            {
                "optionId": "D",
                "optionText": "Configure the alarm to send emails to subscribers using Amazon Cognito."
            }
        ]
    },
    {
        "questionId": 661,
        "questionText": "Which of the following steps are required to configure SAML 2.0 for federated access to AWS? (Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create IAM users for each identity provider (IdP) user to allow access to the AWS environment."
            },
            {
                "optionId": "B",
                "optionText": "Define assertions that map the company’s identity provider (IdP) users to IAM roles."
            },
            {
                "optionId": "C",
                "optionText": "Create IAM roles with a trust policy that lists the SAML provider as the principal."
            },
            {
                "optionId": "D",
                "optionText": "Create IAM users, place them in a group named SAML, and grant them necessary IAM permissions."
            },
            {
                "optionId": "E",
                "optionText": "Grant identity provider (IdP) users the necessary IAM permissions to be able to log in to the AWS environment."
            }
        ]
    },
    {
        "questionId": 662,
        "questionText": "A SysOps Administrator is attempting to download patches from the internet into an instance in a private subnet. An internet gateway exists for the VPC, and a NAT gateway has been deployed on the public subnet; however, the instance has no internet connectivity. The resources deployed into the private subnet must be inaccessible directly from the public internet. What should be added to the private subnet’s route table in order to address this issue, given the information provided.",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "0.0.0.0/0 IGW"
            },
            {
                "optionId": "B",
                "optionText": "0.0.0.0/0 NAT "
            },
            {
                "optionId": "C",
                "optionText": "10.0.1.0/24 IGW"
            },
            {
                "optionId": "D",
                "optionText": "10.0.1.0/24 NAT"
            }
        ]
    },
    {
        "questionId": 663,
        "questionText": "A SysOps Administrator is responsible for a large fleet of EC2 instances and must know whether any instances will be affected by upcoming hardware maintenance. Which option would provide this information with the LEAST administrative overhead?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Monitor AWS CloudTrail for StopInstances API calls related to upcoming maintenance."
            },
            {
                "optionId": "B",
                "optionText": "Review the Personal Health Dashboard for any scheduled maintenance."
            },
            {
                "optionId": "C",
                "optionText": "From the AWS Management Console, list any instances with failed system status checks."
            },
            {
                "optionId": "D",
                "optionText": "Deploy a third-party monitoring solution to provide real-time EC2 instance monitoring."
            }
        ]
    },
    {
        "questionId": 664,
        "questionText": "An organization created an Amazon Elastic File System (Amazon EFS) volume with a file system ID of fs- 85ba41fc, and it is actively used by 10 Amazon EC2 hosts. The organization has become concerned that the file system is not encrypted. How can this be resolved?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Enable encryption on each host’s connection to the Amazon EFS volume. Each connection must be recreated for encryption to take effect."
            },
            {
                "optionId": "B",
                "optionText": "Enable encryption on the existing EFS volume by using the AWS Command Line Interface."
            },
            {
                "optionId": "C",
                "optionText": "Enable encryption on each host’s local drive. Restart each host to encrypt the drive."
            },
            {
                "optionId": "D",
                "optionText": "Enable encryption on a newly created volume and copy all data from the original volume. Reconnect each host to the new volume."
            }
        ]
    },
    {
        "questionId": 665,
        "questionText": "An organization finds that a high number of gp2 Amazon EBS volumes are running out of space. Which solution will provide the LEAST disruption with MINIMAL effort?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create a snapshot and restore it to a larger gp2 volume."
            },
            {
                "optionId": "B",
                "optionText": "Create a RAID 0 with another new gp2 volume to increase capacity."
            },
            {
                "optionId": "C",
                "optionText": "Leverage the Elastic Volumes feature of EBS to increase gp2 volume size."
            },
            {
                "optionId": "D",
                "optionText": "Write a script to migrate data to a larger gp2 volume."
            }
        ]
    },
    {
        "questionId": 666,
        "questionText": "An e-commerce company wants to lower costs on its nightly jobs that aggregate the current day’s sales and store the results in Amazon S3. The jobs are currently run using multiple on-demand instances and the jobs take just under 2 hours to complete. If a job fails for any reason, it needs to be restarted from the beginning. What method is the MOST cost effective based on these requirements?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use a mixture of On-Demand and Spot Instances for job execution."
            },
            {
                "optionId": "B",
                "optionText": "Submit a request for a Spot block to be used for job execution."
            },
            {
                "optionId": "C",
                "optionText": "Purchase Reserved Instances to be used for job execution."
            },
            {
                "optionId": "D",
                "optionText": "Submit a request for a one-time Spot Instance for job execution."
            }
        ]
    },
    {
        "questionId": 667,
        "questionText": "An existing data management application is running on a single Amazon EC2 instance and needs to be moved to a new AWS Region in another AWS account. How can a SysOps Administrator achieve this while maintaining the security of the application? ",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create an encrypted Amazon Machine Image (AMI) of the instance and make it public to allow the other account to search and launch an instance from it."
            },
            {
                "optionId": "B",
                "optionText": "Create an AMI of the instance, add permissions for the AMI to the other AWS account, and start a new instance in the new region by using that AMI."
            },
            {
                "optionId": "C",
                "optionText": "Create an AMI of the instance, copy the AMI to the new region, add permissions for the AMI to the other AWS account, and start new instance."
            },
            {
                "optionId": "D",
                "optionText": "Create an encrypted snapshot of the instance and make it public. Provide only permissions to decrypt to the other AWS account."
            }
        ]
    },
    {
        "questionId": 668,
        "questionText": "A SysOps Administrator manages an application that stores object metadata in Amazon S3. There is a requirement to have S2 server-side encryption enabled on all new objects in the bucket. How can the Administrator ensure that all new objects to the bucket satisfy this requirement?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create an S3 lifecycle rule to automatically encrypt all new objects."
            },
            {
                "optionId": "B",
                "optionText": "Enable default bucket encryption to ensure that all new objects are encrypted."
            },
            {
                "optionId": "C",
                "optionText": "Use put-object-acl to allow objects to be encrypted with S2 server-side encryption."
            },
            {
                "optionId": "D",
                "optionText": "Apply the authorization header to S3 requests for S3 server-side encryption."
            }
        ]
    },
    {
        "questionId": 669,
        "questionText": "A company is using an AWS KMS customer master key (CMK) with imported key material. The company references the CMK by its alias in the Java application to encrypt data. The CMK must be rotated every 6 months. What is the process to rotate the key?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Enable automatic key rotation for the CMK, and specify a period of 6 months."
            },
            {
                "optionId": "B",
                "optionText": "Create a new CMK with new imported material, and update the key alias to point to the new CMK."
            },
            {
                "optionId": "C",
                "optionText": "Delete the current key material, and import new material into the existing CMK."
            },
            {
                "optionId": "D",
                "optionText": "Import a copy of the existing key material into a new CMK as a backup, and set the rotation schedule for 6 months."
            }
        ]
    },
    {
        "questionId": 670,
        "questionText": "The Security team has decided that there will be no public internet access to HTTP (TCP port 80) because it is moving to HTTPS for all incoming web traffic. The team has asked a SysOps Administrator to provide a report on any security groups that are not compliant. What should the SysOps Administrator do to provide near real-time compliance reporting?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Enable AWS Trusted Advisor and show the Security team that the Security Groups unrestricted access check will alarm."
            },
            {
                "optionId": "B",
                "optionText": "Schedule an AWS Lambda function to run hourly to scan and evaluate all security groups, and send a report to the Security team."
            },
            {
                "optionId": "C",
                "optionText": "Use AWS Config to enable the restricted-common-ports rule, and add port 80 to the parameters."
            },
            {
                "optionId": "D",
                "optionText": "Use Amazon Inspector to evaluate the security groups during scans, and send the completed reports to the Security team."
            }
        ]
    },
    {
        "questionId": 671,
        "questionText": "A SysOps Administrator has configured a CloudWatch agent to send custom metrics to Amazon CloudWatch and is now assembling a CloudWatch dashboard to display these metrics. What steps should the Administrator take to complete this task?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Select the AWS Namespace, filter by metric name, then add to the dashboard. "
            },
            {
                "optionId": "B",
                "optionText": "Add a text widget, select the appropriate metric from the custom namespace, then add to the dashboard."
            },
            {
                "optionId": "C",
                "optionText": "Select the appropriate widget and metrics from the custom namespace, then add to the dashboard."
            },
            {
                "optionId": "D",
                "optionText": "Open the CloudWatch console, from the CloudWatch Events, add all custom metrics."
            }
        ]
    },
    {
        "questionId": 672,
        "questionText": "An application is running on multiple EC2 instances. As part of an initiative to improve overall infrastructure security, the EC2 instances were moved to a private subnet. However, since moving, the EC2 instances have not been able to automatically update, and a SysOps Administrator has not been able to SSH into them remotely. Which two actions could the Administrator take to securely resolve these issues? (Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Set up a bastion host in a public subnet, and configure security groups and route tables accordingly."
            },
            {
                "optionId": "B",
                "optionText": "Set up a bastion host in the private subnet, and configure security groups accordingly."
            },
            {
                "optionId": "C",
                "optionText": "Configure a load balancer in a public subnet, and configure the route tables accordingly."
            },
            {
                "optionId": "D",
                "optionText": "Set up a NAT gateway in a public subnet, and change the private subnet route tables accordingly."
            },
            {
                "optionId": "E",
                "optionText": "Set up a NAT gateway in a private subnet, and ensure that the route tables are configured accordingly."
            }
        ]
    },
    {
        "questionId": 673,
        "questionText": "A SysOps Administrator has been tasked with deploying a company’s infrastructure as code. The Administrator wants to write a single template that can be reused for multiple environments in a safe, repeatable manner. What is the recommended way to use AWS CloudFormation to meet this requirement?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use parameters to provision the resources."
            },
            {
                "optionId": "B",
                "optionText": "Use nested stacks to provision the resources."
            },
            {
                "optionId": "C",
                "optionText": "Use Amazon EC2 user data to provision the resources."
            },
            {
                "optionId": "D",
                "optionText": "Use stack policies to provision the resources."
            }
        ]
    },
    {
        "questionId": 674,
        "questionText": "An application accesses data through a file system interface. The application runs on Amazon EC2 instances in multiple Availability Zones, all of which must share the same data. While the amount of data is currently small, the company anticipates that it will grow to tens of terabytes over the lifetime of the application. What is the MOST scalable storage solution to fulfill the requirement?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Connect a large Amazon EBS volume to multiple instances and schedule snapshots."
            },
            {
                "optionId": "B",
                "optionText": "Deploy Amazon EFS is in the VPC and create mount targets in multiple subnets."
            },
            {
                "optionId": "C",
                "optionText": "Launch an EC2 instance and share data using SMB/CIFS or NFS."
            },
            {
                "optionId": "D",
                "optionText": "Deploy an AWS Storage Gateway cached volume on Amazon EC2."
            }
        ]
    },
    {
        "questionId": 675,
        "questionText": "A company has Sales department and Marketing department. The company uses one AWS account. There is a need to determine what charges are incurred on the AWS platform by each department. There is also a need to receive notifications when a specified cost level is approached or exceeded. Which two actions must a SysOps Administrator take to achieve both requirements with the LEAST amount of administrative overhead? (Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use AWS Trusted Advisor to obtain a report containing the checked items in the Cost Optimization pillar."
            },
            {
                "optionId": "B",
                "optionText": "Download the detailed billing report, upload it to a database, and match the line items with a list of known resources by department. "
            },
            {
                "optionId": "C",
                "optionText": "Create a script by using the AWS CLI to automatically apply tags to existing resources to each department. Schedule the script to run weekly."
            },
            {
                "optionId": "D",
                "optionText": "Use AWS Organizations to create a department Organizational Unit and allow only authorized personnel in each department to create resources."
            },
            {
                "optionId": "E",
                "optionText": "Create a Budget from the Billing and Cost Management console. Specify the budget type a Cost, assign tags for each department, define notifications, and specify any other options as required."
            }
        ]
    },
    {
        "questionId": 676,
        "questionText": "A company has two AWS accounts: development and production. All applications send logs to a specific Amazon S3 bucket for each account, and the Developers are requesting access to the production account S3 buckets to view the logs. Which is the MOST efficient way to provide the Developers with access?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create an AWS Lambda function with an IAM role attached to it that has access to both accounts’ S3 buckets. Pull the logs from the production S3 bucket to the development S3 bucket."
            },
            {
                "optionId": "B",
                "optionText": "Create IAM users for each Developer on the production account, and add the Developers to an IAM group that provides read-only access to the S3 log bucket."
            },
            {
                "optionId": "C",
                "optionText": "Create an Amazon EC2 bastion host with an IAM role attached to it that has access to the production S3 log bucket, and then provision access for the Developers on the host."
            },
            {
                "optionId": "D",
                "optionText": "Create a resource-based policy for the S3 bucket on the production account that grants access to the development account, and then delegate access in the development account."
            }
        ]
    },
    {
        "questionId": 677,
        "questionText": "A company’s application stores documents within an Amazon S3 bucket. The application is running on Amazon EC2 in a VPC. A recent change in security requirements states that traffic between the company’s application and the S3 bucket must never leave the Amazon network. What AWS feature can provide this functionality?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Security groups"
            },
            {
                "optionId": "B",
                "optionText": "NAT gateways"
            },
            {
                "optionId": "C",
                "optionText": "Virtual private gateway"
            },
            {
                "optionId": "D",
                "optionText": "Gateway VPC endpoints"
            }
        ]
    },
    {
        "questionId": 678,
        "questionText": "A SysOps Administrator is running an auto-scaled application behind a Classic Load Balancer. Scaling out is triggered when the CPUUtilization instance metric is more than 75% across the Auto Scaling group. The Administrator noticed aggressive scaling out and after discussing with developers, an application memory leak is suspected causing aggressive garbage collection cycle. How can the Administrator troubleshoot the application without triggering the scaling process?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Suspend the scaling process before troubleshooting."
            },
            {
                "optionId": "B",
                "optionText": "Delete the Auto Scaling group and recreate it when troubleshooting is complete."
            },
            {
                "optionId": "C",
                "optionText": "Remove impacted instances from the Classic Load Balancer."
            },
            {
                "optionId": "D",
                "optionText": "Create a scale down trigger when the CPUUtilization instance metric is at 70%."
            }
        ]
    },
    {
        "questionId": 679,
        "questionText": "A company backs up data from its data center using a tape gateway on AWS Storage Gateway. The SysOps Administrator needs to reboot the virtual machine running Storage Gateway. What process will protect data integrity?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Stop Storage Gateway and reboot the virtual machine, then restart Storage Gateway."
            },
            {
                "optionId": "B",
                "optionText": "Reboot the virtual machine, then restart Storage Gateway. "
            },
            {
                "optionId": "C",
                "optionText": "Reboot the virtual machine."
            },
            {
                "optionId": "D",
                "optionText": "Shut down the virtual machine and stop Storage Gateway, then turn on the virtual machine."
            }
        ]
    },
    {
        "questionId": 680,
        "questionText": "An organization has decided to consolidate storage and move all of its backups and archives to Amazon S3. With all of the data gathered into a hierarchy under a single directory, the organization determines there is 70 TB of data that needs to be uploaded. The organization currently has a 150-Mbps connection with 10 people working at the location. Which service would be the MOST efficient way to transfer this data to Amazon S3?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "AWS Snowball"
            },
            {
                "optionId": "B",
                "optionText": "AWS Direct Connect"
            },
            {
                "optionId": "C",
                "optionText": "AWS Storage Gateway"
            },
            {
                "optionId": "D",
                "optionText": "Amazon S3 Transfer Acceleration"
            }
        ]
    },
    {
        "questionId": 681,
        "questionText": "A SysOps Administrator is deploying a legacy web application on AWS. The application has four Amazon EC2 instances behind a Classic Load Balancer and stores data in an Amazon RDS instance. The legacy application has known vulnerabilities to SQL injection attacks, but the application code is no longer available to update. What cost-effective configuration change should the Administrator make to mitigate the risk of SQL injection attacks?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Configure Amazon GuardDuty to monitor the application for SQL injection threats."
            },
            {
                "optionId": "B",
                "optionText": "Configure AWS WAF with a Classic Load Balancer for protection against SQL injection attacks."
            },
            {
                "optionId": "C",
                "optionText": "Replace the Classic Load Balancer with an Application Load Balancer and configure AWS WAF on the Application Load Balancer."
            },
            {
                "optionId": "D",
                "optionText": "Configure an Amazon CloudFront distribution with the Classic Load Balancer as the origin and subscribe to AWS Shield Standard."
            }
        ]
    },
    {
        "questionId": 682,
        "questionText": "A fleet of servers must send local logs to Amazon CloudWatch. How should the servers be configured to meet this requirement?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Configure AWS Config to forward events to CloudWatch."
            },
            {
                "optionId": "B",
                "optionText": "Configure a Simple Network Management Protocol (SNMP) agent to forward events to CloudWatch."
            },
            {
                "optionId": "C",
                "optionText": "Install and configure the unified CloudWatch agent."
            },
            {
                "optionId": "D",
                "optionText": "Install and configure the Amazon Inspector agent."
            }
        ]
    },
    {
        "questionId": 683,
        "questionText": "According to the shared responsibility model, for which of the following Amazon EC2 activities is AWS responsible? (Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Patching the guest operating system"
            },
            {
                "optionId": "B",
                "optionText": "Monitoring memory utilization"
            },
            {
                "optionId": "C",
                "optionText": "Configuring network ACLs"
            },
            {
                "optionId": "D",
                "optionText": "Patching the hypervisor"
            },
            {
                "optionId": "E",
                "optionText": "Maintaining network infrastructure"
            }
        ]
    },
    {
        "questionId": 684,
        "questionText": "A company monitors its account activity using AWS CloudTrail, and is concerned that some log files are  being tampered with after the logs have been delivered to the account’s Amazon S3 bucket. Moving forward, how can the SysOps Administrator confirm that the log files have not been modified after being delivered to the S3 bucket.",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Stream the CloudTrail logs to Amazon CloudWatch Logs to store logs at a secondary location."
            },
            {
                "optionId": "B",
                "optionText": "Enable log file integrity validation and use digest files to verify the hash value of the log file."
            },
            {
                "optionId": "C",
                "optionText": "Replicate the S3 log bucket across regions, and encrypt log files with S3 managed keys."
            },
            {
                "optionId": "D",
                "optionText": "Enable S3 server access logging to track requests made to the log bucket for security audits."
            }
        ]
    },
    {
        "questionId": 685,
        "questionText": "After launching a new Amazon EC2 instance from a Microsoft Windows 2012 Amazon Machine Image (AMI), the SysOps Administrator is unable to connect to the instance using Remote Desktop Protocol (RDP). The instance is also unreachable. As part of troubleshooting, the Administrator deploys a second instance from a different AMI using the same configuration and is able to connect to the instance. What should be the next logical step in troubleshooting the first instance?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use AWS Trusted Advisor to gather operating system log files for analysis."
            },
            {
                "optionId": "B",
                "optionText": "Use VPC Flow Logs to gather operating system log files for analysis."
            },
            {
                "optionId": "C",
                "optionText": "Use EC2Rescue to gather operating system log files for analysis."
            },
            {
                "optionId": "D",
                "optionText": "Use Amazon Inspector to gather operating system log files for analysis."
            }
        ]
    },
    {
        "questionId": 686,
        "questionText": "A custom application must be installed on all Amazon EC2 instances. The application is small, updated frequently and can be installed automatically. How can the application be deployed on new EC2 instances?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Launch a script that downloads and installs the application using the Amazon EC2 user data."
            },
            {
                "optionId": "B",
                "optionText": "Create a custom API using Amazon API Gateway to call an installation executable from an AWS CloudFormation Template."
            },
            {
                "optionId": "C",
                "optionText": "Use AWS Systems Manager to inject the application into an AMI."
            },
            {
                "optionId": "D",
                "optionText": "Configure AWS CodePipeline to deploy code changes and updates."
            }
        ]
    },
    {
        "questionId": 687,
        "questionText": "A SysOps Administrator noticed that the cache hit ratio for an Amazon CloudFront distribution is less than 10%. Which collection of configuration changes will increase the cache hit ratio for the distribution? (Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Ensure that only required cookies, query strings, and headers are forwarded in the Cache Behavior Settings"
            },
            {
                "optionId": "B",
                "optionText": "Change the Viewer Protocol Policy to use HTTPS only"
            },
            {
                "optionId": "C",
                "optionText": "Configure the distribution to use presigned cookies and URLs to restrict access to the distribution"
            },
            {
                "optionId": "D",
                "optionText": "Enable automatic compression of objects in the Cache Behavior Settings"
            },
            {
                "optionId": "E",
                "optionText": "Increase the CloudFront time to live (TTL) settings in the Cache Behavior Settings"
            }
        ]
    },
    {
        "questionId": 688,
        "questionText": "On a weekly basis, the Administrator for a photo sharing website receives an archive of all files users have uploaded the previous week. these file archives can be as large as 10TB in size. For legal reasons, these archives must be saved with no possibility of someone deleting or modifying these archives. Occasionally, there may be a need to view the contents, but it is expected that retrieving them can take three or more hours. What should the Administrator do with the weekly archive? ",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Upload the file to Amazon S3 through the AWS Management Console and apply a lifecycle policy to change the storage class to Amazon Glacier."
            },
            {
                "optionId": "B",
                "optionText": "Upload the archive to the Amazon Glacier with the AWS CLI and enable Vault Lock."
            },
            {
                "optionId": "C",
                "optionText": "Create a Linux EC2 instance with an encrypted Amazon EBS volume and copy each weekly archive file for this instance."
            },
            {
                "optionId": "D",
                "optionText": "Create a file gateway attached to a file share on an S3 bucket with the storage class S3 Infrequent Access. Upload the archives via the gateway."
            }
        ]
    },
    {
        "questionId": 689,
        "questionText": "A SysOps Administrator is managing a Memcached cluster in Amazon ElastiCache. The cluster has been heavily used recently, and the Administrator wants to use a larger instance type with more memory. What should the Administrator use to make this change?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "use the ModifyCacheCluster API and specify a new CacheNodeType"
            },
            {
                "optionId": "B",
                "optionText": "use the CreateCacheCluster API and specify a new CacheNodeType"
            },
            {
                "optionId": "C",
                "optionText": "use the ModifyCacheParameterGroup API and specify a new CacheNodeType"
            },
            {
                "optionId": "D",
                "optionText": "use the RebootCacheCluster API and specify a new CacheNodeType"
            }
        ]
    },
    {
        "questionId": 690,
        "questionText": "A company with dozens of AWS accounts wants to ensure that governance rules are being applied across all accounts. The CIO has recommended that AWS Config rules be deployed using an AWS CloudFormation template. How should these requirements be met?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create a CloudFormation stack set, then select the CloudFormation template and use it to configure the AWS accounts"
            },
            {
                "optionId": "B",
                "optionText": "Write a script that iterates over the company’s AWS accounts and executes the CloudFormation template in each account"
            },
            {
                "optionId": "C",
                "optionText": "Use AWS Organizations to execute the CloudFormation template in all accounts"
            },
            {
                "optionId": "D",
                "optionText": "Create a CloudFormation stack in the master account of AWS Organizations and execute the CloudFormation template to create AWS Config rules in all accounts"
            }
        ]
    },
    {
        "questionId": 691,
        "questionText": "A company’s Information Security team has requested information on AWS environment compliance for Payment Card Industry (PCI) workloads. They have requested assistance in understanding what specific areas of the PCI standards are the responsibility of the company. Which AWS tool will provide the necessary information?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "AWS Macie"
            },
            {
                "optionId": "B",
                "optionText": "AWS Artifact"
            },
            {
                "optionId": "C",
                "optionText": "AWS OpsWorks"
            },
            {
                "optionId": "D",
                "optionText": "AWS Organizations"
            }
        ]
    },
    {
        "questionId": 692,
        "questionText": "A company has deployed a fleet of Amazon EC2 web servers for the upcoming release of a new product. The SysOps Administrator needs to test the Amazon CloudWatch notification settings for this deployment to ensure that a notification is sent using Amazon SNS if the CPU utilization of an EC2 instance exceeds 70%. How should the Administrator accomplish this?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use the set-alarm-state command in AWS CloudTrail to invoke the Amazon SNS notification"
            },
            {
                "optionId": "B",
                "optionText": "Use CloudWatch custom metrics to set the alarm state in AWS CloudTrail and enable Amazon SNS notifications"
            },
            {
                "optionId": "C",
                "optionText": "Use EC2 instance metadata to manually set the CPU utilization to 75% and invoke the alarm state"
            },
            {
                "optionId": "D",
                "optionText": "Use the set-alarm-state command in the AWS CLI for CloudWatch"
            }
        ]
    },
    {
        "questionId": 693,
        "questionText": "A SysOps Administrator has written an AWS Lambda function to launch new Amazon EC2 instances and deployed it in the us-east-1 region. The Administrator tested it by launching a new t2.nano instance in the us-east-1 region and it performed as expected. However, when the region name was updated in the Lambda function to launch an EC2 instance in the us-west-1 region, it failed. What is causing this error?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "The AMI ID must be updated for the us-west-1 region in the Lambda function as well"
            },
            {
                "optionId": "B",
                "optionText": "The Lambda function can only launch EC2 instances in the same region where it is deployed"
            },
            {
                "optionId": "C",
                "optionText": "The Lambda function does not have the necessary IAM permission to launch more than one EC2 instance"
            },
            {
                "optionId": "D",
                "optionText": "The instance type defined in the Lambda function is not available in the us-west-1 region"
            }
        ]
    },
    {
        "questionId": 694,
        "questionText": "A SysOps Administrator is required to monitor free space on Amazon EBS volumes attached to Microsoft Windows-based Amazon EC2 instances within a company’s account. The Administrator must be alerted to potential issues. What should the Administrator do to receive email alerts before low storage space affects EC2 instance performance?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use built-in Amazon CloudWatch metrics, and configure CloudWatch alarms and an Amazon SNS topic for email notifications"
            },
            {
                "optionId": "B",
                "optionText": "Use AWS CloudTrail logs and configure the trail to send notifications to an Amazon SNS topic"
            },
            {
                "optionId": "C",
                "optionText": "Use the Amazon CloudWatch agent to send disk space metrics, then set up CloudWatch alarms using an Amazon SNS topic"
            },
            {
                "optionId": "D",
                "optionText": "Use AWS Trusted Advisor and enable email notification alerts for EC2 disk space"
            }
        ]
    },
    {
        "questionId": 695,
        "questionText": "A SysOps Administrator wants to prevent Developers from accidentally terminating Amazon EC2 instances. How can this be accomplished?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use AWS Systems Manager to restrict EC2 termination"
            },
            {
                "optionId": "B",
                "optionText": "Use AWS Config to restrict EC2 termination"
            },
            {
                "optionId": "C",
                "optionText": "Apply Amazon CloudWatch Events to prevent EC2 termination"
            },
            {
                "optionId": "D",
                "optionText": "Enable termination protection on EC2 instances"
            }
        ]
    },
    {
        "questionId": 696,
        "questionText": "A company has attached the following policy to an IAM user.  Which of the following actions are allowed for the IAM user?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Amazon RDS DescribeDBInstances action in the us-east-1 Region"
            },
            {
                "optionId": "B",
                "optionText": "Amazon S3 PutObject operation in a bucket named testbucket"
            },
            {
                "optionId": "C",
                "optionText": "Amazon EC2 DescribeInstances action in the us-east-1 Region"
            },
            {
                "optionId": "D",
                "optionText": "Amazon EC2 AttachNetworkInterface action in the eu-west-1 Region"
            }
        ]
    },
    {
        "questionId": 697,
        "questionText": "A SysOps Administrator launched an Amazon EC2 instance and received a message that the service limit was exceeded for that instance type. What action should the Administrator take to ensure that EC2 instances can be launched?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use Amazon Inspector to trigger an alert when the limits are exceeded"
            },
            {
                "optionId": "B",
                "optionText": "Use the AWS CLI to bypass the limits placed on the account"
            },
            {
                "optionId": "C",
                "optionText": "Sign in to the AWS Management Console and adjust the limit values to launch new resources"
            },
            {
                "optionId": "D",
                "optionText": "Open a case with AWS Support requesting an increase of the EC2 instance limit"
            }
        ]
    },
    {
        "questionId": 698,
        "questionText": "A web application runs on Amazon EC2 instances behind an Elastic Load Balancing Application Load Balancer (ALB). The instances run in an Auto Scaling group across multiple Availability Zones. A SysOps Administrator has notice that some EC2 instances show up healthy in the Auto Scaling console but show up as unhealthy in the ALB target console. What could be the issue?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "The health check grace period for the Auto Scaling group is set too low; increase it"
            },
            {
                "optionId": "B",
                "optionText": "The target group health check is incorrectly configured and needs to be adjusted"
            },
            {
                "optionId": "C",
                "optionText": "The user data or AMI used for the Auto Scaling group launch configuration is incorrect"
            },
            {
                "optionId": "D",
                "optionText": "The Auto Scaling group health check type is based on EC2 instance health instead of Elastic Load Balancing health checks"
            }
        ]
    },
    {
        "questionId": 699,
        "questionText": "A company is running critical applications on Amazon EC2 instances. The company needs to ensure its resources are automatically recovered if they become impaired due to an underlying hardware failure. Which service can be used to monitor and recover the EC2 instances?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Amazon EC2 Systems Manager"
            },
            {
                "optionId": "B",
                "optionText": "Amazon Inspector"
            },
            {
                "optionId": "C",
                "optionText": "AWS CloudFormation"
            },
            {
                "optionId": "D",
                "optionText": "Amazon CloudWatch"
            }
        ]
    },
    {
        "questionId": 700,
        "questionText": "A gaming application is deployed on four Amazon EC2 instances in a default VPC. The SysOps Administrator has noticed consistently high latency in responses as data is transferred among the four instances. There is no way for the Administrator to alter the application code. The MOST effective way to reduce latency is to relaunch the EC2 instances in:",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "a dedicated VPC."
            },
            {
                "optionId": "B",
                "optionText": "a single subnet inside the VPC."
            },
            {
                "optionId": "C",
                "optionText": "a placement group."
            },
            {
                "optionId": "D",
                "optionText": "a single Availability Zone."
            }
        ]
    },
    {
        "questionId": 701,
        "questionText": "A company has created an online retail application that is hosted on a fleet of Amazon EC2 instances behind an ELB Application Load Balancer. User authentication is handled at the individual EC2 instance level. Once a user is authenticated; all requests from that user must go to the same EC2 instance. What should the SysOps Administrator enable to meet these requirements?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "ELB TCP listeners"
            },
            {
                "optionId": "B",
                "optionText": "ELB sticky sessions "
            },
            {
                "optionId": "C",
                "optionText": "ELB connection draining"
            },
            {
                "optionId": "D",
                "optionText": "ELB cross-zone load balancing"
            }
        ]
    },
    {
        "questionId": 702,
        "questionText": "A SysOpsAdministrator is managing a large organization with multiple accounts on the Business Support plan all linked to a single payer account. The Administrator wants to be notified automatically of AWS Personal Health Dashboard events. In the main payer account, the Administrator configures Amazon CloudWatch Events triggered by AWS Health events triggered by AWS Health triggered by AWS Health events to issue notifications using Amazon SNS, but alerts in the linked accounts failed to trigger. Why did the alerts fail?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Amazon SNS cannot be triggered from the AWS Personal Health Dashboard"
            },
            {
                "optionId": "B",
                "optionText": "The AWS Personal Health Dashboard only reports events from one account, not linked accounts."
            },
            {
                "optionId": "C",
                "optionText": "The AWS Personal Health Dashboard must be configured from the payer account only; all events will then roll up into the payer account."
            },
            {
                "optionId": "D",
                "optionText": "AWS Organizations must be used to monitor linked accounts."
            }
        ]
    },
    {
        "questionId": 703,
        "questionText": "A company is planning to expand into an additional AWS Region for disaster recovery purposes. The company uses AWS CloudFormation, and its infrastructure is well-defined as code. The company would like to reuse as much of its existing code as possible when deploying resources to additional Regions. A SysOps Administrator is reviewing how Amazon Machine Images (AMIs) are selected in AWS CloudFormation, but is having trouble making the same stack work in the new Region. Which action would make it easier to manage multiple Regions?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Name each AMI in the new Region exactly the same as the equivalent AMI in the first Region."
            },
            {
                "optionId": "B",
                "optionText": "Duplicate the stack so unique AMI names can be coded into the appropriate stack."
            },
            {
                "optionId": "C",
                "optionText": "Create an alias for each AMI so that an AMI can be referenced by a common name across Regions."
            },
            {
                "optionId": "D",
                "optionText": "Create a Mappings section in the stack, and define the Region to AMI associations."
            }
        ]
    },
    {
        "questionId": 704,
        "questionText": "An organization with a large IT department has decided to migrate to AWS. With different job functions in the IT department, it is not desirable to give all users access to all AWS resources. Currently the organization handles access via LDAP group membership. What is the BEST method to allow access using current LDAP credentials?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create an AWS Directly Service Simple AD. Replicate the on-premises LDAP directory to Simple AD."
            },
            {
                "optionId": "B",
                "optionText": "Create a Lambda function to read LDAP groups and automate the creation of IAM users."
            },
            {
                "optionId": "C",
                "optionText": "Use AWS CloudFormation to create IAM roles. Deploy Direct Connect to allow access to the onpremises LDAP server."
            },
            {
                "optionId": "D",
                "optionText": "Federate the LDAP directory with IAM using SAML. Create different IAM roles to correspond to different LDAP groups to limit permissions."
            }
        ]
    },
    {
        "questionId": 705,
        "questionText": "An organization stores sensitive customer in S3 buckets protected by bucket policies. recently, there have been reports that unauthorized entities within the company have been trying to access the data on those S3 buckets. The Chief Information Security Officer (CISO) would like to know which buckets are being targeted and determine who is responsible for trying to access that information. Which steps should a SysOps Administrator take to meet the CISO’s requirement? (Choose two.) ",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Enable Amazon S3 Analytics on all affected S3 buckets to obtain a report of which buckets are being accessed without authorization."
            },
            {
                "optionId": "B",
                "optionText": "Enable Amazon S3 Server Access Logging on all affected S3 buckets and have the logs stored in a bucket dedicated for logs."
            },
            {
                "optionId": "C",
                "optionText": "Use Amazon Athena to query S3 Analytics report for HTTP 403 errors, and determine the IAM user or role making the requests."
            },
            {
                "optionId": "D",
                "optionText": "Use Amazon Athena to query the S3 Server Access Logs for HTTP 403 errors, and determine the IAM user or role making the requests."
            },
            {
                "optionId": "E",
                "optionText": "Use Amazon Athena to query the S3 Server Access Logs for HTTP 503 errors, and determine the IAM user or role making the requests."
            }
        ]
    },
    {
        "questionId": 706,
        "questionText": "A SysOps Administrator responsible for an e-commerce web application observes the application does not launch new Amazon EC2 instances at peak times, even though the maximum capacity of the Auto Scaling group has not been reached. What should the Administrator do to identify the underlying problem? (Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Monitor service limits in AWS Trusted Advisor."
            },
            {
                "optionId": "B",
                "optionText": "Analyze VPC Flow Logs."
            },
            {
                "optionId": "C",
                "optionText": "Monitor limits in AWS Systems Manager."
            },
            {
                "optionId": "D",
                "optionText": "Use Amazon Inspector to gather performance information."
            },
            {
                "optionId": "E",
                "optionText": "Check the response for RunInstances requests in AWS CloudTrail logs."
            }
        ]
    },
    {
        "questionId": 707,
        "questionText": "A SysOps Administrator must generate a report that provides a breakdown of all API activity by a specific user the course of a year. Given that AWS Cloud Trail was enabled, how can this report be generated?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Using the AWS management Console, search for the user name in the CloudTrail history. Then filter by API and download the report in CSV format."
            },
            {
                "optionId": "B",
                "optionText": "Use the CloudTrail digest files stored in the company’s Amazon S3 bucket. then send the logs to Amazon QuickSight to create the report."
            },
            {
                "optionId": "C",
                "optionText": "Locate the monthly reports that CloudTrail sends that are emailed to the account’s root user. Then forward the reports to the auditor using a secure channel."
            },
            {
                "optionId": "D",
                "optionText": "Access the CloudTrail logs stored in the Amazon S3 bucket tied to Cloud Trail. Use Amazon Athena to extract the information needed to generate the report."
            }
        ]
    },
    {
        "questionId": 708,
        "questionText": "A company received its latest bill with a large increase in the number of requests against Amazon SQS as compared to the month prior. The company is not aware of any changes in its SQS usage. The company is concerned about the cost increase and who or what was making these calls. What should the SysOps Administrator use to validate the calls made to SQS?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "AWS CloudTrail"
            },
            {
                "optionId": "B",
                "optionText": "Amazon CloudWatch"
            },
            {
                "optionId": "C",
                "optionText": "AWS Cost Explorer"
            },
            {
                "optionId": "D",
                "optionText": "Amazon S3 server access logs"
            }
        ]
    },
    {
        "questionId": 709,
        "questionText": "An Amazon S3 bucket in a SysOps Administrator’s account can be accesses by users in other SWS accounts. How can the Administrator ensure that the bucket is only accessible to members of the Administrator’s  AWS account?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Move the S3 bucket from a public subnet to a private subnet in the Amazon VPC."
            },
            {
                "optionId": "B",
                "optionText": "Change the bucket access control list (ACL) to restrict access to the bucket owner."
            },
            {
                "optionId": "C",
                "optionText": "Enable server-side encryption for all objects in the bucket."
            },
            {
                "optionId": "D",
                "optionText": "Use only Amazon S3 presigned URLs for accessing objects in the bucket."
            }
        ]
    },
    {
        "questionId": 710,
        "questionText": "A company hosts its website on Amazon ECF2 instances behind an ELB Application Load Balancer. The company manages its DNS with Amazon Route 53, and wants to point its domain’s zone apex to the website. Which type of record should be used to meet these requirements?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "An AAA record for the domain’s zone apex"
            },
            {
                "optionId": "B",
                "optionText": "An A record for the domain’s zone apex"
            },
            {
                "optionId": "C",
                "optionText": "A CNAME record for the domain’s zone apex"
            },
            {
                "optionId": "D",
                "optionText": "An alias record for the domain’s zone apex"
            }
        ]
    },
    {
        "questionId": 711,
        "questionText": "A company has centralized all its logs into one Amazon CloudWatch Logs log group. The SysOps Administrator is to alert different teams of any issues relevant to them. What is the MOST efficient approach to accomplish this?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Write an AWS Lambda function that will query the logs every minute and contain the logic of which team to notify on which patterns and issues."
            },
            {
                "optionId": "B",
                "optionText": "Set up different metric filters for each team based on patterns and alerts. Each alarm will notify the appropriate notification list."
            },
            {
                "optionId": "C",
                "optionText": "Redesign the aggregation of logs so that each team’s relevant parts are sent to a separate log group, then subscribe each team to its respective log group."
            },
            {
                "optionId": "D",
                "optionText": "Create an AWS Auto Scaling group of Amazon EC2 instances that will scale based on the amount of ingested log entries. This group will pull log streams, look for patterns, and send notifications to relevant teams."
            }
        ]
    },
    {
        "questionId": 712,
        "questionText": "A company website hosts patches for software that is sold globally. The website runs in AWS and performs well until a large software patch is released. The flood of downloads puts a strain on the web servers and leads to a poor customer experience. What can the Sysops Administrator propose to enhance customer experience, create a more available web platform, and keep costs low?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use an Amazon CloudFront distribution to cache static content, including software patches."
            },
            {
                "optionId": "B",
                "optionText": "Increase the size of the NAT instance to improve throughput."
            },
            {
                "optionId": "C",
                "optionText": "Scale out the web servers in advance of patch releases to reduce Auto Scaling delays."
            },
            {
                "optionId": "D",
                "optionText": "Move the content to IO1 and provision additional IOPS to the volume that contains the software patches."
            }
        ]
    },
    {
        "questionId": 713,
        "questionText": "A SysOps Administrator created an Application Load balancer (ALB) and placed two Amazon EC2 instances in the same subnet behind the ALB. During monitoring, the Administrator observes HealthyHostCount drop to 1 in Amazon CloudWatch. What is MOST likely causing this issue?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "The EC2 instances are in the same Availability Zone, causing contention between the two. "
            },
            {
                "optionId": "B",
                "optionText": "The route tables are not updated to allow traffic to flow between the ALB and the EC2 instances."
            },
            {
                "optionId": "C",
                "optionText": "The ALB health check has failed, and the ALB has taken EC2 instances out of service."
            },
            {
                "optionId": "D",
                "optionText": "The Amazon Route 53 health check has failed, and the ALB has taken EC2 instances out of service."
            }
        ]
    },
    {
        "questionId": 714,
        "questionText": "A SysOps Administrator is managing an AWS account where Developers are authorized to launch Amazon EC2 instances to test new code. To limit costs, the Administrator must ensure that the EC2 instances in the account are terminated 24 hours after launch. How should the Administrator meet these requirements?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create an Amazon CloudWatch alarm based on the CPUUtilization metric. When the metric is 0% for 24 hours, trigger an action to terminate the EC2 instance when the alarm is triggered."
            },
            {
                "optionId": "B",
                "optionText": "Create an AWS Lambda function to check all EC2 instances and terminate instances running more than 24 hours. Trigger the function with an Amazon CloudWatch Events event every 15 minutes."
            },
            {
                "optionId": "C",
                "optionText": "Add an action to AWS Trusted Advisor to turn off EC2 instances based on the Low Utilization Amazon EC2 Instances check, terminating instances identified by Trusted Advisor as running for more than 24 hours."
            },
            {
                "optionId": "D",
                "optionText": "Install the unified Amazon CloudWatch agent on every EC2 instance. Configure the agent to terminate instances after they have been running for 24 hours."
            }
        ]
    },
    {
        "questionId": 715,
        "questionText": "An AWS CodePipeline in us-east-1 returns “InternalError” with the code “JobFailed” when launching a deployment using an artifact from an Amazon S3 bucket in us-west-1. What is causing this error?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "S3 Transfer Acceleration is not enabled."
            },
            {
                "optionId": "B",
                "optionText": "The S3 bucket is not in the appropriate region."
            },
            {
                "optionId": "C",
                "optionText": "The S3 bucket is being throttled."
            },
            {
                "optionId": "D",
                "optionText": "There are insufficient permissions on the artifact in Amazon S3."
            }
        ]
    },
    {
        "questionId": 716,
        "questionText": "An application running on Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones was deployed using an AWS CloudFormation template. The SysOps team has patched the Amazon Machine Image (AMI) version and must update all the EC2 instances to use the new AMI. How can the SysOps Administrator use CloudFormation to apply the new AMI while maintaining a minimum level of active instances to ensure service continuity?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Run the aws cloudfomation update-stack command with the – rollback-configuration option"
            },
            {
                "optionId": "B",
                "optionText": "Update the CloudFormation template with the new AMI ID, then reboot the EC2 instances"
            },
            {
                "optionId": "C",
                "optionText": "Deploy a second CloudFormation stack and use Amazon Route 53 to redirect traffic to the new stack"
            },
            {
                "optionId": "D",
                "optionText": "Set an AutoScalingUpdate policy in the CloudFormation template to update the stack."
            }
        ]
    },
    {
        "questionId": 717,
        "questionText": "A SysOps Administrator is responsible for a legacy, CPU-heavy application. The application can only be scaled vertically. Currently, the application is deployed on a single t2.large Amazon EC2 instance. The system is showing 90% CPU usage and significant performance latency after a few minutes. What change should be made to alleviate the performance problem?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Change the Amazon EBS volume to Provisioned IOPs."
            },
            {
                "optionId": "B",
                "optionText": "Upgrade to a compute-optimized instance."
            },
            {
                "optionId": "C",
                "optionText": "Add additional t2.large instances to the application. "
            },
            {
                "optionId": "D",
                "optionText": "Purchase Reserved Instances."
            }
        ]
    },
    {
        "questionId": 718,
        "questionText": "A company recently implemented an Amazon S3 lifecycle rule that accidentally deleted objects from one of its S3 buckets. The bucket has S3 versioning enabled. Which actions will restore the objects? (Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use the AWS Management Console to delete the object delete markers."
            },
            {
                "optionId": "B",
                "optionText": "Create a new lifecycle rule to delete the object delete markers that were created."
            },
            {
                "optionId": "C",
                "optionText": "Use the AWS CLI to delete the object delete markers while specifying the version IDs of the delete markers."
            },
            {
                "optionId": "D",
                "optionText": "Modify the existing lifecycle rule to delete the object delete markers that were created."
            },
            {
                "optionId": "E",
                "optionText": "Use the AWS CLI to delete the object delete markers while specifying the name of the objects only."
            }
        ]
    },
    {
        "questionId": 719,
        "questionText": "A company uses AWS CloudFormation to deploy its application infrastructure. Recently, a user accidentally changed a property of a database in a CloudFormation template and performed a stack update that caused an interruption to the application. A SysOps Administrator must determine how to modify the deployment process to allow the DevOps team to continue to deploy the infrastructure, but prevent against accidental modifications to specific resources. Which solution will meet these requirements?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Set up an AWS Config rule to alert based on changes to any CloudFormation stack. An AWS Lambda function can then describe the stack to determine if any protected resources were modified and cancel the operation."
            },
            {
                "optionId": "B",
                "optionText": "Set up an Amazon CloudWatch Events event with a rule to trigger based on any CloudFormation API call. An AWS Lambda function can then describe the stack to determine if any protected resources were modified and cancel the operation."
            },
            {
                "optionId": "C",
                "optionText": "Launch the CloudFormation templates using a stack policy with an explicit allow for all resources and an explicit deny of the protected resources with an action of Update:*."
            },
            {
                "optionId": "D",
                "optionText": "Attach an IAM policy to the DevOps team role that prevents a CloudFormation stack from updating, with a condition based on the specific Amazon Resource names (ARNs) of the protected resources."
            }
        ]
    },
    {
        "questionId": 720,
        "questionText": "A SysOps Administrator is analyzing how Reserved Instance discounts are allocated to Amazon EC2 instances across accounts in the company's consolidated bill. Which AWS tool will provide the details necessary to understand the billing charges?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "AWS Budgets"
            },
            {
                "optionId": "B",
                "optionText": "AWS Cost and Usage report"
            },
            {
                "optionId": "C",
                "optionText": "AWS Trusted Advisor"
            },
            {
                "optionId": "D",
                "optionText": "AWS Organizations"
            }
        ]
    },
    {
        "questionId": 721,
        "questionText": "What should a SysOps Administrator do to ensure a company has visibility into maintenance events performed by AWS?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Run a script that queries AWS Systems Manager for upcoming maintenance events, and then push these events to an Amazon SNS topic to which the Operations team is subscribed."
            },
            {
                "optionId": "B",
                "optionText": "Query the AWS Health API for upcoming maintenance events and integrate the results with the company’s existing operations dashboard."
            },
            {
                "optionId": "C",
                "optionText": "Integrate the AWS Service Health Dashboard’s RSS feed into the company’s existing operations dashboard."
            },
            {
                "optionId": "D",
                "optionText": "Use Amazon Inspector to send notifications of upcoming maintenance events to the Operations team  distribution list."
            }
        ]
    },
    {
        "questionId": 722,
        "questionText": "A SysOps Administrator manages a website running on Amazon EC2 instances behind an ELB Application Load Balancer. Users visiting the load balancer’s DNS address in a browser are reporting errors. The administrator has confirmed: The security groups and network ACLs are correctly configured. The load balancer target group shows no healthy instances. What should the Administrator do to resolve this issue?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Review the application’s logs for requests originating from the VPC DNS address."
            },
            {
                "optionId": "B",
                "optionText": "Review the load balancer access logs, looking for any issues or errors."
            },
            {
                "optionId": "C",
                "optionText": "Review the load balancer target group health check configuration."
            },
            {
                "optionId": "D",
                "optionText": "Review the load balancer listener configuration."
            }
        ]
    },
    {
        "questionId": 723,
        "questionText": "A company is running multiple AWS Lambda functions in a non-VPC environment. Most of the functions are application-specific; an operational function is involved synchronously every hour. Recently, the Applications team deployed new functions that are triggered based on an Amazon S3 event to process multiple files that are uploaded to an S3 bucket simultaneously. The SysOps Administrator notices that the operational function occasionally fails to execute due to throttling. What step should the Administrator take to make sure that the operational function executes?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Redeploy the operational function to a VPC."
            },
            {
                "optionId": "B",
                "optionText": "Increase the operational function timeout."
            },
            {
                "optionId": "C",
                "optionText": "Set the operational function concurrency to 1."
            },
            {
                "optionId": "D",
                "optionText": "Increase the operational function memory."
            }
        ]
    },
    {
        "questionId": 724,
        "questionText": "A SysOps Administrator must ensure all Amazon EBS volumes currently in use, and those created in the future, are encrypted with a specific AWS KMS customer master key (CMK). What is the MOST efficient way for the Administrator to meet this requirement?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create an AWS Lambda function to run on a daily schedule, and have the function run the aws ec2 describe-volumes --filters encrypted command."
            },
            {
                "optionId": "B",
                "optionText": "Within AWS Config, configure the encrypted-volumes managed rule and specify the key ID of the CMK."
            },
            {
                "optionId": "C",
                "optionText": "Log in to the AWS Management Console on a daily schedule, then filter the list of volumes by encryption status, then export this list."
            },
            {
                "optionId": "D",
                "optionText": "Create an AWS Lambda function to run on a daily schedule, and have the function run the aws kms describe-key command."
            }
        ]
    },
    {
        "questionId": 725,
        "questionText": "A company has an application running on a fleet of Microsoft Windows instances. Patches to the operating system need to be applied each month. AWS Systems Manager Patch Manager is used to apply the patches on a schedule. When the fleet is being patched, customers complain about delayed service responses. What can be done to ensure patches are deployed with MINIMAL customer impact?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Change the number of instances patched at any one time to 100%. "
            },
            {
                "optionId": "B",
                "optionText": "Create a snapshot of each server in the fleet using a Systems Manager Automation document before starting the patch process."
            },
            {
                "optionId": "C",
                "optionText": "Configure the maintenance window to patch 10% of the instances in the patch group at a time."
            },
            {
                "optionId": "D",
                "optionText": "Create a patched Amazon Machine Image (AMI). Configure the maintenance window option to deploy the patched AMI on only 10% of the fleet at a time."
            }
        ]
    },
    {
        "questionId": 726,
        "questionText": "A local agency plans to deploy 500 Raspberry Pi devices throughout a city. All the devices need to be managed centrally, and their configurations need to be consistent. What is the BEST service for managing these devices?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "AWS Config"
            },
            {
                "optionId": "B",
                "optionText": "AWS Systems Manager"
            },
            {
                "optionId": "C",
                "optionText": "Amazon Inspector"
            },
            {
                "optionId": "D",
                "optionText": "AWS Service Catalog"
            }
        ]
    },
    {
        "questionId": 727,
        "questionText": "A SysOps Administrator needs an Amazon EBS volume type for a big data application. The application data is accessed infrequently and stored sequentially. What EBS volume type will be the MOST cost-effective solution?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Provisioned IOPS SSD (io1)"
            },
            {
                "optionId": "B",
                "optionText": "Cold HDD (sc1)"
            },
            {
                "optionId": "C",
                "optionText": "Throughput Optimized HDD (st1)"
            },
            {
                "optionId": "D",
                "optionText": "General Purpose SSD (gp2)"
            }
        ]
    },
    {
        "questionId": 728,
        "questionText": "A SysOps Administrator created an AWS Service Catalog portfolio and shared the portfolio with a second AWS account in the company. The second account is controlled by a different Administrator. Which action will the Administrator of the second account be able to perform?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Add a product from the imported portfolio to a local portfolio."
            },
            {
                "optionId": "B",
                "optionText": "Add new products to the imported portfolio."
            },
            {
                "optionId": "C",
                "optionText": "Change the launch role for the products contained in the imported portfolio."
            },
            {
                "optionId": "D",
                "optionText": "Remove products from the imported portfolio."
            }
        ]
    },
    {
        "questionId": 729,
        "questionText": "A SysOps Administrator must secure AWS CloudTrail logs. The Security team is concerned that an employee may modify or attempt to delete CloudTrail log files from its Amazon S3 bucket. Which practices will ensure that the log files are available and unaltered? (Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Enable the CloudTrail log file integrity check in AWS Config Rules."
            },
            {
                "optionId": "B",
                "optionText": "Use CloudWatch Events to scan log files hourly."
            },
            {
                "optionId": "C",
                "optionText": "Enable CloudTrail log file integrity validation."
            },
            {
                "optionId": "D",
                "optionText": "Turn on Amazon S3 MFA Delete for the CloudTrail bucket."
            },
            {
                "optionId": "E",
                "optionText": "Implement a DENY ALL bucket policy on the CloudTrail bucket."
            }
        ]
    },
    {
        "questionId": 730,
        "questionText": "A company runs a web application that users access using the domain name www.example.com. The company manages the domain name using Amazon Route 53. The company created an Amazon  CloudFront distribution in front of the application and would like www.example.com to access the application through CloudFront. What is the MOST cost-effective way to achieve this?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create a CNAME record in Amazon Route 53 that points to the CloudFront distribution URL."
            },
            {
                "optionId": "B",
                "optionText": "Create an ALIAS record in Amazon Route 53 that points to the CloudFront distribution URL."
            },
            {
                "optionId": "C",
                "optionText": "Create an A record in Amazon Route 53 that points to the public IP address of the web application."
            },
            {
                "optionId": "D",
                "optionText": "Create a PTR record in Amazon Route 53 that points to the public IP address of the web application."
            }
        ]
    },
    {
        "questionId": 731,
        "questionText": "A company using AWS Organizations requires that no Amazon S3 buckets in its production accounts should ever be deleted. What is the SIMPLEST approach the SysOps Administrator can take to ensure S3 buckets in those accounts can never be deleted?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Set up MFA Delete on all the S3 buckets to prevent the buckets from being deleted."
            },
            {
                "optionId": "B",
                "optionText": "Use service control policies to deny the s3:DeleteBucket action on all buckets in production accounts."
            },
            {
                "optionId": "C",
                "optionText": "Create an IAM group that has an IAM policy to deny the s3:DeleteBucket action on all buckets in production accounts."
            },
            {
                "optionId": "D",
                "optionText": "Use AWS Shield to deny the s3:DeleteBucket action on the AWS account instead of all S3 buckets."
            }
        ]
    },
    {
        "questionId": 732,
        "questionText": "A company uses multiple accounts for its applications. Account A manages the company’s Amazon Route 53 domains and hosted zones. Account B uses a load balancer fronting the company’s web servers. How can the company use Route 53 to point to the load balancer in the MOST cost-effective and efficient manner?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create an Amazon EC2 proxy in Account A that forwards requests to Account B."
            },
            {
                "optionId": "B",
                "optionText": "Create a load balancer in Account A that points to the load balancer in Account B."
            },
            {
                "optionId": "C",
                "optionText": "Create a CNAME record in Account A pointing to an alias record to the load balancer in Account B."
            },
            {
                "optionId": "D",
                "optionText": "Create an alias record in Account A pointing to the load balancer in Account B."
            }
        ]
    },
    {
        "questionId": 733,
        "questionText": "A SysOps Administrator implemented the following bucket policy to allow only the corporate IP address range of 54.240.143.0/24 to access objects in an Amazon S3 bucket.  Some employees are reporting that they are able to access the S3 bucket from IP addresses outside the corporate IP address range. How can the Administrator address this issue?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Modify the Condition operator to include both NotIpAddress and IpAddress to prevent unauthorized access to the S3 bucket."
            },
            {
                "optionId": "B",
                "optionText": "Modify the Condition element from the IAM policy to aws:StringEquals instead of aws:SourceIp."
            },
            {
                "optionId": "C",
                "optionText": "Modify the IAM policy instead of the bucket policy to restrict users from accessing the bucket based on their source IP addresses."
            },
            {
                "optionId": "D",
                "optionText": "Change Effect from Allow to Deny in the second statement of the policy to deny requests not from the source IP range."
            }
        ]
    },
    {
        "questionId": 734,
        "questionText": "A SysOps Administrator is notified that a security vulnerability affects a version of MySQL that is being used with Amazon RDS MySQL. Who is responsible for ensuring that the patch is applied to the MySQL cluster? ",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "The database vendor"
            },
            {
                "optionId": "B",
                "optionText": "The Security department of the SysOps Administrator’s company"
            },
            {
                "optionId": "C",
                "optionText": "AWS"
            },
            {
                "optionId": "D",
                "optionText": "The SysOps Administrator"
            }
        ]
    },
    {
        "questionId": 735,
        "questionText": "A company’s web application runs on Amazon EC2 instances behind an ELB Application Load Balancer. The EC2 instances run in an EC2 Auto Scaling group across multiple Availability Zones. Data is stored in an Amazon ElastiCache for Redis cluster and an Amazon RDS DB instance. Company policy requires all system patching to take place at midnight on Tuesday. Which resources will need to have a maintenance window configured for midnight on Tuesday? (Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Elastic Load Balancer"
            },
            {
                "optionId": "B",
                "optionText": "EC2 instances"
            },
            {
                "optionId": "C",
                "optionText": "RDS instance"
            },
            {
                "optionId": "D",
                "optionText": "ElastiCache cluster"
            },
            {
                "optionId": "E",
                "optionText": "Auto Scaling group"
            }
        ]
    },
    {
        "questionId": 736,
        "questionText": "A SysOps Administrator is deploying a website with dynamic content. Company policy requires that users from certain countries or regions cannot access the web content and should receive an error page. Which of the following can be used to implement this policy? (Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Amazon CloudFront geo-restriction"
            },
            {
                "optionId": "B",
                "optionText": "Amazon GuardDuty geo-blocking"
            },
            {
                "optionId": "C",
                "optionText": "Amazon Route 53 geolocation routing"
            },
            {
                "optionId": "D",
                "optionText": "AWS Shield geo-restriction"
            },
            {
                "optionId": "E",
                "optionText": "Network access control list (NACL) restriction"
            }
        ]
    },
    {
        "questionId": 737,
        "questionText": "A company stores thousands of non-critical log files in an Amazon S3 bucket. A set of reporting scripts retrieve these log files daily. Which of the following storage options will be the MOST cost-efficient for the company’s use case?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Amazon Glacier"
            },
            {
                "optionId": "B",
                "optionText": "Amazon S3 Standard IA (infrequent access) storage"
            },
            {
                "optionId": "C",
                "optionText": "Amazon S3 Standard Storage"
            },
            {
                "optionId": "D",
                "optionText": "AWS Snowball"
            }
        ]
    },
    {
        "questionId": 738,
        "questionText": "A SysOps Administrator receives a connection timeout error when attempting to connect to an Amazon EC2 instance from a home network using SSH. The Administrator was able to connect to this EC2 instance using from their office network in the past. What caused the connection to time out?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "The IAM role associated with the EC2 instance does not allow SSH connections from the home network."
            },
            {
                "optionId": "B",
                "optionText": "The public key used by SSH located on the Administrator’s server does not have the required permissions."
            },
            {
                "optionId": "C",
                "optionText": "The route table contains a route that sends 0.0.0.0/0 to the internet gateway for the VPC. "
            },
            {
                "optionId": "D",
                "optionText": "The security group is not allowing inbound traffic from the home network on the SSH port."
            }
        ]
    },
    {
        "questionId": 739,
        "questionText": "A company is deploying a web service to Amazon EC2 instances behind an Elastic Load Balancer. All resources will be defined and created in a single AWS CloudFormation stack using a template. The creation of each EC2 instance will not be considered complete until an initialization script has been run successfully on the EC2 instance. The Elastic Load Balancer cannot be created until all EC2 instances have been created. Which CloudFormation resource will coordinate the Elastic Load Balancer creation in the CloudFormation stack template?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "CustomResource"
            },
            {
                "optionId": "B",
                "optionText": "DependsOn"
            },
            {
                "optionId": "C",
                "optionText": "Init"
            },
            {
                "optionId": "D",
                "optionText": "WaitCondition"
            }
        ]
    },
    {
        "questionId": 740,
        "questionText": "A company is concerned about a security vulnerability impacting its Linux operating system. What should the SysOps Administrator do to alleviate this concern?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Patch the vulnerability with Amazon Inspector."
            },
            {
                "optionId": "B",
                "optionText": "Provide an AWS Trusted Advisor report showing which Amazon EC2 instances have been patched."
            },
            {
                "optionId": "C",
                "optionText": "Redeploy the Amazon EC2 instances using AWS CloudFormation."
            },
            {
                "optionId": "D",
                "optionText": "Patch the Linux operating system using AWS Systems Manager."
            }
        ]
    },
    {
        "questionId": 741,
        "questionText": "A SysOps Administrator is configuring AWS SSO for the first time. The Administrator has already created a directory in the master account using AWS Directory Service and enabled full access in AWS Organizations. What should the Administrator do next to configure the service?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create IAM roles in each account to be used by AWS SSO, and associate users with these roles using AWS SSO."
            },
            {
                "optionId": "B",
                "optionText": "Create IAM users in the master account, and use AWS SSO to associate the users with the accounts they will access."
            },
            {
                "optionId": "C",
                "optionText": "Create permission sets in AWS SSO, and associate the permission sets with Directory Service users or groups."
            },
            {
                "optionId": "D",
                "optionText": "Create service control policies (SCPs) in Organizations, and associate the SCPs with Directory Service users or groups."
            }
        ]
    },
    {
        "questionId": 742,
        "questionText": "A web application runs on Amazon EC2 instances and accesses external services. The external services require authentication credentials. The application is deployed using AWS CloudFormation to three separate environments: development, test, and production. Each environment requires unique credentials for external services. What option securely provides the application with the needed credentials while requiring MINIMAL administrative overhead?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Pass the credentials for the target environment to the CloudFormation template as parameters. Use the user data script to insert the parameterized credentials into the EC2 instances."
            },
            {
                "optionId": "B",
                "optionText": "Store the credentials as secure strings in AWS Systems Manager Parameter Store. Pass an environment tag as a parameter to the CloudFormation template. Use the user data script to insert the  environment tag in the EC2 instances. Access the credentials from the application."
            },
            {
                "optionId": "C",
                "optionText": "Create a separate CloudFormation template for each environment. In the Resources section, include a user data script for each EC2 instance. Use the user data script to insert the proper credentials for the environment into the EC2 instances."
            },
            {
                "optionId": "D",
                "optionText": "Create separate Amazon Machine Images (AMIs) with the required credentials for each environment. Pass the environment tag as a parameter to the CloudFormation template. In the Mappings section of the CloudFormation template, map the environment tag to the proper AMI, then use that AMI when launching the EC2 instances."
            }
        ]
    },
    {
        "questionId": 743,
        "questionText": "A SysOps Administrator created an AWS CloudFormation template for the first time. The stack failed with a status of ROLLBACK_COMPLETE. The Administrator identified and resolved the template issue causing the failure. How should the Administrator continue with the stack deployment?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Delete the failed stack and create a new stack."
            },
            {
                "optionId": "B",
                "optionText": "Execute a change set on the failed stack."
            },
            {
                "optionId": "C",
                "optionText": "Perform an update-stack action on the failed stack."
            },
            {
                "optionId": "D",
                "optionText": "Run a validate-template command."
            }
        ]
    },
    {
        "questionId": 744,
        "questionText": "A SysOps Administrator is building a process for sharing Amazon RDS database snapshots between different accounts associated with different business units within the same company. All data must be encrypted at rest. How should the Administrator implement this process?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Write a script to download the encrypted snapshot, decrypt it using the AWS KMS encryption key used to encrypt the snapshot, then create a new volume in each account."
            },
            {
                "optionId": "B",
                "optionText": "Update the key policy to grant permission to the AWS KMS encryption key used to encrypt the snapshot with all relevant accounts, then share the snapshot with those accounts."
            },
            {
                "optionId": "C",
                "optionText": "Create an Amazon EC2 instance based on the snapshot, then save the instance’s Amazon EBS volume as a snapshot and share it with the other accounts. Require each account owner to create a new volume from that snapshot and encrypt it."
            },
            {
                "optionId": "D",
                "optionText": "Create a new unencrypted RDS instance from the encrypted snapshot, connect to the instance using SSH/RDP, export the database contents into a file, then share this file with the other accounts."
            }
        ]
    },
    {
        "questionId": 745,
        "questionText": "A SysOps Administrator has been notified that some Amazon EC2 instances in the company’s environment might have a vulnerable software version installed. What should be done to check all of the instances in the environment with the LEAST operational overhead?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create and run an Amazon Inspector assessment template."
            },
            {
                "optionId": "B",
                "optionText": "Manually SSH into each instance and check the software version."
            },
            {
                "optionId": "C",
                "optionText": "Use AWS CloudTrail to verify Amazon EC2 activity in the account."
            },
            {
                "optionId": "D",
                "optionText": "Write a custom script and use AWS CodeDeploy to deploy to Amazon EC2 instances."
            }
        ]
    },
    {
        "questionId": 746,
        "questionText": "Development teams are maintaining several workloads on AWS. Company management is concerned about rising costs and wants the SysOps Administrator to configure alerts so teams are notified when spending approaches preset limits. Which AWS service will satisfy these requirements? ",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "AWS Budgets"
            },
            {
                "optionId": "B",
                "optionText": "AWS Cost Explorer"
            },
            {
                "optionId": "C",
                "optionText": "AWS Trusted Advisor"
            },
            {
                "optionId": "D",
                "optionText": "AWS Cost and Usage report"
            }
        ]
    },
    {
        "questionId": 747,
        "questionText": "A SysOps Administrator is tasked with deploying and managing a single CloudFormation template across multiple AWS accounts. What feature of AWS CloudFormation will accomplish this?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Change sets"
            },
            {
                "optionId": "B",
                "optionText": "Nested stacks"
            },
            {
                "optionId": "C",
                "optionText": "Stack policies"
            },
            {
                "optionId": "D",
                "optionText": "StackSets"
            }
        ]
    },
    {
        "questionId": 748,
        "questionText": "A company runs an application that uses Amazon RDS for MySQL. During load testing of equivalent production volumes, the Development team noticed a significant increase in query latency. A SysOps Administrator concludes from investigating Amazon CloudWatch Logs that the CPU utilization on the RDS MySQL instance was at 100%. Which action will resolve this issue?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Configure AWS Database Migration Service (AWS DMS) to allow Amazon RDS for MySQL to scale and accept more requests."
            },
            {
                "optionId": "B",
                "optionText": "Configure RDS for MySQL to scale horizontally by adding additional nodes to offload write requests."
            },
            {
                "optionId": "C",
                "optionText": "Enable the Multi-AZ feature for the RDS instance."
            },
            {
                "optionId": "D",
                "optionText": "Modify the RDS MySQL instance so it is a larger instance type."
            }
        ]
    },
    {
        "questionId": 749,
        "questionText": "A SysOps Administrator is using AWS KMS with AWS-generated key material to encrypt an Amazon EBS volume in a company’s AWS environment. The Administrator wants to rotate the KMS keys using automatic key rotation, and needs to ensure that the EBS volume encrypted with the current key remains readable. What should be done to accomplish this?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Back up the current KMS key and enable automatic key rotation."
            },
            {
                "optionId": "B",
                "optionText": "Create a new key in AWS KMS and assign the key to Amazon EBS."
            },
            {
                "optionId": "C",
                "optionText": "Enable automatic key rotation of the EBS volume key in AWS KMS."
            },
            {
                "optionId": "D",
                "optionText": "Upload new key material to the EBS volume key in AWS KMS to enable automatic key rotation for the volume."
            }
        ]
    },
    {
        "questionId": 750,
        "questionText": "A SysOps Administrator deployed an AWS Elastic Beanstalk worker node environment that reads messages from an auto-generated Amazon Simple Queue Service (Amazon SQS) queue and deletes them from the queue after processing. Amazon EC2 Auto Scaling scales in and scales out the number of worker nodes based on CPU utilization. After some time, the Administrator notices that the number of messages in the SQS queue are increasing significantly. Which action will remediate this issue?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Change the scaling policy to scale based upon the number of messages in the queue."
            },
            {
                "optionId": "B",
                "optionText": "Decouple the queue from the Elastic Beanstalk worker node and create it as a separate resource. "
            },
            {
                "optionId": "C",
                "optionText": "Increase the number of messages in the queue."
            },
            {
                "optionId": "D",
                "optionText": "Increase the retention period of the queue."
            }
        ]
    },
    {
        "questionId": 751,
        "questionText": "A Security team is concerned about the potential of intellectual property leaking to the internet. A SysOps Administrator is tasked with identifying controls to address the potential problem. The servers in question reside in a VPC and cannot be allowed to send traffic to the internet. How can these requirements be met?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Edit the route for the subnet with the following entry: Destination 0.0.0.0/0 target: igw-xxxxxxxx"
            },
            {
                "optionId": "B",
                "optionText": "Ensure that the servers do not have Elastic IP addresses."
            },
            {
                "optionId": "C",
                "optionText": "Enable Enhanced Networking on the instances to control traffic flows."
            },
            {
                "optionId": "D",
                "optionText": "Put the servers in a private subnet."
            }
        ]
    },
    {
        "questionId": 752,
        "questionText": "A company is setting up a VPC peering connection between its VPC and a customer’s VPC. The company VPC is an IPv4 CIDR block of 172.16.0.0/16, and the customer’s is an IPv4 CIDR block of 10.0.0.0/16. The SysOps Administrator wants to be able to ping the customer’s database private IP address from one of the company’s Amazon EC2 instances. What action should be taken to meet the requirements?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Ensure that both accounts are linked and are part of consolidated billing to create a file sharing network, and then enable VPC peering."
            },
            {
                "optionId": "B",
                "optionText": "Ensure that both VPC owners manually add a route to the VPC route tables that points to the IP address range of the other VPC."
            },
            {
                "optionId": "C",
                "optionText": "Instruct the customer to set up a VPC with the same IPv4 CIDR block as that of the source VPC: 172.16.0.0/16."
            },
            {
                "optionId": "D",
                "optionText": "Instruct the customer to create a virtual private gateway to link the two VPCs."
            }
        ]
    },
    {
        "questionId": 753,
        "questionText": "A company is concerned about its ability to recover from a disaster because all of its Amazon EC2 instances are located in a single Amazon VPC in us-east-1. A second Amazon VPC has been configured in eu-west-1 to act as a backup VPC in case of an outage. Data will be replicated from the primary region to the secondary region. The Information Security team’s compliance requirements specify that all data must be encrypted and must not traverse the public internet. How should the SysOps Administrator connect the two VPCs while meeting the compliance requirements?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Configure EC2 instances to act as VPN appliances, then configure route tables."
            },
            {
                "optionId": "B",
                "optionText": "Configure inter-region VPC peering between the two VPCs, then configure route tables."
            },
            {
                "optionId": "C",
                "optionText": "Configure NAT gateways in both VPCs, then configure route tables."
            },
            {
                "optionId": "D",
                "optionText": "Configure an internet gateway in each VPC, and use these as the targets for the VPC route tables."
            }
        ]
    },
    {
        "questionId": 754,
        "questionText": "Two companies will be working on several development projects together. Each company has an AWS account with a single VPC in us-east-1. Two companies would like to access one another’s development servers. The IPv4 CIDR blocks in the two VPCs does not overlap. What can the SysOps Administrators for each company do to set up network routing?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Each Administrator should create a custom routing table that points to the other company’s internet gateway public IP address. "
            },
            {
                "optionId": "B",
                "optionText": "Both Administrators should set up a NAT gateway in a public subnet in their respective VPCs. Then. using the public IP address from the NAT gateway, the Administrators should enable routing between the two VPCs."
            },
            {
                "optionId": "C",
                "optionText": "Both Administrators should install a 1 Gbps AWS Direct Connect circuit in their respective environments. Then, using the AWS Management Console, the Administrators should create an AWS Direct Connect routing requests to enable connectivity."
            },
            {
                "optionId": "D",
                "optionText": "One Administrator should create a VPC peering request and send it to the other Administrator’s account. Once the other Administrator accepts the request, update the routing tables to enable traffic."
            }
        ]
    }
];
const answers =
    [
        {
            "questionId": 590,
            "questionAnswer": "D",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/RunLambdaSchedule.html"
        },
        {
            "questionId": 591,
            "questionAnswer": "C",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config-rules.html"
        },
        {
            "questionId": 592,
            "questionAnswer": "C",
            "questionAnswerExplanation": "https://aws.amazon.com/blogs/database/implementing-a-disaster-recovery-strategy-with-amazon-rds/"
        },
        {
            "questionId": 593,
            "questionAnswer": "D",
            "questionAnswerExplanation": "VPC default limit is 5. While using the same Cloud Formation base Template to create VPC, it could have breached the limit."
        },
        {
            "questionId": 594,
            "questionAnswer": "C",
            "questionAnswerExplanation": "I think the answer should be C. Since Aurora is AWS managed, the execution of all maintenance related tasks is owned by AWS."
        },
        {
            "questionId": 595,
            "questionAnswer": "B",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Troubleshooting.html#CHAP_Troubleshooting.MySQL.ReplicaLag"
        },
        {
            "questionId": 596,
            "questionAnswer": "C",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html"
        },
        {
            "questionId": 597,
            "questionAnswer": "D",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharingamis-explicit.html"
        },
        {
            "questionId": 598,
            "questionAnswer": "A",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html"
        },
        {
            "questionId": 599,
            "questionAnswer": "B",
            "questionAnswerExplanation": "(Reactive governance is used to identify improper tags, programmatically using tools such as the Resource Groups Tagging API, AWS Config Rules, and custom scripts, or manually using Tag Editor and detailed billing reports. Proactive governance leverages tools such as AWS CloudFormation, AWS Service Catalog, or IAM resource-level permissions to ensure standardized tags are consistently applied at resource creation. For example, you can use the AWS CloudFormation Resource Tags property to apply tags to certain resource types. In AWS Service Catalog, you can add portfolio and product tags that are combined and applied to a provisioned product automatically when it is launched.)"
        },
        {
            "questionId": 600,
            "questionAnswer": "C",
            "questionAnswerExplanation": "AWS WAF protects web applications from attacks by filtering traffic based on rules that you create. For example, you can filter web requests based on IP addresses, HTTP headers, HTTP body, or URI strings, which allows you to block common attack patterns, such as SQL injection or cross-site scripting."
        },
        {
            "questionId": 601,
            "questionAnswer": "D",
            "questionAnswerExplanation": "Yes.Even though D is correct, in Real time, if you use sticky session along with ELB then, Load will go to particular instance only if the request repeatedly comes from same instance and will impact the load spread."
        },
        {
            "questionId": 602,
            "questionAnswer": "D",
            "questionAnswerExplanation": "Require users to use temporary credentials from the get-session token command to sign API calls.IAM users can request temporary security credentials for their own use by calling the AWS STS GetSessionToken API. The default expiration for these temporary credentials is 12 hours; the minimum is 15 minutes, and the maximum is 36 hours.You can also use temporary credentials with Multi-Factor Authentication (MFA)-Protected API Access."
        },
        {
            "questionId": 603,
            "questionAnswer": "C",
            "questionAnswerExplanation": "EFS makes more sensehttps://dzone.com/articles/confused-by-aws-storage-options-s3-ebs-amp-efs-explainedYou can mount EFS onto several EC2 instances at the same time"
        },
        {
            "questionId": 604,
            "questionAnswer": "D",
            "questionAnswerExplanation": "IPV4 --> NATIPV6--> Egress-Onlyhttps://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html#egress-only-internet-gateway-working-with"
        },
        {
            "questionId": 605,
            "questionAnswer": "C",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html"
        },
        {
            "questionId": 606,
            "questionAnswer": "CE",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html https://aws.amazon.com/blogs/security/how-to-prevent-uploads-of-unencrypted-objects-to-amazon-s3/"
        },
        {
            "questionId": 607,
            "questionAnswer": "C",
            "questionAnswerExplanation": "Initially I thought A. But A is suited to do health check of entire AWS Regions & Services. While the Service Health Dashboard displays the general status of AWS services, Personal Health Dashboard gives you a personalized view into the performance and availability of the AWS services underlying your AWS resources"
        },
        {
            "questionId": 608,
            "questionAnswer": "A",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/http-503-service-unavailable.html"
        },
        {
            "questionId": 609,
            "questionAnswer": "A",
            "questionAnswerExplanation": "Ref: https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html"
        },
        {
            "questionId": 610,
            "questionAnswer": "B",
            "questionAnswerExplanation": "READ REBOOT"
        },
        {
            "questionId": 611,
            "questionAnswer": "C",
            "questionAnswerExplanation": "CLOUDFRONT PROVIDES S3 CONTENT TO EDGE LOCATIONS"
        },
        {
            "questionId": 612,
            "questionAnswer": "B",
            "questionAnswerExplanation": "see https://aws.amazon.com/directconnect/faqs/Through Direct Connect, customer traffic will remain in Amazon's backbone network after it enters it. Therefore, prefixes of CloudFront locations that are not on the Amazon backbone network will not be advertised through Direct Connect. You can also find more details about IP prefixes advertised on <b> AWS Direct Connect public virtual interfaces here </b>. You can also refer to this link to know more about Direct Connect routing policy."
        },
        {
            "questionId": 613,
            "questionAnswer": "B",
            "questionAnswerExplanation": "https://aws.amazon.com/blogs/mt/monitoring-service-limits-with-trusted-advisor-and-amazon-cloudwatch/"
        },
        {
            "questionId": 614,
            "questionAnswer": "A",
            "questionAnswerExplanation": "(Scaling Based on Amazon SQS:What happens if your upload levels change? If your uploads increase and decrease on a predictable schedule, you can specify the time and date to perform scaling activities. For more information, see Scheduled Scaling for Amazon EC2 Auto Scaling. A more dynamic way to scale your Auto Scaling group, scaling by policy, lets you define parameters that control the scaling process. For example, you can create a policy that calls for enlarging your fleet of EC2 instances whenever the average number of uploads reaches a certain level.)"
        },
        {
            "questionId": 615,
            "questionAnswer": "B",
            "questionAnswerExplanation": " https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-creationpolicy.htmlUse the CreationPolicy attribute when you want to wait on resource configuration actions before stack creation proceeds. For example, if you install and configure software applications on an EC2 instance, you might want those applications to be running before proceeding. In such cases, you can add a CreationPolicy attribute to the instance, and then send a success signal to the instance after the applications are installed and configured."
        },
        {
            "questionId": 616,
            "questionAnswer": "C",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-ug.pdf#best-practices"
        },
        {
            "questionId": 617,
            "questionAnswer": "BE",
            "questionAnswerExplanation": "https://aws.amazon.com/premiumsupport/knowledge-center/push-log-data-cloudwatch-awslogs/ResolutionBefore you begin, confirm that the awslogs agent is able to connect to the CloudWatch Logs API endpoint.Be sure that your configuration has:Internet connectivityValid security group configurationsValid network access control lists (network ACLs)"
        },
        {
            "questionId": 618,
            "questionAnswer": "BD",
            "questionAnswerExplanation": "After you've created a flow log, it can take several minutes to begin collecting and publishing data to the chosen destinations. Flow logs do not capture real-time log streams for your network interfaces. Ref: https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-logs-basics"
        },
        {
            "questionId": 619,
            "questionAnswer": "D",
            "questionAnswerExplanation": "if you want to allow your EC2 instance to serve HTTP traffic, you will need to allow port 80 inbound and ports 1024 – 65535 in NACL.ephemeral ports ports are randomly selected to allow return traffic for a request. So, if a request comes to the server on port 80, the request also specifies a random port between 1024 – 65535 for the return traffic. The stateful nature of the security group handles the ephemeral port requirement automatically. When the request comes in, it accesses the server on port 80, but also specifies a port for the return traffic. This port is one of the ports in the ephemeral range. The stateful Security Group automatically allows the return traffic on this port."
        },
        {
            "questionId": 620,
            "questionAnswer": "B",
            "questionAnswerExplanation": "will assure availability of at least ONE node in case of a second node fail."
        },
        {
            "questionId": 621,
            "questionAnswer": "B",
            "questionAnswerExplanation": "D is wrong because 10 instances were already launched.. that mean AMI is available.B should be correct"
        },
        {
            "questionId": 622,
            "questionAnswer": "B",
            "questionAnswerExplanation": "B is correct C has some sense but S3-IA won't delete without added a delete policy"
        },
        {
            "questionId": 623,
            "questionAnswer": "B",
            "questionAnswerExplanation": "since AWS delivers the AWS Cost & Usage Report (in CSV format) to whichever Amazon Simple Storage Service (S3) bucket you specify, and updates the reports at least once per day.https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/"
        },
        {
            "questionId": 624,
            "questionAnswer": "D",
            "questionAnswerExplanation": "You will still have to copy the AMI from us-east-1 to us-west-2 region, and then use the appropriate image ID in the mappings section of CloudFormation. That way you don't have to hardcode the AMI ID in your CFT, and use the same template in any region as long as the mapping section covers that region and the corresponding AMI ID."
        },
        {
            "questionId": 625,
            "questionAnswer": "C",
            "questionAnswerExplanation": "After long research, I also vote for ans C. MFA is also Part of root user security and AWS always enforces. So Trusted advisor will check whether the root account is enabled for MFA or not"
        },
        {
            "questionId": 626,
            "questionAnswer": "C",
            "questionAnswerExplanation": "VPC Peering needs route table update, C is correct"
        },
        {
            "questionId": 627,
            "questionAnswer": "B",
            "questionAnswerExplanation": "M5 is based on new nitro hypervisor and is cheaper than previous generations. https://aws.amazon.com/about-aws/whats-new/2018/07/amazon-ec2-nitro-system-based-instances-now-support-faster-ebs-optimized-performance/"
        },
        {
            "questionId": 628,
            "questionAnswer": "C",
            "questionAnswerExplanation": "It should be C, (VPC endpoint)Customer is trying to store date from client VPC to S3, so VPC endpoint.Direct connect is required when you want on-premise data to be kept in S3 privately.Ref: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html"
        },
        {
            "questionId": 629,
            "questionAnswer": "AD",
            "questionAnswerExplanation": "B.ASG Not required.C.New Subnet Not required in this case.E. No Point of security."
        },
        {
            "questionId": 630,
            "questionAnswer": "B",
            "questionAnswerExplanation": "When configuring the security setting in the ALB, there is an option to request Certificates from ACM. The domain name that needs to be used when requesting the certificate, we need to provide the FQDN of the site.. if we use the FQDN of the ALB in the request im not sure if it will work.. hence my answer would be B."
        },
        {
            "questionId": 631,
            "questionAnswer": "C",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/tutorial-load-balancer-routing.html If you are running microservices, you can route traffic to multiple back-end services using path-based routing. For example, you can route general requests to one target group and requests to render images to another target group."
        },
        {
            "questionId": 632,
            "questionAnswer": "B",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/redis-cluster-resharding-online.html"
        },
        {
            "questionId": 633,
            "questionAnswer": "D",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html"
        },
        {
            "questionId": 634,
            "questionAnswer": "B",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/efs/latest/ug/efs-enforce-encryption.html"
        },
        {
            "questionId": 635,
            "questionAnswer": "D",
            "questionAnswerExplanation": "DB Snapshots are user-initiated and enable you to back up your DB instance in a known state as frequently as you wish, and then restore to that specific state at any time"
        },
        {
            "questionId": 636,
            "questionAnswer": "C",
            "questionAnswerExplanation": "Answer is C, A is not correct, because you don't need alarming for scheduled scaling"
        },
        {
            "questionId": 637,
            "questionAnswer": "C",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.htmlAlthough a role is usually assigned to an EC2 instance when you launch it, a role can also be attached to an EC2 instance that is already running."
        },
        {
            "questionId": 638,
            "questionAnswer": "D",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.htmlHTTP_STR_MATCH: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an HTTP request and searches the first 5,120 bytes of the response body for the string that you specify in SearchString.HTTPS_STR_MATCH: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an HTTPS request and searches the first 5,120 bytes of the response body for the string that you specify in SearchString."
        },
        {
            "questionId": 639,
            "questionAnswer": "A",
            "questionAnswerExplanation": "it is a tricky question, in the scenario the question said that the developers have permissions to manipulate with IAM (therefore, answer B cant be correct, as they can edit the permissions and add what they want, with no restrictions).However, answer A, using SCP, will BLOCK them from accessing certain services, but it will not grant them actions.I would go with A, because even they are limited from accessing certain services through SCP, they can GRANT THEMSELVES the required actions using IAM policies.So this will resolve the What is the best way to grant the developer.....blah blah."
        },
        {
            "questionId": 640,
            "questionAnswer": "B",
            "questionAnswerExplanation": "Configure AWS Organizations Consolidated Billing and provide the finance team with IAM access to the billing console."
        },
        {
            "questionId": 641,
            "questionAnswer": "B",
            "questionAnswerExplanation": "Cloudfront is more appropriate for Dynamic Websitehttps://acloud.guru/forums/aws-certified-solutions-architect-associate/discussion/-KbKW7V5i1NIZ6n9S_TK/what_is_the_difference_between"
        },
        {
            "questionId": 642,
            "questionAnswer": "D",
            "questionAnswerExplanation": "You must provide the Internet-routable IP address of the customer gateway's external interface. The IP address must be static and can be behind a device performing network address translation (NAT). D."
        },
        {
            "questionId": 643,
            "questionAnswer": "B",
            "questionAnswerExplanation": "B should be correct.https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-or-empty-bucket.htmlYou can delete a bucket that contains objects using the AWS CLI only if the bucket does not have versioning enabled. If your bucket does not have versioning enabled, you can use the rb (remove bucket) AWS CLI command with --force parameter to remove a non-empty bucket."
        },
        {
            "questionId": 644,
            "questionAnswer": "B",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/usage-reports.html"
        },
        {
            "questionId": 645,
            "questionAnswer": "B",
            "questionAnswerExplanation": "http://jayendrapatil.com/aws-vpc-nat/"
        },
        {
            "questionId": 646,
            "questionAnswer": "D",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html"
        },
        {
            "questionId": 647,
            "questionAnswer": "A",
            "questionAnswerExplanation": "the change is in the network, so it is obvious that what need to be checked is Flow Log."
        },
        {
            "questionId": 648,
            "questionAnswer": "C",
            "questionAnswerExplanation": "AWS Service Catalog provides a single location where organizations can centrally manage catalogs of IT services. With AWS Service Catalog you can control which IT services and versions are available, the configuration of the available services, and permission access by individual, group, department, or cost center."
        },
        {
            "questionId": 649,
            "questionAnswer": "A",
            "questionAnswerExplanation": "TotalErrorRate: The percentage of all requests for which the HTTP status code is 4xx or 5xx.The below are not available in CF:RejectedConnectionCountNetworkTransmitThroughputHealthyHostCount"
        },
        {
            "questionId": 650,
            "questionAnswer": "B",
            "questionAnswerExplanation": "Apply service control policies to the AWS Organizational Unit (OU) containing the production accounts to whitelist certified services. Apply a less restrictive policy to the OUs containing the development accounts."
        },
        {
            "questionId": 651,
            "questionAnswer": "AD",
            "questionAnswerExplanation": "Not to be confused with Autoscale, This question is on load balancer"
        },
        {
            "questionId": 652,
            "questionAnswer": "D",
            "questionAnswerExplanation": "From my understanding insertLatency generates high CPU Usage, AuroraReplicaLag is the effect of the high CPU usage, not the cause. I would choose D"
        },
        {
            "questionId": 653,
            "questionAnswer": "D",
            "questionAnswerExplanation": "D is the MOST secure way of providing access. Providing the SSH key that was used while launching the instance, means providing root access. Its definitely not advisable to share the original keypair, and you also wouldn't be sure if the SysOps Admin would keep it safe. By creating an Administrative account, you can still restrict the access that is required by the admin (ALMOST full access but not root access), and storing the credentials in AWS Secrets Manger would ensure that they are safe and secure."
        },
        {
            "questionId": 654,
            "questionAnswer": "D",
            "questionAnswerExplanation": "You can only enable encryption for an Amazon RDS DB instance when you create it, not after the DB instance is created.However, because you can encrypt a copy of an unencrypted DB snapshot, you can effectively add encryption to an unencrypted DB instance. That is, you can create a snapshot of your DB instance, and then create an encrypted copy of that snapshot. You can then restore a DB instance from the encrypted snapshot, and thus you have an encrypted copy of your original DB instance."
        },
        {
            "questionId": 655,
            "questionAnswer": "A",
            "questionAnswerExplanation": "As said, the flow log is enabled on SMTP interface, and the flow log information is showing destination port (25), with rejected message. That means, the packet is generated by the EC2, and captured by the security group and rejected, because it is not added to the allowed list of the SMTP security Group.Solution is to add the EC2 IP to the security group of the SMTP server."
        },
        {
            "questionId": 656,
            "questionAnswer": "C",
            "questionAnswerExplanation": "Set up daily Cost and Usage Report and download the output from Amazon S3."
        },
        {
            "questionId": 657,
            "questionAnswer": "C",
            "questionAnswerExplanation": " Because it needs to be shared with the security teams ACCOUNT. Which can be done via a bucket acl https://docs.aws.amazon.com/kms/latest/developerguide/logging-using-cloudtrail.html"
        },
        {
            "questionId": 658,
            "questionAnswer": "A",
            "questionAnswerExplanation": "https://aws.amazon.com/security/penetration-testing/Effective immediately, AWS customers are welcome to carry out security assessments or penetration tests against their AWS infrastructure without prior approval for 8 services."
        },
        {
            "questionId": 659,
            "questionAnswer": "D",
            "questionAnswerExplanation": "as the object is placed by account A - Lambda into Account B then the bucket B do not have enough permission to delete objects for A.Therefore, it is required to allow the BUCKET OWNER B to be able to delete his / her own bucket 's object! so, account A, should provide this permission by the said command (S3:PutObjectAcl)"
        },
        {
            "questionId": 660,
            "questionAnswer": "B",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingAlarmActions.html"
        },
        {
            "questionId": 661,
            "questionAnswer": "BC",
            "questionAnswerExplanation": "In IAM, you create one or more IAM roles. In the role's trust policy, you set the SAML provider as the principal, which establishes a trust relationship between your organization and AWS."
        },
        {
            "questionId": 662,
            "questionAnswer": "B",
            "questionAnswerExplanation": "0.0.0.0/0"
        },
        {
            "questionId": 663,
            "questionAnswer": "B",
            "questionAnswerExplanation": "https://aws.amazon.com/premiumsupport/technology/personal-health-dashboard/ PHD provides proactive notification to help you plan for scheduled activities"
        },
        {
            "questionId": 664,
            "questionAnswer": "D",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/efs/latest/ug/efs-enforce-encryption.html"
        },
        {
            "questionId": 665,
            "questionAnswer": "C",
            "questionAnswerExplanation": "https://aws.amazon.com/ebs/features/"
        },
        {
            "questionId": 666,
            "questionAnswer": "B",
            "questionAnswerExplanation": "Spot blocks allow you to request Amazon EC2 Spot instances for 1 to 6 hours at a time to avoid being interrupted while your job completes"
        },
        {
            "questionId": 667,
            "questionAnswer": "C",
            "questionAnswerExplanation": "AMIs are a regional resource. Therefore, sharing an AMI makes it available in that region. To make an AMI available in a different region, copy the AMI to the region and then share it. For more information, see Copying an AMI."
        },
        {
            "questionId": 668,
            "questionAnswer": "B",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html Amazon S3 default encryption provides a way to set the default encryption behavior for an S3 bucket. You can set default encryption on a bucket so that all new objects are encrypted when they are stored in the bucket. The objects are encrypted using server-side encryption with either Amazon S3-managed keys (SSE-S3) or customer master keys (CMKs) stored in AWS Key Management Service (AWS KMS).C630"
        },
        {
            "questionId": 669,
            "questionAnswer": "B",
            "questionAnswerExplanation": "When you import key material into a CMK, the CMK is permanently associated with that key material. You can reimport the same key material, but you cannot import different key material into that CMK. Also, you cannot enable automatic key rotation for a CMK with imported key material. However, you can manually rotate a CMK with imported key material.https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html"
        },
        {
            "questionId": 670,
            "questionAnswer": "D",
            "questionAnswerExplanation": "https://aws.amazon.com/blogs/security/amazon-inspector-assess-network-exposure-ec2-instances-aws-network-reachability-assessments/c check only SSH"
        },
        {
            "questionId": 671,
            "questionAnswer": "C",
            "questionAnswerExplanation": "Text Widget' is of type 'text' and not 'metric'. It is sort of creating a text/label/description for your dashboard. You cannot select any metric in a text widget, so the second part (select the appropriate metric from the custom namespace) in option B makes it a wrong statement.In option C they are asking you to select the appropriate widget, which basically assumes that you wont select a Text widget.https: //docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html#CloudWatch-Dashboard-Properties-Text-Widget-Object"
        },
        {
            "questionId": 672,
            "questionAnswer": "AD",
            "questionAnswerExplanation": "NAT Gateway itself is present inside Public subnet, and all traffic coming from Private subnet is routed to NAT (which is in the Public subnet) for secure outbound internet traffic; answer is A and D."
        },
        {
            "questionId": 673,
            "questionAnswer": "B",
            "questionAnswerExplanation": "For A: If you want to use same teplate with multiple envt with Little changes especially Input or map or condition related then, A is good For B : If you dont want to change anything in your template and if requires simply to run any envt without changes then, B is the right one."
        },
        {
            "questionId": 674,
            "questionAnswer": "B",
            "questionAnswerExplanation": "If there are multiple subnets in an Availability Zone in your VPC, you create a mount target in one of the subnets.Then all EC2 instances in that Availability Zone share that mount target. and B says Create mount targets in multiple subnets "
        },
        {
            "questionId": 675,
            "questionAnswer": "CE",
            "questionAnswerExplanation": "C - Only this option addresses tagging of 'existing' resources. Existing resources will also contribute to the future costs, so tagging them appropriately is very important. However, I don't understand why it is required to run this week, unless it is also going to automatically tag new resources.E - Absolutely required to create budget alarms and send notifications. It also has a dependency on tagging new and existing resources (option C), in order to send the notifications at the right time."
        },
        {
            "questionId": 676,
            "questionAnswer": "D",
            "questionAnswerExplanation": "Imagine if you have 1000 developers ? Am I going to create 1000 users ??? Letter D is the correct option"
        },
        {
            "questionId": 677,
            "questionAnswer": "D",
            "questionAnswerExplanation": "When using VPC with S3, use VPC S3 endpoints as✑ are horizontally scaled, redundant, and highly available VPC components✑ help establish a private connection between VPC and S3 and the traffic never leaves the Amazon network"
        },
        {
            "questionId": 678,
            "questionAnswer": "A",
            "questionAnswerExplanation": " Suspend the scaling process before troubleshooting."
        },
        {
            "questionId": 679,
            "questionAnswer": "A",
            "questionAnswerExplanation": "You might need to shutdown or reboot your VM for maintenance, such as when applying a patch to your hypervisor. Before you shutdown the VM, you must first stop the gateway. For file gateway, you just shutdown your VM. Although this section focuses on starting and stopping your gateway using the AWS Storage Gateway Management Console, you can also and stop your gateway by using your VM local console or AWS Storage Gateway API. When you power on your VM, remember to restart your gateway."
        },
        {
            "questionId": 680,
            "questionAnswer": "A",
            "questionAnswerExplanation": "if the data transfer would take more than a week then it is more efficient to use Snowball (for 70TB). The 150MB, with full speed (using the maximum Acceleration on the world) requires around ~43 days 5 hours 2 minutes to transfer the 70TB to AWS. Then this is a waste of time, resources, and could be more expensive than snowball (taking into consideration that the 10 people can not use the 150MB as it is busy uploading). Storage gateway, is not meant for such a single time archiving.direct connect, is too expensive for such one time job. So, definitely the answer is A."
        },
        {
            "questionId": 681,
            "questionAnswer": "C",
            "questionAnswerExplanation": "You cannot attach a WAF web ACL directly to a Classic Load Balancer as this is not supported. I would recommend migrating to the Application Load Balancer and attaching WAF to the Application Load Balancer. Alternatively you could create a CloudFront distribution that uses the Classic Load Balancer as the origin and then attach WAF to CloudFront https://forums.aws.amazon.com/thread.jspa?messageID=900985"
        },
        {
            "questionId": 682,
            "questionAnswer": "C",
            "questionAnswerExplanation": "C. Install and configure the unified CloudWatch agent."
        },
        {
            "questionId": 683,
            "questionAnswer": "DE",
            "questionAnswerExplanation": "https://aws.amazon.com/compliance/shared-responsibility-model/"
        },
        {
            "questionId": 684,
            "questionAnswer": "B",
            "questionAnswerExplanation": "When you enable log file integrity validation, CloudTrail creates a hash for every log file that it delivers. Every hour, CloudTrail also creates and delivers a file that references the log files for the last hour and contains a hash of each. This file is called a digest file. CloudTrail signs each digest file using the private key of a public and private key pair. After delivery, you can use the public key to validate the digest file. CloudTrail uses different key pairs for each AWS region"
        },
        {
            "questionId": 685,
            "questionAnswer": "C",
            "questionAnswerExplanation": "https://aws.amazon.com/premiumsupport/knowledge-center/ec2rescue-windows-troubleshoot/"
        },
        {
            "questionId": 686,
            "questionAnswer": "A",
            "questionAnswerExplanation": "Good point. I was almost tempted to say that D was the right answer. CodePipeline can be triggered if there are updates to the application code, but not when new EC2 instances are launched.The only way to deploy the application on new instances is through User Data.I agree A is the most appropriate answer in this case."
        },
        {
            "questionId": 687,
            "questionAnswer": "AE",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cache-hit-ratio.html#cache-hit-ratio-http-streaming"
        },
        {
            "questionId": 688,
            "questionAnswer": "B",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html Vault lock will ensure that the data is never changed - Write once read many."
        },
        {
            "questionId": 689,
            "questionAnswer": "B",
            "questionAnswerExplanation": "https://forums.aws.amazon.com/thread.jspa?threadID=194986 If you are using memcached engine, you can add additional nodes to your cluster to increase the total cache size. If you want to use bigger instance type, you will have to launch a new cache cluster and make your application to start using it."
        },
        {
            "questionId": 690,
            "questionAnswer": "A",
            "questionAnswerExplanation": "Stackset is a container for AWS cloudformation stacks that lets you provision stacks across AWS accounts and regions by using a single AWS cloudformation template."
        },
        {
            "questionId": 691,
            "questionAnswer": "B",
            "questionAnswerExplanation": "The PCI DSS Attestation of Compliance (AOC) and Responsibility Summary is available to customers by using AWS Artifact, a self-service portal for on-demand access to AWS compliance reports."
        },
        {
            "questionId": 692,
            "questionAnswer": "D",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/US_AlarmAtThresholdEC2.html"
        },
        {
            "questionId": 693,
            "questionAnswer": "A",
            "questionAnswerExplanation": "A is the right answer, since AMI IDs are unique across regions."
        },
        {
            "questionId": 694,
            "questionAnswer": "C",
            "questionAnswerExplanation": " should be correct as free disk space is not a built-in matrix for cloudwatch C: https://blog.justinworrell.com/2017/09/30/monitoring-free-disk-space-on-a-windows-ec2-instance-with-cloudwatch/"
        },
        {
            "questionId": 695,
            "questionAnswer": "D",
            "questionAnswerExplanation": "https://aws.amazon.com/premiumsupport/knowledge-center/accidental-termination/"
        },
        {
            "questionId": 696,
            "questionAnswer": "C",
            "questionAnswerExplanation": "Amazon EC2 DescribeInstances action in the us-east-1 Region"
        },
        {
            "questionId": 697,
            "questionAnswer": "D",
            "questionAnswerExplanation": "D is correct: Requesting a Limit Increase"
        },
        {
            "questionId": 698,
            "questionAnswer": "D",
            "questionAnswerExplanation": "https://aws.amazon.com/premiumsupport/knowledge-center/auto-scaling-terminate-instance/If an instance's status is OutofService on the ELB console, but the instance's status is Healthy on the Amazon EC2 Auto Scaling console, confirm that the health check type is set to ELB:"
        },
        {
            "questionId": 699,
            "questionAnswer": "D",
            "questionAnswerExplanation": "True. Through cloudwatch, Ec2 can be restarted, stopped , started."
        },
        {
            "questionId": 700,
            "questionAnswer": "C",
            "questionAnswerExplanation": "https://awsinsider.net/articles/2017/06/12/ec2-placement-groups.aspx"
        },
        {
            "questionId": 701,
            "questionAnswer": "B",
            "questionAnswerExplanation": "ELB can be configured to use sticky session feature (also called session affinity) which enables it to bind a user's session to an instance and ensures all requests are sent to the same instance.Stickiness remains for a period of time which can be controlled by the application's session cookie, if one exists, or through cookie, named AWSELB, created through Elastic Load balancer.Sticky sessions for ELB are disabled, by default."
        },
        {
            "questionId": 702,
            "questionAnswer": "D",
            "questionAnswerExplanation": "Only Amazon can alias their AMIhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharing-amis.html"
        },
        {
            "questionId": 703,
            "questionAnswer": "",
            "questionAnswerExplanation": ""
        },
        {
            "questionId": 704,
            "questionAnswer": "",
            "questionAnswerExplanation": ""
        },
        {
            "questionId": 705,
            "questionAnswer": "",
            "questionAnswerExplanation": ""
        },
        {
            "questionId": 706,
            "questionAnswer": "AE",
            "questionAnswerExplanation": "A & E : good answers!! - AWS Trusted Advisor for limits instances - CloudTrail for logs in API CALLS"
        },
        {
            "questionId": 707,
            "questionAnswer": "D",
            "questionAnswerExplanation": "Access the CloudTrail logs stored in the Amazon S3 bucket tied to Cloud Trail. Use Amazon Athena to extract the information needed to generate the report.You can only search the past 90 days via the console. The question touched on being able to report for 1 year. https://docs.amazonaws.cn/en_us/awscloudtrail/latest/userguide/view-cloudtrail-events.html"
        },
        {
            "questionId": 708,
            "questionAnswer": "A",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/ja_jp/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-logging-using-cloudtrail.html"
        },
        {
            "questionId": 709,
            "questionAnswer": "B",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-bucket-permissions.html"
        },
        {
            "questionId": 710,
            "questionAnswer": "D",
            "questionAnswerExplanation": "can I point my zone apex (example.com versus www.example.com) at my Elastic Load Balancer?Yes. Amazon Route 53 offers a special type of record called an 'Alias' record that lets you map your zone apex (example.com) DNS name to the DNS name for your ELB load balancer (such as my-loadbalancer-1234567890.us-west-2.elb.amazonaws.com)"
        },
        {
            "questionId": 711,
            "questionAnswer": "B",
            "questionAnswerExplanation": "Set up different metric filters for each team based on patterns and alerts. Each alarm will notify theappropriate notification list."
        },
        {
            "questionId": 712,
            "questionAnswer": "B",
            "questionAnswerExplanation": "B seems to be the MOST efficient solution. I have used this feature, to capture all the CloudTrail events and filter out only relevant ones to trigger a lambda function for further processing."
        },
        {
            "questionId": 713,
            "questionAnswer": "A",
            "questionAnswerExplanation": "it says ALB health check failed, not the EC2. also mentions EC2 instances out of service not one, so even if this is true, it will take both instances not one."
        },
        {
            "questionId": 714,
            "questionAnswer": "B",
            "questionAnswerExplanation": "I'm going with B. I had initially thought D. However a custom metric will need to be written if you go with D"
        },
        {
            "questionId": 715,
            "questionAnswer": "B",
            "questionAnswerExplanation": "B. The S3 bucket is not in the appropriate region.Pipeline Error: A pipeline created in one AWS region using a bucket created in another AWS region returns an InternalError with the code JobFailed Problem: The download of an artifact stored in an Amazon S3 bucket will fail if the pipeline and bucket are created in different AWS regions.Possible fixes: Make sure the Amazon S3 bucket where your artifact is stored is in the same AWS region as the pipeline you have created."
        },
        {
            "questionId": 716,
            "questionAnswer": "D",
            "questionAnswerExplanation": "D : ScalingUpdatePolicy -> The standard procedure is set to max as 1 and Update the AMI in Launch Configuration . Here the question mentioned to maintain minimum instance. Also when you set max ex : 10 then, new Instance will use the Updated AMI."
        },
        {
            "questionId": 717,
            "questionAnswer": "B",
            "questionAnswerExplanation": "B is the only suitable answer. It can only be scaled VERTICALLY"
        },
        {
            "questionId": 718,
            "questionAnswer": "AC",
            "questionAnswerExplanation": "AC should be correct tried to recover via cli and i was able tohttps://aws.amazon.com/premiumsupport/knowledge-center/s3-undelete-configuration/"
        },
        {
            "questionId": 719,
            "questionAnswer": "C",
            "questionAnswerExplanation": "The question specifically calls out the DevOps Team and the CF Security BP calls out you can securely control access to AWS services and resources by using policies and users or roles. In addition, it calls out As a best practice, we recommend that you limit service and resource access through IAM policies by applying the principle of least privilege. https://aws.amazon.com/blogs/devops/aws-cloudformation-security-best-practices/"
        },
        {
            "questionId": 720,
            "questionAnswer": "B",
            "questionAnswerExplanation": "AWS Cost and Usage report https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/con-bill-blended-rates.html"
        },
        {
            "questionId": 721,
            "questionAnswer": "B",
            "questionAnswerExplanation": "B. The AWS Health API shows scheduled maintenance. The AWS Service Health Dashboard only shows service interruptions. Phd = HEALTH api"
        },
        {
            "questionId": 722,
            "questionAnswer": "C",
            "questionAnswerExplanation": "If there are no healthy instances but the EC2 are working fine, review that the healthcheck endpoint works properly and see if it is correctly configured on the ELB"
        },
        {
            "questionId": 723,
            "questionAnswer": "C",
            "questionAnswerExplanation": "Verify if you've configured reserved concurrency on your Lambda function. Check the setting using the Lambda console, or by calling the GetFunction API.Note: If a function is configured to have zero reserved concurrency, then the function is throttled because it can't process any events. Be sure to increase the value to a number greater than zero."
        },
        {
            "questionId": 724,
            "questionAnswer": "B",
            "questionAnswerExplanation": "AWS Config => Checks whether the EBS volumes that are in an attached state are encrypted. If you specify the ID of a KMS key for encryption using the kmsId parameter, the rule checks if the EBS volumes in an attached state are encrypted with that KMS key."
        },
        {
            "questionId": 725,
            "questionAnswer": "C",
            "questionAnswerExplanation": "https://aws.amazon.com/blogs/mt/patching-your-windows-ec2-instances-using-aws-systems-manager-patch-manager/"
        },
        {
            "questionId": 726,
            "questionAnswer": "B",
            "questionAnswerExplanation": "I don't think AWS config can be used to centrally manage external devices. In order to manage them AWS Systems Manager is the way to go.I would go with B. AWS System ManagerRef: https://aws.amazon.com/blogs/mt/manage-raspberry-pi-devices-using-aws-systems-manager/"
        },
        {
            "questionId": 727,
            "questionAnswer": "B",
            "questionAnswerExplanation": "SC1 is backed by hard disk drives (HDDs) and provides the lowest cost per GB of all EBS volume types. It is ideal for less frequently accessed workloads with large, cold datasets. Similar to st1, sc1 provides a burst model: these volumes can burst up to 80 MB/s per TB, with a baseline throughput of 12 MB/s per TB and a maximum throughput of 250 MB/s per volume. For infrequently accessed data, sc1 provides extremely inexpensive storage. SC1 is designed to deliver the expected throughput performance 99% of the time and has enough I/O credits to support a full-volume scan at the burst rate.Reference:https://aws.amazon.com/ebs/features/"
        },
        {
            "questionId": 728,
            "questionAnswer": "A",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_sharing.html"
        },
        {
            "questionId": 729,
            "questionAnswer": "CD",
            "questionAnswerExplanation": "The CloudTrail log file integrity validation process also lets you know if a log file has been deleted or changed, or assert positively that no log files were delivered to your account during a given period of time. CloudTrail log file integrity validation uses industry standard algorithms: SHA-256 for hashing and SHA-256 withRSA for digital signing. This makes it computationally unfeasible to modify, delete or forge CloudTrail log files without detection. TConfiguring multi-factor authentication (MFA) ensures that any attempt to change the versioning state of your bucket or permanently delete an object version requires additional authentication. This helps prevent any operation that could compromise the integrity of your log files, even if a user acquires the password of an IAM user that has permissions to permanently delete Amazon S3 objects.Reference:https://docs.aws.amazon.com/awscloudtrail/latest/userguide/best-practices-security.html"
        },
        {
            "questionId": 730,
            "questionAnswer": "B",
            "questionAnswerExplanation": "If you want to use your own domain name, use Amazon Route 53 to create an alias record that points to your CloudFront distribution. An alias record is a Route 53 extension to DNS."
        },
        {
            "questionId": 731,
            "questionAnswer": "B",
            "questionAnswerExplanation": "you can use service control policies (SCPs) to specify the maximum permissions for member accounts in the organization. In SCPs, you can restrict which AWS services, resources, and individual API actions the users and roles in each member account can access. You can also define conditions for when to restrict access to AWS services, resources, and API actions. These restrictions even override the administrators of member accounts in the organization. When AWS Organizations blocks access to a service, resource, or API action for a member account, a user or role in that account can't access it. This block remains in effect even if an administrator of a member account explicitly grants such permissions in an IAM policy.https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html"
        },
        {
            "questionId": 732,
            "questionAnswer": "D",
            "questionAnswerExplanation": "To route domain traffic to an ELB load balancer, use Amazon Route 53 to create an alias record that points to your load balancer"
        },
        {
            "questionId": 733,
            "questionAnswer": "A",
            "questionAnswerExplanation": "Modify the Condition operator to include both NotIpAddress and IpAddress to preventunauthorized access to the S3 bucket."
        },
        {
            "questionId": 734,
            "questionAnswer": "C",
            "questionAnswerExplanation": "Periodically, Amazon RDS performs maintenance on Amazon RDS resources. Maintenance most often involves updates to the DB cluster's underlying hardware, underlying operating system (OS), or database engine version. Updates to the operating system most often occur for security issues and should be done as soon as possible.https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html"
        },
        {
            "questionId": 735,
            "questionAnswer": "CD",
            "questionAnswerExplanation": "C & D is correct. RDS and Elasticache is AWS managed service where you can specify maintenance windows for AWS to deploy patches etc."
        },
        {
            "questionId": 736,
            "questionAnswer": "AC",
            "questionAnswerExplanation": "https://aws.amazon.com/cloudfront/faqs/https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html"
        },
        {
            "questionId": 737,
            "questionAnswer": "C",
            "questionAnswerExplanation": "Answer is C The word daily is defining the answer Why would I choose to use Standard - IA Standard - IA is ideal for data that is accessed less frequently, but requires rapid access when needed. Standard - IA is ideally suited for long-term file storage, older data from sync and share, backup data, and disaster recovery files."
        },
        {
            "questionId": 738,
            "questionAnswer": "D",
            "questionAnswerExplanation": "The security group is not allowing inbound traffic from the home network on the SSH port."
        },
        {
            "questionId": 739,
            "questionAnswer": "C",
            "questionAnswerExplanation": "It says it must wait for the script to run successfully on the instance. In Cloud formation you use AWS::CloudFormation::Init to run the script commands on the machine after all the commands are completed there must be sent a signal of success or fail cfn-signal.exe -e %ERRORLEVEL% --resource (your resource) --stack ${AWS::StackId} --region ${AWS::Region}.If you dont specify this the cloud formation will consider the instance completed successfully without waiting for the signal confirmation and moves to creation of the next resource and you are not 100% sure your script has run ok or failed.So the correct answer is C. Init (AWS::CloudFormation::Init)"
        },
        {
            "questionId": 740,
            "questionAnswer": "D",
            "questionAnswerExplanation": "D : is the good answer with AWS Systems Manager using the Run Command and the Patching feature!"
        },
        {
            "questionId": 741,
            "questionAnswer": "C",
            "questionAnswerExplanation": "You can create users in AWS SSO by configuring their email address and name. When you create a user, AWS SSO sends an email to the user by default so that they can set their own password. Your user will use their email address and a password they configure in AWS SSO to sign into the user portal and access all of their assigned accounts and applications in a single place.You can also add the users that you create in AWS SSO to groups you create in AWS SSO. In addition, you can create permissions sets that define permitted actions on an AWS resource, and assign them to your users and groups. For example, you can grant the DevOps group permissions to your production AWS accounts. When you add users to the DevOps group, they get access to your production AWS accounts automatically.https://aws.amazon.com/blogs/security/how-to-create-and-manage-users-within-aws-sso/"
        },
        {
            "questionId": 742,
            "questionAnswer": "B",
            "questionAnswerExplanation": "Rather than embedding sensitive information in your AWS CloudFormation templates, we recommend you use dynamic references in your stack template.Dynamic references provide a compact, powerful way for you to reference external values that are stored and managed in other services, such as the AWS Systems Manager Parameter Store or AWS Secrets Manager. When you use a dynamic reference, CloudFormation retrieves the value of the specified reference when necessary during stack and change set operations, and passes the value to the appropriate resource. However, CloudFormation never stores the actual reference value. For more information, see Using Dynamic References to Specify Template Values.https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html#creds"
        },
        {
            "questionId": 743,
            "questionAnswer": "C",
            "questionAnswerExplanation": "ROLLBACK_COMPLETESuccessful removal of one or more stacks after a failed stack creation or after an explicitly canceled stack creation. Any resources that were created during the create stack action are deleted.This status exists only after a failed stack creation. It signifies that all operations from the partially created stack have been appropriately cleaned up. When in this state, only a delete operation can be performed."
        },
        {
            "questionId": 744,
            "questionAnswer": "B",
            "questionAnswerExplanation": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ShareSnapshot.html"
        },
        {
            "questionId": 745,
            "questionAnswer": "A",
            "questionAnswerExplanation": "is the good answer ; that is the role of the AWS Inspector ! https://aws.amazon.com/inspector/faqs/"
        },
        {
            "questionId": 746,
            "questionAnswer": "A",
            "questionAnswerExplanation": "Budget https://aws.amazon.com/about-aws/whats-new/2017/12/aws-free-tier-usage-alerts-automatically-notify-you-when-you-are-forecasted-to-exceed-your-aws-service-usage-limits/"
        },
        {
            "questionId": 747,
            "questionAnswer": "D",
            "questionAnswerExplanation": "A structure that contains information about a stack set. A stack set enables you to provision stacks into AWS accounts and across Regions by using a single CloudFormation template. In the stack set, you specify the template to use, as well as any parameters and capabilities that the template requires.https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_StackSet.html"
        },
        {
            "questionId": 748,
            "questionAnswer": "D",
            "questionAnswerExplanation": "Due to high queries, scaling up will sort the problem"
        },
        {
            "questionId": 749,
            "questionAnswer": "C",
            "questionAnswerExplanation": "When you enable automatic key rotation for a customer managed CMK, AWS KMS generates new cryptographic material for the CMK every year. AWS KMS also saves the CMK's older cryptographic material in perpetuity so it can be used to decrypt data that it encrypted. AWS KMS does not delete any rotated key material until you delete the CMK.https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html"
        },
        {
            "questionId": 750,
            "questionAnswer": "A",
            "questionAnswerExplanation": "An Auto Scaling group to manage EC2 instances for the purposes of processing messages from an SQS queue.A custom metric to send to Amazon CloudWatch that measures the number of messages in the queue per EC2 instance in the Auto Scaling group.A target tracking policy that configures your Auto Scaling group to scale based on the custom metric and a set target value. CloudWatch alarms invoke the scaling policy.https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html"
        },
        {
            "questionId": 751,
            "questionAnswer": "D",
            "questionAnswerExplanation": "I don't think that B is correct. If the servers don't have a static public IP (EIP) it is still possible to have a dynamic public IP and with a route to the internet it will be allowed to communicate to the internet.D is correct"
        },
        {
            "questionId": 752,
            "questionAnswer": "B",
            "questionAnswerExplanation": "To enable the flow of traffic between the VPCs using private IP addresses, the owner of each VPC in the VPC peering connection must manually add a route to one or more of their VPC route tables that points to the IP address range of the other VPC (the peer VPC).https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-basics.html"
        },
        {
            "questionId": 753,
            "questionAnswer": "B",
            "questionAnswerExplanation": "With Inter-Region VPC peering, the traffic in encryptedhttps://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html"
        },
        {
            "questionId": 754,
            "questionAnswer": "D",
            "questionAnswerExplanation": "Took me a while to understand. They keyword here is OVERLAP. That's enough to explain that a peering connection is needed."
        }
    ];
function mergeQaA() {
    alert ('merging');
    let arr3 = questionBank.map((item, i) => Object.assign({}, item, answers[i]));
    console.log(arr3);
    //run this method from an html and in dev tools JSON.stringify(arr3) in watch to copy the array
}

function enumerateQs() {
    let questions = [
        {
            "questionId": 1,
            "questionText": "A Solutions Architect is designing an application that will encrypt all data in an Amazon Redshift cluster. Which action will encrypt the data at rest?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Place the Redshift cluster in a private subnet."
                },
                {
                    "optionId": "B",
                    "optionText": "Use the AWS KMS Default Customer master key."
                },
                {
                    "optionId": "C",
                    "optionText": "Encrypt the Amazon EBS volumes."
                },
                {
                    "optionId": "D",
                    "optionText": "Encrypt the data using SSL/TLS."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 2,
            "questionText": "A website experiences unpredictable traffic. During peak traffic times, the database is unable to keep up with the write request. Which AWS service will help decouple the web application from the database?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon SQS"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon EFS"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon S3"
                },
                {
                    "optionId": "D",
                    "optionText": "AWS Lambda"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 3,
            "questionText": "A legacy application needs to interact with local storage using iSCSI. A team needs to design a reliable storage solution to provision all new storage on AWS. Which storage solution meets the legacy application requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "AWS Snowball storage for the legacy application until the application can be re-architected."
                },
                {
                    "optionId": "B",
                    "optionText": "AWS Storage Gateway in cached mode for the legacy application storage to write data to Amazon S3."
                },
                {
                    "optionId": "C",
                    "optionText": "AWS Storage Gateway in stored mode for the legacy application storage to write data to Amazon S3."
                },
                {
                    "optionId": "D",
                    "optionText": "An Amazon S3 volume mounted on the legacy application server locally using the File Gateway service"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 4,
            "questionText": "A Solutions Architect is designing an architecture for a mobile gaming application. The application is expected to be very popular. The Architect needs to prevent the Amazon RDS MySQL database from becoming a bottleneck due to frequently accessed queries. Which service or feature should the Architect add to prevent a bottleneck?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Multi-AZ feature on the RDS MySQL Database"
                },
                {
                    "optionId": "B",
                    "optionText": "ELB Classic Load Balancer in front of the web application tier"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon SQS in front of RDS MySQL Database"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon ElastiCache in front of the RDS MySQL Database"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 5,
            "questionText": "A company is launching an application that it expects to be very popular. The company needs a database that can scale with the rest of the application. The schema will change frequently. The application cannot afford any downtime for database changes. Which AWS service allows the company to achieve these objectives?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon Redshift"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon DynamoDB"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon RDS MySQL"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon Aurora"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 6,
            "questionText": "A Solution Architect is designing a disaster recovery solution for a 5 TB Amazon Redshift cluster. The recovery site must be at least 500 miles (805 kilometers) from the live site. How should the Architect meet these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use AWS CloudFormation to deploy the cluster in a second region."
                },
                {
                    "optionId": "B",
                    "optionText": "Take a snapshot of the cluster and copy it to another Availability Zone."
                },
                {
                    "optionId": "C",
                    "optionText": "Modify the Redshift cluster to span two regions."
                },
                {
                    "optionId": "D",
                    "optionText": "Enable cross-region snapshots to a different region."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 7,
            "questionText": "A customer has written an application that uses Amazon S3 exclusively as a data store. The application works well until the customer increases the rate at which the application is updating information. The customer now reports that outdated data occasionally appears when the application accesses objects in Amazon S3. What could be the problem, given that the application logic is otherwise correct?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "The application is reading parts of objects from Amazon S3 using a range header."
                },
                {
                    "optionId": "B",
                    "optionText": "The application is reading objects from Amazon S3 using parallel object requests."
                },
                {
                    "optionId": "C",
                    "optionText": "The application is updating records by writing new objects with unique keys."
                },
                {
                    "optionId": "D",
                    "optionText": "The application is updating records by overwriting existing objects with the same keys."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 8,
            "questionText": "A Solutions Architect is designing a new social media application. The application must provide a secure method for uploading profile photos. Each user should be able to upload a profile photo into a shared storage location for one week after their profile is created. Which approach will meet all of these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use Amazon Kinesis with AWS CloudTrail for auditing the specific times when profile photos are uploaded."
                },
                {
                    "optionId": "B",
                    "optionText": "Use Amazon EBS volumes with IAM policies restricting user access to specific time periods."
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon S3 with the default private access policy and generate pre-signed URLs each time a new site profile is created."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon CloudFront with AWS CloudTrail for auditing the specific times when profile photos are uploaded."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 9,
            "questionText": "An application requires block storage for le updates.The data is 500 GB and must continuously sustain 100 MiB / s of aggregate read / write operations.Which storage option is appropriate for this application ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon S3 "
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon EFS "
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon EBS "
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon Glacier "
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 10,
            "questionText": "A mobile application serves scientific articles from individual files in an Amazon S3 bucket.Articles older than 30 days are rarely read.Articles older than 60 days no longer need to be available through the application,but the application owner would like to keep themfor historical purposes.Which cost - effective solution BEST meets these requirements ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a Lambda function to move files older than 30 days to Amazon EBS and move files older than 60 days to Amazon Glacier."
                },
                {
                    "optionId": "B",
                    "optionText": "Create a Lambda function to move files older than 30 days to Amazon Glacier and move files older than 60 days to Amazon EBS."
                },
                {
                    "optionId": "C",
                    "optionText": "Create lifecycle rules to move files older than 30 days to Amazon S3 Standard Infrequent Access and move files older than 60 days to Amazon Glacier."
                },
                {
                    "optionId": "D",
                    "optionText": "Create lifecycle rules to move files older than 30 days to Amazon Glacier and move files older than 60 days to Amazon S3 Standard "
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 11,
            "questionText": "An organization is currently hosting a large amount of frequently accessed data consisting of key-value pairs and semi-structured documents in their data center. They are planning to move this data to AWS. Which of one of the following services MOST effectively meets their needs?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon Redshift"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon RDS"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon DynamoDB"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon Aurora"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 12,
            "questionText": "A Lambda function must execute a query against an Amazon RDS database in a private subnet. Which steps are required to allow the Lambda function to access the Amazon RDS database? (Select two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a VPC Endpoint for Amazon RDS."
                },
                {
                    "optionId": "B",
                    "optionText": "Create the Lambda function within the Amazon RDS VPC."
                },
                {
                    "optionId": "C",
                    "optionText": "Change the ingress rules of Lambda security group, allowing the Amazon RDS security group."
                },
                {
                    "optionId": "D",
                    "optionText": "Change the ingress rules of the Amazon RDS security group, allowing the Lambda security group."
                },
                {
                    "optionId": "E",
                    "optionText": "Add an Internet Gateway (IGW) to the VPC, route the private subnet to the IGW."
                }
            ],
            "questionAnswer": "AD"
        },
        {
            "questionId": 13,
            "questionText": "A Solutions Architect needs to build a resilient data warehouse using Amazon Redshift. The Architect needs to rebuild the Redshift cluster in another region. Which approach can the Architect take to address this requirement?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Modify the Redshift cluster and Configure cross-region snapshots to the other region."
                },
                {
                    "optionId": "B",
                    "optionText": "Modify the Redshift cluster to take snapshots of the Amazon EBS volumes each day, sharing those snapshots with the other region."
                },
                {
                    "optionId": "C",
                    "optionText": "Modify the Redshift cluster and Configure the backup and specify the Amazon S3 bucket in the other region."
                },
                {
                    "optionId": "D",
                    "optionText": "Modify the Redshift cluster to use AWS Snowball in export mode with data delivered to the other region."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 14,
            "questionText": "A popular e-commerce application runs on AWS. The application encounters performance issues. The database is unable to handle the amount of queries and load during peak times. The database is running on the RDS Aurora engine on the largest instance size available. What should an administrator do to improve performance?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Convert the database to Amazon Redshift."
                },
                {
                    "optionId": "B",
                    "optionText": "Create a CloudFront distribution."
                },
                {
                    "optionId": "C",
                    "optionText": "Convert the database to use EBS Provisioned IOPS."
                },
                {
                    "optionId": "D",
                    "optionText": "Create one or more read replicas."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 15,
            "questionText": "A Solutions Architect is designing the architecture for a new three-tier web-based e-commerce site that must be available 24/7. Requests are expected to range from 100 to 10,000 each minute. Usage can vary depending on time of day, holidays, and promotions. The design should be able to handle these volumes, with the ability to handle higher volumes if necessary. How should the Architect design the architecture to ensure the web tier is cost-optimized and can handle the expected traffic? (Select two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Launch Amazon EC2 instances in an Auto Scaling group behind an ELB."
                },
                {
                    "optionId": "B",
                    "optionText": "Store all static files in a multi-AZ Amazon Aurora database."
                },
                {
                    "optionId": "C",
                    "optionText": "Create an CloudFront distribution pointing to static content in Amazon S3."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon Route 53 to route traffic to the correct region."
                },
                {
                    "optionId": "E",
                    "optionText": "Use Amazon S3 multi-part uploads to improve upload times."
                }
            ],
            "questionAnswer": "AC"
        },
        {
            "questionId": 16,
            "questionText": "A Solution Architect is designing a three-tier web application. The Architect wants to restrict access to the database tier to accept traffic from the application servers only. However, these application servers are in an Auto Scaling group and may vary in quantity. How should the Architect Configure the database servers to meet the requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Configure the database security group to allow database traffic from the application server IP addresses."
                },
                {
                    "optionId": "B",
                    "optionText": "Configure the database security group to allow database traffic from the application server security group."
                },
                {
                    "optionId": "C",
                    "optionText": "Configure the database subnet network ACL to deny all inbound non-database traffic from the application-tier subnet."
                },
                {
                    "optionId": "D",
                    "optionText": "Configure the database subnet network ACL to allow inbound database traffic from the application-tier subnet."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 17,
            "questionText": "An Internet-facing multi-tier web application must be highly available. An ELB Classic Load Balancer is deployed in front of the web tier. Amazon EC2 instances at the web application tier are deployed evenly across two Availability Zones.The database is deployed using RDS Multi-AZ. A NAT instance is launched for Amazon EC2 instances and database resources to access the Internet. These instances are not assigned with public IP addresses. Which component poses a potential single point of failure in this architecture?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon EC2 "
                },
                {
                    "optionId": "B",
                    "optionText": "NAT instance "
                },
                {
                    "optionId": "C",
                    "optionText": "ELB Classic Load Balancer "
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon RDS "
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 18,
            "questionText": "A call center application consists of a three - tier application using Auto Scaling groups to automatically scale resources as needed. Users report that every morning at 9:00 AM the system becomes very slow for about 15 minutes.A Solution Architect determines that a large percentage of the call center staff starts work at 9:00 AM,so Auto Scaling does not have enough time to scale out to meet demand.How can the Architect x the problem?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Change the Auto Scaling group 's scale out event to scale based on network utilization."
                },
                {
                    "optionId": "B",
                    "optionText": "Create an Auto Scaling scheduled action to scale out the necessary resources at 8: 30 AM every morning."
                },
                {
                    "optionId": "C",
                    "optionText": "Use Reserved Instances to ensure the system has reserved the right amount of capacity for the scale-up events."
                },
                {
                    "optionId": "D",
                    "optionText": "Permanently keep a steady state of instances that is needed at 9: 00 AM to guarantee available resources, but leverage Spot Instances."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 19,
            "questionText": "An e-commerce application is hosted in AWS. The last time a new product was launched, the application experienced a performance issue due to an enormous spike in traffic. Management decided that capacity must be doubled the week after the product is launched. Which is the MOST efficient way for management to ensure that capacity requirements are met?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Add a Step Scaling policy."
                },
                {
                    "optionId": "B",
                    "optionText": "Add a Dynamic Scaling policy."
                },
                {
                    "optionId": "C",
                    "optionText": "Add a Scheduled Scaling action."
                },
                {
                    "optionId": "D",
                    "optionText": "Add Amazon EC2 Spot Instances."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 20,
            "questionText": "A customer owns a simple API for their website that receives about 1,000 requests each day and has an average response time of 50 ms. It is currently hosted on one c4.large instance. Which changes to the architecture will provide high availability at the LOWEST cost?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create an Auto Scaling group with a minimum of one instance and a maximum of two instances, then use an Application Load Balancer to balance the traffic."
                },
                {
                    "optionId": "B",
                    "optionText": "Recreate the API using Amazon API Gateway and use AWS Lambda as the service backend."
                },
                {
                    "optionId": "C",
                    "optionText": "Create an Auto Scaling group with a maximum of two instances, then use an Application Load Balancer to balance the traffic."
                },
                {
                    "optionId": "D",
                    "optionText": "Recreate the API using Amazon API Gateway and integrate the new API with the existing backend service."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 21,
            "questionText": "A Solution Architect is designing an application that uses Amazon EBS volumes. The volumes must be backed up to a different region. How should the Architect meet this requirement?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create EBS snapshots directly from one region to another."
                },
                {
                    "optionId": "B",
                    "optionText": "Move the data to an Amazon S3 bucket and enable cross-region replication."
                },
                {
                    "optionId": "C",
                    "optionText": "Create EBS snapshots and then copy them to the desired region."
                },
                {
                    "optionId": "D",
                    "optionText": "Use a script to copy data from the current Amazon EBS volume to the destination Amazon EBS volume."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 22,
            "questionText": "A company is using an Amazon S3 bucket located in us-west-2 to serve videos to their customers. Their customers are located all around the world and the videos are requested a lot during peak hours. Customers in Europe complain about experiencing slow downloaded speeds, and during peak hours, customers in all locations report experiencing HTTP 500 errors. What can a Solutions Architect do to address these issues?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Place an elastic load balancer in front of the Amazon S3 bucket to distribute the load during peak hours."
                },
                {
                    "optionId": "B",
                    "optionText": "Cache the web content with Amazon CloudFront and use all Edge locations for content delivery."
                },
                {
                    "optionId": "C",
                    "optionText": "Replicate the bucket in eu-west-1 and use an Amazon Route 53 failover routing policy to determine which bucket it should serve the request to."
                },
                {
                    "optionId": "D",
                    "optionText": "Use an Amazon Route 53 weighted routing policy for the CloudFront domain name to distribute the GET request between CloudFront and the Amazon S3 bucket directly."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 23,
            "questionText": "A Solutions Architect is designing a solution that includes a managed VPN connection. To monitor whether the VPN connection is up or down, the Architect should use:",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "an external service to ping the VPN endpoint from outside the VPC."
                },
                {
                    "optionId": "B",
                    "optionText": "AWS CloudTrail to monitor the endpoint."
                },
                {
                    "optionId": "C",
                    "optionText": "the CloudWatch TunnelState Metric."
                },
                {
                    "optionId": "D",
                    "optionText": "an AWS Lambda function that parses the VPN connection logs."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 24,
            "questionText": "A social networking portal experiences latency and throughput issues due to an increased number of users. Application servers use very large datasets from an Amazon RDS database, which creates a performance bottleneck on the database. Which AWS service should be used to improve performance?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Auto Scaling"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon SQS"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon ElastiCache"
                },
                {
                    "optionId": "D",
                    "optionText": "ELB Application Load Balancer"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 25,
            "questionText": "A Solutions Architect is designing network architecture for an application that has compliance requirements. The application will be hosted on Amazon EC2 instances in a private subnet and will be using Amazon S3 for storing data. The compliance requirements mandate that the data cannot traverse the public Internet. What is the MOST secure way to satisfy this requirement?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use a NAT Instance."
                },
                {
                    "optionId": "B",
                    "optionText": "Use a NAT Gateway."
                },
                {
                    "optionId": "C",
                    "optionText": "Use a VPC endpoint."
                },
                {
                    "optionId": "D",
                    "optionText": "Use a Virtual Private Gateway."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 26,
            "questionText": "Developers are creating a new online transaction processing (OLTP) application for a small database that is very read-write intensive. A single table in the database is updated continuously throughout the day, and the developers want to ensure that the database performance is consistent. Which Amazon EBS storage option will achieve the MOST consistent performance to help maintain application performance?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Provisioned IOPS SSD"
                },
                {
                    "optionId": "B",
                    "optionText": "General Purpose SSD"
                },
                {
                    "optionId": "C",
                    "optionText": "Cold HDD"
                },
                {
                    "optionId": "D",
                    "optionText": "Throughput Optimized HDD"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 27,
            "questionText": "A Solutions Architect is designing a log-processing solution that requires storage that supports up to 500 MB/s throughput. The data is sequentially accessed by an Amazon EC2 instance. Which Amazon storage type satisfies these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "EBS Provisioned IOPS SSD (io1)"
                },
                {
                    "optionId": "B",
                    "optionText": "EBS General Purpose SSD (gp2)"
                },
                {
                    "optionId": "C",
                    "optionText": "EBS Throughput Optimized HDD (st1)"
                },
                {
                    "optionId": "D",
                    "optionText": "EBS Cold HDD (sc1)"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 28,
            "questionText": "A company's development team plans to create an Amazon S3 bucket that contains millions of images.The team wants to maximize the read performance of Amazon S3.Which naming scheme should the company use",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Add a date as the prefix."
                },
                {
                    "optionId": "B",
                    "optionText": "Add a sequential id as the suffix."
                },
                {
                    "optionId": "C",
                    "optionText": "Add a hexadecimal hash as the suffix."
                },
                {
                    "optionId": "D",
                    "optionText": "Add a hexadecimal hash as the prefix."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 29,
            "questionText": "A Solutions Architect needs to design a solution that will enable a security team to detect,review,and perform root cause analysis of security incidents that occur in a cloud environment.The Architect must provide a centralized view of all API eventsfor current and future AWS regions.How should the Architect accomplish this task ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Enable AWS CloudTrail logging in each individual region.Repeat thisfor all future regions."
                },
                {
                    "optionId": "B",
                    "optionText": "Enable Amazon CloudWatch logs for all AWS services across all regions and aggregate them in a single Amazon S3 bucket."
                },
                {
                    "optionId": "C",
                    "optionText": "Enable AWS Trusted Advisor security checks and report all security incidentsfor all regions."
                },
                {
                    "optionId": "D",
                    "optionText": "Enable AWS CloudTrail by creating a new trail and apply the trail to all regions."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 30,
            "questionText": "A company has a legacy application using a proprietary le system and plans to migrate the application to AWS.Which storage service should the company use ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon DynamoDB "
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon S3 "
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon EBS "
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon EFS "
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 31,
            "questionText": "A company plans to use AWS for all new batch processing workloads.The company 's developers use Docker containers for the new batch processing. The system design must accommodate critical and non-critical batch processing workloads 24/7. How should a Solutions Architect design this architecture in a cost-efficient manner?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Purchase Reserved Instances to run all containers. Use Auto Scaling groups to schedule jobs."
                },
                {
                    "optionId": "B",
                    "optionText": "Host a container management service on Spot Instances. Use Reserved Instances to run Docker containers."
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon ECS orchestration and Auto Scaling groups: one with Reserve Instances, one with Spot Instances."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon ECS to manage container orchestration. Purchase Reserved Instances to run all batch workloads at the same time."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 32,
            "questionText": "A company is evaluating Amazon S3 as a data storage solution for their daily analyst reports. The company has implemented stringent requirements concerning the security of the data at rest. specifically, the CISO asked for the use of envelope encryption with separate permissions for the use of an envelope key, automated rotation of the encryption keys, and visibility into when an encryption key was used and by whom. Which steps should a Solutions Architect take to satisfy the security requirements requested by the CISO?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create an Amazon S3 bucket to store the reports and use Server-Side Encryption with Customer-Provided Keys (SSE-C)."
                },
                {
                    "optionId": "B",
                    "optionText": "Create an Amazon S3 bucket to store the reports and use Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)."
                },
                {
                    "optionId": "C",
                    "optionText": "Create an Amazon S3 bucket to store the reports and use Server-Side Encryption with AWS KMS-Managed Keys (SSE-KMS)."
                },
                {
                    "optionId": "D",
                    "optionText": "Create an Amazon S3 bucket to store the reports and use Amazon s3 versioning with Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 33,
            "questionText": "A customer has a production application that frequently overwrites and deletes data, the application requires the most up-to-date version of the data every time it is requested. Which storage should a Solutions Architect recommend to bet accommodate this use case?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon S3"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon RDS"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon RedShift"
                },
                {
                    "optionId": "D",
                    "optionText": "AWS Storage Gateway"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 34,
            "questionText": "A Solutions Architect is designing a photo application on AWS. Every time a user uploads a photo to Amazon S3, the Architect must insert a new item to a DynamoDB table. Which AWS-managed service is the BEST t to insert the item?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Lambda@Edge"
                },
                {
                    "optionId": "B",
                    "optionText": "AWS Lambda 1"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon API Gateway"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon EC2 instances"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 35,
            "questionText": " An application relies on messages being sent and received in order. The volume will never exceed more than 300 transactions each second. Which service should be used?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon SQS"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon SNS"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon ECS"
                },
                {
                    "optionId": "D",
                    "optionText": "AWS STS"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 36,
            "questionText": "A Solutions Architect is designing an application on AWS that uses persistent block storage. Data must be encrypted at rest. Which solution meets the requirement?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Enable SSL on Amazon EC2 instances."
                },
                {
                    "optionId": "B",
                    "optionText": "Encrypt Amazon EBS volumes on Amazon EC2 instances."
                },
                {
                    "optionId": "C",
                    "optionText": "Enable server-side encryption on Amazon S3."
                },
                {
                    "optionId": "D",
                    "optionText": "Encrypt Amazon EC2 Instance Storage."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 37,
            "questionText": "A company is launching a static website using the zone apex (mycompany.com). The company wants to use Amazon Route 53 for DNS. Which steps should the company perform to implement a scalable and cost-effective solution? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Host the website on an Amazon EC2 instance with ELB and Auto Scaling, and map a Route 53 alias record to the ELB endpoint."
                },
                {
                    "optionId": "B",
                    "optionText": "Host the website using AWS Elastic Beanstalk, and map a Route 53 alias record to the Beanstalk stack."
                },
                {
                    "optionId": "C",
                    "optionText": "Host the website on an Amazon EC2 instance, and map a Route 53 alias record to the public IP address of the Amazon EC2 instance."
                },
                {
                    "optionId": "D",
                    "optionText": "Serve the website from an Amazon S3 bucket, and map a Route 53 alias record to the website endpoint."
                },
                {
                    "optionId": "E",
                    "optionText": "Create a Route 53 hosted zone, and set the NS records of the domain to use Route 53 name servers."
                }
            ],
            "questionAnswer": "CD"
        },
        {
            "questionId": 38,
            "questionText": "A manufacturing company captures data from machines running at customer sites. Currently, thousands of machines send data every 5 minutes, and this is expected to grow to hundreds of thousands of machines in the near future. The data is logged with the intent to be analyzed in the future as needed. What is the SIMPLEST method to store this streaming data at scale?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create an Amazon Kinesis Firehouse delivery stream to store the data in Amazon S3."
                },
                {
                    "optionId": "B",
                    "optionText": "Create an Auto Scaling group of Amazon EC2 servers behind ELBs to write the data into Amazon RDS."
                },
                {
                    "optionId": "C",
                    "optionText": "Create an Amazon SQS queue, and have the machines write to the queue."
                },
                {
                    "optionId": "D",
                    "optionText": "Create an Amazon EC2 server farm behind an ELB to store the data in Amazon EBS Cold HDD volumes."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 39,
            "questionText": "A bank is writing new software that is heavily dependent upon the database transactions for write consistency. The application will also occasionally generate reports on data in the database, and will do joins across multiple tables. The database must automatically scale as the amount of data grows. Which AWS service should be used to run the database?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon S3"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon Aurora"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon DynamoDB"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon Redshift"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 40,
            "questionText": "A Solutions Architect is designing a new application that needs to access data in a different AWS account located within the same region. The data must not be accessed over the Internet. Which solution will meet these requirements with the LOWEST cost?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Add rules to the security groups in each account."
                },
                {
                    "optionId": "B",
                    "optionText": "Establish a VPC Peering connection between accounts."
                },
                {
                    "optionId": "C",
                    "optionText": "Configure Direct Connect in each account."
                },
                {
                    "optionId": "D",
                    "optionText": "Add a NAT Gateway to the data account."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 41,
            "questionText": "A Solutions Architect is designing a mobile application that will capture receipt images to track expenses. The Architect wants to store the images on Amazon S3. However, uploading images through the web server will create too much traffic. What is the MOST efficient method to store images from a mobile application on Amazon S3?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Upload directly to S3 using a pre-signed URL. 1 . Up oad d ect y to S3 us g a p e s g ed U ."
                },
                {
                    "optionId": "B",
                    "optionText": "Upload to a second bucket, and have a Lambda event copy the image to the primary bucket."
                },
                {
                    "optionId": "C",
                    "optionText": "Upload to a separate Auto Scaling group of servers behind an ELB Classic Load Balancer, and have them write to the Amazon S3 bucket."
                },
                {
                    "optionId": "D",
                    "optionText": "Expand the web server fleet with Spot Instances to provide the resources to handle the images."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 42,
            "questionText": "A company requires that the source, destination, and protocol of all IP packets be recorded when traversing a private subnet. What is the MOST secure and reliable method of accomplishing this goal.",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create VPC flow logs on the subnet."
                },
                {
                    "optionId": "B",
                    "optionText": "Enable source destination check on private Amazon EC2 instances."
                },
                {
                    "optionId": "C",
                    "optionText": "Enable AWS CloudTrail logging and specify an Amazon S3 bucket for storing log files."
                },
                {
                    "optionId": "D",
                    "optionText": "Create an Amazon CloudWatch log to capture packet information."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 43,
            "questionText": "A Solutions Architect has a multi-layer application running in Amazon VPC. The application has an ELB Classic Load Balancer as the front end in a public subnet, and an Amazon EC2-based reverse proxy that performs content-based routing to two backend Amazon EC2 instances hosted in a private subnet. The Architect sees tremendous traffic growth and is concerned that the reverse proxy and current backend set up will be insu cient. Which actions should the Architect take to achieve a cost-effective solution that ensures the application automatically scales to meet traffic demand? (Select two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Replace the Amazon EC2 reverse proxy with an ELB internal Classic Load Balancer."
                },
                {
                    "optionId": "B",
                    "optionText": "Add Auto Scaling to the Amazon EC2 backend eet."
                },
                {
                    "optionId": "C",
                    "optionText": "Add Auto Scaling to the Amazon EC2 reverse proxy layer."
                },
                {
                    "optionId": "D",
                    "optionText": "Use t2 burstable instance types for the backend fleet."
                },
                {
                    "optionId": "E",
                    "optionText": "Replace both the frontend and reverse proxy layers with an ELB Application Load Balancer."
                }
            ],
            "questionAnswer": "BE"
        },
        {
            "questionId": 44,
            "questionText": "A company is launching a marketing campaign on their website tomorrow and expects a significant increase in traffic. The website is designed as a multi-tiered web architecture, and the increase in traffic could potentially overwhelm the current design. What should a Solutions Architect do to minimize the effects from a potential failure in one or more of the tiers?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Migrate the database to Amazon RDS."
                },
                {
                    "optionId": "B",
                    "optionText": "Set up DNS failover to a statistic website."
                },
                {
                    "optionId": "C",
                    "optionText": "Use Auto Scaling to keep up with the demand."
                },
                {
                    "optionId": "D",
                    "optionText": "Use both a SQL and a NoSQL database in the design."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 45,
            "questionText": "A web application experiences high compute costs due to serving a high amount of static web content. How should the web server architecture be designed to be the MOST cost-efficient?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create an Auto Scaling group to scale out based on average CPU usage."
                },
                {
                    "optionId": "B",
                    "optionText": "Create an Amazon CloudFront distribution to pull static content from an Amazon S3 bucket."
                },
                {
                    "optionId": "C",
                    "optionText": "Leverage Reserved Instances to add additional capacity at a significantly lower price."
                },
                {
                    "optionId": "D",
                    "optionText": "Create a multi-region deployment using an Amazon Route 53 geolocation routing policy."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 46,
            "questionText": "A Solutions Architect plans to migrate NAT instances to NAT gateway. The Architect has NAT instances with scripts to manage high availability. What is the MOST efficient method to achieve similar high availability with NAT gateway?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Remove source/destination check on NAT instances."
                },
                {
                    "optionId": "B",
                    "optionText": "Launch a NAT gateway in each Availability Zone."
                },
                {
                    "optionId": "C",
                    "optionText": "Use a mix of NAT instances and NAT gateway."
                },
                {
                    "optionId": "D",
                    "optionText": "Add an ELB Application Load Balancer in front of NAT gateway."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 47,
            "questionText": "A Solutions Architect is designing a solution to store a large quantity of event data in Amazon S3. The Architect anticipates that the workload will consistently exceed 100 requests each second. What should the Architect do in Amazon S3 to optimize performance?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Randomize a key name prefix."
                },
                {
                    "optionId": "B",
                    "optionText": "Store the event data in separate buckets."
                },
                {
                    "optionId": "C",
                    "optionText": "Randomize the key name suffix."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon S3 Transfer Acceleration."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 48,
            "questionText": "A user is testing a new service that receives location updates from 3,600 rental cars every hour. Which service will collect data and automatically scale to accommodate production workload?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon EC2"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon Kinesis Firehose"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon EBS 1"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon API Gateway"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 49,
            "questionText": "A Solutions Architect is designing a web application. The web and application tiers need to access the Internet, but they cannot be accessed from the Internet. Which of the following steps is required?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Attach an Elastic IP address to each Amazon EC2 instance and add a route from the private subnet to the public subnet."
                },
                {
                    "optionId": "B",
                    "optionText": "Launch a NAT gateway in the public subnet and add a route to it from the private subnet."
                },
                {
                    "optionId": "C",
                    "optionText": "Launch Amazon EC2 instances in the public subnet and change the security group to allow outbound traffic on port 80."
                },
                {
                    "optionId": "D",
                    "optionText": "Launch a NAT gateway in the private subnet and deploy a NAT instance in the private subnet."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 50,
            "questionText": "An application stack includes an Elastic Load Balancer in a public subnet, a fleet of Amazon EC2 instances in an Auto Scaling group, and an Amazon RDS MySQL cluster. Users connect to the application from the Internet. The application servers and database must be secure. How should a Solutions Architect perform this task?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a private subnet for the Amazon EC2 instances and a public subnet for the Amazon RDS cluster."
                },
                {
                    "optionId": "B",
                    "optionText": "Create a private subnet for the Amazon EC2 instances and a private subnet for the Amazon RDS cluster."
                },
                {
                    "optionId": "C",
                    "optionText": "Create a public subnet for the Amazon EC2 instances and a private subnet for the Amazon RDS cluster."
                },
                {
                    "optionId": "D",
                    "optionText": "Create a public subnet for the Amazon EC2 instances and a public subnet for the Amazon RDS cluster."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 51,
            "questionText": "A Solutions Architect is designing a solution for a media company that will stream large amounts of data from an Amazon EC2 instance. The data streams are typically large and sequential, and must be able to support up to 500 MB/s. Which storage type will meet the performance requirements of this application?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "EBS Provisioned IOPS SSD"
                },
                {
                    "optionId": "B",
                    "optionText": "EBS General Purpose SSD"
                },
                {
                    "optionId": "C",
                    "optionText": "EBS Cold HDD"
                },
                {
                    "optionId": "D",
                    "optionText": "EBS Throughput Optimized HDD"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 52,
            "questionText": "A legacy application running in premises requires a Solutions Architect to be able to open a firewall to allow access to several Amazon S3 buckets. The Architect has a VPN connection to AWS in place. How should the Architect meet this requirement?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create an IAM role that allows access from the corporate network to Amazon S3."
                },
                {
                    "optionId": "B",
                    "optionText": "Configure a proxy on Amazon EC2 and use an Amazon S3 VPC endpoint."
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon API Gateway to do IP whitelisting."
                },
                {
                    "optionId": "D",
                    "optionText": "Configure IP whitelisting on the customer's gateway."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 53,
            "questionText": "A Solutions Architect is designing a database solution that must support a high rate of random disk reads and writes.It must provide consistent performance,and requires long - term persistence.Which storage solution BEST meets these requirements ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "An Amazon EBS Provisioned IOPS volume "
                },
                {
                    "optionId": "B",
                    "optionText": "An Amazon EBS General Purpose volume "
                },
                {
                    "optionId": "C",
                    "optionText": "An Amazon EBS Magnetic volume "
                },
                {
                    "optionId": "D",
                    "optionText": "An Amazon EC2 Instance Store "
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 54,
            "questionText": "A Solutions Architect is designing solution with AWS Lambda where different environments require different database passwords.What should the Architect do to accomplish this in a secure and scalable way ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a Lambda functionfor each individual environment."
                },
                {
                    "optionId": "B",
                    "optionText": "Use Amazon DynamoDB to store environmental variables."
                },
                {
                    "optionId": "C",
                    "optionText": "Use encrypted AWS Lambda environmental variables."
                },
                {
                    "optionId": "D",
                    "optionText": "Implement a dedicated Lambda functionfor distributing variables."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 55,
            "questionText": "A news organization plans to migrate their 20 TB video archive to AWS.The files are rarely accessed,but when they are,a request is made in advance and a 3 to 5 - hour retrieval time frame is acceptable.However,when there is a breaking news story,the editors require access to archived footage within minutes.Which storage solution meets the needs of this organizationwhile providing the LOWEST cost of storage ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Store the archive in Amazon S3 Reduced Redundancy Storage."
                },
                {
                    "optionId": "B",
                    "optionText": "Store the archive in Amazon Glacier and use standard retrievalfor all content."
                },
                {
                    "optionId": "C",
                    "optionText": "Store the archive in Amazon Glacier and pay the additional chargefor expedited retrieval when needed."
                },
                {
                    "optionId": "D",
                    "optionText": "Store the archive in Amazon S3 with a lifecycle policy to move this to S3 Infrequent Access after 30 days."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 56,
            "questionText": "A Solutions Architect is building a multi - tier website.The web servers will be in a public subnet,and the database servers will be in a private subnet.Only the web servers can be accessed from the Internet.The database servers must have Internet accessfor software updates.Which solution meets the requirements ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Assign Elastic IP addresses to the database instances."
                },
                {
                    "optionId": "B",
                    "optionText": "Allow Internet traffic on the private subnet through the network ACL."
                },
                {
                    "optionId": "C",
                    "optionText": "Use a NAT Gateway."
                },
                {
                    "optionId": "D",
                    "optionText": "Use an egress - only Internet Gateway."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 57,
            "questionText": "A Solutions Architect is designing a Lambda function that calls an API to list all running Amazon RDS instances.How should the request be authorized ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create an IAM access and secret key,and store it in the Lambda function."
                },
                {
                    "optionId": "B",
                    "optionText": "Create an IAM role to the Lambda function with permissions to list all Amazon RDS instances."
                },
                {
                    "optionId": "C",
                    "optionText": "Create an IAM role to Amazon RDS with permissions to list all Amazon RDS instances."
                },
                {
                    "optionId": "D",
                    "optionText": "Create an IAM access and secret key,and store it in an encrypted RDS database."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 58,
            "questionText": "A Solutions Architect is building an application on AWS that will require 20,000 IOPS on a particular volume to support a media event.Once the event ends,the IOPS need is no longer required.The marketing team asks the Architect to build the platform to optimize storage without incurring downtime.How should the Architect design the platform to meet these requirements ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Change the Amazon EC2 instant types."
                },
                {
                    "optionId": "B",
                    "optionText": "Change the EBS volume type to Provisioned IOPS."
                },
                {
                    "optionId": "C",
                    "optionText": "Stop the Amazon EC2 instance and provision IOPS for the EBS volume."
                },
                {
                    "optionId": "D",
                    "optionText": "Enable an API Gateway to change the endpoints for the Amazon EC2 instances."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 59,
            "questionText": "A Solutions Architect is building a new feature using a Lambda to create metadata when a user uploads a picture to Amazon S3. All metadata must be indexed.Which AWS service should the Architect use to store this metadata?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon S3 "
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon DynamoDB"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon Kinesis"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon EFC "
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 60,
            "questionText": "An interactive, dynamic website runs on Amazon EC2 instances in a single subnet behind an ELB Classic Load Balancer. Which design changes will make the site more highly available?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Move some Amazon EC2 instances to a subnet in a different way."
                },
                {
                    "optionId": "B",
                    "optionText": "Move the website to Amazon S3."
                },
                {
                    "optionId": "C",
                    "optionText": "Change the ELB to an Application Load Balancer."
                },
                {
                    "optionId": "D",
                    "optionText": "Move some Amazon EC2 instances to a subnet in the same Availability Zone."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 61,
            "questionText": "A Solutions Architect is designing a web application that is running on an Amazon EC2 instance. The application stores data in DynamoDB. The Architect needs to secure access to the DynamoDB table. What combination of steps does AWS recommend to achieve secure authorization? (Select two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Store an access key on the Amazon EC2 instance with rights to the Dynamo DB table."
                },
                {
                    "optionId": "B",
                    "optionText": "Attach an IAM user to the Amazon EC2 instance."
                },
                {
                    "optionId": "C",
                    "optionText": "Create an IAM role with permissions to write to the DynamoDB table."
                },
                {
                    "optionId": "D",
                    "optionText": "Attach an IAM role to the Amazon EC2 instance."
                },
                {
                    "optionId": "E",
                    "optionText": "Attach an IAM policy to the Amazon EC2 instance."
                }
            ],
            "questionAnswer": "CD"
        },
        {
            "questionId": 62,
            "questionText": "A Solutions Architect is about to deploy an API on multiple EC2 instances in an Auto Scaling group behind an ELB. The support team has the following operational requirements: 1 They get an alert when the requests per second go over 50,000 2 They get an alert when latency goes over 5 seconds 3 They can validate how many times a day users call the API requesting highly-sensitive data Which combination of steps does the Architect need to take to satisfy these operational requirements? (Select two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Ensure that CloudTrail is enabled."
                },
                {
                    "optionId": "B",
                    "optionText": "Create a custom CloudWatch metric to monitor the API for data access."
                },
                {
                    "optionId": "C",
                    "optionText": "Configure CloudWatch alarms for any metrics the support team requires."
                },
                {
                    "optionId": "D",
                    "optionText": "Ensure that detailed monitoring for the EC2 instances is enabled."
                },
                {
                    "optionId": "E",
                    "optionText": "Create an application to export and save CloudWatch metrics for longer term trending analysis."
                }
            ],
            "questionAnswer": "AC"
        },
        {
            "questionId": 63,
            "questionText": "A Solutions Architect is designing a highly-available website that is served by multiple web servers hosted outside of AWS. If an instance becomes unresponsive, the Architect needs to remove it from the rotation. What is the MOST efficient way to fulfill this requirement?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use Amazon CloudWatch to monitor utilization."
                },
                {
                    "optionId": "B",
                    "optionText": "Use Amazon API Gateway to monitor availability."
                },
                {
                    "optionId": "C",
                    "optionText": "Use an Amazon Elastic Load Balancer."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon Route 53 health checks."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 64,
            "questionText": "A company hosts a popular web application. The web application connects to a database running in a private VPC subnet. The web servers must be accessible only to customers on an SSL connection. The RDS MySQL database server must be accessible only from the web servers. How should the Architect design a solution to meet the requirements without impacting running applications?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a network ACL on the web server's subnet, and allow HTTPS inbound and MySQL outbound. Place both database and web servers on the same subnet."
                },
                {
                    "optionId": "B",
                    "optionText": "Open an HTTPS port on the security group for web servers and set the source to 0.0.0.0/0. Open the MySQL port on the database security group and attach it to the MySQL instance. Set the source to Web Server Security Group."
                },
                {
                    "optionId": "C",
                    "optionText": "Create a network ACL on the web server's subnet, and allow HTTPS inbound, and specify the source as 0.0.0.0/0. Create a network ACL on a database subnet, allow MySQL port inbound for web servers, and deny all outbound traffic."
                },
                {
                    "optionId": "D",
                    "optionText": "Open the MySQL port on the security group for web servers and set the source to 0.0.0.0/0. Open the HTTPS port on the database security group and attach it to the MySQL instance. Set the source to Web Server Security Group."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 65,
            "questionText": "Which service should an organization use if it requires an easily managed and scalable platform to host its web application running on Nginx?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "AWS Lambda"
                },
                {
                    "optionId": "B",
                    "optionText": "Auto Scaling"
                },
                {
                    "optionId": "C",
                    "optionText": "AWS Elastic Beanstalk"
                },
                {
                    "optionId": "D",
                    "optionText": "Elastic Load Balancing"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 66,
            "questionText": "An Administrator is hosting an application on a single Amazon EC2 instance, which users can access by the public hostname. The administrator is adding a second instance, but does not want users to have to decide between many public hostnames. Which AWS service will decouple the users from specific Amazon EC2 instances?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon SQS"
                },
                {
                    "optionId": "B",
                    "optionText": "Auto Scaling group"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon EC2 security group"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon ELB"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 67,
            "questionText": "A Solutions Architect is designing a microservices based application using Amazon ECS. The application includes a WebSocket component, and the traffic needs to be distributed between microservices based on the URL. Which service should the Architect choose to distribute the workload?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "ELB Classic Load Balancer"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon Route 53 DNS"
                },
                {
                    "optionId": "C",
                    "optionText": "ELB Application Load Balancer"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon CloudFront"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 68,
            "questionText": "A Solutions Architect is designing the storage layer for a production relational database. The database will run on Amazon EC2. The database is accessed by an application that performs intensive reads and writes, so the database requires the LOWEST random I/O latency. Which data storage method fulfills the above requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Store data in a filesystem backed by Amazon Elastic File System (EFS)."
                },
                {
                    "optionId": "B",
                    "optionText": "Store data in Amazon S3 and use a third-party solution to expose Amazon S3 as a filesystem to the database server."
                },
                {
                    "optionId": "C",
                    "optionText": "Store data in Amazon Dynamo DB and emulate relational database semantics."
                },
                {
                    "optionId": "D",
                    "optionText": "Stripe data across multiple Amazon EBS volumes using RAID 0."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 69,
            "questionText": "A Solutions Architect is designing a VPC. Instances in a private subnet must be able to establish IPv6 traffic to the Internet. The design must scale automatically and not incur any additional cost. This can be accomplished with:",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "an egress-only internet gateway"
                },
                {
                    "optionId": "B",
                    "optionText": "a NAT gateway"
                },
                {
                    "optionId": "C",
                    "optionText": "a custom NAT instance"
                },
                {
                    "optionId": "D",
                    "optionText": "a VPC endpoint"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 70,
            "questionText": "A web application stores all data in an Amazon RDS Aurora database instance. A Solutions Architect wants to provide access to the data for a detailed report for the Marketing team, but is concerned that the additional load on the database will affect the performance of the web application. How can the report be created without affecting the performance of the application?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a read replica of the database."
                },
                {
                    "optionId": "B",
                    "optionText": "Provision a new RDS instance as a secondary master."
                },
                {
                    "optionId": "C",
                    "optionText": "Configure the database to be in multiple regions."
                },
                {
                    "optionId": "D",
                    "optionText": "Increase the number of provisioned storage IOPS."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 71,
            "questionText": "A company has an application that stores sensitive data. The company is required by government regulations to store multiple copies of its data. What would be the MOST resilient and cost-effective option to meet this requirement?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon EFS"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon RDS"
                },
                {
                    "optionId": "C",
                    "optionText": "AWS Storage Gateway"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon S3"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 72,
            "questionText": "A company is using AWS Key Management Service (AWS KMS) to secure their Amazon RDS databases. An auditor has recommended that the company log all use of their AWS KMS keys. What is the SIMPLEST solution?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Associate AWS KMS metrics with Amazon CloudWatch."
                },
                {
                    "optionId": "B",
                    "optionText": "Use AWS CloudTrail to log AWS KMS key usage."
                },
                {
                    "optionId": "C",
                    "optionText": "Deploy a monitoring agent on the RDS instances."
                },
                {
                    "optionId": "D",
                    "optionText": "Poll AWS KMS periodically with a scheduled job."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 73,
            "questionText": "A Solutions Architect is designing a stateful web application that will runfor one year(24 / 7) and then be decommissioned.Load on this platform will be constant,using a number of r4 .8 xlarge instances.Key driversfor this system include high availability,but elasticity is not required.What is the MOST cost - effective way to purchase computefor this platform ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Scheduled Reserved Instances "
                },
                {
                    "optionId": "B",
                    "optionText": "Convertible Reserved Instances "
                },
                {
                    "optionId": "C",
                    "optionText": "Standard Reserved Instances "
                },
                {
                    "optionId": "D",
                    "optionText": "Spot Instances "
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 74,
            "questionText": "A media company asked a Solutions Architect to design a highly available storage solution to serve as a centralized document store for their Amazon EC2 instances. The storage solution needs to be POSIX - compliant, scale dynamically, and be able to serve up to 100 concurrent EC2 instances.Which solution meets these requirements ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create an Amazon S3 bucket and store all of the documents in this bucket."
                },
                {
                    "optionId": "B",
                    "optionText": "Create an Amazon EBS volume and allow multiple users to mount that volume to their EC2 instance(s)."
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon Glacier to store all of the documents."
                },
                {
                    "optionId": "D",
                    "optionText": "Create an Amazon Elastic File System(Amazon EFS) to store and share the documents."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 75,
            "questionText": "A Solution Architect has a two - tier application with a single Amazon EC2 instance web server and Amazon RDS MySQL Multi - AZ DB instances.The Architect is re - architecting the applicationfor high availability by adding instances in a second Availability Zone.Which additional services will improve the availability of the application ? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Auto Scaling group "
                },
                {
                    "optionId": "B",
                    "optionText": "AWS CloudTrail "
                },
                {
                    "optionId": "C",
                    "optionText": "ELB Classic Load Balancer "
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon DynamoDB "
                },
                {
                    "optionId": "E",
                    "optionText": "Amazon ElastiCache "
                }
            ],
            "questionAnswer": "AC"
        },
        {
            "questionId": 76,
            "questionText": "A company is migrating its data center to AWS.As part of this migration,there is a three - tier web application that has strict data - at - rest encryption requirements.The customer deploys this application on Amazon EC2 using Amazon EBS,and now must provide encryption at - rest.How can this requirement be met without changing the application ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use AWS Key Management Service and move the encrypted data to Amazon S3.2 "
                },
                {
                    "optionId": "B",
                    "optionText": "Use an application - specific encryption API with AWS server - side encryption."
                },
                {
                    "optionId": "C",
                    "optionText": "Use encrypted EBS storage volumes with AWS - managed keys."
                },
                {
                    "optionId": "D",
                    "optionText": "Use third - party tools to encrypt the EBS data volumes with Key Management Service Bring Your Own Keys."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 77,
            "questionText": "A Solutions Architect is developing software on AWS that requires access to multiple AWS services,including an Amazon EC2 instance.This is a security sensitive application,and AWS credentials such as Access Key ID and Secret Access Key need to be protected and cannot be exposed anywhere in the system.What security measure would satisfy these requirements ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Store the AWS Access Key ID / Secret Access Key combination in software comments."
                },
                {
                    "optionId": "B",
                    "optionText": "Assign an IAM user to the Amazon EC2 instance."
                },
                {
                    "optionId": "C",
                    "optionText": "Assign an IAM role to the Amazon EC2 instance."
                },
                {
                    "optionId": "D",
                    "optionText": "Enable multi - factor authenticationfor the AWS root account."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 78,
            "questionText": "An AWS workload in a VPC is running a legacy database on an Amazon EC2 instance. Data is stored on a 200GB Amazon EBS (gp2) volume. At peak load times, logs show excessive wait time. What solution should be implemented to improve database performance using persistent storage?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Migrate the data on the Amazon EBS volume to an SSD-backed volume."
                },
                {
                    "optionId": "B",
                    "optionText": "Change the EC2 instance type to one with EC2 instance store volumes."
                },
                {
                    "optionId": "C",
                    "optionText": "Migrate the data on the EBS volume to provisioned IOPS SSD (io1)."
                },
                {
                    "optionId": "D",
                    "optionText": "Change the EC2 instance type to one with burstable performance."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 79,
            "questionText": "A company's website receives 50,000 requests each second, and the company wants to use multiple applications to analyze the navigation patterns of the users on their website so that the experience can be personalized. What can a Solutions Architect use to collect page clicks for the website and process them sequentially for each user?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon Kinesis Stream"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon SQS standard queue"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon SQS FIFO queue"
                },
                {
                    "optionId": "D",
                    "optionText": "AWS CloudTrail trail 2"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 80,
            "questionText": "A company wants to migrate a highly transactional database to AWS. Requirements state that the database has more than 6 TB of data and will grow exponentially. Which solution should a Solutions Architect recommend?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon Aurora"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon Redshift"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon DynamoDB"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon RDS MySQL"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 81,
            "questionText": "A company hosts a two-tier application that consists of a publicly accessible web server that communicates with a private database. Only HTTPS port 443 traffic to the web server must be allowed from the Internet. Which of the following options will achieve these requirements? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Security group rule that allows inbound Internet traffic for port 443."
                },
                {
                    "optionId": "B",
                    "optionText": "Security group rule that denies all inbound Internet traffic except port 443."
                },
                {
                    "optionId": "C",
                    "optionText": "Network ACL rule that allows port 443 inbound and all ports outbound for Internet traffic."
                },
                {
                    "optionId": "D",
                    "optionText": "Security group rule that allows Internet traffic for port 443 in both inbound and outbound."
                },
                {
                    "optionId": "E",
                    "optionText": "Network ACL rule that allows port 443 for both inbound and outbound for all Internet traffic."
                }
            ],
            "questionAnswer": "AC"
        },
        {
            "questionId": 82,
            "questionText": "A Solutions Architect is designing an Amazon VPC. Applications in the VPC must have private connectivity to Amazon DynamoDB in the same AWS Region. The design should route DynamoDB traffic through:",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "VPC peering connection."
                },
                {
                    "optionId": "B",
                    "optionText": "NAT gateway"
                },
                {
                    "optionId": "C",
                    "optionText": "VPC endpoint"
                },
                {
                    "optionId": "D",
                    "optionText": "AWS Direct Connect"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 83,
            "questionText": "A Solutions Architect is architecting a workload that requires a performant object-based storage system that must be shared with multiple Amazon EC2 instances. Which AWS service meets this requirement?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon EFS"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon S3"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon EBS"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon ElastiCache"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 84,
            "questionText": "A Solutions Architect is developing a solution for sharing files in an organization. The solution must allow multiple users to access the storage service at once from different virtual machines and scale automatically. It must also support le-level locking. Which storage service meets the requirements of this use case?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon S3"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon EFS"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon EBS"
                },
                {
                    "optionId": "D",
                    "optionText": "Cached Volumes"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 85,
            "questionText": "A company runs a legacy application with a single-tier architecture on an Amazon EC2 instance. Disk I/O is low, with occasional small spikes during business hours. The company requires the instance to be stopped from 8 PM to 8 AM daily. Which storage option is MOST appropriate for this workload?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon EC2 instance storage"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon EBS General Purpose SSD (gp2) storage"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon S3"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon EBS Provision IOPS SSD (io1) storage"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 86,
            "questionText": "As part of securing an API layer built on Amazon API gateway,a Solutions Architect has to authorize users who are currently authenticated by an existing identity provider.The users must be denied accessfor a period of one hour after three unsuccessful attempts.How can the Solutions Architect meet these requirements ?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use AWS IAM authorization and add least-privileged permissions to each respective IAM role."
                },
                {
                    "optionId": "B",
                    "optionText": "Use an API Gateway custom authorizer to invoke an AWS Lambda function to validate each user's identity."
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon Cognito user pools to provide built-in user management."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon Cognito user pools to integrate with external identity providers."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 87,
            "questionText": "An organization runs an online media site,hosted on - premises.An employee posted a product review that contained videos and pictures.The review went viral and the organization needs to handle the resulting spike in website traffic.What action would provide an immediate solution ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Redesign the website to use Amazon API Gateway,and use AWS Lambda to deliver content."
                },
                {
                    "optionId": "B",
                    "optionText": "Add server instances using Amazon EC2 and use Amazon Route 53 with a failover routing policy."
                },
                {
                    "optionId": "C",
                    "optionText": "Serve the images and videos via an Amazon CloudFront distribution created using the news site as the origin."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon ElasticCache for Redis for caching and reducing the load requests from the origin."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 88,
            "questionText": "A client notices that their engineers often make mistakes when creating Amazon SQS queues for their backend system.Which action should a Solutions Architect recommend to improve this process ?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use the AWS CLI to create queues using AWS IAM Access Keys."
                },
                {
                    "optionId": "B",
                    "optionText": "Write a script to create the Amazon SQS queue using AWS Lambda."
                },
                {
                    "optionId": "C",
                    "optionText": "Use AWS Elastic Beanstalk to automatically create the Amazon SQS queues."
                },
                {
                    "optionId": "D",
                    "optionText": "Use AWS CloudFormation Templates to manage the Amazon SQS queue creation."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 89,
            "questionText": "A development team is building an application with front - end and backend application tiers.Each tier consists of Amazon EC2 instances behind an ELB Classic Load Balancer.The instances run in Auto Scaling groups across multiple Availability Zones.The network team has allocated the 10.0 .0 .0 / 24 address space for this application. Only the front-end load balancer should be exposed to the Internet.There are concerns about the limited size of the address space and the ability of each tier to scale.What should the VPC subnet design be in each Availability Zone?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "One public subnet for the load balancer tier,one public subnet for the front - end tier,and one private subnet for the backend tier."
                },
                {
                    "optionId": "B",
                    "optionText": "One shared public subnet for all tiers of the application."
                },
                {
                    "optionId": "C",
                    "optionText": "One public subnet for the load balancer tier and one shared private subnet for the application tiers."
                },
                {
                    "optionId": "D",
                    "optionText": "One shared private subnet for all tiers of the application."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 90,
            "questionText": "A Solutions Architect must select the storage type for a big data application that requires very high sequential I / O. The data must persist if the instance is stopped.Which of the following storage types will provide the best at the LOWEST cost for the application?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "An Amazon EC2 instance store local SSD volume."
                },
                {
                    "optionId": "B",
                    "optionText": "An Amazon EBS provisioned IOPS SSD volume."
                },
                {
                    "optionId": "C",
                    "optionText": "An Amazon EBS throughput optimized HDD volume."
                },
                {
                    "optionId": "D",
                    "optionText": "An Amazon EBS general purpose SSD volume."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 91,
            "questionText": "Two Auto Scaling applications, Application A and Application B, currently run within a shared set of subnets. A Solutions Architect wants to make sure that Application A can make requests to Application B, but Application B should be denied from making requests to Application A. Which is the SIMPLEST solution to achieve this policy ?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Using security groups that reference the security groups of the other application"
                },
                {
                    "optionId": "B",
                    "optionText": "Using security groups that reference the application server's IP addresses"
                },
                {
                    "optionId": "C",
                    "optionText": "Using Network Access Control Lists to allow/deny tra􀂨c based on application IP addresses"
                },
                {
                    "optionId": "D",
                    "optionText": "Migrating the applications to separate subnets from each other"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 92,
            "questionText": "Legacy applications currently send messages through a single Amazon EC2 instance, which then routes the messages to the appropriate destinations. The Amazon EC2 instance is a bottleneck and single point of failure, so the company would like to address these issues.Which services could address this architectural use case?(Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon SNS"
                },
                {
                    "optionId": "B",
                    "optionText": "AWS STS"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon SQS"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon Route 53"
                },
                {
                    "optionId": "E",
                    "optionText": "AWS Glue"
                }
            ],
            "questionAnswer": "AC"
        },
        {
            "questionId": 93,
            "questionText": "A Solutions Architect needs to design an architecture for a new, mission - critical batch processing billing application. The application is required to run Monday, Wednesday,and Friday from 5 AM to 11 AM.2 Which is the MOST cost-effective Amazon EC2 pricing model?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon EC2 Spot Instances"
                },
                {
                    "optionId": "B",
                    "optionText": "On - Demand Amazon EC2 Instances"
                },
                {
                    "optionId": "C",
                    "optionText": "Scheduled Reserved Instances"
                },
                {
                    "optionId": "D",
                    "optionText": "Dedicated Amazon EC2 Instances"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 94,
            "questionText": "A workload consists of downloading an image from an Amazon S3 bucket, processing the image, and moving it to another Amazon S3 bucket. An Amazon EC2 instance runs a scheduled task every hour to perform the operation.How should a Solutions Architect redesign the process so that it is highly available ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Change the Amazon EC2 instance to compute optimized."
                },
                {
                    "optionId": "B",
                    "optionText": "Launch a second Amazon EC2 instance to monitor the health of the rest."
                },
                {
                    "optionId": "C",
                    "optionText": "Trigger a Lambda function when a new object is uploaded."
                },
                {
                    "optionId": "D",
                    "optionText": "Initially copy the images to an attached Amazon EBS volume."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 95,
            "questionText": "An application is running on an Amazon EC2 instance in a private subnet. The application needs to read and write data onto Amazon Kinesis Data Streams, and corporate policy requires that this traffic should not go to the internet. How can these requirements be met?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Configure a NAT gateway in a public subnet and route all traffic to Amazon Kinesis through the NAT gateway."
                },
                {
                    "optionId": "B",
                    "optionText": "Configure a gateway VPC endpoint for Kinesis and route all traffic to Kinesis through the gateway VPC endpoint."
                },
                {
                    "optionId": "C",
                    "optionText": "Configure an interface VPC endpoint for Kinesis and route all traffic to Kinesis through the gateway VPC endpoint."
                },
                {
                    "optionId": "D",
                    "optionText": "Configure an AWS Direct Connect private virtual interface for Kinesis and route all traffic to Kinesis through the virtual interface."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 96,
            "questionText": "A Solutions Architect is building an application that stores object data. Compliance requirements state that the data stored is immutable. Which service meets these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon S3"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon Glacier"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon EFS"
                },
                {
                    "optionId": "D",
                    "optionText": "AWS Storage Gateway"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 97,
            "questionText": "A Solutions Architect is designing a shared Amazon S3 bucket where corporate applications will save objects. How can the Architect ensure that when an application uploads an object to the Amazon S3 bucket, the object is encrypted?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Set a CORS configuration."
                },
                {
                    "optionId": "B",
                    "optionText": "Set a bucket policy to encrypt all Amazon S3 objects."
                },
                {
                    "optionId": "C",
                    "optionText": "Enable default encryption on the bucket."
                },
                {
                    "optionId": "D",
                    "optionText": "Set permission for users."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 98,
            "questionText": "An application tier currently hosts two web services on the same set of instances, listening on different ports. Which AWS service should a Solutions Architect use to route traffic to the service based on the incoming request path?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "AWS Application Load Balancer "
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon CloudFront "
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon Classic Load Balancer "
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon Route 53 "
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 99,
            "questionText": "A data analytics startup company asks a Solutions Architect to recommend an AWS data store options for indexed data. The data processing engine will generate and input more than 64 TB of processed data every day, with item sizes reaching up to 300 KB.The startup is flexible with data storage and is more interested in a database that requires minimal effort to scale with a growing dataset size. Which AWS data store service should the Architect recommend?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon RDS "
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon Redshift "
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon DynamoDB "
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon S3 "
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 100,
            "questionText": "A Solutions Architect needs to allow developers to have SSH connectivity to web servers.The requirements are as follows : ✑Limit access to users origination from the corporate network. ✑Web servers cannot have SSH access directly from the Internet. ✑Web servers reside in a private subnet. Which combination of steps must the Architect complete to meet these requirements?(Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a bastion host that authenticates users against the corporate directory."
                },
                {
                    "optionId": "B",
                    "optionText": "Create a bastion host with security group rules that only allow traffic from the corporate network."
                },
                {
                    "optionId": "C",
                    "optionText": "Attach an IAM role to the bastion host with relevant permissions."
                },
                {
                    "optionId": "D",
                    "optionText": "Configure the web servers ' security group to allow SSH traffic from a bastion host."
                },
                {
                    "optionId": "E",
                    "optionText": "Deny all SSH traffic from the corporate network in the inbound network ACL."
                }
            ],
            "questionAnswer": "BD"
        },
        {
            "questionId": 101,
            "questionText": "A Solutions Architect needs to use AWS to implement pilot light disaster recovery for a three-tier web application hosted in an on-premises datacenter. Which solution allows rapid provision of working, fully-scaled production environment?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Continuously replicate the production database server to Amazon RDS. Use AWS CloudFormation to deploy the application and any additional servers if necessary."
                },
                {
                    "optionId": "B",
                    "optionText": "Continuously replicate the production database server to Amazon RDS. Create one application load balancer and register on-premises servers. Configure ELB Application Load Balancer to automatically deploy Amazon EC2 instances for application and additional servers if the on-premises application is down."
                },
                {
                    "optionId": "C",
                    "optionText": "Use a scheduled Lambda function to replicate the production database to AWS. Use Amazon Route 53 health checks to deploy the application automatically to Amazon S3 if production is unhealthy."
                },
                {
                    "optionId": "D",
                    "optionText": "Use a scheduled Lambda function to replicate the production database to AWS. Register on-premises servers to an Auto Scaling group and deploy the application and additional servers if production is unavailable."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 102,
            "questionText": "A Solutions Architect notices slower response times from an application. The CloudWatch metrics on the MySQL RDS indicate Read IOPS are high and uctuate significantly when the database is under load. How should the database environment be re-designed to resolve the IOPS uctuation?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Change the RDS instance type to get more RAM."
                },
                {
                    "optionId": "B",
                    "optionText": "Change the storage type to Provisioned IOPS."
                },
                {
                    "optionId": "C",
                    "optionText": "Scale the web server tier horizontally."
                },
                {
                    "optionId": "D",
                    "optionText": "Split the DB layer into separate RDS instances."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 103,
            "questionText": "A Solutions Architect is designing a solution that can monitor memory and disk space utilization of all Amazon EC2 instances running Amazon Linux and Windows. Which solution meets this requirement?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Default Amazon CloudWatch metrics."
                },
                {
                    "optionId": "B",
                    "optionText": "Custom Amazon CloudWatch metrics."
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon Inspector resource monitoring."
                },
                {
                    "optionId": "D",
                    "optionText": "Default monitoring of Amazon EC2 instances."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 104,
            "questionText": "A Solutions Architect is creating a new relational database. The Compliance team will use the database, and mandates that data content must be stored across three different Availability Zones. Which of the following options should the Architect Use?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon Aurora"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon RDS MySQL with Multi-AZ enabled"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon DynamoDB"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon ElastiCache"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 105,
            "questionText": "A company needs to quickly ensure that all files created in an Amazon S3 bucket in us-east-1 are also available in another bucket in ap-southeast2. Which option represents the SIMPLIEST way to implement this design?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Add an S3 lifecycle rule to move any files from the bucket in us-east-1 to the bucket in ap-southeast-2."
                },
                {
                    "optionId": "B",
                    "optionText": "Create a Lambda function to be triggered for every new le in us-east-1 that copies the le to the bucket in ap-southeast-2."
                },
                {
                    "optionId": "C",
                    "optionText": "Use SNS to notify the bucket in ap-southeast-2 to create a le whenever the le is created in the bucket in us-east-1."
                },
                {
                    "optionId": "D",
                    "optionText": "Enable versioning and Configure cross-region replication from the bucket in us-east-1 to the bucket in ap-southeast-2."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 106,
            "questionText": "An organization has a long-running image processing application that runs on Spot Instances that will be terminated when interrupted. A highly available workload must be designed to respond to Spot Instance interruption notices. The solution must include a two-minute warning when there is not enough capacity. How can these requirements be met?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use Amazon CloudWatch Events to invoke an AWS Lambda function that can launch On-Demand Instances."
                },
                {
                    "optionId": "B",
                    "optionText": "Regularly store data from the application on Amazon DynamoDB. Increase the maximum number of instances in the AWS Auto Scaling group."
                },
                {
                    "optionId": "C",
                    "optionText": "Manually place a bid for additional Spot Instances at a higher price in the same AWS Region and Availability Zone."
                },
                {
                    "optionId": "D",
                    "optionText": "Ensure that the Amazon Machine Image associated with the application has the latest configurations for the launch configuration."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 107,
            "questionText": "A company has an Amazon RDS-managed online transaction processing system that has very heavy read and write. The Solutions Architect notices throughput issues with the system. How can the responsiveness of the primary database be improved?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use asynchronous replication for standby to maximize throughput during peak demand."
                },
                {
                    "optionId": "B",
                    "optionText": "Offload SELECT queries that can tolerate stale data to READ replica."
                },
                {
                    "optionId": "C",
                    "optionText": "Offload SELECT and UPDATE queries to READ replica."
                },
                {
                    "optionId": "D",
                    "optionText": "Offload SELECT query that needs the most current data to READ replica."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 108,
            "questionText": "A company is designing a failover strategy in Amazon Route 53 for its resources between two AWS Regions. The company must have the ability to route a user's traffic to the region with least latency, and if both regions are healthy, Route 53 should route traffic to resources in both regions.Which strategy should the Solutions Architect recommend ?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Configure active - active failover using Route 53 latency DNS records."
                },
                {
                    "optionId": "B",
                    "optionText": "Configure active - passive failover using Route 53 latency DNS records."
                },
                {
                    "optionId": "C",
                    "optionText": "Configure active - active failover using Route 53 failover DNS records."
                },
                {
                    "optionId": "D",
                    "optionText": "Configure active - passive failover using Route 53 failover DNS records."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 109,
            "questionText": "A company is developing several critical long - running applications hosted on Docker.How should a Solutions Architect design a solution to meet the scalability and orchestration requirements on AWS ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use Amazon ECS and Service Auto Scaling."
                },
                {
                    "optionId": "B",
                    "optionText": "Use Spot Instancesfor orchestration andfor scaling containers on existing Amazon EC2 instances."
                },
                {
                    "optionId": "C",
                    "optionText": "Use AWS OpsWorks to launch containers in new Amazon EC2 instances."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Auto Scaling groups to launch containers on existing Amazon EC2 instances."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 110,
            "questionText": "A Solutions Architect is developing a new web application on AWS.The Architect expects the application to become very popular,so the application must scale to support the load.The Architect wants to focus on software development and deploying new features without provisioning or managing instances.What solution is appropriate ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon API Gateway and AWS Lambda "
                },
                {
                    "optionId": "B",
                    "optionText": "Elastic Load Balancing with Auto Scaling groups and Amazon EC2 "
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon API Gateway and Amazon EC2 "
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon CloudFront and AWS Lambda "
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 111,
            "questionText": "A Solutions Architect is deploying a new production MySQL database on AWS.It is critical that the database is highly available.What should the Architect do to achieve this goal with Amazon RDS ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a read replica of the primary database and deploy it in a different AWS Region."
                },
                {
                    "optionId": "B",
                    "optionText": "Enable multi - AZ to create a standby database in a different Availability Zone."
                },
                {
                    "optionId": "C",
                    "optionText": "Enable multi - AZ to create a standby database in a different AWS Region."
                },
                {
                    "optionId": "D",
                    "optionText": "Create a read replica of the primary database and deploy it in a different Availability Zone."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 112,
            "questionText": "An organization designs a mobile application for their customers to upload photos to a site. The application needs a secure login with MFA. The organization wants to limit the initial build time and maintenance of the solution. Which solution should a Solutions Architect recommend to meet the requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use Amazon Cognito Identity with SMS-based MFA."
                },
                {
                    "optionId": "B",
                    "optionText": "Edit AWS IAM policies to require MFA for all users."
                },
                {
                    "optionId": "C",
                    "optionText": "Federate IAM against corporate AD that requires MFA."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon API Gateway and require SSE for photos."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 113,
            "questionText": "A Solutions Architect is designing a solution to monitor weather changes by the minute. The frontend application is hosted on Amazon EC2 instances. The backend must be scalable to a virtually unlimited size, and data retrieval must occur with minimal latency. Which AWS service should the Architect use to store the data and achieve these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon S3"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon DynamoDB"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon RDS"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon EBS"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 114,
            "questionText": "A company hosts a website on premises. The website has a mix of static and dynamic content, but users experience latency when loading static files. Which AWS service can help reduce latency?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon CloudFront with on-premises servers as the origin"
                },
                {
                    "optionId": "B",
                    "optionText": "ELB Application Load Balancer"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon Route 53 latency-based routing"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon EFS to store and server static files"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 115,
            "questionText": "A company wants to analyze all of its sales information aggregated over the last 12 months. The company expects there to be over 10TB of data from multiple sources. What service should be used?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon DynamoDB"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon Aurora MySQL"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon RDS MySQL"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon Redshift"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 116,
            "questionText": "A media company has deployed a multi-tier architecture on AWS. Web servers are deployed in two Availability Zones using an Auto Scaling group with a default Auto Scaling termination policy. The web servers' Auto Scaling group currently has 15 instances running. Which instance will be terminated rest during a scale-in operation?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "The instance with the oldest launch configuration."
                },
                {
                    "optionId": "B",
                    "optionText": "The instance in the Availability Zone that has most instances."
                },
                {
                    "optionId": "C",
                    "optionText": "The instance closest to the next billing hour."
                },
                {
                    "optionId": "D",
                    "optionText": "The oldest instance in the group."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 117,
            "questionText": "A retail company has sensors placed in its physical retail stores. The sensors send messages over HTTP when customers interact with in-store product displays. 3, A Solutions Architect needs to implement a systemfor processing those sensor messages;the results must be availablefor the Data Analysis team.Which architecture should be used to meet these requirements ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Implement an Amazon API Gateway to server as the HTTP endpoint.Have the API Gateway trigger an AWS Lambdafunction to process the messages,and save the results to an Amazon DynamoDB table."
                },
                {
                    "optionId": "B",
                    "optionText": "Create an Amazon EC2 instance to server as the HTTP endpoint and to process the messages.Save the results to Amazon S3for the Data Analysis team to download."
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon Route 53 to direct incoming sensor messages to a Lambdafunction to process the message and save the results to a Amazon DynamoDB table."
                },
                {
                    "optionId": "D",
                    "optionText": "Use AWS Direct Connect to connect sensors to DynamoDB so that data can be written directly to a DynamoDB table where it can be accessed by the Data Analysis team."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 118,
            "questionText": "A client is migrating a legacy web application to the AWS Cloud.The current system uses an Oracle database as a relational database management system solution.Backups occur every night,and the data is stored on - premises.The Solutions Architect must automate the backups and identity a storage solutionwhile keeping costs low.Which AWS service will meet these requirements ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon RDS "
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon RedShift "
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon DynamoDB Accelerator "
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon ElastiCache "
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 119,
            "questionText": "A company has an Amazon RDS database backing its production website.The Sales team needs to run queries against the database to track training program effectiveness.Queries against the production database cannot impact performance,and the solution must be easy to maintain.How can these requirements be met ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use an Amazon Redshift database.Copy the product database into Redshift and allow the team to query it."
                },
                {
                    "optionId": "B",
                    "optionText": "Use an Amazon RDS read replica of the production database and allow the team to query against it."
                },
                {
                    "optionId": "C",
                    "optionText": "Use multiple Amazon EC2 instances running replicas of the production database,placed behind a load balancer."
                },
                {
                    "optionId": "D",
                    "optionText": "Use an Amazon DynamoDB table to store a copy of the data."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 120,
            "questionText": "A company must collect temperature data from thousands of remote weather devices.The company must also store this data in a data warehouse to run aggregations and visualizations.Which services will meet these requirements ? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon Kinesis Data Firehouse "
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon SQS "
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon Redshift "
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon SNS E.Amazon DynamoDB "
                }
            ],
            "questionAnswer": "AC"
        },
        {
            "questionId": 121,
            "questionText": "A company has a legal requirement to store point - in -time copies of its Amazon RDS PostGreSQL database instance in facilities that are at least 200 miles apart.Use of which of the following provides the easiest way to comply with this requirement ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Cross - region read replica "
                },
                {
                    "optionId": "B",
                    "optionText": "Multiple Availability Zone snapshot copy "
                },
                {
                    "optionId": "C",
                    "optionText": "Multiple Availability Zone read replica "
                },
                {
                    "optionId": "D",
                    "optionText": "Cross - region snapshot copy "
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 122,
            "questionText": "After reviewing their logs, a startup company noticed large, random spikes in traffic to their web application. The company wants to Configure a cost-efficient cient Auto Scaling solution to support high availability of the web application. Which scaling plan should a Solutions Architect recommend to meet the company's needs?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Dynamic"
                },
                {
                    "optionId": "B",
                    "optionText": "Scheduled"
                },
                {
                    "optionId": "C",
                    "optionText": "Manual"
                },
                {
                    "optionId": "D",
                    "optionText": "Lifecycle"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 123,
            "questionText": "To meet compliance standards,a company must have encrypted archival data storage.Data will be accessed infrequently,with lead times well in advance of when archived data must be recovered.The company requires that the storage be secure,durable,and provided at the lowest price per 1 TB of data stored.What type of storage should be used ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon S3 "
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon EBS "
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon Glacier "
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon EFS "
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 124,
            "questionText": "An online company wants to conduct real-time sentiment analysis about its products from its social media channels using SQL. Which of the following solutions has the LOWEST cost and operational burden?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Set up a streaming data ingestion application on Amazon EC2 and connect it to a Hadoop cluster for data processing. Send the output to Amazon S3 and use Amazon Athena to analyze the data."
                },
                {
                    "optionId": "B",
                    "optionText": "Configure the input stream using Amazon Kinesis Data Streams. Use Amazon Kinesis Data Analytics to write SQL queries against the stream."
                },
                {
                    "optionId": "C",
                    "optionText": "Configure the input stream using Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to send data to an Amazon Redshift cluster, and then query directly against Amazon Redshift"
                },
                {
                    "optionId": "D",
                    "optionText": "Set up streaming data ingestion application on Amazon EC2 and send the output to Amazon S3 using Kinesis Data Firehose. Use Athena to analyze the data."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 125,
            "questionText": "An organization must process a stream of large - volume hashtag data in real time and needs to run custom SQL queries on the data to get insights on certain tags.The organization needs this solution to be elastic and does not want to manage clusters.Which of the following AWS services meets these requirements ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon Elasticsearch Service "
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon Athena "
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon Redshift "
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon Kinesis Data Analytics "
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 126,
            "questionText": "Which requirements must be met in order for a Solutions Architect to specify that an Amazon EC2 instance should stop rather than terminate when its Spot Instance is interrupted? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "The Spot Instance request type must be one-time."
                },
                {
                    "optionId": "B",
                    "optionText": "The Spot Instance request type must be persistent."
                },
                {
                    "optionId": "C",
                    "optionText": "The root volume must be an Amazon EBS volume."
                },
                {
                    "optionId": "D",
                    "optionText": "The root volume must be an instance store volume."
                },
                {
                    "optionId": "E",
                    "optionText": "The launch Configuration is changed."
                }
            ],
            "questionAnswer": "BC"
        },
        {
            "questionId": 127,
            "questionText": "An application hosted on AWS uses object storage for storing internal reports that are accessed daily by the CFO.Currently, these reports are publicly available.How should a Solutions Architect re - design this architecture to prevent unauthorized access to these reports ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Encrypt the files on the client side and store the files on Amazon Glacier,then decrypt the reports on the client side."
                },
                {
                    "optionId": "B",
                    "optionText": "Move the files to Amazon ElastiCache and provide a username and passwordfor downloading the reports."
                },
                {
                    "optionId": "C",
                    "optionText": "Specify the use of AWS KMS server - side encryption at the time of an object creation on Amazon S3."
                },
                {
                    "optionId": "D",
                    "optionText": "Store the files on Amazon S3 and use the application to generate S3 pre - signed URLs to users."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 128,
            "questionText": "A Solutions Architect is designing an application on AWS that will connect to the on - premise data center through a VPN connection.The solution must be able to log network traffic over the VPN.Which service logs this network traffic ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "AWS CloudTrail logs "
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon VPC flow logs "
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon S3 bucket logs "
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon CloudWatch Logs "
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 129,
            "questionText": "A company wants to durably store data in 8 KB chunks.The company will access the data once every few months.However,when the company does access the data,it must be done with as little latency as possible.Which AWS service should a Solutions Architect recommendif cost is NOT a factor ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon DynamoDB "
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon EBS Throughput Optimized HDD Volumes "
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon EBS Cold HDD Volumes "
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon ElastiCache "
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 130,
            "questionText": "A media company has more than 100 TB of data to be stored and retrieved infrequently.However,the company occasionally receives requestsfor data within an hour.The company needs a low - cost retrieval method to handle the requests.Which service meets this requirement ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon S3 Standard "
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon Glacier standard retrievals "
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon Glacier bulk retrievals D Amazon S3 Standard Infrequent Access 3 "
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon S3 Standard Infrequent Access "
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 131,
            "questionText": " An on-premises database is experiencing significant performance problems when running SQL queries. With 10 users, the lookups are performing as expected. As the number of users increases, the lookups take three times longer than expected to return values to an application. Which action should a Solutions Architect take to maintain performance as the user count increases?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use Amazon SQS."
                },
                {
                    "optionId": "B",
                    "optionText": "Deploy Multi-AZ RDS MySQL"
                },
                {
                    "optionId": "C",
                    "optionText": "Configure Amazon RDS with additional read replicas."
                },
                {
                    "optionId": "D",
                    "optionText": "Migrate from MySQL to RDS Microsoft SQL Server."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 132,
            "questionText": "A team has an application that detects new objects being uploaded into an Amazon S3 bucket. The uploads trigger a Lambda function to write object metadata into an Amazon DynamoDB table and RDS PostgreSQL database. Which action should the team take to ensure high availability?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Enable cross-region replication in the Amazon S3 bucket."
                },
                {
                    "optionId": "B",
                    "optionText": "Create a Lambda function for each Availability Zone the application is deployed in."
                },
                {
                    "optionId": "C",
                    "optionText": "Enable multi-AZ on the RDS PostgreSQL database."
                },
                {
                    "optionId": "D",
                    "optionText": "Create a DynamoDB stream for the DynamoDB table."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 133,
            "questionText": "A media company must store 10 TB of audio recordings. Retrieval happens infrequently and requestors agree on an 8-hour turnaround time. What is the MOST cost-effective solution to store the files?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon S3 Standard / Ifrequent Access (Standard IA)"
                },
                {
                    "optionId": "B",
                    "optionText": "EBS Throughput Optimized HDD (st1)"
                },
                {
                    "optionId": "C",
                    "optionText": "EBS Cold HDD (sc1)"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon Glacier"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 134,
            "questionText": "A company wants to improve the performance of their web application after receiving customer complaints. An analysis concluded that the same complex database queries were causing increased latency. What should a Solutions Architect recommend to improve the application's performance?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Migrate the database to MySQL."
                },
                {
                    "optionId": "B",
                    "optionText": "Use Amazon RedShift to analyze the queries."
                },
                {
                    "optionId": "C",
                    "optionText": "Integrate Amazon ElastiCache into the application."
                },
                {
                    "optionId": "D",
                    "optionText": "Use a Lambda-triggered request to the backend database."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 135,
            "questionText": "Which tool analyzes account resources and provides a detailed inventory of changes over time?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "AWS Con g"
                },
                {
                    "optionId": "B",
                    "optionText": "AWS CloudFormation"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon CloudWatch"
                },
                {
                    "optionId": "D",
                    "optionText": "AWS Service Catalog"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 136,
            "questionText": "A Solutions Architect is designing a solution that will include a database in Amazon RDS. Corporate security policy mandates that the database, its logs, and its backups are all encrypted. Which is the MOST efficient option to fulfill the security policy using Amazon RDS?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Launch an Amazon RDS instance with encryption enabled. Enable encryption for logs and backups."
                },
                {
                    "optionId": "B",
                    "optionText": "Launch an Amazon RDS instance. Enable encryption for database, logs and backups."
                },
                {
                    "optionId": "C",
                    "optionText": "Launch an Amazon RDS instance with encryption enabled. Logs and backups are automatically encrypted."
                },
                {
                    "optionId": "D",
                    "optionText": "Launch an Amazon RDS instance. Enable encryption for backups. Encrypt logs with a database-engine feature."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 137,
            "questionText": "A Solutions Architect is designing a public-facing web application for employees to upload images to their social media account. The application consists of multiple Amazon EC2 instances behind an elastic load balancer, an Amazon S3 bucket where uploaded images are stored, and an Amazon DynamoDB table for storing image metadata. Which AWS service can the Architect use to automate the process of updating metadata in the DynamoDB table upon image upload?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon CloudWatch"
                },
                {
                    "optionId": "B",
                    "optionText": "AWS CloudFormation"
                },
                {
                    "optionId": "C",
                    "optionText": "AWS Lambda"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon SQS"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 138,
            "questionText": "A company's policy requires that all data stored in Amazon S3 is encrypted. The company wants to use the option with the least overhead and does not want to manage any encryption keys. Which of the following options will meet the company's requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "AWS CloudHSM"
                },
                {
                    "optionId": "B",
                    "optionText": "AWS Trusted Advisor"
                },
                {
                    "optionId": "C",
                    "optionText": "Server Side Encryption (SSE-S3)"
                },
                {
                    "optionId": "D",
                    "optionText": "Server Side Encryption (SSE-KMS)"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 139,
            "questionText": "A company has gigabytes of web log files stored in an Amazon S3 bucket. A Solutions Architect wants to copy those files into Amazon Redshift for analysis. The company's security policy mandates that data is encrypted at rest both in the Amazon Redshift cluster and the Amazon S3 bucket. Which process will fulfill the security requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Enable server-side encryption on the Amazon S3 bucket. Launch an unencrypted Amazon Redshift cluster. Copy the data into the Amazon Redshift cluster."
                },
                {
                    "optionId": "B",
                    "optionText": "Enable server-side encryption on the Amazon S3 bucket. Copy data from the Amazon S3 bucket into an unencrypted Redshift cluster. Enable encryption on the cluster."
                },
                {
                    "optionId": "C",
                    "optionText": "Launch an encrypted Amazon Redshift cluster. Copy the data from the Amazon S3 bucket into the Amazon Redshift cluster. Copy data back to the Amazon S3 bucket in encrypted form."
                },
                {
                    "optionId": "D",
                    "optionText": "Enable server-side encryption on the Amazon S3 bucket. Launch an encrypted Amazon Redshift cluster. Copy the data into the Amazon Redshift cluster."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 140,
            "questionText": "An application runs on Amazon EC2 instances in an Auto Scaling group. When instances are terminated, the Systems Operations team cannot determine the route cause, because the logs reside on the terminated instances and are lost. How can the root cause be determined?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use ephemeral volumes to store the log files."
                },
                {
                    "optionId": "B",
                    "optionText": "Use a scheduled Amazon CloudWatch Event to take regular Amazon EBS snapshots."
                },
                {
                    "optionId": "C",
                    "optionText": "Use an Amazon CloudWatch agent to push the logs to Amazon CloudWatch Logs. 4"
                },
                {
                    "optionId": "D",
                    "optionText": "Use AWS CloudTrail to pull the logs from the Amazon EC2 instances."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 141,
            "questionText": "A Solutions Architect is designing a customer order processing application that will likely have high usage spikes. What should the Architect do to ensure that customer orders are not lost before being written to an Amazon RDS database? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use Amazon CloudFront to deliver the application front end."
                },
                {
                    "optionId": "B",
                    "optionText": "Use Elastic Load Balancing with a round-robin routing algorithm."
                },
                {
                    "optionId": "C",
                    "optionText": "Have the orders written into an Amazon SQS queue."
                },
                {
                    "optionId": "D",
                    "optionText": "Scale the number of processing nodes based on pending order volume."
                },
                {
                    "optionId": "E",
                    "optionText": "Have a standby Amazon RDS instance in a separate Availability Zone."
                }
            ],
            "questionAnswer": "CD"
        },
        {
            "questionId": 142,
            "questionText": "Employees from several companies use an application once a year during a speci c 30-day period. The periods are different for each company. traffic to the application spikes during these 30-day periods. How can the application be designed to handle these traffic spikes?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use an Amazon Route 53 latency routing policy to route traffic to an Amazon EC2 instance with the least lag time."
                },
                {
                    "optionId": "B",
                    "optionText": "Use Amazon S3 to cache static elements of the website requests."
                },
                {
                    "optionId": "C",
                    "optionText": "Use an Auto Scaling group to scale the number of EC2 instances to match the site traffic."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon Cloud Front to serve static assets to decrease the load on the EC2 instances."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 143,
            "questionText": "A restaurant reservation application needs the ability to maintain a waiting list. When a customer tries to reserve a table, and none are available, the customer must be put on the waiting list, and the application must notify the customer when a table becomes free. What service should the Solutions Architect recommend to ensure that the system respects the order in which the customer requests are put onto the waiting list?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon SNS"
                },
                {
                    "optionId": "B",
                    "optionText": "AWS Lambda with sequential dispatch"
                },
                {
                    "optionId": "C",
                    "optionText": "A FIFO queue in Amazon SQS"
                },
                {
                    "optionId": "D",
                    "optionText": "A standard queue in Amazon SQS"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 144,
            "questionText": "A Solutions Architect is designing a solution for a dynamic website, 'example.com', that is deployed in two regions: Tokyo, Japan and Sydney, Australia. The 4 Architect wants to ensure that users located in Australia are directed to the website deployed in the Sydney region and users located in Japan are redirected to the website in the Tokyo region when they browse to 'example.com'. Which service should the Architect use to achieve this goal with the LEAST administrative effort?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon CloudFront with geolocation routing"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon Route 53"
                },
                {
                    "optionId": "C",
                    "optionText": "Application Load Balancer"
                },
                {
                    "optionId": "D",
                    "optionText": "Network Load Balancer deployed across multiple regions"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 145,
            "questionText": "A company has a popular multi-player mobile game hosted in its on-premises datacenter. The current infrastructure can no longer keep up with demand and the company is considering a move to the cloud. Which solution should a Solutions Architect recommend as the MOST scalable and cost-effective solution to meet these needs?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon EC2 and an Application Load Balancer"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon S3 and Amazon CloudFront"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon EC2 and Amazon Elastic Transcoder"
                },
                {
                    "optionId": "D",
                    "optionText": "AWS Lambda and Amazon API Gateway"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 146,
            "questionText": "A company has instances in private subnets that require outbound access to the internet. This requires:",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Assigning a public IP address to the instance."
                },
                {
                    "optionId": "B",
                    "optionText": "Updating the route table associated with the subnet to point internet traffic through a NAT gateway."
                },
                {
                    "optionId": "C",
                    "optionText": "Updating the security group associated with the subnet to allow ingress on 0.0.0.0/0."
                },
                {
                    "optionId": "D",
                    "optionText": "Routing traffic from the instance through a VPC endpoint that has internet access."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 147,
            "questionText": "An organization regularly backs up their application data. The application backups are required to be stored on Amazon S3 for a certain amount of time. The backups should be accessed instantly in the event of a disaster recovery. Which of the following Amazon S3 storage classes would be the MOST cost-effective option to meet the needs of this scenario?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Glacier Storage Class"
                },
                {
                    "optionId": "B",
                    "optionText": "Standard Storage Class"
                },
                {
                    "optionId": "C",
                    "optionText": "Standard Infrequent Access (IA)"
                },
                {
                    "optionId": "D",
                    "optionText": "Reduced Redundancy Class (RRS) 46/29/2020 y ( )"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 148,
            "questionText": "An organization runs an online voting system for a television program. During broadcasts, hundreds of thousands of votes are submitted within minutes and sent to a front-end fleet of auto-scaled Amazon EC2 instances. The EC2 instances push the votes to an RDBMS database. The database is unable to keep up with the front-end connection requests. What is the MOST efficient and cost-effective way of ensuring that votes are processed in a timely manner?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Each front-end node should send votes to an Amazon SQS queue. Provision worker instances to read the SQS queue and process the message information into RDBMS database."
                },
                {
                    "optionId": "B",
                    "optionText": "As the load on the database increases, horizontally-scale the RDBMS database with additional memory-optimized instances. When voting has ended, scale down the additional instances."
                },
                {
                    "optionId": "C",
                    "optionText": "Re-provision the RDBMS database with larger, memory-optimized instances. When voting ends, re-provision the back-end database with smaller instances."
                },
                {
                    "optionId": "D",
                    "optionText": "Send votes from each front-end node to Amazon DynamoDB. Provision worker instances to process the votes in DynamoDB into the RDBMS database."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 149,
            "questionText": "An application publishes Amazon SNS messages in response to several events. An AWS Lambda function subscribes to these messages. Occasionally the function will fail while processing a message, so the original event message must be preserved for root cause analysis. What architecture will meet these requirements without changing the work ow?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Subscribe an Amazon SQS queue to the Amazon SNS topic and trigger the Lambda function from the queue."
                },
                {
                    "optionId": "B",
                    "optionText": "Configure Lambda to write failures to an SQS Dead Letter Queue."
                },
                {
                    "optionId": "C",
                    "optionText": "Configure a Dead Letter Queue for the Amazon SNS topic."
                },
                {
                    "optionId": "D",
                    "optionText": "Configure the Amazon SNS topic to invoke the Lambda function synchronously."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 150,
            "questionText": "An application uses an Amazon RDS MySQL cluster for the database layer. Database growth requires periodic resizing of the instance. Currently, administrators check the available disk space manually once a week. How can this process be improved?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use the largest instance type for the database."
                },
                {
                    "optionId": "B",
                    "optionText": "Use AWS CloudTrail to monitor storage capacity."
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon CloudWatch to monitor storage capacity."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Auto Scaling to increase storage size."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 151,
            "questionText": "A customer owns a MySQL database that is accessed by various clients who expect, at most, 100 ms latency on requests. Once a record is stored in the database, it rarely changed. Clients only access one record at a time. Database access has been increasing exponentially due to increased client demand. The resultant load will soon exceed the capacity of the most expensive hardware available for purchase. The customer wants to migrate to AWS, and is willing to change database systems. Which service would alleviate the database load issue and offer virtually unlimited scalability for the future?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon RDS"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon DynamoDB"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon Redshift"
                },
                {
                    "optionId": "D",
                    "optionText": "AWS Data Pipeline"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 152,
            "questionText": "A business team requires a structured storage solution to store all of a company's historical sales data. Currently there are 4 TB of data, which will grow to hundreds of terabytes within a few years. The team must be able to regularly run queries against the data using current business intelligence tools. Fast performance is required despite the dataset growth. Which solution should the company use?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon Redshift"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon Aurora"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon DynamoDB"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon S3"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 153,
            "questionText": "A prediction process requires access to a trained model that is stored in an Amazon S3 bucket. The process takes a few seconds to process an image and make a prediction. The process is not overly resource-intensive, does not require any specialized hardware, and takes filess than 512 MB of memory to run. What would be the MOST effective compute solution for this use case?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon ECS"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon EC2 Spot instances"
                },
                {
                    "optionId": "C",
                    "optionText": "AWS Lambda functions"
                },
                {
                    "optionId": "D",
                    "optionText": "AWS Elastic Beanstalk"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 154,
            "questionText": "An application that runs on an Amazon EC2 instance must make secure calls to Amazon S3 buckets. 4 Which steps can a Solutions Architect take to ensure that the calls are made without exposing credentials?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Generate an access key ID and a secret key, and assign an IAM role with least privilege."
                },
                {
                    "optionId": "B",
                    "optionText": "Create an IAM policy granting access to all services and assign it to the Amazon EC2 instance pro le."
                },
                {
                    "optionId": "C",
                    "optionText": "Create an IAM role granting least privilege and assign it to the Amazon EC2 instance pro le."
                },
                {
                    "optionId": "D",
                    "optionText": "Generate temporary access keys to grant users temporary access to the Amazon EC2 instance."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 155,
            "questionText": "A Solutions Architect needs to design a centralized logging solution for a group of web applications running on Amazon EC2 instances. The solution requires minimal development effort due to budget constraints. Which of the following should the Architect recommend?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a crontab job script in each instance to push the logs regularly to Amazon S3."
                },
                {
                    "optionId": "B",
                    "optionText": "Install and Configure Amazon CloudWatch Logs agent in the Amazon EC2 instances."
                },
                {
                    "optionId": "C",
                    "optionText": "Enable Amazon CloudWatch Events in the AWS Management Console."
                },
                {
                    "optionId": "D",
                    "optionText": "Enable AWS CloudTrail to map all API calls invoked by the applications."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 156,
            "questionText": "A company is using Amazon S3 as its local repository for weekly analysis reports. One of the company-wide requirements is to secure data at rest using encryption. The company chose Amazon S3 server-side encryption. The company wants to know how the object is decrypted when a GET request is issued. Which of the following answers this question?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "The user needs to place a PUT request to decrypt the object."
                },
                {
                    "optionId": "B",
                    "optionText": "The user needs to decrypt the object using a private key."
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon S3 manages encryption and decryption automatically."
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon S3 provides a server-side key for decrypting the object."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 157,
            "questionText": "A company is looking for a fully-managed solution to store its players' state information for a rapidly growing game. The application runs on multiple Amazon EC2 nodes, which can scale according to the incoming traffic. The request can be routed to any of the nodes, therefore, the state information must be stored in a centralized database. The players' state information needs to be read with strong consistency and needs conditional updates for any changes. Which service would be MOST cost-effective, and scale seamlessly?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon S3"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon DynamoDB"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon RDS"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon Redshift 4"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 158,
            "questionText": "An application is running on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. Four instances are required to handle a predictable traffic load. The Solutions Architect wants to ensure that the operation is fault-tolerant up to the loss of one Availability Zone. Which is the MOST cost-efficient cient way to meet these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Deploy two instances in each of three Availability Zones."
                },
                {
                    "optionId": "B",
                    "optionText": "Deploy two instances in each of two Availability Zones."
                },
                {
                    "optionId": "C",
                    "optionText": "Deploy four instances in each of two Availability Zones."
                },
                {
                    "optionId": "D",
                    "optionText": "Deploy one instance in each of three Availability Zones."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 159,
            "questionText": "A Solutions Architect is designing a three-tier web application that includes an Auto Scaling group of Amazon EC2 instances running behind an ELB Classic Load Balancer. The security team requires that all web servers must be accessible only through the Load Balancer, and that none of the web servers are directly accessible from the Internet. How should the Architect meet these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use a Load Balancer installed on an Amazon EC2 instance."
                },
                {
                    "optionId": "B",
                    "optionText": "Configure the web servers' security group to deny traffic from the public Internet."
                },
                {
                    "optionId": "C",
                    "optionText": "Create an Amazon CloudFront distribution in front of the ELB Classic Load Balancer."
                },
                {
                    "optionId": "D",
                    "optionText": "Configure the web tier security group to allow only traffic from the ELB Classic Load Balancer."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 160,
            "questionText": "A Solutions Architect is designing a web application that will be hosted on Amazon EC2 instances in a public subnet. The web application uses a MySQL database in a private subnet. The database should be accessible to database administrators. Which of the following options should the Architect recommend? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a bastion host in a public subnet, and use the bastion host to connect to the database."
                },
                {
                    "optionId": "B",
                    "optionText": "Log in to the web servers in the public subnet to connect to the database."
                },
                {
                    "optionId": "C",
                    "optionText": "Perform DB maintenance after using SSH to connect to the NAT Gateway in a public subnet."
                },
                {
                    "optionId": "D",
                    "optionText": "Create an IPSec VPN tunnel between the customer site and the VPC, and use the VPN tunnel to connect to the database."
                },
                {
                    "optionId": "E",
                    "optionText": "Attach an Elastic IP address to the database."
                }
            ],
            "questionAnswer": "AD"
        },
        {
            "questionId": 161,
            "questionText": "A web application running on Amazon EC2 instances writes data synchronously to an Amazon DynamoDB table Configured for 60 write capacity units. During normal operation the application writes 50 KB/s to the tale, but can scale up to 500 KB/ s during peak hours. The application is currently throttling errors from the DynamoDB table during peak hours. What is the MOST cost-efficient cient change to support the increased traffic with minimal changes to the application?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use Amazon SQS to manage the write operations to the DynamoDB table."
                },
                {
                    "optionId": "B",
                    "optionText": "Change DynamoDB table Configuration to 600 write capacity units."
                },
                {
                    "optionId": "C",
                    "optionText": "Increase the number of Amazon EC2 instances to support the traffic."
                },
                {
                    "optionId": "D",
                    "optionText": "Configure Amazon DynamoDB Auto Scaling to handle the extra demand."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 162,
            "questionText": "One company wants to share the contents of their Amazon S3 bucket with another company. Security requirements mandate that only the other company's AWS accounts have access to the contents of the Amazon S3 bucket. Which Amazon S3 feature will allow secure access to the Amazon S3 bucket?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Bucket policy"
                },
                {
                    "optionId": "B",
                    "optionText": "Object tagging"
                },
                {
                    "optionId": "C",
                    "optionText": "CORS configuration"
                },
                {
                    "optionId": "D",
                    "optionText": "Lifecycle policy"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 163,
            "questionText": "A Solutions Architect is designing a service that must have four Amazon EC2 instances running between 8 AM and 6 PM daily. The service requires one EC2 instance outside of those hours. What is the MOST cost-effective way to provide enough compute?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use one Amazon EC2 Reserved Instance and use an Auto Scaling group to add and remove EC2 instances based on CPU utilization."
                },
                {
                    "optionId": "B",
                    "optionText": "Use one Amazon EC2 On-Demand instance and use an Auto Scaling group to add and remove EC2 instances based on CPU utilization."
                },
                {
                    "optionId": "C",
                    "optionText": "Use one Amazon EC2 On-Demand instance and use an Auto Scaling Group scheduled action to add three EC2 Spot instances at 7:30 AM and remove three instances at 6:10 PM."
                },
                {
                    "optionId": "D",
                    "optionText": "Use one Amazon EC2 Reserved Instance and use an Auto Scaling Group scheduled action to add three EC2 On-Demand instances at 7:30 AM and remove three instances at 6:10 PM."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 164,
            "questionText": "A company plans to use an Amazon VPC to deploy a web application consisting of an elastic load balancer, a fleet of web and application servers, and an Amazon RDS MySQL database that should not be accessible from the Internet. The proposed design must be highly available and distributed over 4 two Availability Zones. What would be the MOST appropriate VPC design for this speci c use case?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Two public subnets for the elastic load balancer, two public subnets for the web servers, and two public subnets for Amazon RDS."
                },
                {
                    "optionId": "B",
                    "optionText": "One public subnet for the elastic load balancer, two private subnets for the web servers, and two private subnets for Amazon RDS."
                },
                {
                    "optionId": "C",
                    "optionText": "One public subnet for the elastic load balancer, one public subnet for the web servers, and one private subnet for the database."
                },
                {
                    "optionId": "D",
                    "optionText": "Two public subnets for the elastic load balancer, two private subnets for the web servers, and two private subnets for RDS."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 165,
            "questionText": "A workload in an Amazon VPC consists of a single web server launched from a custom AMI. Session state is stored in a database. How should the Solutions Architect modify this workload to be both highly available and scalable?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a launch Configuration with a desired capacity of two web servers across multiple Availability Zones. Create an Auto Scaling group with the AMI ID of the web server image. Use Amazon Route 53 latency-based routing to balance traffic across the Auto Scaling group."
                },
                {
                    "optionId": "B",
                    "optionText": "Create a launch Configuration with the AMI ID of the web server image. Create an Auto Scaling group using the newly-created launch configuration, and a desired capacity of two web servers across multiple regions. Use an Application Load Balancer (ALB) to balance traffic across the Auto Scaling group."
                },
                {
                    "optionId": "C",
                    "optionText": "Create a launch Configuration with the AMI ID of the web server image. Create an Auto Scaling group using the newly-created launch configuration, and a desired capacity of two web servers across multiple Availability Zones. Use an ALB to balance traffic across the Auto Scaling group."
                },
                {
                    "optionId": "D",
                    "optionText": "Create a launch Configuration with the AMI ID of the web server image. Create an Auto Scaling group using the newly-created launch configuration, and a desired capacity of two web servers across multiple Availability Zones. Use Amazon Route 53 weighted routing to balance traffic across the Auto Scaling group."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 166,
            "questionText": "A Solutions Architect is developing a new web application on AWS. The services must scale to support an increasing load. The Architect wants to focus on software development and deploying new features rather than provisioning or managing servers. Which AWS service is appropriate?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Auto Scaling"
                },
                {
                    "optionId": "B",
                    "optionText": "Elastic Beanstalk"
                },
                {
                    "optionId": "C",
                    "optionText": "EC2 Container Service"
                },
                {
                    "optionId": "D",
                    "optionText": "CloudFormation"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 167,
            "questionText": "A company wants to migrate a three-tier web application to AWS. The company wants to control the placement of the instances and have visibility into underlying sockets and cores for licensing purposes. Which compute model should a Solutions Architect choose to accomplish this task?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "EC2 Reserved Instances"
                },
                {
                    "optionId": "B",
                    "optionText": "EC2 Spot Instances"
                },
                {
                    "optionId": "C",
                    "optionText": "EC2 Dedicated Hosts"
                },
                {
                    "optionId": "D",
                    "optionText": "EC2 Placement Groups"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 168,
            "questionText": "An application runs on multiple Amazon EC2 instances. Each running instance of the application must have access to a shared le system. Where should the data be stored?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon S3"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon DynamoDB"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon EFS"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon EBS"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 169,
            "questionText": "A Solutions Architect is designing a microservice to process records from Amazon Kinesis Streams. The metadata must be stored in Amazon DynamoDB. The microservice must be capable of concurrently processing 10,000 records daily as they arrive in the Kinesis stream. The MOST scalable way to design the microservice is:",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "As an AWS Lambda function."
                },
                {
                    "optionId": "B",
                    "optionText": "As a process on an Amazon EC2 instance."
                },
                {
                    "optionId": "C",
                    "optionText": "As a Docker container running on Amazon ECS."
                },
                {
                    "optionId": "D",
                    "optionText": "As a Docker container on an EC2 instance."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 170,
            "questionText": "A university is running an internal web application on AWS that students can access from the university network to check their exam results. The web application runs on Amazon EC2 instances and pulls results from an Amazon DynamoDB table. Auto Scaling is currently Configured to add a new web server when CPU is greater than 80% for 5 minutes. DynamoDB is Configured to increase both read and write capacity units by ve when utilization is greater than 80%. Exam results are released at 9:00 a.m. each Monday, and 80% of students, attempt to access their unique result within the rest 30 minutes. Despite Auto Scaling being enabled, students are complaining of slow response times and errors when they view the site. There are no performance complaints after 9:30 a.m. on Monday. 56/29/2020 p p y Which recommendation should a Solutions Architect make to improve performance in a cost-effective manner?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Scale out the EC2 instances to ensure that the environment scales up and down based on the highest load."
                },
                {
                    "optionId": "B",
                    "optionText": "Implement Amazon DynamoDB Accelerator to improve database performance and remove the need to scale the read/write units."
                },
                {
                    "optionId": "C",
                    "optionText": "Use a scheduled job to scale out EC2 before 9:00 a.m. on Monday and to scale down after 9:30 a.m."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon CloudFront to cache web request and reduce the load on EC2 and DynamoDB."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 171,
            "questionText": "As part of a migration strategy, a Solutions Architect needs to analyze workloads that can be optimized for performance and cost. The Solutions Architect has identified a stateless application that serves static content as a potential candidate to move to the cloud. The Solutions Architect has the exibility to choose an identity solution between Facebook, Twitter, and Amazon. Which AWS solution offers exibility and ease of use, and the LEAST operational overhead for this migration?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use AWS Identity and Access Management (IAM) for managing identities, and migrate the application to run on Amazon S3, Amazon API Gateway, and AWS Lambda."
                },
                {
                    "optionId": "B",
                    "optionText": "Use a third-party solution for managing identities, and migrate the application to run on Amazon S3, EC2 Spot Instances, and Amazon EC2."
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon Cognito for managing identities, and migrate the application to run on Amazon S3, Amazon API Gateway, and AWS Lambda."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon Cognito for managing identities, and migrate the application to run on Amazon S3, EC2 Spot Instances, and Amazon EC2."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 172,
            "questionText": "A company needs to capture all client connection information from its Application Load Balancer every ve minutes. This data will be used to analyze traffic patterns and troubleshoot the application. How can a Solutions Architect meet this requirement?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Enable AWS CloudTrail for the Application Load Balancer."
                },
                {
                    "optionId": "B",
                    "optionText": "Enable Access Logs on the Application Load Balancer."
                },
                {
                    "optionId": "C",
                    "optionText": "Install CloudWatch Agent on the Application Load Balancer."
                },
                {
                    "optionId": "D",
                    "optionText": "Enable CloudWatch metrics on the Application Load Balancer."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 173,
            "questionText": "An application runs on EC2 instances behind an Elastic Load Balancing Application Load Balancer. The instances run in an EC2 Auto Scaling group across multiple Availability Zones. The application provides a RESTful interface with both synchronous and asynchronous operations. The asynchronous operations require up to 5 minutes to complete. Although the application must remain available at all times, after business hours, the traffic going to the application is greatly reduced and often results in the Auto Scaling group running the minimum number of On-Demand Instances. What should the Solutions Architect recommend to optimize the cost of the environment after business hours?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Change the Availability Zones in which the instances were created to another Availability Zone in the same region with a lower cost."
                },
                {
                    "optionId": "B",
                    "optionText": "Replace all On-Demand Instances with Spot Instances in the Auto Scaling group."
                },
                {
                    "optionId": "C",
                    "optionText": "Purchase Reserved Instances for the minimum number of Auto Scaling instances. 5"
                },
                {
                    "optionId": "D",
                    "optionText": "Reduce the number of minimum instances to 0. New requests to the Application Load Balancer create new instances."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 174,
            "questionText": "A Solutions Architect is designing a web application for document sharing. The users will upload documents that are then made available to other users. There will be tens of thousands of these documents. What is the MOST cost-effective storage solution?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon EFS"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon S3"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon Glacier"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon EBS"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 175,
            "questionText": "A Solutions Architect was tasked with reviewing several templates that build VPCs and ensuring that they meet speci c security requirements. After reviewing the templates, the Architect realizes that all of the templates are missing important security best practices. What should the Architect do to implement security best practices in an efficient manner?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use VPC peering to enforce network consistency"
                },
                {
                    "optionId": "B",
                    "optionText": "Restrict users from deploying an AWS CloudFormation template"
                },
                {
                    "optionId": "C",
                    "optionText": "Provide the teams a nested AWS CloudFormation template that builds the VPC correctly"
                },
                {
                    "optionId": "D",
                    "optionText": "Create AWS Identity and Access Management (IAM) policies that enforce the corporate VPC architecture standards"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 176,
            "questionText": "A Solutions Architect has been given the following requirements for a company's VPC: ✑ The solution is a two-tiered application with a web tier and a database tier. ✑ All web traffic to the environment must be directed from the Internet to an Application Load Balancer. ✑ The web servers and the databases should not obtain public IP addresses or be directly accessible from the public Internet. ✑ Because of security requirements, databases may not share a route table or subnet with any other service. ✑ The environment must be highly available within the same VPC for all services. What is the minimum number of subnets that the Solutions Architect will need based on these requirements and best practices?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "2"
                },
                {
                    "optionId": "B",
                    "optionText": "3"
                },
                {
                    "optionId": "C",
                    "optionText": "4"
                },
                {
                    "optionId": "D",
                    "optionText": "6"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 177,
            "questionText": "An application currently stores objects in Amazon S3-Standard. The application accesses new objects frequently for one week. After one week, they are accessed occasionally for analysis batch jobs. A Solutions Architect has been asked to reduce storage costs for the application while allowing immediate access for batch jobs. How can costs be reduced without reducing data durability?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a lifecycle policy that moves Amazon S3 data to Amazon S3 One Zone-Infrequent Access storage after 7 days. After 30 days, move the data to Amazon Glacier."
                },
                {
                    "optionId": "B",
                    "optionText": "Keep the data on Amazon S3, and create a lifecycle policy to move S3 data to Amazon Glacier after 7 days."
                },
                {
                    "optionId": "C",
                    "optionText": "Move all Amazon S3 data to S3 Standard-Infrequent Access storage, and create a lifecycle policy to move the data to Amazon Glacier after 7 days."
                },
                {
                    "optionId": "D",
                    "optionText": "Keep the data on Amazon S3, then create a lifecycle policy to move the data to S3 Standard-Infrequent Access storage after 7 days."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 178,
            "questionText": "A company is building a critical ingestion service on AWS that will receive 1000 incoming events per second. The events must be processed in order, and no events may be lost. Multiple applications will need to process each event.The company will expose the service as RESTful calls through an API Gateway.What should a Solutions Architect use to receive the events based on these requirements ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon Kinesis Data Stream"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon DynamoDB"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon SQS"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon SNS"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 179,
            "questionText": "An AWS Lambda function requires access to an Amazon RDS for SQL Server instance. It is against company policy to store passwords in Lambda functions. How can a Solutions Architect enable the Lambda function to retrieve the database password without violating company policy?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Add an IAM policy for IAM database access to the Lambda execution role."
                },
                {
                    "optionId": "B",
                    "optionText": "Store a one-way hash of the password in the Lambda function."
                },
                {
                    "optionId": "C",
                    "optionText": "Have the Lambda function use the AWS Systems Manager Parameter Store."
                },
                {
                    "optionId": "D",
                    "optionText": "Connect to the Amazon RDS for SQL Server instance by using a role assigned to the Lambda function."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 180,
            "questionText": "A company has two different types of reporting needs on their 200-GB data warehouse: ✑ Data scientists run a small number of concurrent ad hoc SQL queries that can take several minutes each to run. 5 ✑ Display screens throughout the company run many fast SQL queries to populate dashboards. Which design would meet these requirements with the LEAST cost?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Replicate relevant data between Amazon Redshift and Amazon DynamoDB. Data scientists use Redshift. Dashboards use DynamoDB."
                },
                {
                    "optionId": "B",
                    "optionText": "Configure auto-replication between Amazon Redshift and Amazon RDS. Data scientists use Redshift. Dashboards use RDS."
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon Redshift for both requirements, with separate query queues Configured in workload management."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon Redshift for Data Scientists. Run automated dashboard queries against Redshift and store the results in Amazon ElastiCache. Dashboards query ElastiCache."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 181,
            "questionText": "A company has an application that uses Amazon CloudFront for content that is hosted on an Amazon S3 bucket. After an unexpected refresh, the users are still seeing old content. Which step should the Solutions Architect take to ensure that new content is displayed?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Perform a cache refresh on the CloudFront distribution that is serving the content."
                },
                {
                    "optionId": "B",
                    "optionText": "Perform an invalidation on the CloudFront distribution that is serving the content."
                },
                {
                    "optionId": "C",
                    "optionText": "Create a new cache behavior path with the updated content."
                },
                {
                    "optionId": "D",
                    "optionText": "Change the TTL value for removing the old objects."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 182,
            "questionText": "A company expects its user base to increase ve times over one year. Its application is hosted in one region and uses an Amazon RDS MySQL database, an ELB Application Load Balancer, and Amazon ECS to host the website and its microservices. Which design changes should a Solutions Architect recommend to support the expected growth? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Move static files from ECS to Amazon S3"
                },
                {
                    "optionId": "B",
                    "optionText": "Use an Amazon Route 53 geolocation routing policy"
                },
                {
                    "optionId": "C",
                    "optionText": "Scale the environment based on real-time AWS CloudTrail logs"
                },
                {
                    "optionId": "D",
                    "optionText": "Create a dedicated Elastic Load Balancer for each microservice"
                },
                {
                    "optionId": "E",
                    "optionText": "Create RDS read replicas and change the application to use these replicas"
                }
            ],
            "questionAnswer": "AE"
        },
        {
            "questionId": 183,
            "questionText": "A company is rolling out a new web service, but is unsure how many customers the service will attract. However, the company is unwilling to accept any downtime. What could a Solutions Architect recommend to the company in order to keep track of customers' current session data?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon EC2"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon RDS"
                },
                {
                    "optionId": "C",
                    "optionText": "AWS CloudTrail"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon DynamoDB 5"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 184,
            "questionText": "A web application is running on Amazon EC2 instances behind an Elastic Load Balancing Application Load Balancer (ALB). The EC2 instances should receive no traffic, except for web requests to the application. Based on these requirements, what security group rules should be put on the Amazon EC2 instances?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "An inbound rule allowing traffic from the security group attached to the ALB"
                },
                {
                    "optionId": "B",
                    "optionText": "An inbound rule allowing traffic from the network ACLs attached to the ALB"
                },
                {
                    "optionId": "C",
                    "optionText": "An outbound rule allowing traffic to the security group attached to the ALB"
                },
                {
                    "optionId": "D",
                    "optionText": "An outbound rule blocking all traffic to the Internet"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 185,
            "questionText": "A Solutions Architect must migrate a monolithic on-premises application to AWS. It is a web application with a load balancer, web server, application server, and relational database. The key requirement driving the migration is that the application should perform better and be more elastic. Which of the following architectures would meet these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Re-host the application on Amazon EC2 with lift and shift of existing application code. Configure an Elastic Load Balancing load balancer to handle incoming requests. Use Amazon CloudWatch alarms to receive noti cation of scaling issues. Increase and decrease the size of the Amazon EC2 instances using AWS CLI or AWS Management Console as required."
                },
                {
                    "optionId": "B",
                    "optionText": "Re-architect the application as a three-tier application. Move the database to Amazon RDS. Use read replicas and Amazon ElastiCache with RDS for better performance. Use an Application Load Balancer to forward incoming requests to web and application servers running onpremises."
                },
                {
                    "optionId": "C",
                    "optionText": "Re-platform the application as a three-tier application. Use Elastic Load Balancing for incoming requests. Use EC2 for web and application tiers. Use RDS at the database tier. Use CloudWatch alarms and Auto Scaling for horizontal scaling at the web tier."
                },
                {
                    "optionId": "D",
                    "optionText": "Re-architect the application as Service Oriented Architecture (SOA). Run database and application servers on-premises. Run web-facing EC2 servers. Use an Enterprise Service Bus to handle communications between different parts of the application running on-premises and in the cloud."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 186,
            "questionText": "A company has asked the Solutions Architect to modify its AWS-hosted internal application to allow for load balancing. The customer requests always come from the company domain (example.net). The company requires that incoming HTTP and HTTPS traffic is routed based on the path element of the URL in the request. Which implementation can satisfy all requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Configure a Network Load Balancer with listeners for appropriate path patterns for the target groups."
                },
                {
                    "optionId": "B",
                    "optionText": "Configure an Application Load Balancer with host-based routing based on the domain eld in the HTTP header."
                },
                {
                    "optionId": "C",
                    "optionText": "Configure a Network Load Balancer and enable cross-zone load balancing to ensure that all EC2 instances are used."
                },
                {
                    "optionId": "D",
                    "optionText": "Configure an Application Load Balancer with listeners for appropriate path patterns for the target group."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 187,
            "questionText": "A Solutions Architect is asked to improve the fault tolerance of an existing Python application. The web application places 1-MB images is an S3 bucket. The application then uses a single t2.large instance to transform the image to include a watermark with the company's brand before writing the image back to the S3 bucket. What should the Solutions Architect recommend to increase the fault tolerance of the solution?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Convert the code to a Lambda function triggered by scheduled Amazon CloudWatch Events."
                },
                {
                    "optionId": "B",
                    "optionText": "Increase the instance size to m4.xlarge and Configure Enhanced Networking."
                },
                {
                    "optionId": "C",
                    "optionText": "Convert the code to a Lambda function triggered by Amazon S3 events."
                },
                {
                    "optionId": "D",
                    "optionText": "Create an Amazon SQS queue to send the images to the t2.large instance."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 188,
            "questionText": "A Solutions Architect has been asked to deliver video content stored on Amazon S3 to speci c users from Amazon CloudFront while restricting access by unauthorized users. How can the Architect implement a solution to meet these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Configure CloudFront to use signed-URLs to access Amazon S3."
                },
                {
                    "optionId": "B",
                    "optionText": "Store the videos as private objects in Amazon S3, and let CloudFront serve the objects by using only Origin Access Identity (OAI)."
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon S3 static website as the origin of CloudFront, and Configure CloudFront to deliver the videos by generating a signed URL for users."
                },
                {
                    "optionId": "D",
                    "optionText": "Use OAI for CloudFront to access private S3 objects and select the Restrict Viewer Access option in CloudFront cache behavior to use signed URLs."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 189,
            "questionText": "A Solutions Architect needs to deploy a node.js-based web application that is highly available and scales automatically. The Marketing team needs to roll back on application releases quickly, and they need to have an operational dashboard. The Marketing team does not want to manage deployment of OS patches to the Linux servers. Use of which AWS service will satisfy these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon EC2"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon API Gateway"
                },
                {
                    "optionId": "C",
                    "optionText": "AWS Elastic Beanstalk"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon EC2 Container Service"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 190,
            "questionText": "A company has a website running on Amazon EC2. The application DNS name points to an Elastic IP address associated with the EC2 instance. In the event of an attack on the website coming from a speci c IP address, the company wants a way to block the offending IP address. Which tool or service should a Solutions Architect recommend to block the IP address?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Security groups"
                },
                {
                    "optionId": "B",
                    "optionText": "Network ACL"
                },
                {
                    "optionId": "C",
                    "optionText": "AWS WAF"
                },
                {
                    "optionId": "D",
                    "optionText": "AWS Shield"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 191,
            "questionText": "A customer is looking for a storage archival solution for 1,000 TB of data. The customer requires that the solution be durable and data be available within a few hours of requesting it, but not exceeding a day. The solution should be as cost-effective as possible. To meet security compliance policies, data must be encrypted at rest. The customer expects they will need to fetch the data two times in a year. Which storage solution should a Solutions Architect recommend to meet these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Copy data to Amazon S3 buckets by using server-side encryption. Move data to Amazon S3 to reduce redundancy storage (RRS)."
                },
                {
                    "optionId": "B",
                    "optionText": "Copy data to encrypted Amazon EBS volumes, then store data into Amazon S3."
                },
                {
                    "optionId": "C",
                    "optionText": "Copy each object into a separate Amazon Glacier vault, and let Amazon Glacier take care of encryption."
                },
                {
                    "optionId": "D",
                    "optionText": "Copy data to Amazon S3 with server-side encryption. Configure lifecycle management policies to move data to Amazon Glacier after 0 days."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 192,
            "questionText": "A web application runs on 10 EC2 instances launched from a single customer Amazon Machine Image (AMI). The EC2 instances are behind an Internet Application Load Balancer. Amazon Route 53 provides DNS for the application. How should a Solutions Architect automate recovery when a web server instance stops replying to request?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Launch the instances in an Auto Scaling group with an Elastic Load Balancing health check."
                },
                {
                    "optionId": "B",
                    "optionText": "Launch instances in multiple Availability Zones and set the load balancer to Multi-AZ."
                },
                {
                    "optionId": "C",
                    "optionText": "Add CloudWatch alarm actions for each instance to restart if the Status Check (Any) fails."
                },
                {
                    "optionId": "D",
                    "optionText": "Add Route 53 records for each instance with an instance health check."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 193,
            "questionText": "A company has a Node.js application running on Amazon EC2 that currently retrieves data for customers from a DynamoDB table. The company is seeing many repeat queries for the same items, and the number of queries is continuing to increase as the application gains popularity. What solution will reduce the number of read capacity units (RCUs) required while minimizing the amount of refactoring that must be done to the application? 5",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use Amazon ElastiCache to provide a caching layer"
                },
                {
                    "optionId": "B",
                    "optionText": "Use a Lambda function to make concurrent requests for caching"
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon DynamoDB Accelerator (DAX) to provide a caching layer"
                },
                {
                    "optionId": "D",
                    "optionText": "Obtain Reserved Capacity for Amazon DynamoDB to manage the increased number of queries"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 194,
            "questionText": "A company has an application that accesses a MySQL database installed on a single EC2 instance. The instance recently experienced a fault and brought down the entire application for several hours. The company wants to address the issue but is concerned about spending too much time modifying application code or managing the legacy application. What should the Solutions Architect recommend to remove this single point of failure with the FEWEST changes to the application code and the LEAST amount of administrative effort?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Implement a caching layer by using Amazon ElastiCache to store query results of frequently accessed information."
                },
                {
                    "optionId": "B",
                    "optionText": "Deploy a second EC2 instance with MySQL installed, and Configure replication between this instance and the existing MySQL instance."
                },
                {
                    "optionId": "C",
                    "optionText": "Migrate the database to an RDS MySQL Multi-AZ DB instance, and point the application servers to the new RDS instance."
                },
                {
                    "optionId": "D",
                    "optionText": "Create a DynamoDB table to use as a cache layer, and update the application to query data from Amazon DynamoDB before querying MySQL."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 195,
            "questionText": "A team is launching a marketing campaign and the peak database read activity in Amazon Aurora for MySQL is expected to increase. A Solutions Architect decides to add two Read Replicas to the cluster. How should the Solutions Architect ensure that the connections for read activities are load balanced?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Reader endpoint for Amazon Aurora"
                },
                {
                    "optionId": "B",
                    "optionText": "Cluster endpoint for Amazon Aurora"
                },
                {
                    "optionId": "C",
                    "optionText": "Primary DB instance endpoint for Amazon Aurora"
                },
                {
                    "optionId": "D",
                    "optionText": "Replica DB instances endpoint for Aurora"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 196,
            "questionText": "A company plans to migrate a website to AWS to use a serverless architecture. The website contains both static and dynamic content and is accessed by users across the world. The website should maintain sessions for returning users to improve the user experience. Which service should a Solutions Architect use for a cost-efficient cient solution with the LOWEST latency?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon S3, AWS Lambda, Amazon API Gateway, and Amazon DynamoDB"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon CloudFront, AWS Lambda, API Gateway, and Amazon RDS"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon CloudFront, Elastic Load Balancing, Amazon EC2, and Amazon RDS"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon S3, Amazon CloudFront, AWS Lambda, Amazon API Gateway, and Amazon DynamoDB. 5"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 197,
            "questionText": "A Solutions Architect is helping a customer migrate an application to AWS. The application is composed of a fleet of Linux servers that currently use a shared le system to read and write data. One of the goals of moving this application to AWS is to increase the reliability of the storage tier. What solution would increase reliability while minimizing the operational overhead of managing this infrastructure?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create an EBS volume and mount it to all the servers."
                },
                {
                    "optionId": "B",
                    "optionText": "Create an EFS le system and mount it to all the servers."
                },
                {
                    "optionId": "C",
                    "optionText": "Create an S3 bucket that can be accessed through an S3 VPC Endpoint."
                },
                {
                    "optionId": "D",
                    "optionText": "Create two EC2 instances in separate Availability Zones that act as le servers."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 198,
            "questionText": "A Solution Architect is designing a two-tier application for maximum security, with a web tier running on EC2 instances and the data stored in an RDS DB instance. The web tier should accept user access only through HTTPS connections (port 443) from the Internet, and the data must be encrypted in transit to and from the database. What combination of steps will MOST securely meet the stated requirements? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a security group for the web tier instances that allows inbound traffic only over port 443."
                },
                {
                    "optionId": "B",
                    "optionText": "Enforce Transparent Data Encryption (TDE) on the RDS database."
                },
                {
                    "optionId": "C",
                    "optionText": "Create a network ACL that allows inbound traffic only over port 443."
                },
                {
                    "optionId": "D",
                    "optionText": "Configure the web servers to communicate with RDS by using SSL, and issue certificates to the web tier EC2 instances."
                },
                {
                    "optionId": "E",
                    "optionText": "Create a customer master key in AWS KMS and apply it to encrypt the RDS instance."
                }
            ],
            "questionAnswer": "AD"
        },
        {
            "questionId": 199,
            "questionText": "A credit card processing application, hosted on an on-premises server, needs to communicate directly with a database hosted on an Amazon EC2 instance running in a private subnet of a VPC. Compliance requirements state that end-to-end communication should be encrypted. Which solution will ensure that this requirement is met?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use HTTPS for traffic over VPC peering between the VPC and the on-premises datacenter."
                },
                {
                    "optionId": "B",
                    "optionText": "Use HTTPS for traffic over the Internet between the on-premises server and the Amazon EC2 instance."
                },
                {
                    "optionId": "C",
                    "optionText": "Use HTTPS for traffic over a VPN connection between the VPC and the on-premises datacenter."
                },
                {
                    "optionId": "D",
                    "optionText": "Use HTTPS for traffic over gateway VPC endpoints that have been Configured for the Amazon EC2 instance."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 200,
            "questionText": "A company has asked a Solutions Architect to ensure that data is protected during data transfer to and from Amazon S3. Use of which service will protect the data in transit?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "AWS KMS"
                },
                {
                    "optionId": "B",
                    "optionText": "HTTPS"
                },
                {
                    "optionId": "C",
                    "optionText": "SFTP"
                },
                {
                    "optionId": "D",
                    "optionText": "FTPS"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 201,
            "questionText": "A Solutions Architect is trying to bring a data warehouse workload to an Amazon EC2 instance. The data will reside in Amazon EBS volumes and full table scans will be executed frequently. What type of Amazon EBS volume would be most suitable in this scenario?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Throughput Optimized HDD (st1)"
                },
                {
                    "optionId": "B",
                    "optionText": "Provisioned IOPS SSD (io1)"
                },
                {
                    "optionId": "C",
                    "optionText": "General Purpose SSD (gp2)"
                },
                {
                    "optionId": "D",
                    "optionText": "Cold HDD (sc1)"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 202,
            "questionText": "A Solutions Architect has a three-tier web application that serves customers worldwide. Analysis reveals that product images take more time to load than expected. Which action will improve the image load time?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Store product images on Amazon EBS-optimized storage volumes"
                },
                {
                    "optionId": "B",
                    "optionText": "Store product images in an Amazon S3 bucket"
                },
                {
                    "optionId": "C",
                    "optionText": "Use an Amazon CloudFront distribution for product images"
                },
                {
                    "optionId": "D",
                    "optionText": "Use an Auto Scaling group to add instances for product images"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 203,
            "questionText": "A gaming application is heavily dependent on caching and uses Amazon ElastiCache for Redis. The application performance was recently degraded due to failure of the cache node. What should a Solutions Architect recommend to minimize performance degradation in the future?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Migrate from ElastiCache to Amazon RDS"
                },
                {
                    "optionId": "B",
                    "optionText": "Configure automatic backup to save cache data 6"
                },
                {
                    "optionId": "C",
                    "optionText": "Configure ElastiCache Multi-AZ with automatic failover"
                },
                {
                    "optionId": "D",
                    "optionText": "Use Auto Scaling to provision cache nodes based on CPU usage"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 204,
            "questionText": "A client has set up an Auto Scaling group associated with a load balancer. The client has noticed that instances launched by the Auto Scaling group are reported unhealthy as the result of an Elastic Load Balancing (ELB) health check, but these unhealthy instances are not being terminated. What can a Solutions Architect do to ensure that the instances marked unhealthy will be terminated and replaced?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Increase the value for the health check interval set on the ELB load balancer."
                },
                {
                    "optionId": "B",
                    "optionText": "Change the thresholds set on the Auto Scaling group health check."
                },
                {
                    "optionId": "C",
                    "optionText": "Change the health check type to ELB for the Auto Scaling group."
                },
                {
                    "optionId": "D",
                    "optionText": "Change the health check set on the ELB load balancer to use TCP rather than HTTP checks."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 205,
            "questionText": "A Solutions Architect must review an application deployed on EC2 instances that currently stores multiple 5-GB files on attached instance store volumes. The company recently experienced a significant data loss after stopping and starting their instances and wants to prevent the data loss from happening again. The solution should minimize performance impact and the number of code changes required. What should the Solutions Architect recommend?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Store the application data in Amazon S3"
                },
                {
                    "optionId": "B",
                    "optionText": "Store the application data in an EBS volume"
                },
                {
                    "optionId": "C",
                    "optionText": "Store the application data in Amazon ElastiCache"
                },
                {
                    "optionId": "D",
                    "optionText": "Store the application data in Amazon DynamoDB"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 206,
            "questionText": "An organization is deploying Amazon ElastiCache for Redis and requires password protection to improve their data security posture. Which solution should a Solutions Architect recommend?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Redis Auth"
                },
                {
                    "optionId": "B",
                    "optionText": "AWS Single Sign-On"
                },
                {
                    "optionId": "C",
                    "optionText": "IAM database authentication"
                },
                {
                    "optionId": "D",
                    "optionText": "VPC security group for Redis 6"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 207,
            "questionText": "A Solutions Architect is designing a solution to send Amazon CloudWatch Alarm noti cations to a group of users on a smartphone mobile application. What are the key steps to this solution? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Configure the CloudWatch Alarm to send the noti cation to an Amazon SNS topic whenever there is an alarm."
                },
                {
                    "optionId": "B",
                    "optionText": "Configure the CloudWatch Alarm to send the noti cation to a mobile phone number whenever there is an alarm."
                },
                {
                    "optionId": "C",
                    "optionText": "Configure the CloudWatch Alarm to send the noti cation to the email addresses whenever there is an alarm."
                },
                {
                    "optionId": "D",
                    "optionText": "Create the platform endpoints for mobile devices and subscribe the SNS topic with platform endpoints."
                },
                {
                    "optionId": "E",
                    "optionText": "Subscribe the SNS topic with an Amazon SQS queue, and poll the messages continuously from the queue. Use each mobile platform's libraries to send the message to the mobile application."
                }
            ],
            "questionAnswer": "AD"
        },
        {
            "questionId": 208,
            "questionText": "A company uses Amazon S3 for storing a variety of files. A Solutions Architect needs to design a feature that will allow users to instantly restore any deleted files within 30 days of deletion. Which is the MOST cost-efficient cient solution?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create lifecycle policies that move the objects to Amazon Glacier and delete them after 30 days."
                },
                {
                    "optionId": "B",
                    "optionText": "Enable cross-region replication. Empty the replica bucket every 30 days using an AWS Lambda function."
                },
                {
                    "optionId": "C",
                    "optionText": "Enable versioning and create a lifecycle policy to remove expired versions after 30 days."
                },
                {
                    "optionId": "D",
                    "optionText": "Enable versioning and MFA Delete. Using a Lambda function, remove MFA delete from objects more than 30 days old."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 209,
            "questionText": "An application running on Amazon EC2 has been experiencing performance issues when accessing an Amazon RDS for Oracle database. The database has been provisioned correctly for average workloads, but there are several usage spikes each day that have saturated the database, causing the application to time out. The application is write-heavy, updating information more often than reading information. A Solutions Architect has been asked to review the application design. What should the Solutions Architect recommend to improve performance?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Put an Amazon ElastiCache cluster in front of the database and use lazy loading to limit database access during peak periods."
                },
                {
                    "optionId": "B",
                    "optionText": "Put an Amazon Elasticsearch domain in front of the database and use a Write-Through cache to reduce database access during peak periods."
                },
                {
                    "optionId": "C",
                    "optionText": "Configure an Amazon RDS Auto Scaling group to automatically scale the RDS instance during load spikes. 66/29/2020 g gg p y g p"
                },
                {
                    "optionId": "D",
                    "optionText": "Change the Amazon RDS instance storage type from General Purpose SSD to provisioned IOPS SSD."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 210,
            "questionText": "During performance testing of an application, the Amazon RDS database caused a performance bottleneck. What steps can be taken to improve the database performance? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Change the RDS database instance to multiple Availability Zones."
                },
                {
                    "optionId": "B",
                    "optionText": "Scale up to a larger RDS instance type."
                },
                {
                    "optionId": "C",
                    "optionText": "Redirect read queries to RDS read replicas."
                },
                {
                    "optionId": "D",
                    "optionText": "Scale out using an Auto Scaling group for RDS."
                },
                {
                    "optionId": "E",
                    "optionText": "Use RDS in a separate AWS Region."
                }
            ],
            "questionAnswer": "BC"
        },
        {
            "questionId": 211,
            "questionText": "A Solutions Architect must design an Amazon DynamoDB table to store data about customer activities. The data is used to analyze recent customer behavior, so data that is filess than a week old is heavily accessed and older data is accessed infrequently. Data that is more than one month old never needs to be referenced by the application, but needs to be archived for year-end analytics. What is the MOST cost-efficient cient way to meet these requirements? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use DynamoDB time-to-live settings to expire items after a certain time period."
                },
                {
                    "optionId": "B",
                    "optionText": "Provision a higher write capacity unit to minimize the number of partitions."
                },
                {
                    "optionId": "C",
                    "optionText": "Create separate tables for each week's data with higher throughput for the current week."
                },
                {
                    "optionId": "D",
                    "optionText": "Pre-process data to consolidate multiple records to minimize write operations.,"
                },
                {
                    "optionId": "E",
                    "optionText": "Export the old table data from DynamoDB to Amazon S3 using AWS Data Pipeline, and delete the old table."
                }
            ],
            "questionAnswer": "CE"
        },
        {
            "questionId": 212,
            "questionText": "A Solutions Architect is concerned that the current security group rules for a database tier are too permissive and may permit requests that should be restricted. Below are the current security group permissions for the database tier: ✑ Protocol: TCP ✑ Port Range: 1433 (MS SQL) ✑ Source: ALL Currently, the only identified resource that needs to connect to the databases is the application tier consisting of an Auto Scaling group of EC2 instances. What changes can be made to this security group that would offer the users LEAST privilege?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Change the source to -1 to remove source IP addresses previously unseen."
                },
                {
                    "optionId": "B",
                    "optionText": "Change the source to the VPC CIDR block."
                },
                {
                    "optionId": "C",
                    "optionText": "Change the source to the application instances IDs."
                },
                {
                    "optionId": "D",
                    "optionText": "Change the source to the security group ID attached to the application instances. 6"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 213,
            "questionText": "A large media site has multiple applications in Amazon ECS. A Solutions Architect needs to use content metadata and route traffic to speci c services. What is the MOST efficient method to perform this task?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use an AWS Classic Load Balancer with a host-based routing option to route traffic to the correct service."
                },
                {
                    "optionId": "B",
                    "optionText": "Use the AWS CLI to update Amazon Route 53 hosted zone to route traffic as services get updated."
                },
                {
                    "optionId": "C",
                    "optionText": "Use an AWS Application Load Balancer with host-based routing option to route traffic to the correct service."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon CloudFront to manage and route traffic to the correct service."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 214,
            "questionText": "A Solutions Architect must build a secure document storage platform that allows clients to access data stored on Amazon S3. Documents must be readily available for the rest 15 days. After that, documents need not be readily available, and storage costs should be reduced as much as possible. Which of the following approaches will satisfy these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a lifecycle rule to transition the documents from the STANDARD storage class to the STANDARD_IA storage class after 15 days, and then to the GLACIER storage class after an additional 15 days."
                },
                {
                    "optionId": "B",
                    "optionText": "Create a lifecycle rule to transition the documents from the STANDARD storage class to the GLACIER storage class after 30 days."
                },
                {
                    "optionId": "C",
                    "optionText": "Create a lifecycle rule to transition documents from the STANDARD storage class to the STANDARD_IA storage class after 30 days and then to the GLACIER storage class after an additional 30 days."
                },
                {
                    "optionId": "D",
                    "optionText": "Create a lifecycle rule to transition the documents from the STANDARD storage class to the GLACIER storage class after 15 days."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 215,
            "questionText": "A Solutions Architect needs to Configure scaling policies based on Amazon CloudWatch metrics for an Auto Scaling group. The application running on the instances is memory intensive. How can the Architect meet this requirement?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Enable detailed monitoring on the Amazon EC2 instances."
                },
                {
                    "optionId": "B",
                    "optionText": "Publish custom metrics to CloudWatch from the application."
                },
                {
                    "optionId": "C",
                    "optionText": "Configuration lifecycle policies for the Amazon EC2 instances."
                },
                {
                    "optionId": "D",
                    "optionText": "Set up high-resolution alarms for the Auto Scaling group"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 216,
            "questionText": "A customer has a service based out of Oregon, U.S. and Paris, France. The application is storing data in an S3 bucket located in Oregon, and that data is updated frequently. The Paris o ce is experiencing slow response times when retrieving objects. What should a Solutions Architect do to resolve the slow response times for the Paris o ce?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Set up an S3 bucket based in Paris, and enable cross-region replication from the Oregon bucket to the Paris bucket."
                },
                {
                    "optionId": "B",
                    "optionText": "Create an Application Load Balancer that load balances data retrieval between the Oregon S3 bucket and a new Paris S3 bucket."
                },
                {
                    "optionId": "C",
                    "optionText": "Create an Amazon CloudFront distribution with the bucket located in Oregon as the origin and set the Maximum Time to Live (TTL) for cache behavior to 0."
                },
                {
                    "optionId": "D",
                    "optionText": "Set up an S3 bucket based in Paris, and enable a lifecycle management rule to transition data from the Oregon bucket to the Paris bucket."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 217,
            "questionText": "A company uses AWS Elastic Beanstalk to deploy a web application running on c4.large instances. Users are reporting high latency and failed requests. Further investigation reveals that the EC2 instances are running at or near 100% CPU utilization. What should a Solutions Architect do to address the performance issues?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use time-based scaling to scale the number of instances based on periods of high load."
                },
                {
                    "optionId": "B",
                    "optionText": "Modify the scaling triggers in Elastic Beanstalk to use the CPUUtilization metric."
                },
                {
                    "optionId": "C",
                    "optionText": "Swap the c4.large instances with the m4.large instance type."
                },
                {
                    "optionId": "D",
                    "optionText": "Create an additional Auto Scaling group, and Configure Amazon EBS to use both Auto Scaling groups to increase the scaling capacity."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 218,
            "questionText": "A Solutions Architect is working on a PCI-compliant architecture that needs to call an external service provider's API. The external provider requires IP whitelisting to verify the calling party. How should the Solutions Architect provide the external party with the IP addresses for whitelisting?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use an API Gateway in proxy mode, and provide the API Gateway's IP address to the external service provider."
                },
                {
                    "optionId": "B",
                    "optionText": "Associate a public elastic network interface to a published stage/endpoint in API Gateway, exposing the AWS Lambda function, and provide the IP address for the public network interface to the external party to whitelist."
                },
                {
                    "optionId": "C",
                    "optionText": "Deploy the Lambda function in private subnets and route outbound traffic through a NAT gateway. Provide the NAT gateway's Elastic IP address to the external service provider."
                },
                {
                    "optionId": "D",
                    "optionText": "Provide the external party the allocated AWS IP address range for Lambda functions, and send change noti cations by using a subscription to the AmazonIpSpaceChanged SNS topic."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 219,
            "questionText": "A Solutions Architect is designing a shared le system for a company. Multiple users will be accessing it at any given time. Different teams will have their own directories, and the company wants to secure files so that users can access only files owned by their team. How should the Solutions Architect design this?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use Amazon EFS and control permissions by using le-level permissions."
                },
                {
                    "optionId": "B",
                    "optionText": "Use Amazon S3 and control permissions by using ACLs. 6"
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon EFS and control permissions by using security groups."
                },
                {
                    "optionId": "D",
                    "optionText": "Use AWS Storage Gateway and control permissions by using AWS Identity and Access Management (IAM)"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 220,
            "questionText": "A company requires operating system permission on a relational database server. What should a Solutions Architect suggest as a Configuration for a highly available database architecture?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Multiple EC2 instances in a database replication Configuration that uses two Availability Zones."
                },
                {
                    "optionId": "B",
                    "optionText": "A standalone Amazon EC2 instance with a selected database installed."
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon RDS in a Multi-AZ Configuration with Provisioned IOPS."
                },
                {
                    "optionId": "D",
                    "optionText": "Multiple EC2 instances in a replication Configuration that uses two placement groups."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 221,
            "questionText": "An application has a web tier that runs on EC2 instances in a public subnet. The application tier instances run in private subnets across two Availability Zones. All traffic is IPv4 only, and each subnet has its own custom route table. A new feature requires that application tier instances can call an external service over the Internet; however, they must still not be accessible to Internet traffic. What should be done to allow the application servers to connect to the Internet, maintain high availability, and minimize administrative overhead?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Add an Amazon egress-only internet gateway to each private subnet. Alter each private subnet's route table to include a route from 0.0.0.0/0 to the egress-only internal gateway in the same Availability Zone."
                },
                {
                    "optionId": "B",
                    "optionText": "Add an Amazon NAT Gateway to each public subnet. Alter each private subnet's route table to include a route from 0.0.0.0/0 to the NAT Gateway in the same Availability Zone."
                },
                {
                    "optionId": "C",
                    "optionText": "Add an Amazon NAT instance to one of the public subnets Alter each private subnet's route table to include a route from 0.0.0.0/0 to the Internet gateway in the VPC."
                },
                {
                    "optionId": "D",
                    "optionText": "Add an Amazon NAT Gateway to each private subnet. Alter each private subnet's route table to include a route from 0.0.0.0/0 to the NAT Gateway in the other Availability Zone."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 222,
            "questionText": "An application uses an Amazon SQS queue as a transport mechanism to deliver data to a group of EC2 instances for processing. The application owner wants to add a mechanism to archive the incoming data without modifying application code on the EC2 instances. How can this application be re-architected to archive the data without modifying the processing instances?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Trigger a Lambda function by using Amazon CloudWatch Events to retrieve messages from the SQS queue and archive to Amazon S3."
                },
                {
                    "optionId": "B",
                    "optionText": "Use an Amazon SNS topic to fan out the data to the SQS queue in addition to a Lambda function that records the data to an S3 bucket."
                },
                {
                    "optionId": "C",
                    "optionText": "Set up an Amazon Kinesis Data Stream so that multiple instances can receive data. Add a separate EC2 instance that is Configured to archive all data it receives."
                },
                {
                    "optionId": "D",
                    "optionText": "Write the data to an S3 bucket, and use an SQS queue for S3 event noti cations to tell the instances where to retrieve the data. 6"
                },
                {
                    "optionId": "D",
                    "optionText": "Write the data to an S3 bucket, and use an SQS queue for S3 event noti cations to tell the instances where to retrieve the data."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 223,
            "questionText": "A Solutions Architect must select the most cost-efficient cient architecture for a service that responds to web requests. These web requests are small and query a DynamoDB table. The request rate ranges from zero to several hundred each second, without any predictable patterns. What is the MOST cost-efficient cient architecture for this service?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Network Load Balancer/Amazon EC2"
                },
                {
                    "optionId": "B",
                    "optionText": "Application Load Balancer/Amazon ECS"
                },
                {
                    "optionId": "C",
                    "optionText": "API Gateway/AWS Lambda"
                },
                {
                    "optionId": "D",
                    "optionText": "AWS Elastic Beanstalk/AWS Lambda"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 224,
            "questionText": "A company has a web application running in a Docker container that connects to a MySQL server in an on-premises data center. The deployment and maintenance of this application are becoming time-consuming and slowing down new feature releases. The company wants to migrate the application to AWS and use services that helps facilitate infrastructure management and deployment. Which architectures should the company consider on AWS? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon ECS for the web application, and an Amazon RDS for MySQL for the database."
                },
                {
                    "optionId": "B",
                    "optionText": "AWS Elastic Beanstalk Docker Multi-container either for the web application or database."
                },
                {
                    "optionId": "C",
                    "optionText": "AWS Elastic Beanstalk Docker Single Container for the web application, and an Amazon RDS for MySQL for the database."
                },
                {
                    "optionId": "D",
                    "optionText": "AWS CloudFormation with Lambda Custom Resources without VPC for the web application, and an Amazon RDS for MySQL database.,"
                },
                {
                    "optionId": "E",
                    "optionText": "AWS CloudFormation with Lambda Custom Resources running in a VPC for the web application, and an Amazon RDS for MySQL database."
                }
            ],
            "questionAnswer": "AC"
        },
        {
            "questionId": 225,
            "questionText": "A Solutions Architect has designed a VPC that meets all necessary security requirements for their organization. Any applications deployed in the organization must use this VPC design. How can project teams deploy, manage, and delete VPCs that meet this design with the LEAST administrative effort?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Deploy an AWS CloudFormation template that de nes components of the VPC."
                },
                {
                    "optionId": "B",
                    "optionText": "Run a script that uses the AWS Command Line Interface to deploy the VPC."
                },
                {
                    "optionId": "C",
                    "optionText": "Clone the existing authorized VPC for each new project."
                },
                {
                    "optionId": "D",
                    "optionText": "Use AWS Elastic Beanstalk to deploy both the VPC and the application."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 226,
            "questionText": "What conditions could cause a Multi-AZ Amazon RDS failover to occur? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "The RDS instance is stopped manually"
                },
                {
                    "optionId": "B",
                    "optionText": "A replica of the RDS instance is created in a different region"
                },
                {
                    "optionId": "C",
                    "optionText": "An Availability Zone becomes unavailable"
                },
                {
                    "optionId": "D",
                    "optionText": "Another master user is created,"
                },
                {
                    "optionId": "E",
                    "optionText": "A failure of the primary database instance"
                }
            ],
            "questionAnswer": "CE"
        },
        {
            "questionId": 227,
            "questionText": "A Solutions Architect is designing a new application that will be hosted on EC2 instances. This application has the following traffic requirements: ✑ Accept HTTP(80)/HTTPS(443) traffic from the Internet. ✑ Accept FTP(21) traffic from the nance team servers at 10.10.2.0/24. Which of the following AWS CloudFormation snippets correctly declares inbound security group rules that meet the requirements and prevent unauthorized access to additional services on the instance?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "img"
                },
                {
                    "optionId": "B",
                    "optionText": "img"
                },
                {
                    "optionId": "C",
                    "optionText": "img"
                },
                {
                    "optionId": "D",
                    "optionText": "img"
                }
            ],
            "questionAnswer": "CCCCCCC"
        },
        {
            "questionId": 228,
            "questionText": "A Solutions Architect has ve web servers serving requests for a domain. Which of the following Amazon Route 53 routing policies can distribute traffic randomly among all healthy web servers?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Simple"
                },
                {
                    "optionId": "B",
                    "optionText": "Failover"
                },
                {
                    "optionId": "C",
                    "optionText": "Weighted"
                },
                {
                    "optionId": "D",
                    "optionText": "Multivalue Answer"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 229,
            "questionText": "A web server will be provisioned on two Amazon EC2 instances with an Application Load Balancer. Which of the following configurations will allow traffic on HTTP and HTTPS when con guring a security group to apply to each of these servers?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Allow all inbound traffic, with explicit denies on non-HTTP and non-HTTPS ports."
                },
                {
                    "optionId": "B",
                    "optionText": "Allow incoming traffic to HTTP and HTTPS ports."
                },
                {
                    "optionId": "C",
                    "optionText": "Allow incoming traffic to HTTP and HTTPS ports, with explicit denies to all other ports."
                },
                {
                    "optionId": "D",
                    "optionText": "Deny all traffic to non-HTTP and non-HTTPS ports"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 230,
            "questionText": "A company wants to run a static website served through Amazon CloudFront. What is an advantage of storing the website content in an S3 bucket instead of an EBS volume?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "S3 buckets are replicated globally, allowing for large scalability. EBS volumes are replicated only within a region."
                },
                {
                    "optionId": "B",
                    "optionText": "S3 is an origin for CloudFront. EBS volumes would need EC2 instances behind an Elastic Load Balancing load balancer to be an origin."
                },
                {
                    "optionId": "C",
                    "optionText": "S3 buckets can be encrypted, allowing for secure storage of the web files. EBS volumes cannot be encrypted."
                },
                {
                    "optionId": "D",
                    "optionText": "S3 buckets support object-level read throttling, preventing abuse. EBS volumes do not provide object-level throttling."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 231,
            "questionText": "A company is moving to AWS. Management has identified a set of approved AWS services that meet all deployment requirements. The company would like to restrict access to all other unapproved services to which employees would have access. Which solution meets these requirements with the LEAST amount of operational overhead?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Configure the AWS Trusted Advisor service utilization compliance report. Subscribe to Amazon SNS noti cations from Trusted Advisor. Create a custom AWS Lambda function that can automatically remediate the use of unauthorized services."
                },
                {
                    "optionId": "B",
                    "optionText": "Use AWS Con g to evaluate the Configuration settings of AWS resources. Subscribe to Amazon SNS noti cations from AWS Con g. Create a custom AWS Lambda function that can automatically remediate the use of unauthorized services."
                },
                {
                    "optionId": "C",
                    "optionText": "Configure AWS Organizations. Create an organizational unit (OU) and place all AWS accounts into the OU. Apply a service control policy (SCP) to the OU that denies the use of certain services."
                },
                {
                    "optionId": "D",
                    "optionText": "Create a custom AWS IAM policy. Deploy the policy to each account using AWS CloudFormation StackSets. Include deny statements in the policy to restrict the use of certain services. Attach the policies to all IAM users in each account."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 232,
            "questionText": "A customer is running a critical payroll system in a production environment in one data center and a disaster recovery (DR) environment in another. The application includes load-balanced web servers and failover for the MySQL database. The customer's DR process is manual and error-phone For this reason management has asked IT to migrate the application to AWS and make it highly available so that IT no longer has to 7 error phone. For this reason, management has asked IT to migrate the application to AWS and make it highly available so that IT no longer has to manually fail over the environment. How should a Solutions Architect migrate the system to AWS?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Migrate the production and DR environments to different Availability Zones within the same region. Let AWS manage failover between the environments."
                },
                {
                    "optionId": "B",
                    "optionText": "Migrate the production and DR environments to different regions. Let AWS manage failover between the environments."
                },
                {
                    "optionId": "C",
                    "optionText": "Migrate the production environment to a single Availability Zone, and set up instance recovery for Amazon EC2. Decommission the DR environment because it is no longer needed."
                },
                {
                    "optionId": "D",
                    "optionText": "Migrate the production environment to span multiple Availability Zones, using Elastic Load Balancing and Multi-AZ Amazon RDS. Decommission the DR environment because it is no longer needed."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 233,
            "questionText": "A company is creating a web application that will run on an Amazon EC2 instance. The application on the instance needs access to an Amazon DynamoDB table for storage. What should be done to meet these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create another AWS account root user with permissions to the DynamoDB table."
                },
                {
                    "optionId": "B",
                    "optionText": "Create an IAM role and assign the role to the EC2 instance with permissions to the DynamoDB table."
                },
                {
                    "optionId": "C",
                    "optionText": "Create an identity provider and assign the identity provider to the EC2 instance with permissions to the DynamoDB table."
                },
                {
                    "optionId": "D",
                    "optionText": "Create identity federation with permissions to the DynamoDB table."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 234,
            "questionText": "A company is creating a web application that allows customers to view photos in their web browsers. The website is hosted in us-east-1 on Amazon EC2 instances behind an Application Load Balancer. Users will be located in many places around the world. Which solution should provide all users with the fastest photo viewing experience?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Implement an AWS Auto Scaling group for the web server instances behind the Application Load Balancer."
                },
                {
                    "optionId": "B",
                    "optionText": "Enable Amazon CloudFront for the website and specify the Application Load Balancer as the origin."
                },
                {
                    "optionId": "C",
                    "optionText": "Move the photos into an Amazon S3 bucket and enable static website hosting."
                },
                {
                    "optionId": "D",
                    "optionText": "Enable Amazon ElastiCache in the web server subnet."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 235,
            "questionText": "A Solutions Architect is designing a highly available web application on AWS. The data served on the website is dynamic and is pulled from Amazon DynamoDB. All users are geographically close to one another. How can the Solutions Architect make the application highly available? 7",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Host the website data on Amazon S3 and set permissions to enable public read-only access for users."
                },
                {
                    "optionId": "B",
                    "optionText": "Host the web server data on Amazon CloudFront and update the objects in the Cloudfront distribution when they change."
                },
                {
                    "optionId": "C",
                    "optionText": "Host the application on EC2 instances across multiple Availability Zones. Use an Auto Scaling group coupled with an Application Load Balancer."
                },
                {
                    "optionId": "D",
                    "optionText": "Host the application on EC2 instances in a single Availability Zone. Replicate the EC2 instances to a separate region, and use an Application Load Balancer for high availability."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 236,
            "questionText": "A company is migrating on-premises databases to AWS. The company's backend application produces a large amount of database queries for reporting purposes, and the company wants to o oad some of those reads to Read Replica, allowing the primary database to continue performing efficiently. Which AWS database platforms will accomplish this? (Select TWO.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon RDS for Oracle"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon RDS for PostgreSQL"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon RDS for MariaDB"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon DynamoDB,"
                },
                {
                    "optionId": "E",
                    "optionText": "Amazon RDS for Microsoft SQL Server"
                }
            ],
            "questionAnswer": "BC"
        },
        {
            "questionId": 237,
            "questionText": "An application launched on Amazon EC2 instances needs to publish personally identi able information (PII) about customers using Amazon SNS. The application is launched in private subnets within an Amazon VPC. Which is the MOST secure way to allow the application to access service endpoints in the same region?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use an internet gateway."
                },
                {
                    "optionId": "B",
                    "optionText": "Use AWS PrivateLink."
                },
                {
                    "optionId": "C",
                    "optionText": "Use a NAT gateway."
                },
                {
                    "optionId": "D",
                    "optionText": "Use a proxy instance."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 238,
            "questionText": "A data-processing application runs on an i3.large EC2 instance with a single 100 GB EBS gp2 volume. The application stores temporary data in a small database (less than 30 GB) located on the EBS root volume. The application is struggling to process the data fast enough, and a Solutions Architect has determined that the I/O speed of the temporary database is the bottleneck. What is the MOST cost-efficient cient way to improve the database response times?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Enable EBS optimization on the instance and keep the temporary files on the existing volume."
                },
                {
                    "optionId": "B",
                    "optionText": "Put the temporary database on a new 50-GB EBS gp2 volume."
                },
                {
                    "optionId": "C",
                    "optionText": "Move the temporary database onto instance storage."
                },
                {
                    "optionId": "D",
                    "optionText": "Put the temporary database on a new 50-GB EBS io1 volume with a 3-K IOPS provision."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 239,
            "questionText": "An application stores data in an Amazon RDS PostgreSQL Multi-AZ database instance. The ratio of read requests to write requests is about 2 to 1. Recent increases in traffic are causing very high latency. How can this problem be corrected?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a similar RDS PostgreSQL instance and direct all traffic to it."
                },
                {
                    "optionId": "B",
                    "optionText": "Use the secondary instance of the Multiple Availability Zone for read traffic only."
                },
                {
                    "optionId": "C",
                    "optionText": "Create a read replica and send half of all traffic to it."
                },
                {
                    "optionId": "D",
                    "optionText": "Create a read replica and send all read traffic to it."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 240,
            "questionText": "A Solutions Architect is designing a system that will store Personally Identi able Information (PII) in an Amazon S3 bucket. Due to compliance and regulatory requirements, both the master keys and unencrypted data should never be sent to AWS. What Amazon S3 encryption technique should the Architect choose?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon S3 client-side encryption with an AWS KMS-managed customer master key (CMK)"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon S3 server-side encryption with an AWS KMS-managed key"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon S3 client-side encryption with a client-side master key"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon S3 server-side encryption with a customer-provided key"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 241,
            "questionText": "A Security team reviewed their company's VPC Flow Logs and found that traffic is being directed to the internet. The application in the VPC uses Amazon EC2 instances for compute and Amazon S3 for storage. The company's goal is to eliminate internet access and allow the application to continue to function. What change should be made in the VPC before updating the route table?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a NAT gateway for Amazon S3 access"
                },
                {
                    "optionId": "B",
                    "optionText": "Create a VPC endpoint for Amazon S3 access"
                },
                {
                    "optionId": "C",
                    "optionText": "Create a VPC endpoint for Amazon EC2 access"
                },
                {
                    "optionId": "D",
                    "optionText": "Create a NAT gateway for Amazon EC2 access"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 242,
            "questionText": "A company is deploying a reporting application on Amazon EC2. The application is expected to generate 1,000 documents every hour and each document will be 800 MB. The company is concerned about strong data consistency and le locking, as various applications hosted on other EC2 instances will process the report documents in parallel when they become available. What storage solution will meet these requirements with the LEAST amount of administrative overhead?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon EFS"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon S3"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon ElastiCache"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon EBS"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 243,
            "questionText": "A Solutions Architect is building a WordPress-based web application hosted on AWS using Amazon EC2. This application serves as a blog for an international internet security company. The application must be geographically redundant and scalable. It must separate the public Amazon EC2 web servers from the private Amazon RDS database, it must be highly available, and it must support dynamic port routing. Which combination of AWS services or capabilities will meet these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "AWS Auto Scaling with a Classic Load Balancer, and AWS CloudTrail"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon Route 53, Auto Scaling with an Application Load Balancer, and Amazon CloudFront"
                },
                {
                    "optionId": "C",
                    "optionText": "A VPC, a NAT gateway and Auto Scaling with a Network Load Balancer"
                },
                {
                    "optionId": "D",
                    "optionText": "CloudFront, Route 53, and Auto Scaling with a Classic Load Balancer"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 244,
            "questionText": "An e-commerce application places orders in an Amazon SQS queue. When a message is received, Amazon EC2 worker instances process the request. The EC2 instances are in an Auto Scaling group. How should the architecture be designed to scale up and down with the LEAST amount of operational overhead?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use an Amazon CloudWatch alarm on the EC2 CPU to scale the Auto Scaling group up and down."
                },
                {
                    "optionId": "B",
                    "optionText": "Use an EC2 Auto Scaling health check for messages processed on the EC2 instances to scale up and down."
                },
                {
                    "optionId": "C",
                    "optionText": "Use an Amazon CloudWatch alarm based on the number of visible messages to scale the Auto Scaling group up or down."
                },
                {
                    "optionId": "D",
                    "optionText": "Use an Amazon CloudWatch alarm based on the CPU to scale the Auto Scaling group up or down."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 245,
            "questionText": "A customer is migrating to AWS and requires applications to access Network File System shares without code changes. Data is critical and accessed frequently. Which storage solution should a Solutions Architect recommend to maximize availability and durability?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon EBS"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon S3"
                },
                {
                    "optionId": "C",
                    "optionText": "AWS Storage Gateway for files"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon EFS"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 246,
            "questionText": "A company has many applications on Amazon EC2 instances running in Auto Scaling groups. Company policies require that data on the attached Amazon EBS volume must be retained. Which actions will meet this requirement without impacting performance?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Enable Termination Protection on the Amazon EC2 instances."
                },
                {
                    "optionId": "B",
                    "optionText": "Disable DeleteOnTermination for the Amazon EBS volumes."
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon EC2 user data to set up a synchronization job for root volume data."
                },
                {
                    "optionId": "D",
                    "optionText": "Change the auto scaling Health Check to point to a source on the root volume."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 247,
            "questionText": "A company wants to expand its web services from us-east-1 into ap-southeast-1. The company stores a large amount of static content on its website, and recently received complaints about slow loading speeds and the website timing out. What should be done to meet the expansion goal while also addressing the latency and timeout issues?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Store the static content in Amazon S3 and enable S3 Transfer Acceleration."
                },
                {
                    "optionId": "B",
                    "optionText": "Store the static content in an Amazon EBS volume in the ap-southeast-1 region and provision larger Amazon EC2 instances for the website."
                },
                {
                    "optionId": "C",
                    "optionText": "Use an Amazon Route 53 simple routing policy to distribute cached content across three regions."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon S3 to store the static content and Configure an Amazon CloudFront distribution."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 248,
            "questionText": "An application is scanning an Amazon DynamoDB table that was created with default settings. The application occasionally reads stale data when it queries the table. How can this issue be corrected? 7",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Increase the provisioned read capacity of the table."
                },
                {
                    "optionId": "B",
                    "optionText": "Enable AutoScaling on the DynamoDB table."
                },
                {
                    "optionId": "C",
                    "optionText": "Update the application to use strongly consistent reads."
                },
                {
                    "optionId": "D",
                    "optionText": "Re-create the DynamoDB table with eventual consistency disabled."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 249,
            "questionText": "A company is setting up a new website for online sales. The company will have a web tier and a database tier. The web tier consists of loadbalanced, auto-scaled Amazon EC2 instances in multiple Availability Zones (AZs). The database tier is an Amazon RDS Multi-AZ deployment. The EC2 instances must connect securely to the database. How should the resources be launched?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "EC2 instances: public subnet RDS database instances: public subnet Load balancer: public subnet"
                },
                {
                    "optionId": "B",
                    "optionText": "EC2 instances: public subnet RDS database instances: private subnet Load balancer: private subnet"
                },
                {
                    "optionId": "C",
                    "optionText": "EC2 instances: private subnet RDS database instances: public subnet Load balancer: public subnet"
                },
                {
                    "optionId": "D",
                    "optionText": "EC2 instances: private subnet RDS database instances: private subnet Load balancer: public subnet"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 250,
            "questionText": "A customer set up an Amazon VPC with one private subnet and one public subnet with a NAT gateway. The VPC will contain a group of Amazon EC2 instances. All instances will Configure themselves at startup by downloading a bootstrap script from an Amazon S3 bucket with a policy that only allows access from the customer's Amazon EC2 instances and then deploys an application through GIT. A Solutions Architect has been asked to design a solution that provides the highest level of security regarding network connectivity to the Amazon EC2 instances. How should the Architect design the infrastructure?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Place the Amazon EC2 instances in the public subnet, with no EIPs; route outgoing traffic through the internet gateway."
                },
                {
                    "optionId": "B",
                    "optionText": "Place the Amazon EC2 instances in a public subnet, and assign EIPs; route outgoing traffic through the NAT gateway."
                },
                {
                    "optionId": "C",
                    "optionText": "Place the Amazon EC2 instances in a private subnet, and assign EIPs; route outgoing traffic through the internet gateway."
                },
                {
                    "optionId": "D",
                    "optionText": "Place the Amazon EC2 instances in a private subnet, with no EIPs; route outgoing traffic through the NAT gateway"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 251,
            "questionText": "A company processed 10 TB of raw data to generate quarterly reports. Although it is unlikely to be used again, the raw data needs to be preserved for compliance and auditing purposes. What is the MOST cost-effective way to store the data in AWS?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon EBS Cold HDD (sc1)"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon S3 Standard-Infrequent Access (S3 Standard-IA)"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon Glacier"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 252,
            "questionText": "A Solutions Architect needs to design a solution that will allow Website Developers to deploy static web content without managing server infrastructure. All web content must be accessed over HTTPS with a custom domain name. The solution should be scalable as the company continues to grow. Which of the following will provide the MOST cost-effective solution?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon EC2 instance with Amazon EBS"
                },
                {
                    "optionId": "B",
                    "optionText": "AWS Lambda function with Amazon API Gateway"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon CloudFront with an Amazon S3 bucket origin"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon S3 with a static website"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 253,
            "questionText": "A company is running a series of national TV campaigns. These 30-second advertisements will introduce sudden traffic peaks targeted at a Node.js application. The company expects traffic to increase from ve requests each minute to more than 5,000 requests each minute. Which AWS service should a Solutions Architect use to ensure traffic surges can be handled?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "AWS Lambda"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon ElastiCache"
                },
                {
                    "optionId": "C",
                    "optionText": "Size EC2 instances to handle peak load"
                },
                {
                    "optionId": "D",
                    "optionText": "An Auto Scaling group for EC2 instances"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 254,
            "questionText": "An insurance company stores all documents related to annual policies for the duration of the policies.The documents are created once and then stored until they are required, typically at the end of the policy.A document must be capable of being retrieved immediately.The company is now moving their document management to the AWS Cloud.Which service should a Solutions Architect recommend as a cost - effective solution that meets the company 's requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon RDS MySQL"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon S3 Standard-Infrequent Access"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon Glacier"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon S3 Standard"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 255,
            "questionText": "How can a user track memory usage in an EC2 instance ? ",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Call Amazon CloudWatch to retrieve the memory usage metric data that exists for the EC2 instance."
                },
                {
                    "optionId": "B",
                    "optionText": "Assign an IAM role to the EC2 instance with an IAM policy granting access to the desired metric."
                },
                {
                    "optionId": "C",
                    "optionText": "Use an instance type that supports memory usage reporting to a metric by default."
                },
                {
                    "optionId": "D",
                    "optionText": "Place an agent on the EC2 instance to push memory usage to an Amazon CloudWatch custom metric."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 256,
            "questionText": "A Solutions Architect must design a storage solution for incoming billing reports in CSV format. The data does not need to be scanned frequently and is discarded after 30 days. Which service will be MOST cost-effective in meeting these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Import the logs into an RDS MySQL instance."
                },
                {
                    "optionId": "B",
                    "optionText": "Use AWS Data Pipeline to import the logs into a DynamoDB table."
                },
                {
                    "optionId": "C",
                    "optionText": "Write the files to an S3 bucket and use Amazon Athena to query the data."
                },
                {
                    "optionId": "D",
                    "optionText": "Import the logs to an Amazon Redshift cluster"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 257,
            "questionText": "A Solutions Architect needs to deploy an HTTP/HTTPS service on Amazon EC2 instances with support for WebSockets using load balancers. How can the Architect meet these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Configure a Network Load Balancer."
                },
                {
                    "optionId": "B",
                    "optionText": "Configure an Application Load Balancer."
                },
                {
                    "optionId": "C",
                    "optionText": "Configure a Classic Load Balancer."
                },
                {
                    "optionId": "D",
                    "optionText": "Configure a Layer-4 Load Balancer."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 258,
            "questionText": "A Solution Architect is designing a web application that runs on Amazon EC2 instances behind a load balancer. All data in transit must be encrypted. Which solutions will meet the encryption requirement? (Select TWO.) 7",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use an Application Load Balancer (ALB) in passthrough mode, then terminate SSL on EC2 instances."
                },
                {
                    "optionId": "B",
                    "optionText": "Use an Application Load Balancer (ALB) with a TCP listener, then terminate SSL on EC2 instances."
                },
                {
                    "optionId": "C",
                    "optionText": "Use a Network Load Balancer (NLB) with a TCP listener, then terminate SSL on EC2 instances."
                },
                {
                    "optionId": "D",
                    "optionText": "Use an Application Load Balancer (ALB) with an HTTPS listener, then install SSL certificates on the ALB and EC2 instances.,"
                },
                {
                    "optionId": "E",
                    "optionText": "Use a Network Load Balancer (NLB) with an HTTPS listener, then install SSL certificates on the NLB and EC2 instances."
                }
            ],
            "questionAnswer": "CD"
        },
        {
            "questionId": 259,
            "questionText": "A user is designing a new service that receives location updates from 3,600 rental cars every hour. The cars upload their location to an Amazon S3 bucket. Each location must be checked for distance from the original rental location. Which services will process the updates and automatically scale?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon EC2 and Amazon EBS"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon Kinesis Firehouse and Amazon S3"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon ECS and Amazon RDS"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon S3 events and AWS Lambda"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 260,
            "questionText": "A company is writing a new service running on Amazon EC2 that must create thumbnail images of thousands of images in a large archive. The system will write scratch data to storage during the process. Which storage service is best suited for this scenario?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "EC2 instance store"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon EFS"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon CloudSearch"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon EBS Throughput Optimized HDD (st1)"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 261,
            "questionText": "A company's Amazon RDS MySQL DB instance may be rebooted for maintenance and to apply patches. This database is critical and potential user disruption must be minimized. What should the Solution Architect do in this scenario?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Set up an RDS MySQL cluster"
                },
                {
                    "optionId": "B",
                    "optionText": "Create an RDS MySQL Read Replica."
                },
                {
                    "optionId": "C",
                    "optionText": "Set RDS MySQL to Multi-AZ."
                },
                {
                    "optionId": "D",
                    "optionText": "Create an Amazon EC2 instance MySQL cluster."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 262,
            "questionText": "A retail company operates an e-commerce environment that runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group. Images are hosted in an Amazon S3 bucket using a custom domain name. During a ash sale with 10,000 simultaneous users, some images on the website are not loading. What should be done to resolve the performance issue?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Move the images to the EC2 instances in the Auto Scaling group."
                },
                {
                    "optionId": "B",
                    "optionText": "Enable Transfer Acceleration for the S3 bucket."
                },
                {
                    "optionId": "C",
                    "optionText": "Configure an Amazon CloudFront distribution with the S3 bucket as the origin."
                },
                {
                    "optionId": "D",
                    "optionText": "Increase the number of minimum, desired, and maximum EC2 instances in the Auto Scaling group."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 263,
            "questionText": "A solutions Architect is designing a new workload where an AWS Lambda function will access an Amazon DynamoDB table. What is the MOST secure means of granting the Lambda function access to the DynamoDB table?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create an identity and access management (IAM) role with the necessary permissions to access the DynamoDB table, and assign the role to the Lambda function."
                },
                {
                    "optionId": "B",
                    "optionText": "Create a DynamoDB user name and password and give them to the Developer to use in the Lambda function."
                },
                {
                    "optionId": "C",
                    "optionText": "Create an identity and access management (IAM) user, and create access and secret keys for the user. Give the user the necessary permissions to access the DynamoDB table. Have the Developer use these keys to access the resources."
                },
                {
                    "optionId": "D",
                    "optionText": "Create an identity and access management (IAM) role allowing access from AWS Lambda and assign the role to the DynamoDB table."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 264,
            "questionText": "A web application runs on Amazon EC2 instances behind an ELB Application Load Balancer. The instances run in an EC2 Auto Scaling group across multiple Availability Zones. Every night, the Auto Scaling group doubles in size. traffic analysis shows that users in a particular region are requesting the same static content stored locally on the EC2 instances. How can a Solutions Architect reduces the need to scale and improve application performance for the users?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Re-deploy the application in a new VPC that is closer to the users making the requests."
                },
                {
                    "optionId": "B",
                    "optionText": "Create an Amazon CloudFront distribution for the site and redirect user traffic to the distribution."
                },
                {
                    "optionId": "C",
                    "optionText": "Store the contents on Amazon EFS instead of the EC2 root volume."
                },
                {
                    "optionId": "D",
                    "optionText": "Implement Amazon Redshift to create a repository of the content closer to the users."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 265,
            "questionText": "A Solutions Architect is designing an application that will run on Amazon ECS behind an Application Load Balancer (ALB). For security reasons, 8 the Amazon EC2 host instances for the ECS cluster are in a private subnet. What should be done to ensure that the incoming traffic to the host instances is from the ALB only?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create network ACL rules for the private subnet to allow incoming traffic on ports 32768 through 61000 from the IP address of the ALB only."
                },
                {
                    "optionId": "B",
                    "optionText": "Update the EC2 cluster security group to allow incoming access from the IP address of the ALB only."
                },
                {
                    "optionId": "C",
                    "optionText": "Modify the security group used by the EC2 cluster to allow incoming traffic from the security group used by the ALB only."
                },
                {
                    "optionId": "D",
                    "optionText": "Enable AWS WAF on the ALB and enable the ECS rule."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 266,
            "questionText": "A company wants to improve latency by hosting images within a public Amazon S3 bucket fronted by an Amazon CloudFront distribution. The company wants to restrict access to the S3 bucket to include the CloudFront distribution only, while also allowing CloudFront to continue proper functionality. What should be done after making the bucket private to restrict access with the LEAST operational overhead?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a CloudFront origin access identity and create a security group that allows access from CloudFront."
                },
                {
                    "optionId": "B",
                    "optionText": "Create a CloudFront origin access identity and update the bucket policy to grant access to it."
                },
                {
                    "optionId": "C",
                    "optionText": "Create a bucket policy restricting all access to the bucket to include CloudFront IPs only."
                },
                {
                    "optionId": "D",
                    "optionText": "Enable the CloudFront option to restrict viewer access and update the bucket policy to allow the distribution."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 267,
            "questionText": "A Solutions Architect is designing a new architecture that will use an Amazon EC2 Auto Scaling group. Which of the following factors determine the health check grace period? (Select TWO.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "How frequently the Auto Scaling group scales up or down."
                },
                {
                    "optionId": "B",
                    "optionText": "How many Amazon CloudWatch alarms are Configured for status checks."
                },
                {
                    "optionId": "C",
                    "optionText": "How much of the application code is embedded in the AMI."
                },
                {
                    "optionId": "D",
                    "optionText": "How long it takes for the Auto Scaling group to detect a failure.,"
                },
                {
                    "optionId": "E",
                    "optionText": "How long the bootstrap script takes to run."
                }
            ],
            "questionAnswer": "CE"
        },
        {
            "questionId": 268,
            "questionText": "A company plans to deploy a new application in AWS that reads and writes information to a database. The company wants to deploy the application in two different AWS Regions in an active-active configuration. The databases need to replicate to keep information in sync. What should be used to meet these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon Athena with Amazon S3 cross-region replication"
                },
                {
                    "optionId": "B",
                    "optionText": "AWS Database Migration Service with change data capture"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon DynamoDB with global tables D Amazon RDS for PostgreSQL with a cross region Read Replica 8"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon RDS for PostgreSQL with a cross-region Read Replica"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 269,
            "questionText": "A company is developing a data lake solution in Amazon S3 to analyze large-scale datasets. The solution makes infrequent SQL queries only. In addition, the company wants to minimize infrastructure costs. Which AWS service should be used to meet these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon Athena"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon Redshift Spectrum"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon RDS for PostgreSQL"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon Aurora"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 270,
            "questionText": "A company needs to store data for 5 years. The company will need to have immediate and highly available access to the data at any point in time, but will not require frequent access. What lifecycle action should be taked to meet the requirements while reducing costs?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Transition objects from Amazon S3 Standard to Amazon S3 Standard-Infrequent Access (S3 Standard-IA)"
                },
                {
                    "optionId": "B",
                    "optionText": "Transition objects to expire after 5 years."
                },
                {
                    "optionId": "C",
                    "optionText": "Transition objects from Amazon S3 Standard to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)"
                },
                {
                    "optionId": "D",
                    "optionText": "Transition objects from Amazon S3 Standard to the GLACIER storage class."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 271,
            "questionText": "A company wants to create an application that will transmit protected health information (PHI) to thousands of service consumers in different AWS accounts. The application servers will sit in private VPC subnets. The routing for the application must be fault tolerant. What should be done to meet these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a VPC endpoint service and grant permissions to speci c service consumers to create a connection."
                },
                {
                    "optionId": "B",
                    "optionText": "Create a virtual private gateway connection between each pair of service provider VPCs and service consumer VPCs."
                },
                {
                    "optionId": "C",
                    "optionText": "Create an internal Application Load Balancer in the service provider VPC and put application servers behind it."
                },
                {
                    "optionId": "D",
                    "optionText": "Create a proxy server in the service provider VPC to route requests from service consumers to the application servers."
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 272,
            "questionText": "A company hosts a website using Amazon API Gateway on the front end. Recently, there has been heavy traffic on the website and the company 8 wants to control access by allowing authenticated traffic only. How should the company limit access to authenticated users only? (Select TWO.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Allow users that are authenticated through Amazon Cognito."
                },
                {
                    "optionId": "B",
                    "optionText": "Limit traffic through API Gateway."
                },
                {
                    "optionId": "C",
                    "optionText": "Allow X.509 certificates to authenticate traffic."
                },
                {
                    "optionId": "D",
                    "optionText": "Deploy AWS KMS to identify users.,"
                },
                {
                    "optionId": "E",
                    "optionText": "Assign permissions in AWS IAM to allow users."
                }
            ],
            "questionAnswer": "AE"
        },
        {
            "questionId": 273,
            "questionText": "A company needs to use AWS resources to expand capacity for a website hosted in an on-premises data center. The AWS resources will include load balancers, Auto Scaling, and Amazon EC2 instances that will access an on-premises database. Network connectivity has been established, but no traffic is going to the AWS environment. How should Amazon Route 53 be Configured to distribute load to the AWS environment? (Select TWO.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Set up a weighted routing policy, distributing the workload between the load balancer and the on-premises environment."
                },
                {
                    "optionId": "B",
                    "optionText": "Set up an A record to point the DNS name to the IP address of the load balancer."
                },
                {
                    "optionId": "C",
                    "optionText": "Create multiple A records for the EC2 instances."
                },
                {
                    "optionId": "D",
                    "optionText": "Set up a geolocation routing policy to distribute the workload between the load balancer and the on-premises environment.,"
                },
                {
                    "optionId": "E",
                    "optionText": "Set up a routing policy for failover using the on-premises environment as primary and the load balancer as secondary."
                }
            ],
            "questionAnswer": "AB"
        },
        {
            "questionId": 274,
            "questionText": "Users submit requests to a service that takes several minutes to process. A Solutions Architect needs to ensure that these requests are processed at least once, and that the service has the ability to handle large increases in the number of requests. How should these requirements be met?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Put the requests into an Amazon SQS queue and Configure Amazon EC2 instances to poll the queue"
                },
                {
                    "optionId": "B",
                    "optionText": "Publish the message to an Amazon SNS topic that an Amazon EC2 subscriber can receive and process"
                },
                {
                    "optionId": "C",
                    "optionText": "Save the requests to an Amazon DynamoDB table with a DynamoDB stream that triggers an Amazon EC2 Spot Instance"
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon S3 to store the requests and Configure an event noti cation to have Amazon EC2 instances process the new object"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 275,
            "questionText": "A Solutions Architect is designing an Amazon VPC that requires access to a remote API server using IPv6. Resources within the VPC should not be accessed directly from the Internet. How should this be achieved?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use a NAT gateway and deny public access using security groups"
                },
                {
                    "optionId": "B",
                    "optionText": "Attach an egress-only internet gateway and update the routing tables"
                },
                {
                    "optionId": "C",
                    "optionText": "Use a NAT gateway and update the routing tables 8"
                },
                {
                    "optionId": "D",
                    "optionText": "Attach an internet gateway and deny public access using security groups"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 276,
            "questionText": "When designing an Amazon SQS message-processing solution, messages in the queue must be processed before the maximum retention time has elapsed. Which actions will meet this requirement? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use AWS STS to process the messages"
                },
                {
                    "optionId": "B",
                    "optionText": "Use Amazon EBS-optimized Amazon EC2 instances to process the messages"
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon EC2 instances in an Auto Scaling group with scaling triggered based on the queue length"
                },
                {
                    "optionId": "D",
                    "optionText": "Increase the SQS queue attribute for the message retention period,"
                },
                {
                    "optionId": "E",
                    "optionText": "Convert the SQS queue to a rest-in rest-out (FIFO) queue"
                }
            ],
            "questionAnswer": "CE"
        },
        {
            "questionId": 277,
            "questionText": "A company deployed a three-tier web application on Amazon EBS backed Amazon EC2 instances for the web and application tiers, and Amazon RDS for the database tier. The company is concerned about loss of data in the web and application tiers. What is the MOST efficient way to prevent data loss?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create an Amazon EFS le system and run a shell script to copy the data"
                },
                {
                    "optionId": "B",
                    "optionText": "Create an Amazon EBS snapshot using an Amazon CloudWatch Events rule"
                },
                {
                    "optionId": "C",
                    "optionText": "Create an Amazon S3 snapshot policy to back up the Amazon EBS volumes"
                },
                {
                    "optionId": "D",
                    "optionText": "Create a snapshot lifecycle policy that takes periodic snapshots of the Amazon EBS volumes"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 278,
            "questionText": "A company is using Amazon S3 for backups from an on-premises environment. Regulatory requirements state that data must be retained for at least 7 years. The data is infrequently accessed for 35 days, but needs to be instantly available. After 35 days, the data is rarely accessed. Which combination of actions will provide the MOST cost-effective solution? (Choose two)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Change the backup so the data goes to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) directly"
                },
                {
                    "optionId": "B",
                    "optionText": "Create an S3 lifecycle policy that moves the data to the GLACIER storage class after 7 years"
                },
                {
                    "optionId": "C",
                    "optionText": "Change the backup so the data goes to Amazon Glacier directly"
                },
                {
                    "optionId": "D",
                    "optionText": "Create an S3 lifecycle policy that moves the data to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) after 35 days,"
                },
                {
                    "optionId": "E",
                    "optionText": "Creates an S3 lifecycle policy that moves the data to the GLACIER storage class after 35 days"
                }
            ],
            "questionAnswer": "AE"
        },
        {
            "questionId": 279,
            "questionText": "A Solutions Architect is building an online shopping application where users will be able to browse items, add items to a cart, and purchase the items. Images of items will be stored in Amazon S3 buckets organized by item category. When an item is no longer available for purchase, the item image will be deleted from the S3 bucket. Occasionally, during testing, item images deleted from the S3 bucket are still visible to some users. What is a aw in this design approach?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "De ning S3 buckets by item may cause partition distribution errors, which will impact performance."
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon S3 DELETE requests are eventually consistent, which may cause other users to view items that have already been purchased"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon S3 DELETE requests apply a lock to the S3 bucket during the operation, causing other users to be blocked"
                },
                {
                    "optionId": "D",
                    "optionText": "Using Amazon S3 for persistence exposes the application to a single point of failure"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 280,
            "questionText": "A Solution Architect is creating a serverless web application that must access mapping data in hundreds of data files, each containing approximately 30 KB of data. The storage required is expected to grow to hundreds of terabytes. Which storage solution is most cost-effective, yet still meets the requirements for this use case?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon EFS"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon EBS Cold HDD (sc1)"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon S3 Standard"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon DynamoDB"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 281,
            "questionText": "An application running on AWS Lambda requires an API key to access a third-party service. The key must be stored securely with audited access to the Lambda function only. What is the MOST secure way to store the key?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "As an object in Amazon S3"
                },
                {
                    "optionId": "B",
                    "optionText": "As a secure string in AWS Systems Manager Parameter Store"
                },
                {
                    "optionId": "C",
                    "optionText": "Inside a le on an Amazon EBS volume attached to the Lambda function"
                },
                {
                    "optionId": "D",
                    "optionText": "Inside a secrets le stored on Amazon EFS"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 282,
            "questionText": "An application produces monthly reports that must be immediately accessible for up to 7 days. After 7 days, the data can be archived. Compliance policies require that the archived data be retrievable within 24 hours of a request. What is the MOST cost-effective approach to satisfy the compliance requirement?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Store the data in Amazon S3 Standard storage with a lifecycle rule to transition the data to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) after 7 days, then transition to the GLACIER storage class after 30 days"
                },
                {
                    "optionId": "B",
                    "optionText": "Store the data in Amazon S3 Standard storage with a lifecycle rule to transition the data to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) after 7 days"
                },
                {
                    "optionId": "C",
                    "optionText": "Store the data in Amazon S3 Standard storage with a lifecycle rule to transition the data to the GLACIER storage class after 30 days"
                },
                {
                    "optionId": "D",
                    "optionText": "Store the data in Amazon S3 Standard storage with a lifecycle rule to transition the data to the GLACIER storage class after 7 days"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 283,
            "questionText": "A company is developing a new stateless web service with low memory requirements. The service needs to scale based on demand. What is the MOST cost-effective solution?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Deploy the application onto AWS Elastic Beanstalk"
                },
                {
                    "optionId": "B",
                    "optionText": "Deploy the application onto AWS Lambda with access through Amazon API Gateway"
                },
                {
                    "optionId": "C",
                    "optionText": "Deploy the application onto an Amazon EC2 Spot Fleet"
                },
                {
                    "optionId": "D",
                    "optionText": "Deploy the application onto a container with an Amazon ECS EC2 launch type"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 284,
            "questionText": "A company has an application that generates invoices and makes the invoices available online. Invoices are stored as PDFs in an Amazon S3 bucket. Customers typically only view each invoice during the month it is issued. However, past invoices need to be immediately available. There are concerns over rising storage costs as the company gains more customers. What is the MOST cost-effective method to store the data?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use Amazon S3 for current invoices. Set up lifecycle rules to migrate invoices to the GLACIER storage class after 30 days."
                },
                {
                    "optionId": "B",
                    "optionText": "Store the invoices as text files. Use Amazon CloudFront to convert the invoices from text to PDF when customers download invoices."
                },
                {
                    "optionId": "C",
                    "optionText": "Store the invoices as binaries in an Amazon RDS database instance. Retrieve them from the database when customers request invoices."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon S3 for current invoices. Set up lifecycle rules to migrate invoices to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 285,
            "questionText": "A company is running its application in a single region on Amazon EC2 with Amazon EBS and Amazon S3 part of the storage design. What should be done to reduce data transfer costs?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a copy of the compute environment in another region"
                },
                {
                    "optionId": "B",
                    "optionText": "Convert the application to run on Lambda@Edge"
                },
                {
                    "optionId": "C",
                    "optionText": "Create an Amazon CloudFront distribution with Amazon S3 as the origin"
                },
                {
                    "optionId": "D",
                    "optionText": "Replicate Amazon S3 data to buckets in regions closer to the requester 86/29/2020 p g q"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 286,
            "questionText": "An application server needs to be in a private subnet without access to the Internet. The solution must retrieve and upload files to an Amazon S3 bucket. How should a Solutions Architect design a solution to meet these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use Amazon S3 VPC endpoints"
                },
                {
                    "optionId": "B",
                    "optionText": "Deploy a proxy server"
                },
                {
                    "optionId": "C",
                    "optionText": "Use a NAT Gateway"
                },
                {
                    "optionId": "D",
                    "optionText": "Use a private Amazon S3 bucket"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 287,
            "questionText": "A Solutions Architect must design a web application that will be hosted on AWS, allowing users to purchase access to premium, shared content that is stored in an S3 bucket. Upon payment, content will be available for download for 14 days before the user is denied access. Which of the following would be the LEAST complicated implementation?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use an Amazon CloudFront distribution with an origin access identity (OAI). Configure the distribution with an Amazon S3 origin to provide access to the le through signed URLs. Design a Lambda function to remove data that is older than 14 days."
                },
                {
                    "optionId": "B",
                    "optionText": "Use an S3 bucket and provide direct access to the le. Design the application to track purchases in a DynamoDB table. Configure a Lambda function to remove data that is older than 14 days based on a query to Amazon DynamoDB."
                },
                {
                    "optionId": "C",
                    "optionText": "Use an Amazon CloudFront distribution with an OAI. Configure the distribution with an Amazon S3 origin to provide access to the le through signed URLs. Design the application to set an expiration of 14 days for the URI."
                },
                {
                    "optionId": "D",
                    "optionText": "Use an Amazon CloudFront distribution with an OAI. Configure the distribution with an Amazon S3 origin to provide access to the le through signed URLs. Design the application to set an expiration of 60 minutes for the URL, and recreate the URL as necessary."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 288,
            "questionText": "A Solutions Architect plans to migrate a load balancer tier from a data center to AWS. Several websites have multiple domains that require secure load balancing. The Architect decides to use Elastic Load Balancing Application Load Balancers. What is the MOST efficient method for achieving secure communication?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a wildcard certificate and upload it to the Application Load Balancer"
                },
                {
                    "optionId": "B",
                    "optionText": "Create an SNI certificate and upload it to the Application Load Balancer"
                },
                {
                    "optionId": "C",
                    "optionText": "Create a secondary proxy server to terminate SSL traffic before the traffic reaches the Application Load Balancer"
                },
                {
                    "optionId": "D",
                    "optionText": "Let a third-party certificate Manager manage certificates required to all domains and upload them to the Application Load Balancer 8"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 289,
            "questionText": "An application stores data in an Amazon RDS MySQL DB instance. The database traffic primarily consists of read queries, which are overwhelming the current database. A Solutions Architect wants to scale the database. What combination of steps will achieve the goal? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Add the MySQL database instances to an Auto Scaling group"
                },
                {
                    "optionId": "B",
                    "optionText": "Migrate the MySQL database to Amazon Aurora"
                },
                {
                    "optionId": "C",
                    "optionText": "Migrate the MySQL database to a PostgreSQL database"
                },
                {
                    "optionId": "D",
                    "optionText": "Create read replicas in different Availability Zones,"
                },
                {
                    "optionId": "E",
                    "optionText": "Create an ELB Application Load Balancer"
                }
            ],
            "questionAnswer": "DB"
        },
        {
            "questionId": 290,
            "questionText": "A Solutions Architect is designing an elastic application that will have between 10 and 50 Amazon EC2 concurrent instances running, dependent on load. Each instance must mount storage that will read and write to the same 50 GB folder. Which storage type meets the requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon S3"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon EFS"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon EBS volumes"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon EC2 instance store"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 291,
            "questionText": "A Solutions Architect is designing an application that is expected to have millions of users. The Architect needs options to store session data. Which option is the MOST performant?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon ElastiCache"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon RDS"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon S3"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon EFS"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 292,
            "questionText": "A company is launching a dynamic website, and the Operations team expects up to 10 times the traffic on the launch date. This website is hosted on Amazon EC2 instances and traffic is distributed by Amazon Route 53. A Solutions Architect must ensure that there is enough backend capacity to meet user demands. The Operations team wants to scale down as quickly as possible after the launch. What is the MOST cost-effective and fault-tolerant solution that will meet the company's customer demands? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Set up an Application Load Balancer to distribute traffic to multiple EC2 instances"
                },
                {
                    "optionId": "B",
                    "optionText": "Set up an Auto Scaling group across multiple Availability Zones for the website, and create scale-out and scale-in policies"
                },
                {
                    "optionId": "C",
                    "optionText": "Create an Amazon CloudWatch alarm to send an email through Amazon SNS when EC2 instances experience higher loads"
                },
                {
                    "optionId": "D",
                    "optionText": "Create an AWS Lambda function to monitor website load time, run it every 5 minutes, and use the AWS SDK to create a new instance if website load time is longer than 2 seconds,"
                },
                {
                    "optionId": "E",
                    "optionText": "Use Amazon CloudFront to cache the website content during launch and set a TTL for cache content to expire after the launch date"
                }
            ],
            "questionAnswer": "AB"
        },
        {
            "questionId": 293,
            "questionText": "A customer has an application that is used by enterprise customers outside of AWS. Some of these customers use legacy rewalls that cannot whitelist by DNS name, but whitelist based only on IP address. The application is currently deployed in two Availability Zones, with one EC2 instance in each that has Elastic IP addresses. The customer wants to whitelist only two IP addresses, but the two existing EC2 instances cannot sustain the amount of traffic. What can a Solutions Architect do to support the customer and allow for more capacity? (Choose two.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a Network Load Balancer with an interface in each subnet, and assign a static IP address to each subnet."
                },
                {
                    "optionId": "B",
                    "optionText": "Create additional EC2 instances and put them on standby. Remap an Elastic IP address to a standby instance in the event of a failure."
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon Route 53 with a weighted, round-robin routing policy across the Elastic IP addresses to resolve one at a time."
                },
                {
                    "optionId": "D",
                    "optionText": "Add additional EC2 instances with Elastic IP addresses, and register them with Amazon Route 53,"
                },
                {
                    "optionId": "E",
                    "optionText": "Switch the two existing EC2 instances for an Auto Scaling group, and register them with the Network Load Balancer."
                }
            ],
            "questionAnswer": "AE"
        },
        {
            "questionId": 294,
            "questionText": "A company is storing application data in Amazon S3 buckets across multiple AWS regions. Company policy requires that encryption keys be generated at the company headquarters, but the encryption keys may be stored in AWS after generation. The Solutions Architect plans to Configure cross-region replication. Which solution will encrypt the data whole requiring the LEAST amount of operational overhead?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Configure the applications to write to an S3 bucket using client-side encryption"
                },
                {
                    "optionId": "B",
                    "optionText": "Configure S3 buckets to encrypt using AES-256"
                },
                {
                    "optionId": "C",
                    "optionText": "Configure S3 object encryption using AWS CLI with Server-Side Encryption with AWS KMS-Managed Keys (SSE-KMS)"
                },
                {
                    "optionId": "D",
                    "optionText": "Configure S3 buckets to use Server-Side Encryption with AWS KMS-Managed Keys (SSE-KMS) with imported key material in both regions"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 295,
            "questionText": "A Solutions Architect must design a solution that encrypts data in Amazon S3. Corporate policy mandates encryption keys be generated and managed on premises. Which solution should the Architect use to meet the security requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "AWS CloudHSM"
                },
                {
                    "optionId": "B",
                    "optionText": "SSE-KMS: Server-side encryption with AWS KMS managed keys"
                },
                {
                    "optionId": "C",
                    "optionText": "SSE-S3: Server-side encryption with Amazon-managed master key"
                },
                {
                    "optionId": "D",
                    "optionText": "SSE-C: Server-side encryption with customer-provided encryption keys"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 296,
            "questionText": "A Solutions Architect is considering possible options for improving the security of the data on an Amazon EBS volume attached to an Amazon EC2 instance. Which solution will improve the security of the data?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use AWS KMS to encrypt the EBS volume"
                },
                {
                    "optionId": "B",
                    "optionText": "Create an IAM policy that restricts read and write access to the volume"
                },
                {
                    "optionId": "C",
                    "optionText": "Migrate the sensitive data to an instance store volume"
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon single sign-on to control login access to the EC2 instance"
                }
            ],
            "questionAnswer": "A"
        },
        {
            "questionId": 297,
            "questionText": "A Solutions Architect designed a system based on Amazon Kinesis Data Streams. After the work ow was put into production, the company noticed it performed slowly and identified Kinesis Data Streams as the problem. One of the streams has a total of 10 Mb/s throughput. What should the Solutions Architect recommend to improve performance?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use AWS Lambda to preprocess the data and transform the records into a simpler format, such as CSV."
                },
                {
                    "optionId": "B",
                    "optionText": "Run the MergeShard command to reduce the number of shards that the consumer can more easily process."
                },
                {
                    "optionId": "C",
                    "optionText": "Change the work ow to use Amazon Kinesis Data Firehose to gain a higher throughput."
                },
                {
                    "optionId": "D",
                    "optionText": "Run the UpdateShardCount command to increase the number of shards in the stream"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 298,
            "questionText": "A Solutions Architect is designing an application that requires having six Amazon EC2 instances running at all times. The application will be deployed in the sa- east-1 region, which has three Availability Zones: sa-east-1a, sa-east-1b, and sa-east-1c. Which action will provide 100 percent fault tolerance and the LOWEST cost in the event that one Availability Zone in the region becomes unavailable?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Deploy six Amazon EC2 instances in sa-east-1a, six Amazon EC2 instances in sa-east-1b, and six Amazon EC2 instances in sa-east-1c"
                },
                {
                    "optionId": "B",
                    "optionText": "Deploy six Amazon EC2 instances in sa-east-1a, four Amazon EC2 instances in sa-east-1b, and two Amazon EC2 instances in sa-east-1c 9"
                },
                {
                    "optionId": "C",
                    "optionText": "Deploy three Amazon EC2 instances in sa-east-1a, three Amazon EC2 instances in sa-east-1b, and three Amazon EC2 instances in sa-east1c"
                },
                {
                    "optionId": "D",
                    "optionText": "Deploy two Amazon EC2 instances in sa-east-1a, two Amazon EC2 instances in sa-east-1b, and two Amazon EC2 instances in sa-east-1c"
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 299,
            "questionText": "A Solutions Architect is designing a three-tier web application that will allow customers to upload pictures from a mobile application. The application will then generate a thumbnail of the picture and return a message to the user con rming that the image was successfully uploaded. Generation of the thumbnail may take up to 5 seconds. To provide a sub second response time to the customers uploading the images, the Solutions Architect wants to separate the web tier from the application tier. Which service would allow the presentation tier to asynchronously dispatch the request to the application tier?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "AWS Step Functions"
                },
                {
                    "optionId": "B",
                    "optionText": "AWS Lambda"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon SNS"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon SQS"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 300,
            "questionText": "A Solutions Architect is designing an application in AWS. The Architect must not expose the application or database tier over the Internet for security reasons. The application must be low-cost and have a scalable front end. The databases and application tier must have only one-way Internet access to download software and patch updates. Which solution helps to meet these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use a NAT Gateway as the front end for the application tier and to enable the private resources to have Internet access."
                },
                {
                    "optionId": "B",
                    "optionText": "Use an Amazon EC2-based proxy server as the front end for the application tier, and a NAT Gateway to allow Internet access for private resources."
                },
                {
                    "optionId": "C",
                    "optionText": "Use an ELB Classic Load Balancer as the front end for the application tier, and an Amazon EC2 proxy server to allow Internet access for private resources."
                },
                {
                    "optionId": "D",
                    "optionText": "Use an ELB Classic Load Balancer as the front end for the application tier, and a NAT Gateway to allow Internet access for private resources."
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 301,
            "questionText": "A Solutions Architect is designing a multi-tier application consisting of an Application Load Balancer, an Amazon RDS database instance, and an Auto Scaling group on Amazon EC2 instances. Each tier is in a separate subnet. There are some EC2 instances in the subnet that belong to another application. The RDS database instance should accept traffic only from the EC2 instances in the Auto Scaling group. What should be done to meet these requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Configure the inbound network ACLs on the database subnet to accept traffic from the IP addresses of the EC2 instances only."
                },
                {
                    "optionId": "B",
                    "optionText": "Configure the inbound rules on the security group associated with the RDS database instance. Set the source to the security group associated with instances in the Auto Scaling group."
                },
                {
                    "optionId": "C",
                    "optionText": "Configure the outbound rules on the security group associated with the Auto Scaling group. Set the destination to the security group associated with the RDS database instance. 9"
                },
                {
                    "optionId": "D",
                    "optionText": "Configure the inbound network ACLs on the database subnet to accept traffic only from the CIDR range of the subnet used by the Auto Scaling group."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 302,
            "questionText": "An organization uses Amazon S3 to store video content served via its website. It only has rights to deliver this content to users within its own country and needs to restrict access. How can the organization ensure that these files are only accessible from within its country?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use a custom Amazon S3 bucket policy to allow access only to users inside the organization's country"
                },
                {
                    "optionId": "B",
                    "optionText": "Use Amazon CloudFront and Geo Restriction to allow access only to users inside the organization's country"
                },
                {
                    "optionId": "C",
                    "optionText": "Use an Amazon S3 bucket ACL to allow access only to users inside the organization's country"
                },
                {
                    "optionId": "D",
                    "optionText": "Use le-based ACL permissions on each video le to allow access only to users inside the organization's country"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 303,
            "questionText": "A company is storing data in an Amazon DynamoDB table and needs to take daily backups and retain them for 6 months. How should the Solutions Architect meet these requirements without impacting the production workload?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use DynamoDB replication and restore the table from the replica"
                },
                {
                    "optionId": "B",
                    "optionText": "Use AWS Data Pipeline and create a scheduled job to back up the DynamoDB table daily"
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon CloudWatch Events to trigger an AWS Lambda function that makes an on-demand backup of the table"
                },
                {
                    "optionId": "D",
                    "optionText": "Use AWS Batch to create a scheduled backup with the default template, then back up to Amazon S3 daily."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 304,
            "questionText": "A client reports that they want see an audit log of any changes made to AWS resources in their account. What can the client do to achieve this?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Set up Amazon CloudWatch monitors on services they own"
                },
                {
                    "optionId": "B",
                    "optionText": "Enable AWS CloudTrail logs to be delivered to an Amazon S3 bucket"
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon CloudWatch Events to parse logs"
                },
                {
                    "optionId": "D",
                    "optionText": "Use AWS OpsWorks to manage their resources"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 305,
            "questionText": "An application running in a private subnet accesses an Amazon DynamoDB table. There is a security requirement that the data never leave the AWS network. How should this requirement be met?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Configure a network ACL on DynamoDB to limit traffic to the private subnet"
                },
                {
                    "optionId": "B",
                    "optionText": "Enable DynamoDB encryption at rest using an AWS KMS key"
                },
                {
                    "optionId": "C",
                    "optionText": "Add a NAT gateway and Configure the route table on the private subnet"
                },
                {
                    "optionId": "D",
                    "optionText": "Create a VPC endpoint for DynamoDB and Configure the endpoint policy"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 306,
            "questionText": "A three-tier application is being created to host small news articles. The application is expected to serve millions of users. When breaking news occurs, the site must handle very large spikes in traffic without significantly impacting database performance. Which design meets these requirements while minimizing costs?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use Auto Scaling groups to increase the number of Amazon EC2 instances delivering the web application"
                },
                {
                    "optionId": "B",
                    "optionText": "Use Auto Scaling groups to increase the size of the Amazon RDS instances delivering the database"
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon DynamoDB strongly consistent reads to adjust for the increase in traffic"
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon DynamoDB Accelerator (DAX) to cache read operations to the database"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 307,
            "questionText": "During a review of business applications, a Solutions Architect identi es a critical application with a relational database that was built by a business user and is running on the user's desktop. To reduce the risk of a business interruption, the Solutions Architect wants to migrate the application to a highly available, multi- tiered solution in AWS. What should the Solutions Architect do to accomplish this with the LEAST amount of disruption to the business?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create an import package of the application code for upload to AWS Lambda, and include a function to create another Lambda function to migrate data into an Amazon RDS database"
                },
                {
                    "optionId": "B",
                    "optionText": "Create an image of the user's desktop, migrate it to Amazon EC2 using VM Import, and place the EC2 instance in an Auto Scaling group"
                },
                {
                    "optionId": "C",
                    "optionText": "Pre-stage new Amazon EC2 instances running the application code on AWS behind an Application Load Balancer and an Amazon RDS MultiAZ DB instance"
                },
                {
                    "optionId": "D",
                    "optionText": "Use AWS DMS to migrate the backend database to an Amazon RDS Multi-AZ DB instance. Migrate the application code to AWS Elastic Beanstalk"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 308,
            "questionText": "A company has thousands of files stored in an Amazon S3 bucket that has a well-de ned access pattern. The files are accessed by an application multiple times a day for the rest 30 days. Files are rarely accessed within the next 90 days. After that, the files are never accessed again. During the rest 120 days accessing these files should never take more than a few seconds 9 the rest 120 days, accessing these files should never take more than a few seconds. Which lifecycle policy should be used for the S3 objects to minimize costs based on the access pattern?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use Amazon S3 Standard-Infrequent Access (S3 Standard-IA) storage for the rest 30 days. Then move the files to the GLACIER storage class for the next 90 days. Allow the data to expire after that."
                },
                {
                    "optionId": "B",
                    "optionText": "Use Amazon S3 Standard storage for the rest 30 days. Then move the files to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) for the next 90 days. Allow the data to expire after that."
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon S3 Standard storage for rest 30 days. Then move the files to the GLACIER storage class for the next 90 days. Allow the data to expire after that."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon S3 Standard-Infrequent Access (S3 Standard-IA) for the rest 30 days. After that, move the data to the GLACIER storage class, where is will be deleted automatically."
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 309,
            "questionText": "A company creates business-critical 3D images every night. The images are batch-processed every Friday and require an uninterrupted 48 hours to complete. What is the MOST cost-effective Amazon EC2 pricing model for this scenario?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "On-Demand Instances"
                },
                {
                    "optionId": "B",
                    "optionText": "Scheduled Reserved Instances"
                },
                {
                    "optionId": "C",
                    "optionText": "Reserved Instances"
                },
                {
                    "optionId": "D",
                    "optionText": "Spot Instances"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 310,
            "questionText": "An application generates audit logs of operational activities. Compliance requirements mandate that the application retain the logs for 5 years. How can these requirements be met?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Save the logs in an Amazon S3 bucket and enable Multi-Factor Authentication Delete (MFA Delete) on the bucket."
                },
                {
                    "optionId": "B",
                    "optionText": "Save the logs in an Amazon EFS volume and use Network File System version 4 (NFSv4) locking with the volume."
                },
                {
                    "optionId": "C",
                    "optionText": "Save the logs in an Amazon Glacier vault and use the Vault Lock feature."
                },
                {
                    "optionId": "D",
                    "optionText": "Save the logs in an Amazon EBS volume and take monthly snapshots."
                }
            ],
            "questionAnswer": "C"
        },
        {
            "questionId": 311,
            "questionText": "A Solutions Architect is creating an application running in an Amazon VPC that needs to access AWS Systems Manager Parameter Store. Network security rules prohibit any route table entry with a 0.0.0.0/0 destination. What infrastructure addition will allow access to the AWS service while meeting the requirements?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "VPC peering"
                },
                {
                    "optionId": "B",
                    "optionText": "NAT instance"
                },
                {
                    "optionId": "C",
                    "optionText": "NAT gateway"
                },
                {
                    "optionId": "D",
                    "optionText": "AWS PrivateLink 9"
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 312,
            "questionText": "A photo-sharing website running on AWS allows users to generate thumbnail images of photos stored in Amazon S3. An Amazon DynamoDB table maintains the locations of photos, and thumbnails are easily re-created from the originals if they are accidentally deleted. How should the thumbnail images be stored to ensure the LOWEST cost?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Amazon S3 Standard-Infrequent Access (S3 Standard-IA) with cross-region replication"
                },
                {
                    "optionId": "B",
                    "optionText": "Amazon S3"
                },
                {
                    "optionId": "C",
                    "optionText": "Amazon Glacier"
                },
                {
                    "optionId": "D",
                    "optionText": "Amazon S3 with cross-region replication"
                }
            ],
            "questionAnswer": "B"
        },
        {
            "questionId": 313,
            "questionText": "A company is implementing a data lake solution on Amazon S3. Its security policy mandates that the data stored in Amazon S3 should be encrypted at rest. Which options can achieve this? (Select TWO.)",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use S3 server-side encryption with an Amazon EC2 key pair."
                },
                {
                    "optionId": "B",
                    "optionText": "Use S3 server-side encryption with customer-provided keys (SSE-C)."
                },
                {
                    "optionId": "C",
                    "optionText": "Use S3 bucket policies to restrict access to the data at rest."
                },
                {
                    "optionId": "D",
                    "optionText": "Use client-side encryption before ingesting the data to Amazon S3 using encryption keys.,"
                },
                {
                    "optionId": "E",
                    "optionText": "Use SSL to encrypt the data while in transit to Amazon S3."
                }
            ],
            "questionAnswer": "BD"
        }
    ];
    alert ('merging');
    questionsEnumerated = [];

    for (let i = 0; i < questions.length; i++) {
        questionsEnumerated.push({ "examId" : "SAA-C02", "questionSkId" : i});
    }
    let arr3 = questions.map((item, i) => Object.assign({}, item, questionsEnumerated[i]));
    console.log(arr3);
    //run this method from an html and in dev tools JSON.stringify(arr3) in watch to copy the array
}