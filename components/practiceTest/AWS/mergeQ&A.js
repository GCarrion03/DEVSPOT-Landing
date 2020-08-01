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