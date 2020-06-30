const questions = [
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
        "questionText": "A website experiences unpredictable tra c. During peak tra c times, the database is unable to keep up with the write request. Which AWS service will help decouple the web application from the database?",
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
                "optionText": "AWS Storage Gateway in stored mode for the legacy application storage to write data to Amazon S3. D An Amazon S3 volume mounted on the legacy application server locally using the File Gateway service"
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
        "questionAnswer": "A"
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
        "questionText": "A Solutions Architect is designing a new social media application. The application must provide a secure method for uploading pro le photos. Each user should be able to upload a pro le photo into a shared storage location for one week after their pro le is created. Which approach will meet all of these requirements?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use Amazon Kinesis with AWS CloudTrail for auditing the speci c times when pro le photos are uploaded."
            },
            {
                "optionId": "B",
                "optionText": "Use Amazon EBS volumes with IAM policies restricting user access to speci c time periods."
            },
            {
                "optionId": "C",
                "optionText": "Use Amazon S3 with the default private access policy and generate pre-signed URLs each time a new site pro le is created."
            },
            {
                "optionId": "D",
                "optionText": "Use Amazon CloudFront with AWS CloudTrail for auditing the speci c times when pro le photos are uploaded."
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
        "questionAnswer": "B"
    },
    {
        "questionId": 10,
        "questionText": "A mobile application serves scienti c articles from individual les in an Amazon S3 bucket.Articles older than 30 days are rarely read.Articles older than 60 days no longer need to be available through the application,but the application owner would like to keep themfor historical purposes.Which cost - effective solution BEST meets these requirements ? ",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create a Lambda function to move les older than 30 days to Amazon EBS and move les older than 60 days to Amazon Glacier."
            },
            {
                "optionId": "B",
                "optionText": "Create a Lambda function to move les older than 30 days to Amazon Glacier and move les older than 60 days to Amazon EBS."
            },
            {
                "optionId": "C",
                "optionText": "Create lifecycle rules to move les older than 30 days to Amazon S3 Standard Infrequent Access and move les older than 60 days to Amazon Glacier."
            },
            {
                "optionId": "D",
                "optionText": "Create lifecycle rules to move les older than 30 days to Amazon Glacier and move les older than 60 days to Amazon S3 Standard "
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
                "optionText": "Change the ingress rules of the Amazon RDS security group, allowing the Lambda security group. E. Add an Internet Gateway (IGW) to the VPC, route the private subnet to the IGW."
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
                "optionText": "Modify the Redshift cluster and con gure cross-region snapshots to the other region."
            },
            {
                "optionId": "B",
                "optionText": "Modify the Redshift cluster to take snapshots of the Amazon EBS volumes each day, sharing those snapshots with the other region."
            },
            {
                "optionId": "C",
                "optionText": "Modify the Redshift cluster and con gure the backup and specify the Amazon S3 bucket in the other region."
            },
            {
                "optionId": "D",
                "optionText": "Modify the Redshift cluster to use AWS Snowball in export mode with data delivered to the other region."
            }
        ],
        "questionAnswer": "B"
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
        "questionAnswer": "C"
    },
    {
        "questionId": 15,
        "questionText": "A Solutions Architect is designing the architecture for a new three-tier web-based e-commerce site that must be available 24/7. Requests are expected to range from 100 to 10,000 each minute. Usage can vary depending on time of day, holidays, and promotions. The design should be able to handle these volumes, with the ability to handle higher volumes if necessary. How should the Architect design the architecture to ensure the web tier is cost-optimized and can handle the expected tra c? (Select two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Launch Amazon EC2 instances in an Auto Scaling group behind an ELB."
            },
            {
                "optionId": "B",
                "optionText": "Store all static les in a multi-AZ Amazon Aurora database."
            },
            {
                "optionId": "C",
                "optionText": "Create an CloudFront distribution pointing to static content in Amazon S3."
            },
            {
                "optionId": "D",
                "optionText": "Use Amazon Route 53 to route tra c to the correct region. E. Use Amazon S3 multi-part uploads to improve upload times."
            }
        ],
        "questionAnswer": "AC"
    },
    {
        "questionId": 16,
        "questionText": "A Solution Architect is designing a three-tier web application. The Architect wants to restrict access to the database tier to accept tra c from the application servers only. However, these application servers are in an Auto Scaling group and may vary in quantity. How should the Architect con gure the database servers to meet the requirements?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Con gure the database security group to allow database tra c from the application server IP addresses."
            },
            {
                "optionId": "B",
                "optionText": "Con gure the database security group to allow database tra c from the application server security group."
            },
            {
                "optionId": "C",
                "optionText": "Con gure the database subnet network ACL to deny all inbound non-database tra c from the application-tier subnet."
            },
            {
                "optionId": "D",
                "optionText": "Con gure the database subnet network ACL to allow inbound database tra c from the application-tier subnet."
            }
        ],
        "questionAnswer": "C"
    },
    {
        "questionId": 17,
        "questionText": "An Internet - facing multi - tier web application must be highly available.An ELB Classic Load Balancer is deployed in front of the web tier.Amazon EC2 instances at the web application tier are deployed evenly across two Availability Zones.The database is deployed using RDS Multi - AZ.A NAT instance is launchedfor Amazon EC2 instances and database resources to access the Internet.These instances are not assigned with public IP addresses.Which component poses a potential single point of failure in this architecture ? ",
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
        "questionAnswer": "C"
    },
    {
        "questionId": 18,
        "questionText": "A call center application consists of a three - tier application using Auto Scaling groups to automatically scale resources as needed.Users report that every morning at 9 : 00 AM the system becomes very slowfor about 15 minutes.A Solution Architect determines that a large percentage of the call center staff starts work at 9: 00 AM,so Auto Scaling does not have enough time to scale out to meet demand.How can the Architect x the problem ? ",
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
        "questionAnswer": "A"
    },
    {
        "questionId": 19,
        "questionText": " An e-commerce application is hosted in AWS. The last time a new product was launched, the application experienced a performance issue due to an enormous spike in tra c. Management decided that capacity must be doubled the week after the product is launched. Which is the MOST e cient way for management to ensure that capacity requirements are met?",
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
                "optionText": "Create an Auto Scaling group with a minimum of one instance and a maximum of two instances, then use an Application Load Balancer to balance the tra c."
            },
            {
                "optionId": "B",
                "optionText": "Recreate the API using Amazon API Gateway and use AWS Lambda as the service backend."
            },
            {
                "optionId": "C",
                "optionText": "Create an Auto Scaling group with a maximum of two instances, then use an Application Load Balancer to balance the tra c."
            },
            {
                "optionId": "D",
                "optionText": "Recreate the API using Amazon API Gateway and integrate the new API with the existing backend service."
            }
        ],
        "questionAnswer": "A"
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
        "questionAnswer": "D"
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
        "questionText": "A Solutions Architect is designing a log-processing solution that requires storage that supports up to 500 MB/s throughput. The data is sequentially accessed by an Amazon EC2 instance. Which Amazon storage type satis es these requirements?",
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
        "questionAnswer": "C"
    },
    {
        "questionId": 28,
        "questionText": "A company's development team plans to create an Amazon S3 bucket that contains millions of images.The team wants to maximize the read performance of Amazon S3.Which naming scheme should the company use",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Add a date as the pre x."
            },
            {
                "optionId": "B",
                "optionText": "Add a sequential id as the su x."
            },
            {
                "optionId": "C",
                "optionText": "Add a hexadecimal hash as the su x."
            },
            {
                "optionId": "D",
                "optionText": "Add a hexadecimal hash as the pre x."
            }
        ],
        "questionAnswer": "D"
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
                "optionText": "Enable Amazon CloudWatch logsfor all AWS services across all regions and aggregate them in a single Amazon S3 bucket."
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
        "questionAnswer": "D"
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
        "questionText": "A company plans to use AWSfor all new batch processing workloads.The company 's developers use Docker containers for the new batch processing. The system design must accommodate critical and non-critical batch processing workloads 24/7. How should a Solutions Architect design this architecture in a cost-e cient manner?",
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
        "questionText": "A company is evaluating Amazon S3 as a data storage solution for their daily analyst reports. The company has implemented stringent requirements concerning the security of the data at rest. Speci cally, the CISO asked for the use of envelope encryption with separate permissions for the use of an envelope key, automated rotation of the encryption keys, and visibility into when an encryption key was used and by whom. Which steps should a Solutions Architect take to satisfy the security requirements requested by the CISO?",
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
        "questionAnswer": "A"
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
                "optionText": "Serve the website from an Amazon S3 bucket, and map a Route 53 alias record to the website endpoint. E. Create a Route 53 hosted zone, and set the NS records of the domain to use Route 53 name servers."
            }
        ],
        "questionAnswer": "CD 1"
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
        "questionAnswer": "B"
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
                "optionText": "Con gure Direct Connect in each account."
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
        "questionText": "A Solutions Architect is designing a mobile application that will capture receipt images to track expenses. The Architect wants to store the images on Amazon S3. However, uploading images through the web server will create too much tra c. What is the MOST e cient method to store images from a mobile application on Amazon S3?",
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
                "optionText": "Expand the web server eet with Spot Instances to provide the resources to handle the images."
            }
        ],
        "questionAnswer": "C"
    },
    {
        "questionId": 42,
        "questionText": "A company requires that the source, destination, and protocol of all IP packets be recorded when traversing a private subnet. What is the MOST secure and reliable method of accomplishing this goal.",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create VPC ow logs on the subnet."
            },
            {
                "optionId": "B",
                "optionText": "Enable source destination check on private Amazon EC2 instances."
            },
            {
                "optionId": "C",
                "optionText": "Enable AWS CloudTrail logging and specify an Amazon S3 bucket for storing log les."
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
        "questionText": "A Solutions Architect has a multi-layer application running in Amazon VPC. The application has an ELB Classic Load Balancer as the front end in a public subnet, and an Amazon EC2-based reverse proxy that performs content-based routing to two backend Amazon EC2 instances hosted in a private subnet. The Architect sees tremendous tra c growth and is concerned that the reverse proxy and current backend set up will be insu cient. Which actions should the Architect take to achieve a cost-effective solution that ensures the application automatically scales to meet tra c demand? (Select two.)",
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
                "optionText": "Use t2 burstable instance types for the backend eet. E. Replace both the frontend and reverse proxy layers with an ELB Application Load Balancer."
            }
        ],
        "questionAnswer": "AB"
    },
    {
        "questionId": 44,
        "questionText": "A company is launching a marketing campaign on their website tomorrow and expects a signi cant increase in tra c. The website is designed as a multi-tiered web architecture, and the increase in tra c could potentially overwhelm the current design. What should a Solutions Architect do to minimize the effects from a potential failure in one or more of the tiers?",
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
        "questionAnswer": "C 1"
    },
    {
        "questionId": 45,
        "questionText": "A web application experiences high compute costs due to serving a high amount of static web content. How should the web server architecture be designed to be the MOST cost-e cient?",
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
                "optionText": "Leverage Reserved Instances to add additional capacity at a signi cantly lower price."
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
        "questionText": "A Solutions Architect plans to migrate NAT instances to NAT gateway. The Architect has NAT instances with scripts to manage high availability. What is the MOST e cient method to achieve similar high availability with NAT gateway?",
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
                "optionText": "Randomize a key name pre x."
            },
            {
                "optionId": "B",
                "optionText": "Store the event data in separate buckets."
            },
            {
                "optionId": "C",
                "optionText": "Randomize the key name su x."
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
        "questionAnswer": "D"
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
                "optionText": "Launch Amazon EC2 instances in the public subnet and change the security group to allow outbound tra c on port 80."
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
        "questionText": "An application stack includes an Elastic Load Balancer in a public subnet, a eet of Amazon EC2 instances in an Auto Scaling group, and an Amazon RDS MySQL cluster. Users connect to the application from the Internet. The application servers and database must be secure. How should a Solutions Architect perform this task?",
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
        "questionAnswer": "C"
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
        "questionText": "A legacy application running in premises requires a Solutions Architect to be able to open a rewall to allow access to several Amazon S3 buckets. The Architect has a VPN connection to AWS in place. 1 How should the Architect meet this requirement?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create an IAM role that allows access from the corporate network to Amazon S3."
            },
            {
                "optionId": "B",
                "optionText": "Con gure a proxy on Amazon EC2 and use an Amazon S3 VPC endpoint."
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
        "questionAnswer": "A"
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
                "optionText": "Create a Lambdafunctionfor each individual environment."
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
                "optionText": "Implement a dedicated Lambdafunctionfor distributing variables."
            }
        ],
        "questionAnswer": "C"
    },
    {
        "questionId": 55,
        "questionText": "A news organization plans to migrate their 20 TB video archive to AWS.The les are rarely accessed,but when they are,a request is made in advance and a 3 to 5 - hour retrieval time frame is acceptable.However,when there is a breaking news story,the editors require access to archived footage within minutes.Which storage solution meets the needs of this organizationwhile providing the LOWEST cost of storage ? ",
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
        "questionAnswer": "C 1 "
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
                "optionText": "Allow Internet tra c on the private subnet through the network ACL."
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
        "questionText": "A Solutions Architect is designing a Lambdafunction that calls an API to list all running Amazon RDS instances.How should the request be authorized ? ",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create an IAM access and secret key,and store it in the Lambdafunction."
            },
            {
                "optionId": "B",
                "optionText": "Create an IAM role to the Lambdafunction with permissions to list all Amazon RDS instances."
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
        "questionAnswer": "C"
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
                "optionText": "Stop the Amazon EC2 instance and provision IOPSfor the EBS volume."
            },
            {
                "optionId": "D",
                "optionText": "Enable an API Gateway to change the endpointsfor the Amazon EC2 instances."
            }
        ],
        "questionAnswer": "B"
    },
    {
        "questionId": 59,
        "questionText": "A Solutions Architect is building a new feature using a Lambda to create metadata when a user uploads a picture to Amazon S3.All metadata must be indexed.Which AWS service should the Architect use to store this metadata ? ",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Amazon S3 "
            },
            {
                "optionId": "B",
                "optionText": "Amazon DynamoDB 1 "
            },
            {
                "optionId": "C",
                "optionText": "Amazon Kinesis "
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
                "optionText": "Attach an IAM role to the Amazon EC2 instance. E. Attach an IAM policy to the Amazon EC2 instance."
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
                "optionText": "Con gure CloudWatch alarms for any metrics the support team requires."
            },
            {
                "optionId": "D",
                "optionText": "Ensure that detailed monitoring for the EC2 instances is enabled. E. Create an application to export and save CloudWatch metrics for longer term trending analysis."
            }
        ],
        "questionAnswer": "BD 1"
    },
    {
        "questionId": 63,
        "questionText": "A Solutions Architect is designing a highly-available website that is served by multiple web servers hosted outside of AWS. If an instance becomes unresponsive, the Architect needs to remove it from the rotation. What is the MOST e cient way to ful ll this requirement?",
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
        "questionAnswer": "C"
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
                "optionText": "Create a network ACL on the web server's subnet, and allow HTTPS inbound, and specify the source as 0.0.0.0/0. Create a network ACL on a database subnet, allow MySQL port inbound for web servers, and deny all outbound tra c."
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
        "questionText": "Which service should an organization useif it requires an easily managed and scalable platform to host its web application running on Nginx ? ",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "AWS Lambda "
            },
            {
                "optionId": "B",
                "optionText": "Auto Scaling "
            },
            {
                "optionId": "C",
                "optionText": "AWS Elastic Beanstalk "
            },
            {
                "optionId": "D",
                "optionText": "Elastic Load Balancing "
            }
        ],
        "questionAnswer": "C"
    },
    {
        "questionId": 66,
        "questionText": "An Administrator is hosting an application on a single Amazon EC2 instance, which users can access by the public hostname. The administrator is adding a second instance, but does not want users to have to decide between many public hostnames. Which AWS service will decouple the users from speci c Amazon EC2 instances?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Amazon SQS 1"
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
        "questionAnswer": "B"
    },
    {
        "questionId": 67,
        "questionText": "A Solutions Architect is designing a microservices-based application using Amazon ECS. The application includes a WebSocket component, and the tra c needs to be distributed between microservices based on the URL. Which service should the Architect choose to distribute the workload?",
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
        "questionAnswer": "C icmpid=link_from_whitepapers_page (13)"
    },
    {
        "questionId": 68,
        "questionText": "A Solutions Architect is designing the storage layer for a production relational database. The database will run on Amazon EC2. The database is accessed by an application that performs intensive reads and writes, so the database requires the LOWEST random I/O latency. Which data storage method ful lls the above requirements?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Store data in a lesystem backed by Amazon Elastic File System (EFS)."
            },
            {
                "optionId": "B",
                "optionText": "Store data in Amazon S3 and use a third-party solution to expose Amazon S3 as a lesystem to the database server."
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
        "questionText": "A Solutions Architect is designing a VPC. Instances in a private subnet must be able to establish IPv6 tra c to the Internet. The design must scale automatically and not incur any additional cost. This can be accomplished with:",
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
        "questionAnswer": "A 2"
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
                "optionText": "Con gure the database to be in multiple regions."
            },
            {
                "optionId": "D",
                "optionText": "Increase the number of provisioned storage IOPS."
            }
        ],
        "questionAnswer": "B"
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
        "questionText": "A media company asked a Solutions Architect to design a highly available storage solution to serve as a centralized document storefor their Amazon EC2 instances.The storage solution needs to be POSIX - compliant,scale dynamically,and be able to serve up to 100 concurrent EC2 instances.Which solution meets these requirements ? ",
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
                "optionText": "Amazon DynamoDB E.Amazon ElastiCache "
            }
        ],
        "questionAnswer": "AE "
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
                "optionText": "Use an application - speci c encryption API with AWS server - side encryption."
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
        "questionAnswer": "B"
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
        "questionAnswer": "D"
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
        "questionText": "A company hosts a two-tier application that consists of a publicly accessible web server that communicates with a private database. Only HTTPS port 443 tra c to the web server must be allowed from the Internet. Which of the following options will achieve these requirements? (Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Security group rule that allows inbound Internet tra c for port 443."
            },
            {
                "optionId": "B",
                "optionText": "Security group rule that denies all inbound Internet tra c except port 443."
            },
            {
                "optionId": "C",
                "optionText": "Network ACL rule that allows port 443 inbound and all ports outbound for Internet tra c."
            },
            {
                "optionId": "D",
                "optionText": "Security group rule that allows Internet tra c for port 443 in both inbound and outbound. E. Network ACL rule that allows port 443 for both inbound and outbound for all Internet tra c."
            }
        ],
        "questionAnswer": "AE"
    },
    {
        "questionId": 82,
        "questionText": "A Solutions Architect is designing an Amazon VPC. Applications in the VPC must have private connectivity to Amazon DynamoDB in the same AWS Region. The design should route DynamoDB tra c through:",
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
        "questionAnswer": "C 2"
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
        "questionAnswer": "A"
    },
    {
        "questionId": 84,
        "questionText": "A Solutions Architect is developing a solution for sharing les in an organization. The solution must allow multiple users to access the storage service at once from different virtual machines and scale automatically. It must also support le-level locking. Which storage service meets the requirements of this use case?",
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
        "questionAnswer": "C"
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
        "questionAnswer": "B"
    },
    {
        "questionId": 87,
        "questionText": "An organization runs an online media site,hosted on - premises.An employee posted a product review that contained videos and pictures.The review went viral and the organization needs to handle the resulting spike in website tra c.What action would provide an immediate solution ? ",
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
                "optionText": "Use Amazon ElasticCachefor Redisfor caching and reducing the load requests from the origin."
            }
        ],
        "questionAnswer": "C"
    },
    {
        "questionId": 88,
        "questionText": "A client notices that their engineers often make mistakes when creating Amazon SQS queuesfor their backend system.Which action should a Solutions Architect recommend to improve this process ? ",
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
        "questionText": "A development team is building an application with front - end and backend application tiers.Each tier consists of Amazon EC2 instances behind an ELB Classic Load Balancer.The instances run in Auto Scaling groups across multiple Availability Zones.The network team has allocated the 10.0 .0 .0 / 24 address spacefor this application.Only the front - end load balancer should be exposed to the Internet.There are concerns about the limited size of the address space and the ability of each tier to scale.What should the VPC subnet design be in each Availability Zone ? ",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "One public subnetfor the load balancer tier,one public subnetfor the front - end tier,and one private subnetfor the backend tier."
            },
            {
                "optionId": "B",
                "optionText": "One shared public subnetfor all tiers of the application."
            },
            {
                "optionId": "C",
                "optionText": "One public subnetfor the load balancer tier and one shared private subnetfor the application tiers."
            },
            {
                "optionId": "D",
                "optionText": "One shared private subnetfor all tiers of the application."
            }
        ],
        "questionAnswer": "A 2 "
    },
    {
        "questionId": 90,
        "questionText": "A Solutions Architect must select the storage typefor a big data application that requires very high sequential I / O.The data must persistif the instance is stopped.Which of the following storage types will provide the best t at the LOWEST costfor the application ? ",
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
        "questionText": "Two Auto Scaling applications,Application A and Application B,currently run within a shared set of subnets.A Solutions Architect wants to make sure that Application A can make requests to Application B,but Application B should be denied from making requests to Application A.Which is the SIMPLEST solution to achieve this policy ? ",
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
        "questionText": "Legacy applications currently send messages through a single Amazon EC2 instance,which then routes the messages to the appropriate destinations.The Amazon EC2 instance is a bottleneck and single point of failure,so the company would like to address these issues.Which services could address this architectural usecase ?(Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Amazon SNS "
            },
            {
                "optionId": "B",
                "optionText": "AWS STS "
            },
            {
                "optionId": "C",
                "optionText": "Amazon SQS "
            },
            {
                "optionId": "D",
                "optionText": "Amazon Route 53 E.AWS Glue "
            }
        ],
        "questionAnswer": "AC "
    },
    {
        "questionId": 93,
        "questionText": "A Solutions Architect needs to design an architecturefor a new,mission - critical batch processing billing application.The application is required to run Monday,Wednesday,and Friday from 5 AM to 11 AM.2 Which is the MOST cost - effective Amazon EC2 pricing model ? ",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Amazon EC2 Spot Instances "
            },
            {
                "optionId": "B",
                "optionText": "On - Demand Amazon EC2 Instances "
            },
            {
                "optionId": "C",
                "optionText": "Scheduled Reserved Instances "
            },
            {
                "optionId": "D",
                "optionText": "Dedicated Amazon EC2 Instances "
            }
        ],
        "questionAnswer": "C"
    },
    {
        "questionId": 94,
        "questionText": "A workload consists of downloading an image from an Amazon S3 bucket,processing the image,and moving it to another Amazon S3 bucket.An Amazon EC2 instance runs a scheduled task every hour to perform the operation.How should a Solutions Architect redesign the process so that it is highly available ? ",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Change the Amazon EC2 instance to compute optimized."
            },
            {
                "optionId": "B",
                "optionText": "Launch a second Amazon EC2 instance to monitor the health of the rst."
            },
            {
                "optionId": "C",
                "optionText": "Trigger a Lambdafunction when a new object is uploaded."
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
        "questionText": "An application is running on an Amazon EC2 instance in a private subnet. The application needs to read and write data onto Amazon Kinesis Data Streams, and corporate policy requires that this tra c should not go to the internet. How can these requirements be met?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Con gure a NAT gateway in a public subnet and route all tra c to Amazon Kinesis through the NAT gateway."
            },
            {
                "optionId": "B",
                "optionText": "Con gure a gateway VPC endpoint for Kinesis and route all tra c to Kinesis through the gateway VPC endpoint."
            },
            {
                "optionId": "C",
                "optionText": "Con gure an interface VPC endpoint for Kinesis and route all tra c to Kinesis through the gateway VPC endpoint."
            },
            {
                "optionId": "D",
                "optionText": "Con gure an AWS Direct Connect private virtual interface for Kinesis and route all tra c to Kinesis through the virtual interface."
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
        "questionAnswer": "B Explanation Data stored in Amazon Glacier is immutable, meaning that after an archive is created it cannot be updated. This ensures that data such as compliance and regulatory records cannot be altered after they have been archived 2 compliance and regulatory records cannot be altered after they have been archived."
    },
    {
        "questionId": 97,
        "questionText": "A Solutions Architect is de ning a shared Amazon S3 bucket where corporate applications will save objects. How can the Architect ensure that when an application uploads an object to the Amazon S3 bucket, the object is encrypted?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Set a CORS con guration."
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
        "questionText": "An application tier currently hosts two web services on the same set of instances,listening on different ports.Which AWS service should a Solutions Architect use to route tra c to the service based on the incoming request path ? ",
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
        "questionText": "A data analytics startup company asks a Solutions Architect to recommend an AWS data store optionsfor indexed data.The data processing engine will generate and input more than 64 TB of processed data every day,with item sizes reaching up to 300 KB.The startup is exible with data storage and is more interested in a database that requires minimal effort to scale with a growing dataset size.Which AWS data store service should the Architect recommend ? ",
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
        "questionAnswer": "C 2 "
    },
    {
        "questionId": 100,
        "questionText": "A Solutions Architect needs to allow developers to have SSH connectivity to web servers.The requirements are as follows : ✑Limit access to users origination from the corporate network.✑Web servers cannot have SSH access directly from the Internet.✑Web servers reside in a private subnet.Which combination of steps must the Architect complete to meet these requirements ? (Choose two.)",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create a bastion host that authenticates users against the corporate directory."
            },
            {
                "optionId": "B",
                "optionText": "Create a bastion host with security group rules that only allow tra c from the corporate network."
            },
            {
                "optionId": "C",
                "optionText": "Attach an IAM role to the bastion host with relevant permissions."
            },
            {
                "optionId": "D",
                "optionText": "Con gure the web servers ' security group to allow SSH tra c from a bastion host. E. Deny all SSH tra c from the corporate network in the inbound network ACL."
            }
        ],
        "questionAnswer": "AC"
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
                "optionText": "Continuously replicate the production database server to Amazon RDS. Create one application load balancer and register on-premises servers. Con gure ELB Application Load Balancer to automatically deploy Amazon EC2 instances for application and additional servers if the on-premises application is down."
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
        "questionText": "A Solutions Architect notices slower response times from an application. The CloudWatch metrics on the MySQL RDS indicate Read IOPS are high and uctuate signi cantly when the database is under load. How should the database environment be re-designed to resolve the IOPS uctuation?",
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
        "questionAnswer": "A"
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
        "questionText": "A company needs to quickly ensure that all les created in an Amazon S3 bucket in us-east-1 are also available in another bucket in ap-southeast2. Which option represents the SIMPLIEST way to implement this design?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Add an S3 lifecycle rule to move any les from the bucket in us-east-1 to the bucket in ap-southeast-2."
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
                "optionText": "Enable versioning and con gure cross-region replication from the bucket in us-east-1 to the bucket in ap-southeast-2."
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
                "optionText": "Ensure that the Amazon Machine Image associated with the application has the latest con gurations for the launch con guration."
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
                "optionText": "O oad SELECT queries that can tolerate stale data to READ replica."
            },
            {
                "optionId": "C",
                "optionText": "O oad SELECT and UPDATE queries to READ replica."
            },
            {
                "optionId": "D",
                "optionText": "O oad SELECT query that needs the most current data to READ replica."
            }
        ],
        "questionAnswer": "A"
    }
];


