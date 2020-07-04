export const questionBank =
    [
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
                    "optionText": "Store all static les in a multi-AZ Amazon Aurora database."
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
                    "optionText": "Launch a second Amazon EC2 instance to monitor the health of the rst."
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
                    "optionText ": "Configure active - active failover using Route 53 latency DNS records."
                },
                {
                    "optionId": "B",
                    "optionText ": "Configure active - passive failover using Route 53 latency DNS records."
                },
                {
                    "optionId": "C",
                    "optionText ": "Configure active - active failover using Route 53 failover DNS records."
                },
                {
                    "optionId": "D",
                    "optionText ": "Configure active - passive failover using Route 53 failover DNS records."
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
                    "optionText ": "Use Amazon ECS and Service Auto Scaling."
                },
                {
                    "optionId": "B",
                    "optionText ": "Use Spot Instancesfor orchestration andfor scaling containers on existing Amazon EC2 instances."
                },
                {
                    "optionId": "C",
                    "optionText ": "Use AWS OpsWorks to launch containers in new Amazon EC2 instances."
                },
                {
                    "optionId": "D",
                    "optionText ": "Use Auto Scaling groups to launch containers on existing Amazon EC2 instances."
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
                    "optionText ": "Amazon API Gateway and AWS Lambda "
                },
                {
                    "optionId": "B",
                    "optionText ": "Elastic Load Balancing with Auto Scaling groups and Amazon EC2 "
                },
                {
                    "optionId": "C",
                    "optionText ": "Amazon API Gateway and Amazon EC2 "
                },
                {
                    "optionId": "D",
                    "optionText ": "Amazon CloudFront and AWS Lambda "
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
                    "optionText ": "Create a read replica of the primary database and deploy it in a different AWS Region."
                },
                {
                    "optionId": "B",
                    "optionText ": "Enable multi - AZ to create a standby database in a different Availability Zone."
                },
                {
                    "optionId": "C",
                    "optionText ": "Enable multi - AZ to create a standby database in a different AWS Region."
                },
                {
                    "optionId": "D",
                    "optionText ": "Create a read replica of the primary database and deploy it in a different Availability Zone."
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
                    "optionText": "Amazon RDS 3"
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
            "questionText": "A company hosts a website on premises. The website has a mix of static and dynamic content, but users experience latency when loading static les. Which AWS service can help reduce latency?",
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
                    "optionText": "Amazon EFS to store and server static les"
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
            "questionText": "A media company has deployed a multi-tier architecture on AWS. Web servers are deployed in two Availability Zones using an Auto Scaling group with a default Auto Scaling termination policy. The web servers' Auto Scaling group currently has 15 instances running. Which instance will be terminated rst during a scale-in operation?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "The instance with the oldest launch con guration."
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
                    "optionText ": "Implement an Amazon API Gateway to server as the HTTP endpoint.Have the API Gateway trigger an AWS Lambdafunction to process the messages,and save the results to an Amazon DynamoDB table."
                },
                {
                    "optionId": "B",
                    "optionText ": "Create an Amazon EC2 instance to server as the HTTP endpoint and to process the messages.Save the results to Amazon S3for the Data Analysis team to download."
                },
                {
                    "optionId": "C",
                    "optionText ": "Use Amazon Route 53 to direct incoming sensor messages to a Lambdafunction to process the message and save the results to a Amazon DynamoDB table."
                },
                {
                    "optionId": "D",
                    "optionText ": "Use AWS Direct Connect to connect sensors to DynamoDB so that data can be written directly to a DynamoDB table where it can be accessed by the Data Analysis team."
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
                    "optionText ": "Amazon RDS "
                },
                {
                    "optionId": "B",
                    "optionText ": "Amazon RedShift "
                },
                {
                    "optionId": "C",
                    "optionText ": "Amazon DynamoDB Accelerator "
                },
                {
                    "optionId": "D",
                    "optionText ": "Amazon ElastiCache "
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
                    "optionText ": "Use an Amazon Redshift database.Copy the product database into Redshift and allow the team to query it."
                },
                {
                    "optionId": "B",
                    "optionText ": "Use an Amazon RDS read replica of the production database and allow the team to query against it."
                },
                {
                    "optionId": "C",
                    "optionText ": "Use multiple Amazon EC2 instances running replicas of the production database,placed behind a load balancer."
                },
                {
                    "optionId": "D",
                    "optionText ": "Use an Amazon DynamoDB table to store a copy of the data."
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
                    "optionText ": "Amazon Kinesis Data Firehouse "
                },
                {
                    "optionId": "B",
                    "optionText ": "Amazon SQS "
                },
                {
                    "optionId": "C",
                    "optionText ": "Amazon Redshift "
                },
                {
                    "optionId": "D",
                    "optionText ": "Amazon SNS E.Amazon DynamoDB "
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
                    "optionText ": "Cross - region read replica "
                },
                {
                    "optionId": "B",
                    "optionText ": "Multiple Availability Zone snapshot copy "
                },
                {
                    "optionId": "C",
                    "optionText ": "Multiple Availability Zone read replica "
                },
                {
                    "optionId": "D",
                    "optionText ": "Cross - region snapshot copy "
                }
            ],
            "questionAnswer": "D"
        },
        {
            "questionId": 122,
            "questionText": "After reviewing their logs, a startup company noticed large, random spikes in traffic to their web application. The company wants to Configure a cost-e cient Auto Scaling solution to support high availability of the web application. Which scaling plan should a Solutions Architect recommend to meet the company's needs?",
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
                    "optionText ": "Amazon S3 "
                },
                {
                    "optionId": "B",
                    "optionText ": "Amazon EBS "
                },
                {
                    "optionId": "C",
                    "optionText ": "Amazon Glacier "
                },
                {
                    "optionId": "D",
                    "optionText ": "Amazon EFS "
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
                    "optionText ": "Amazon Elasticsearch Service "
                },
                {
                    "optionId": "B",
                    "optionText ": "Amazon Athena "
                },
                {
                    "optionId": "C",
                    "optionText ": "Amazon Redshift "
                },
                {
                    "optionId": "D",
                    "optionText ": "Amazon Kinesis Data Analytics "
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
                    "optionText ": "Encrypt the les on the client side and store the les on Amazon Glacier,then decrypt the reports on the client side."
                },
                {
                    "optionId": "B",
                    "optionText ": "Move the les to Amazon ElastiCache and provide a username and passwordfor downloading the reports."
                },
                {
                    "optionId": "C",
                    "optionText ": "Specify the use of AWS KMS server - side encryption at the time of an object creation on Amazon S3."
                },
                {
                    "optionId": "D",
                    "optionText ": "Store the les on Amazon S3 and use the application to generate S3 pre - signed URLs to users."
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
                    "optionText ": "AWS CloudTrail logs "
                },
                {
                    "optionId": "B",
                    "optionText ": "Amazon VPC ow logs "
                },
                {
                    "optionId": "C",
                    "optionText ": "Amazon S3 bucket logs "
                },
                {
                    "optionId": "D",
                    "optionText ": "Amazon CloudWatch Logs "
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
                    "optionText ": "Amazon DynamoDB "
                },
                {
                    "optionId": "B",
                    "optionText ": "Amazon EBS Throughput Optimized HDD Volumes "
                },
                {
                    "optionId": "C",
                    "optionText ": "Amazon EBS Cold HDD Volumes "
                },
                {
                    "optionId": "D",
                    "optionText ": "Amazon ElastiCache "
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
                    "optionText ": "Amazon S3 Standard "
                },
                {
                    "optionId": "B",
                    "optionText ": "Amazon Glacier standard retrievals "
                },
                {
                    "optionId": "C",
                    "optionText ": "Amazon Glacier bulk retrievals D Amazon S3 Standard Infrequent Access 3 "
                },
                {
                    "optionId": "D",
                    "optionText ": "Amazon S3 Standard Infrequent Access "
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
            "questionText": "A media company must store 10 TB of audio recordings. Retrieval happens infrequently and requestors agree on an 8-hour turnaround time. What is the MOST cost-effective solution to store the les?",
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
            "questionText": "A Solutions Architect is designing a solution that will include a database in Amazon RDS. Corporate security policy mandates that the database, its logs, and its backups are all encrypted. Which is the MOST e cient option to ful ll the security policy using Amazon RDS?",
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
                    "optionText": "AWS CloudFormation 4"
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
            "questionText": "A company has gigabytes of web log les stored in an Amazon S3 bucket. A Solutions Architect wants to copy those les into Amazon Redshift for analysis. The company's security policy mandates that data is encrypted at rest both in the Amazon Redshift cluster and the Amazon S3 bucket. Which process will ful ll the security requirements?",
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
                    "optionText": "Use ephemeral volumes to store the log les."
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
                    "optionText": "Use an Auto Scaling group to scale the number of EC2 instances to match the site tra c."
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
            "questionText": "An organization runs an online voting system for a television program. During broadcasts, hundreds of thousands of votes are submitted within minutes and sent to a front-end fleet of auto-scaled Amazon EC2 instances. The EC2 instances push the votes to an RDBMS database. The database is unable to keep up with the front-end connection requests. What is the MOST e cient and cost-effective way of ensuring that votes are processed in a timely manner?",
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
            "questionText": "A prediction process requires access to a trained model that is stored in an Amazon S3 bucket. The process takes a few seconds to process an image and make a prediction. The process is not overly resource-intensive, does not require any specialized hardware, and takes less than 512 MB of memory to run. What would be the MOST effective compute solution for this use case?",
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
            "questionText": "A company is looking for a fully-managed solution to store its players' state information for a rapidly growing game. The application runs on multiple Amazon EC2 nodes, which can scale according to the incoming tra c. The request can be routed to any of the nodes, therefore, the state information must be stored in a centralized database. The players' state information needs to be read with strong consistency and needs conditional updates for any changes. Which service would be MOST cost-effective, and scale seamlessly?",
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
            "questionText": "An application is running on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. Four instances are required to handle a predictable traffic load. The Solutions Architect wants to ensure that the operation is fault-tolerant up to the loss of one Availability Zone. Which is the MOST cost-e cient way to meet these requirements?",
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
            "questionText": "A web application running on Amazon EC2 instances writes data synchronously to an Amazon DynamoDB table Configured for 60 write capacity units. During normal operation the application writes 50 KB/s to the tale, but can scale up to 500 KB/ s during peak hours. The application is currently throttling errors from the DynamoDB table during peak hours. What is the MOST cost-e cient change to support the increased traffic with minimal changes to the application?",
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
                    "optionText": "Increase the number of Amazon EC2 instances to support the tra c."
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
                    "optionText": "CORS con guration"
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
                    "optionText": "Create a launch Configuration with the AMI ID of the web server image. Create an Auto Scaling group using the newly-created launch con guration, and a desired capacity of two web servers across multiple regions. Use an Application Load Balancer (ALB) to balance traffic across the Auto Scaling group."
                },
                {
                    "optionId": "C",
                    "optionText": "Create a launch Configuration with the AMI ID of the web server image. Create an Auto Scaling group using the newly-created launch con guration, and a desired capacity of two web servers across multiple Availability Zones. Use an ALB to balance traffic across the Auto Scaling group."
                },
                {
                    "optionId": "D",
                    "optionText": "Create a launch Configuration with the AMI ID of the web server image. Create an Auto Scaling group using the newly-created launch con guration, and a desired capacity of two web servers across multiple Availability Zones. Use Amazon Route 53 weighted routing to balance traffic across the Auto Scaling group."
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
            "questionText": "A company wants to migrate a three-tier web application to AWS. The company wants to control the placement of the instances and have visibility 46/29/2020 p y g pp p y p y into underlying sockets and cores for licensing purposes. Which compute model should a Solutions Architect choose to accomplish this task?",
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
            "questionText": "A university is running an internal web application on AWS that students can access from the university network to check their exam results. The web application runs on Amazon EC2 instances and pulls results from an Amazon DynamoDB table. Auto Scaling is currently Configured to add a new web server when CPU is greater than 80% for 5 minutes. DynamoDB is Configured to increase both read and write capacity units by ve when utilization is greater than 80%. Exam results are released at 9:00 a.m. each Monday, and 80% of students, attempt to access their unique result within the rst 30 minutes. Despite Auto Scaling being enabled, students are complaining of slow response times and errors when they view the site. There are no performance complaints after 9:30 a.m. on Monday. 56/29/2020 p p y Which recommendation should a Solutions Architect make to improve performance in a cost-effective manner?",
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
            "questionText": "As part of a migration strategy, a Solutions Architect needs to analyze workloads that can be optimized for performance and cost. The Solutions Architect has identi ed a stateless application that serves static content as a potential candidate to move to the cloud. The Solutions Architect has the exibility to choose an identity solution between Facebook, Twitter, and Amazon. Which AWS solution offers exibility and ease of use, and the LEAST operational overhead for this migration?",
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
            "questionText": "A Solutions Architect was tasked with reviewing several templates that build VPCs and ensuring that they meet speci c security requirements. After reviewing the templates, the Architect realizes that all of the templates are missing important security best practices. What should the Architect do to implement security best practices in an e cient manner?",
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
                    "optionText": "Move static les from ECS to Amazon S3"
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
            "questionText": "A web application is running on Amazon EC2 instances behind an Elastic Load Balancing Application Load Balancer (ALB). The EC2 instances should receive no tra c, except for web requests to the application. Based on these requirements, what security group rules should be put on the Amazon EC2 instances?",
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
            "questionText": "A company plans to migrate a website to AWS to use a serverless architecture. The website contains both static and dynamic content and is accessed by users across the world. The website should maintain sessions for returning users to improve the user experience. Which service should a Solutions Architect use for a cost-e cient solution with the LOWEST latency?",
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
                    "optionText": "Configure the web servers to communicate with RDS by using SSL, and issue certi cates to the web tier EC2 instances."
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
            "questionText": "A Solutions Architect must review an application deployed on EC2 instances that currently stores multiple 5-GB les on attached instance store volumes. The company recently experienced a significant data loss after stopping and starting their instances and wants to prevent the data loss from happening again. The solution should minimize performance impact and the number of code changes required. What should the Solutions Architect recommend?",
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
            "questionText": "A company uses Amazon S3 for storing a variety of les. A Solutions Architect needs to design a feature that will allow users to instantly restore any deleted les within 30 days of deletion. Which is the MOST cost-e cient solution?",
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
            "questionText": "A Solutions Architect must design an Amazon DynamoDB table to store data about customer activities. The data is used to analyze recent customer behavior, so data that is less than a week old is heavily accessed and older data is accessed infrequently. Data that is more than one month old never needs to be referenced by the application, but needs to be archived for year-end analytics. What is the MOST cost-e cient way to meet these requirements? (Choose two.)",
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
            "questionText": "A Solutions Architect is concerned that the current security group rules for a database tier are too permissive and may permit requests that should be restricted. Below are the current security group permissions for the database tier: ✑ Protocol: TCP ✑ Port Range: 1433 (MS SQL) ✑ Source: ALL Currently, the only identi ed resource that needs to connect to the databases is the application tier consisting of an Auto Scaling group of EC2 instances. What changes can be made to this security group that would offer the users LEAST privilege?",
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
            "questionText": "A large media site has multiple applications in Amazon ECS. A Solutions Architect needs to use content metadata and route traffic to speci c services. What is the MOST e cient method to perform this task?",
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
            "questionText": "A Solutions Architect must build a secure document storage platform that allows clients to access data stored on Amazon S3. Documents must be readily available for the rst 15 days. After that, documents need not be readily available, and storage costs should be reduced as much as possible. Which of the following approaches will satisfy these requirements?",
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
            "questionText": "A Solutions Architect is designing a shared le system for a company. Multiple users will be accessing it at any given time. Different teams will have their own directories, and the company wants to secure les so that users can access only les owned by their team. How should the Solutions Architect design this?",
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
            "questionText": "A Solutions Architect must select the most cost-e cient architecture for a service that responds to web requests. These web requests are small and query a DynamoDB table. The request rate ranges from zero to several hundred each second, without any predictable patterns. What is the MOST cost-e cient architecture for this service?",
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
            "questionAnswer": "C"
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
            "questionText": "A web server will be provisioned on two Amazon EC2 instances with an Application Load Balancer. Which of the following con gurations will allow traffic on HTTP and HTTPS when con guring a security group to apply to each of these servers?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Allow all inbound tra c, with explicit denies on non-HTTP and non-HTTPS ports."
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
                    "optionText": "S3 buckets can be encrypted, allowing for secure storage of the web les. EBS volumes cannot be encrypted."
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
            "questionText": "A company is moving to AWS. Management has identi ed a set of approved AWS services that meet all deployment requirements. The company would like to restrict access to all other unapproved services to which employees would have access. Which solution meets these requirements with the LEAST amount of operational overhead?",
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
            "questionText": "A company is migrating on-premises databases to AWS. The company's backend application produces a large amount of database queries for reporting purposes, and the company wants to o oad some of those reads to Read Replica, allowing the primary database to continue performing e ciently. Which AWS database platforms will accomplish this? (Select TWO.)",
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
            "questionText": "A data-processing application runs on an i3.large EC2 instance with a single 100 GB EBS gp2 volume. The application stores temporary data in a small database (less than 30 GB) located on the EBS root volume. The application is struggling to process the data fast enough, and a Solutions Architect has determined that the I/O speed of the temporary database is the bottleneck. What is the MOST cost-e cient way to improve the database response times?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Enable EBS optimization on the instance and keep the temporary les on the existing volume."
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
                    "optionText": "Create a VPC endpoint for Amazon EC2 access D C t NAT t f A EC2 7"
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
                    "optionText": "AWS Storage Gateway for les"
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
                    "optionText": "Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) C A S3 St d d I f tA (S3 St d d IA) 7"
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
                    "optionText": "Write the les to an S3 bucket and use Amazon Athena to query the data."
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
                    "optionText": "Use an Application Load Balancer (ALB) with an HTTPS listener, then install SSL certi cates on the ALB and EC2 instances.,"
                },
                {
                    "optionId": "E",
                    "optionText": "Use a Network Load Balancer (NLB) with an HTTPS listener, then install SSL certi cates on the NLB and EC2 instances."
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
            "questionText": "A company plans to deploy a new application in AWS that reads and writes information to a database. The company wants to deploy the application in two different AWS Regions in an active-active con guration. The databases need to replicate to keep information in sync. What should be used to meet these requirements?",
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
                    "optionText": "Allow X.509 certi cates to authenticate tra c."
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
                    "optionText": "Convert the SQS queue to a rst-in rst-out (FIFO) queue"
                }
            ],
            "questionAnswer": "CE"
        },
        {
            "questionId": 277,
            "questionText": "A company deployed a three-tier web application on Amazon EBS backed Amazon EC2 instances for the web and application tiers, and Amazon RDS for the database tier. The company is concerned about loss of data in the web and application tiers. What is the MOST e cient way to prevent data loss?",
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
            "questionText": "A Solution Architect is creating a serverless web application that must access mapping data in hundreds of data les, each containing approximately 30 KB of data. The storage required is expected to grow to hundreds of terabytes. Which storage solution is most cost-effective, yet still meets the requirements for this use case?",
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
                    "optionText": "Store the invoices as text les. Use Amazon CloudFront to convert the invoices from text to PDF when customers download invoices."
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
            "questionText": "An application server needs to be in a private subnet without access to the Internet. The solution must retrieve and upload les to an Amazon S3 bucket. How should a Solutions Architect design a solution to meet these requirements?",
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
            "questionText": "A Solutions Architect plans to migrate a load balancer tier from a data center to AWS. Several websites have multiple domains that require secure load balancing. The Architect decides to use Elastic Load Balancing Application Load Balancers. What is the MOST e cient method for achieving secure communication?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Create a wildcard certi cate and upload it to the Application Load Balancer"
                },
                {
                    "optionId": "B",
                    "optionText": "Create an SNI certi cate and upload it to the Application Load Balancer"
                },
                {
                    "optionId": "C",
                    "optionText": "Create a secondary proxy server to terminate SSL traffic before the traffic reaches the Application Load Balancer"
                },
                {
                    "optionId": "D",
                    "optionText": "Let a third-party Certi cate Manager manage certi cates required to all domains and upload them to the Application Load Balancer 8"
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
            "questionText": "A customer has an application that is used by enterprise customers outside of AWS. Some of these customers use legacy rewalls that cannot whitelist by DNS name, but whitelist based only on IP address. The application is currently deployed in two Availability Zones, with one EC2 instance in each that has Elastic IP addresses. The customer wants to whitelist only two IP addresses, but the two existing EC2 instances cannot sustain the amount of tra c. What can a Solutions Architect do to support the customer and allow for more capacity? (Choose two.)",
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
            "questionText": "A Solutions Architect designed a system based on Amazon Kinesis Data Streams. After the work ow was put into production, the company noticed it performed slowly and identi ed Kinesis Data Streams as the problem. One of the streams has a total of 10 Mb/s throughput. What should the Solutions Architect recommend to improve performance?",
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
            "questionText": "An organization uses Amazon S3 to store video content served via its website. It only has rights to deliver this content to users within its own country and needs to restrict access. How can the organization ensure that these les are only accessible from within its country?",
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
                    "optionText": "Use Amazon DynamoDB strongly consistent reads to adjust for the increase in tra c"
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
            "questionText": "A company has thousands of les stored in an Amazon S3 bucket that has a well-de ned access pattern. The les are accessed by an application multiple times a day for the rst 30 days. Files are rarely accessed within the next 90 days. After that, the les are never accessed again. During the rst 120 days accessing these les should never take more than a few seconds 9 the rst 120 days, accessing these les should never take more than a few seconds. Which lifecycle policy should be used for the S3 objects to minimize costs based on the access pattern?",
            "questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "Use Amazon S3 Standard-Infrequent Access (S3 Standard-IA) storage for the rst 30 days. Then move the les to the GLACIER storage class for the next 90 days. Allow the data to expire after that."
                },
                {
                    "optionId": "B",
                    "optionText": "Use Amazon S3 Standard storage for the rst 30 days. Then move the les to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) for the next 90 days. Allow the data to expire after that."
                },
                {
                    "optionId": "C",
                    "optionText": "Use Amazon S3 Standard storage for rst 30 days. Then move the les to the GLACIER storage class for the next 90 days. Allow the data to expire after that."
                },
                {
                    "optionId": "D",
                    "optionText": "Use Amazon S3 Standard-Infrequent Access (S3 Standard-IA) for the rst 30 days. After that, move the data to the GLACIER storage class, where is will be deleted automatically."
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