class practiceTest extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        let i = 1;
        questions.forEach(question => {
            var oldDom = this.shadowRoot.innerHTML;
            let questionOptions = '';
            question.questionOptions.forEach(option =>  {
                questionOptions += ('<input id="'+question.questionId+option.optionId+'" name="answer'+question.questionId+'" type="radio" style="float: left;"><label id="'+question.questionId+option.optionId+'label" for="'+question.questionId+option.optionId+'" style="padding-left: 5px;float: left;">'+option.optionId + '. ' +option.optionText+'</label><br> <br>')
            })
            const div = document.createElement('div');
            div.id="tmpDiv";
            div.innerHTML =
                `<template id="practiceTest-template${i}">
                <link href="layout/styles/layout.css" rel="stylesheet" type="text/css" media="all">
                <link href="css/bootstrap.css" rel="stylesheet">
                <link href="css/style.css" rel="stylesheet" type="text/css">
                <div class="row" id="questionContainer${i}" style = "display:none">
                    <div class="col-lg-12" style="min-height: 400px">
                        <h4 class="mb-3"><strong id="questionDescription">1. A Solutions Architect is designing an application that will encrypt all data in an Amazon Redshift cluster.<br>Which action will encrypt the data at rest?</strong></h4>
                        <BR>
                            ${questionOptions}
                    </div>
                    <div class="col-lg-12">
                        <input id="prev${question.questionId}" type="button" value="<" style="float: left;">
                        <input id="next${question.questionId}" type="button" value=">" style="float: left;">
                        <input id="${question.questionId}showAnswer" type="button" value="Verify" style="float: right;" >
                        <strong><label for="${question.questionId}showAnswer" style="float: right;">/${questions.length}&nbsp;</label><label name="score" for="${question.questionId}showAnswer" id="currentScore${question.questionId}" style="float: right;">0</label><label for="${question.questionId}showAnswer" style="float: right;">Score: &nbsp;</label></strong> 
                    </div>
                </div>
            </template>`;
            this.shadowRoot.append(div);
            const template = this.shadowRoot.getElementById(`practiceTest-template${i}`);
            const node = document.importNode(template.content, true);
            node.getElementById('questionDescription').innerHTML = `${question.questionId}. ${question.questionText}`;
            this.shadowRoot.removeChild(div);
            this.shadowRoot.appendChild(node);
            var createValidateButton = function (shadowRoot, currentI, question) {
                return {apply: function () {
                    makeValidateCallback (shadowRoot, currentI, question);
                }
            }}
            var a = createValidateButton(this.shadowRoot, question.questionId, question);
            a.apply();
            i++;
            });
    };
}
customElements.define('practice-test', practiceTest);

function makeValidateCallback (shadowRoot, currentI, question) {
    if (currentI === 1){
        shadowRoot.getElementById(`questionContainer${currentI}`).style.display = "inline";
        shadowRoot.getElementById(`prev${currentI}`).disabled = true;
    }

    shadowRoot.getElementById(`next${currentI}`).onclick = () => {
        shadowRoot.getElementById(`questionContainer${currentI}`).style.display = "none";
        shadowRoot.getElementById(`questionContainer${currentI+1}`).style.display = "inline";
        shadowRoot.getElementById(`prev${currentI+1}`).disabled = false;
        if (currentI+1 === questions.length){
            shadowRoot.getElementById(`next${currentI+1}`).disabled = true;
        }
    }

    shadowRoot.getElementById(`prev${currentI}`).onclick = () => {
        shadowRoot.getElementById(`questionContainer${currentI}`).style.display = "none";
        shadowRoot.getElementById(`questionContainer${currentI-1}`).style.display = "inline";
        shadowRoot.getElementById(`next${currentI-1}`).disabled = false;
        if (currentI-1 === 1){
            shadowRoot.getElementById(`prev${currentI-1}`).disabled = true;
        }
    }

    shadowRoot.getElementById(`${currentI}showAnswer`).onclick = () => {
        shadowRoot.getElementById(`${question.questionId+question.questionAnswer}label`).innerHTML += '&#9989;';
        if (!shadowRoot.getElementById(`${question.questionId+question.questionAnswer}`).checked) {
            var incorrectAns = shadowRoot.querySelector(`input[name=answer${question.questionId}]:checked`);
            if (incorrectAns){
                shadowRoot.getElementById(incorrectAns.id + 'label').innerHTML += '&#10060;';
            }
        } else {
            shadowRoot.querySelectorAll(`label[name=score]`).forEach(e => e.innerHTML = parseInt(e.innerHTML)+1);

        }
        shadowRoot.getElementById(`${currentI}showAnswer`).disabled = true;

    }
}