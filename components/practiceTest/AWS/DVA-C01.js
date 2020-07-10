export const questionBank = {
        "examID": "DVA-C01",
        "examAcronym": "AWS-CDA",
        "examProvider": "Amazon Web Services",
        "examName": "Certified Developer Associate",
        "badgeFile": "AWS-CDA-badge.png",
        "questions": [
            {
                "questionId": 1,
                "questionText": "A Developer created a dashboard for an application using Amazon API Gateway, Amazon S3, AWS Lambda, and Amazon RDS. The Developer needs an authentication mechanism allowing a user to sign in and view the dashboard. It must be accessible from mobile applications, desktops, and tablets, and must remember user preferences across platforms. Which AWS service should the Developer use to support this authentication scenario?",
                "questionOptions": [
                    {
                        "optionId": "A",
                        "optionText": "AWS KMS"
                    },
                    {
                        "optionId": "B",
                        "optionText": "Amazon Cognito"
                    },
                    {
                        "optionId": "C",
                        "optionText": "AWS Directory Service"
                    },
                    {
                        "optionId": "D",
                        "optionText": "Amazon IAM"
                    }
                ],
                "questionAnswer": "B"
            },
            {
                "questionId":
                    2,
                "questionText":
                    "A Developer has created an S3 bucket s3://mycoolapp and has enabled server across logging that points to the folder s3://mycoolapp/logs. The Developer moved 100 KB of Cascading Style Sheets (CSS) documents to the folder s3://mycoolapp/css, and then stopped work. When the developer came back a few days later, the bucket was 50 GB. What is the MOST likely cause of this situation?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "The CSS files were not compressed and S3 versioning was enabled. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "S3 replication was enabled on the bucket."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Logging into the same bucket caused exponential log growth."
                        },
                        {
                            "optionId": "D",
                            "optionText": "An S3 lifecycle policy has moved the entire CSS file to S3 Infrequent Access."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    3,
                "questionText":
                    "A Developer is creating an Auto Scaling group whose instances need to publish a custom metric to Amazon CloudWatch. Which method would be the MOST secure way to authenticate a CloudWatch PUT request?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Create an IAM user with PutMetricData permission and put the user credentials in a private repository; have applications pull the credentials as needed. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create an IAM user with PutMetricData permission, and modify the Auto Scaling launch configuration to inject the user credentials into the instance user data."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Modify the CloudWatch metric policies to allow the PutMetricData permission to instances from the Auto Scaling group."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create an IAM role with PutMetricData permission and modify the Auto Scaling launching configuration to launch instances using that role."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    4,
                "questionText":
                    "A Developer is working on an application that tracks hundreds of millions of product reviews in an Amazon DynamoDB table. The records include the data elements shown in the table: Which field, when used as the partition key, would result in the MOST consistent performance using DynamoDB?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "starRating  "
                        },
                        {
                            "optionId": "B",
                            "optionText": "reviewID"
                        },
                        {
                            "optionId": "C",
                            "optionText": "comment"
                        },
                        {
                            "optionId": "D",
                            "optionText": "productID"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    5,
                "questionText":
                    "A Developer has written a serverless application using multiple AWS services. The business logic is written as a Lambda function which has dependencies on third-party libraries. The Lambda function endpoints will be exposed using Amazon API Gateway. The Lambda function will write the information to Amazon DynamoDB. The Developer is ready to deploy the application but must have the ability to rollback. How can this deployment be automated, based on these requirements?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Deploy using Amazon Lambda API operations to create the Lambda function by providing a deployment package. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use an AWS CloudFormation template and use CloudFormation syntax to define the Lambda function resource in the template."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use syntax conforming to the Serverless Application Model in the AWS CloudFormation template to define the Lambda function resource."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create a bash script which uses AWS CLI to package and deploy the application."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    6,
                "questionText":
                    "What are the steps to using the AWS CLI to launch a templatized serverless application?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use AWS CloudFormation get-template then CloudFormation execute-change-set. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use AWS CloudFormation validate-template then CloudFormation create-change-set."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use AWS CloudFormation package then CloudFormation deploy."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use AWS CloudFormation create-stack then CloudFormation update-stack."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    7,
                "questionText":
                    "A Developer is creating a web application that requires authentication, but also needs to support guest access to provide users limited access without having to authenticate. What service can provide support for the application to allow guest access?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "IAM temporary credentials using AWS STS. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Amazon Directory Service"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon Cognito with unauthenticated access enabled"
                        },
                        {
                            "optionId": "D",
                            "optionText": "IAM with SAML integration"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    8,
                "questionText":
                    "An application takes 40 seconds to process instructions received in an Amazon SQS message. Assuming the SQS queue is configured with the default VisibilityTimeout value, what is the BEST way, upon receiving a message, to ensure that no other instances can retrieve a message that has already been processed or is currently being processed?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use the ChangeMessageVisibility API to increase the VisibilityTimeout, then use the DeleteMessage API to delete the message. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use the DeleteMessage API call to delete the message from the queue, then call DeleteQueue API to remove the queue."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use the ChangeMessageVisibility API to decrease the timeout value, then use the DeleteMessage API to delete the message."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use the DeleteMessageVisibility API to cancel the VisibilityTimeout, then use the DeleteMessage API to delete the message."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    9,
                "questionText":
                    " A Developer has implemented a Lambda function that needs to add new customers to an RDS database that is expected to run hundreds of times per hour. The Lambda function is configured to use 512MB of RAM and is based on the following pseudo code: After testing the Lambda function, the Developer notices that the Lambda execution time is much longer than expected. What should the Developer do to improve performance?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Increase the amount of RAM allocated to the Lambda function, which will increase the number of threads the Lambda can use. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Increase the size of the RDS database to allow for an increased number of database connections each hour."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Move the database connection and close statement out of the handler. Place the connection in the global space."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Replace RDS wit Amazon DynamoDB to implement control over the number of writes per second."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    10,
                "questionText":
                    "A current architecture uses many Lambda functions invoking one another as a large state machine. The coordination of this state machine is legacy custom code that breaks easily. Which AWS Service can help refactor and manage the state machine?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "AWS Data Pipeline "
                        },
                        {
                            "optionId": "B",
                            "optionText": "AWS SNS with AWS SQS"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon Elastic MapReduce"
                        },
                        {
                            "optionId": "D",
                            "optionText": "AWS Step Functions"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    11,
                "questionText":
                    "A Developer is asked to implement a caching layer in front of Amazon RDS. Cached content is expensive to regenerate in case of service failure. Which implementation below would work while maintaining maximum uptime?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Implement Amazon ElastiCache Redis in Cluster Mode "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Install Redis on an Amazon EC2 instance."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Implement Amazon ElastiCache Memcached."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Migrate the database to Amazon Redshift."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    12,
                "questionText":
                    "A current architecture uses many Lambda functions invoking one another as large state machine. The coordination of this state machine is legacy custom code that breaks easily. Which AWS Service can help refactor and manage the state machine?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "AWS Data Pipeline "
                        },
                        {
                            "optionId": "B",
                            "optionText": "AWS SNS with AWS SQS"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon Elastic MapReduce"
                        },
                        {
                            "optionId": "D",
                            "optionText": "AWS Step Functions "
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    13,
                "questionText":
                    "A large e-commerce site is being designed to deliver static objects from Amazon S3. The Amazon S3 bucket will server more than 300 GET requests per second. What should be done to optimize performance? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Integrate Amazon CloudFront with Amazon S3. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Enable Amazon S3 cross-region replication."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Delete expired Amazon S3 server log files."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Configure Amazon S3 lifecycle rules. "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Randomize Amazon S3 key name prefixes."
                        }
                    ],
                "questionAnswer":
                    "AE"
            }
            ,
            {
                "questionId":
                    14,
                "questionText":
                    "A company is building a stock trading application that requires sub-millisecond latency in processing trading requests. Amazon DynamoDB is used to store all the trading data that is used to process each request. After load testing the application, the development team found that due to data retrieval times, the latency requirement is not satisfied. Because of sudden high spikes in the number of requests, DynamoDB read capacity has to be significantly over-provisioned to avoid throttling. What steps should be taken to meet latency requirements and reduce the cost of running the application?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Add Global Secondary Indexes for trading data. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Store trading data in Amazon S3 and use Transfer Acceleration."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Add retries with exponential back-off for DynamoDB queries"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use DynamoDB Accelerator to cache trading data."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    15,
                "questionText":
                    "A Developer needs temporary access to resources in a second account. What is the MOST secure way to achieve this?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use the Amazon Cognito user pools to get short-lived credentials for the second account. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create a dedicated IAM access key for the second account, and send it by mail."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Create a cross-account access role, and use sts:AssumeRole API to get short-lived credentials."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Establish trust, and add an SSH key for the second account to the IAM user."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    16,
                "questionText":
                    "An application reads data from an Amazon DynamoDB table. Several times a day, for a period of 15 seconds, the application receives multiple ProvisionedThroughputExceeded errors. How should this exception be handled?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Create a new global secondary index for the table to help with the additional requests. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Retry the failed read requests with exponential backoff."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Immediately retry the failed read requests."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use the DynamoDB “UpdateItem” API to increase the provisioned throughput capacity of the table."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    17,
                "questionText":
                    "A Developer has created a large Lambda function, and deployment is failing with the following error: ClientError: An error occurred (InvalidParameterValueException) when calling the CreateFunction operation: Unzipped size must be smaller than XXXXXXXXX bytes’, where XXXXXXXXX is the current Lambda limit What can the Developer do to fix this problem? ",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Submit a limit increase request to AWS Support to increase the function to the size needed. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use a compression algorithm that is more efficient than ZIP."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Break the function into multiple smaller Lambda functions."
                        },
                        {
                            "optionId": "D",
                            "optionText": "ZIP the ZIP file twice to compress it further."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    18,
                "questionText":
                    "Given the source code for an AWS Lambda function in the local store.py containing a handler function called get_store and the following AWS CloudFormation template: What should be done to prepare the template so that it can be deployed using the AWS CLI command aws cloudformation deploy?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use aws cloudformation compile to base64 encode and embed the source file into a modified CloudFormation template. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use aws cloudformation package to upload the source code to an Amazon S3 bucket and produce a modified CloudFormation template."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use aws lambda zip to package the source file together with the CloudFormation template and deploy the resulting zip archive."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use aws serverless create-package to embed the source file directly into the existing CloudFormation template."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    19,
                "questionText":
                    "An application stores images in an S3 bucket. Amazon S3 event notifications are used to trigger a Lambda function that resizes the images. Processing each image takes less than a second. How will AWS Lambda handle the additional traffic?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Lambda will scale out to execute the requests concurrently. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Lambda will handle the requests sequentially in the order received."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Lambda will process multiple images in a single execution."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Lambda will add more compute to each execution to reduce processing time."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    20,
                "questionText":
                    "A company wants to implement a continuous integration for its workloads on AWS. The company wants to trigger unit test in its pipeline for commits-on its code repository, and wants to be notified of failure events in the pipeline. How can these requirements be met?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Store the source code in AWS CodeCommit. Create a CodePipeline to automate unit testing. Use Amazon SNS to trigger notifications of failure events. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Store the source code in GitHub. Create a CodePipeline to automate unit testing. Use Amazon SES to trigger notifications of failure events. "
                        },
                        {
                            "optionId": "C",
                            "optionText": "Store the source code on GitHub. Create a CodePipeline to automate unit testing. Use Amazon CloudWatch to trigger notifications of failure events."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Store the source code in AWS CodeCommit. Create a CodePipeline to automate unit testing. Use Amazon CloudWatch to trigger notification of failure events."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    21,
                "questionText":
                    "A serverless application uses an API Gateway and AWS Lambda. Where should the Lambda function store its session information across function calls?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "In an Amazon DynamoDB table "
                        },
                        {
                            "optionId": "B",
                            "optionText": "In an Amazon SQS queue"
                        },
                        {
                            "optionId": "C",
                            "optionText": "In the local filesystem"
                        },
                        {
                            "optionId": "D",
                            "optionText": "In an SQLite session table using –DSQLITE_ENABLE_SESSION"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    22,
                "questionText":
                    "A Developer has created a software package to be deployed on multiple EC2 instances using IAM roles. What actions could be performed to verify IAM access to get records from Amazon Kinesis Streams? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use the AWS CLI to retrieve the IAM group. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Query Amazon EC2 metadata for in-line IAM policies."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Request a token from AWS STS, and perform a describe action."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Perform a get action using the –-dry-run argument. "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Validate the IAM role policy with the IAM policy simulator."
                        }
                    ],
                "questionAnswer":
                    "DE"
            }
            ,
            {
                "questionId":
                    23,
                "questionText":
                    "When writing a Lambda function, what is the benefit of instantiating AWS clients outside the scope of the handler?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Legibility and stylistic convention "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Taking advantage of connection re-use"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Better error handling"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Creating a new instance per invocation"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    24,
                "questionText":
                    "An application on AWS is using third-party APIs. The Developer needs to monitor API errors in the code, and wants to receive notifications if failures go above a set threshold value. How can the Developer achieve these requirements?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Publish a custom metric on Amazon CloudWatch and use Amazon SES for notification. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use an Amazon CloudWatch API-error metric and use Amazon SNS for notification."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use an Amazon CloudWatch API-error metric and use Amazon SES for notification."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Publish a custom metric on Amazon CloudWatch and use Amazon SNS for notification."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    25,
                "questionText":
                    "A Developer has an application that can upload tens of thousands of objects per second to Amazon S3 in parallel within a single AWS account. As part of new requirements, data stored in S3 must use server side encryption with AWS KMS (SSE-KMS). After creating this change, performance of the application is slower. Which of the following is MOST likely the cause of the application latency?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Amazon S3 throttles the rate at which uploaded objects can be encrypted using Customer Master Keys. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "The AWS KMS API calls limit is less than needed to achieve the desired performance. "
                        },
                        {
                            "optionId": "C",
                            "optionText": "The client encryption of the objects is using a poor algorithm."
                        },
                        {
                            "optionId": "D",
                            "optionText": "KMS requires that an alias be used to create an independent display name that can be mapped to a CMK."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    26,
                "questionText":
                    "A company wants to migrate its web application to AWS and leverage Auto Scaling to handle pear workloads. The Solutions Architect determined that the best metric for an Auto Scaling event is the number of concurrent users. Based on this information, what should the Developer use to autoscale based on concurrent users?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "An Amazon SNS topic to be triggered when a concurrent user threshold is met "
                        },
                        {
                            "optionId": "B",
                            "optionText": "An Amazon Cloudwatch Networkin metric"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon CloudFront to leverage AWS Edge Locations"
                        },
                        {
                            "optionId": "D",
                            "optionText": "A Custom Amazon CloudWatch metric for concurrent users."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    27,
                "questionText":
                    "A company is migrating its on-premises database to Amazon RDS for MySQL. The company has readheavy workloads, and wants to make sure it re-factors its code to achieve optimum read performance for its queries. How can this objective be met?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Add database retries to effectively use RDS with vertical scaling "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use RDS with multi-AZ deployment"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Add a connection string to use an RDS read replica for read queries"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Add a connection string to use a read replica on an EC2 instance."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    28,
                "questionText":
                    "A Developer is receiving HTTP 400: ThrottlingException errors intermittently when calling the Amazon CloudWatch API. When a call fails, no data is retrieved. What best practice should first be applied to address this issue?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Contact AWS Support for a limit increase. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use the AWS CLI to get the metrics"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Analyze the applications and remove the API call"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Retry the call with exponential backoff"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    29,
                "questionText":
                    "A Developer is testing a Docker-based application that uses the AWS SDK to interact with Amazon DynamoDB In the local development environment, the application has used IAM access keys. The application is now ready for deployment onto an ECS cluster. How should the application authenticate with AWS services in production?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Configure an ECS task IAM role for the application to use "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Refactor the application to call AWS STS AssumeRole based on an instance role"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Configure AWS access key/secret access key environment variables with new credentials"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Configure the credentials file with a new access key/secret access key"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    30,
                "questionText":
                    "A Developer created a Lambda function for a web application backend. When testing the Lambda function from the AWS Lambda console, the Developer can see that the function is being executed, but there is no log data being generated in Amazon CloudWatch Logs, even after several minutes. What could cause this situation? ",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "The Lambda function does not have any explicit log statements for the log data to send it to CloudWatch Logs. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "The Lambda function is missing CloudWatch Logs as a source trigger to send log data."
                        },
                        {
                            "optionId": "C",
                            "optionText": "The execution role for the Lambda function is missing permissions to write log data to the CloudWatch Logs."
                        },
                        {
                            "optionId": "D",
                            "optionText": "The Lambda function is missing a target CloudWatch Log group."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    31,
                "questionText":
                    "An application has hundreds of users. Each user may use multiple devices to access the application. The Developer wants to assign unique identifiers to these users regardless of the device they use. Which of the following methods should be used to obtain unique identifiers?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Create a user table in Amazon DynamoDB as key-value pairs of users and their devices. Use these keys as unique identifiers. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use IAM-generated access key IDs for the users as the unique identifier, but do not store secret keys."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Implement developer-authenticated identities by using Amazon Cognito, and get credentials for these identities."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Assign IAM users and roles to the users. Use the unique IAM resource ID as the unique identifier."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    32,
                "questionText":
                    "An application is designed to use Amazon SQS to manage messages from many independent senders. Each sender’s messages must be processed in the order they are received. Which SQS feature should be implemented by the Developer?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Configure each sender with a unique MessageGroupId "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Enable MessageDeduplicationIds on the SQS queue"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Configure each message with unique MessageGroupIds."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Enable ContentBasedDeduplication on the SQS queue"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    33,
                "questionText":
                    "A deployment package uses the AWS CLI to copy files into any S3 bucket in the account, using access keys stored in environment variables. The package is running on EC2 instances, and the instances have been modified to run with an assumed IAM role and a more restrictive policy that allows access to only one bucket. After the change, the Developer logs into the host and still has the ability to write into all of the S3 buckets in that account. What is the MOST likely cause of this situation?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "An IAM inline policy is being used on the IAM role "
                        },
                        {
                            "optionId": "B",
                            "optionText": "An IAM managed policy is being used on the IAM role"
                        },
                        {
                            "optionId": "C",
                            "optionText": "The AWS CLI is corrupt and needs to be reinstalled"
                        },
                        {
                            "optionId": "D",
                            "optionText": "The AWS credential provider looks for instance profile credentials last"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    34,
                "questionText":
                    "A Developer is writing transactions into a DynamoDB table called “SystemUpdates” that has 5 write capacity units. Which option has the highest read throughput?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Eventually consistent reads of 5 read capacity units reading items that are 4 KB in size "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Strongly consistent reads of 5 read capacity units reading items that are 4 KB in size"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Eventually consistent reads of 15 read capacity units reading items that are 1 KB in size"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Strongly consistent reads of 15 read capacity units reading items that are 1 KB in size "
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    35,
                "questionText":
                    "Where should an Elastic Beanstalk configuration file named healthcheckur1.config be placed in the application source bundle?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "In the root of the application "
                        },
                        {
                            "optionId": "B",
                            "optionText": "In the bin folder"
                        },
                        {
                            "optionId": "C",
                            "optionText": "In healthcheckur1.config.ebextension under root"
                        },
                        {
                            "optionId": "D",
                            "optionText": "In the .ebextensions folder"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    36,
                "questionText":
                    "During non-peak hours, a Developer wants to minimize the execution time of a full Amazon DynamoDB table scan without affecting normal workloads. The workloads average half of the strongly consistent read capacity units during non-peak hours. How would the Developer optimize this scan?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use parallel scans while limiting the rate "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use sequential scans"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Increase read capacity units during the scan operation"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Change consistency to eventually consistent during the scan operation"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    37,
                "questionText":
                    "A Developer is creating a Lambda function and will be using external libraries that are not included in the standard Lambda libraries. What action would minimize the Lambda compute time consumed?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Install the dependencies and external libraries at the beginning of the Lambda function. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create a Lambda deployment package that includes the external libraries."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Copy the external libraries to Amazon S3, and reference the external libraries to the S3 location."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Install the external libraries in Lambda to be available to all Lambda functions."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    38,
                "questionText":
                    "A Developer is writing a Linux-based application to run on AWS Elastic Beanstalk. Application requirements state that the application must maintain full capacity during updates while minimizing cost. Which type of Elastic Beanstalk deployment policy should the Developer specify for the environment?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Immutable "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Rolling"
                        },
                        {
                            "optionId": "C",
                            "optionText": "All at Once"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Rolling with additional batch"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    39,
                "questionText":
                    "An application under development is required to store hundreds of video files. The data must be encrypted within the application prior to storage, with a unique key for each video file. How should the Developer code the application?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use the KMS Encrypt API to encrypt the data. Store the encrypted data key and data. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use a cryptography library to generate an encryption key for the application. Use the encryption key to encrypt the data. Store the encrypted data."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use the KMS GenerateDataKey API to get a data key. Encrypt the data with the data key. Store the encrypted data key and data."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Upload the data to an S3 bucket using server side-encryption with an AWS KMS key."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    40,
                "questionText":
                    " A Developer is creating an application that needs to locate the public IPv4 address of the Amazon EC2 instance on which it runs. How can the application locate this information?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Get the instance metadata by retrieving http://169.254.169.254/latest/metadata/. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Get the instance user data by retrieving http://169.254.169.254/latest/userdata/."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Get the application to run IFCONFIG to get the public IP address."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Get the application to run IPCONFIG to get the public IP address."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    41,
                "questionText":
                    "The Lambda function below is being called through an API using Amazon API Gateway. The average execution time for the Lambda function is about 1 second. The pseudocode for the Lambda function is as shown in the exhibit. What two actions can be taken to improve the performance of this Lambda function without increasing the cost of the solution? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Package only the modules the Lambda function requires "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use Amazon DynamoDB instead of Amazon RDS"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Move the initialization of the variable Amazon RDS connection outside of the handler function"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Implement custom database connection pooling with the Lambda function "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Implement local caching of Amazon RDS data so Lambda can re-use the cache"
                        }
                    ],
                "questionAnswer":
                    "AC"
            }
            ,
            {
                "questionId":
                    42,
                "questionText":
                    "An application will ingest data at a very high throughput from many sources and must store the data in an Amazon S3 bucket. Which service would BEST accomplish this task?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Amazon Kinesis Firehose "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Amazon S3 Acceleration Transfer"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon SQS"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Amazon SNS "
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    43,
                "questionText":
                    "A Developer has setup an Amazon Kinesis Stream with 4 shards to ingest a maximum of 2500 records per second. A Lambda function has been configured to process these records. In which order will these records be processed?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Lambda will receive each record in the reverse order it was placed into the stream following a LIFO (last-in, first-out) method "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Lambda will receive each record in the exact order it was placed into the stream following a FIFO (firstin, first-out) method."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Lambda will receive each record in the exact order it was placed into the shard following a FIFO (first-in, first-out) method. There is no guarantee of order across shards."
                        },
                        {
                            "optionId": "D",
                            "optionText": "The Developer can select FIFO, (first-in, first-out), LIFO (last-in, last-out), random, or request specific record using the getRecords API."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    44,
                "questionText":
                    "A static website is hosted in an Amazon S3 bucket. Several HTML pages on the site use JavaScript to download images from another Amazon S3 bucket. These images are not displayed when users browse the site. What is the possible cause for the issue?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "The referenced Amazon S3 bucket is in another region. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "The images must be stored in the same Amazon S3 bucket."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Port 80 must be opened on the security group in which the Amazon S3 bucket is located."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Cross Origin Resource Sharing must be enabled on the Amazon S3 bucket."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    45,
                "questionText":
                    "Amazon S3 has the following structure: S3://BUCKET/FOLDERNAME/FILENAME.zip Which S3 best practice would optimize performance with thousands of PUT request each second to a single bucket?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Prefix folder names with user id; for example, s3://BUCKET/2013-FOLDERNAME/FILENAME.zip "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Prefix file names with timestamps; for example, s3://BUCKET/FOLDERNAME/2013-26-05-15-00- 00-FILENAME.zip"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Prefix file names with random hex hashes; for example, s3://BUCKET/FOLDERNAME/23a6- FILENAME.zip"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Prefix folder names with random hex hashes; for example, s3://BUCKET/23a6-FOLDERNAME/ FILENAME.zip"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    46,
                "questionText":
                    "For a deployment using AWS CodeDeploy, what is the run order of the hooks for in-place deployments?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Before Install -> Application Stop -> Application Start -> After Install "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Application Stop -> Before Install -> After Install -> Application Start"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Before Install -> Application Stop -> Validate Service -> Application Start"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Application Stop -> Before Install -> Validate Service -> Application Start"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    47,
                "questionText":
                    "A Developer is developing an application that manages financial transactions. To improve security, multifactor authentication (MFA) will be required as part of the login protocol. What services can the Developer use to meet these requirements?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Amazon DynamoDB to store MFA session data, and Amazon SNS to send MFA codes  "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Amazon Cognito with MFA"
                        },
                        {
                            "optionId": "C",
                            "optionText": "AWS Directory Service"
                        },
                        {
                            "optionId": "D",
                            "optionText": "AWS IAM with MFA enabled"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    48,
                "questionText":
                    "A game stores user game data in an Amazon DynamoDB table. Individual users should not have access to other users’ game data. How can this be accomplished?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Encrypt the game data with individual user keys. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Restrict access to specific items based on certain primary key values."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Stage data in SQS queues to inject metadata before accessing DynamoDB."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Read records from DynamoDB and discard irrelevant data client-side."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    49,
                "questionText":
                    "A company developed a set of APIs that are being served through the Amazon API Gateway. The API calls need to be authenticated based on OpenID identity providers such as Amazon or Facebook. The APIs should allow access based on a custom authorization model. Which is the simplest and MOST secure design to use to build an authentication and authorization model for the APIs?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use Amazon Cognito user pools and a custom authorizer to authenticate and authorize users based on JSON Web Tokens. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Build a OpenID token broker with Amazon and Facebook. Users will authenticate with these identify providers and pass the JSON Web Token to the API to authenticate each API call."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Store user credentials in Amazon DynamoDB and have the application retrieve temporary credentials from AWS STS. Make API calls by passing user credentials to the APIs for authentication and authorization."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use Amazon RDS to store user credentials and pass them to the APIs for authentications and authorization."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    50,
                "questionText":
                    "A supplier is writing a new RESTful API for customers to query the status of orders. The customers requested the following API endpoint. http://www.supplierdomain.com/status/customerID Which of the following application designs meet the requirements? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Amazon SQS; Amazon SNS "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Elastic Load Balancing; Amazon EC2"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon ElastiCache; Amazon Elacticsearch Service"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Amazon API Gateway; AWS Lambda "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Amazon S3; Amazon CloudFront"
                        }
                    ],
                "questionAnswer":
                    "BD"
            }
            ,
            {
                "questionId":
                    51,
                "questionText":
                    "A development team consists of 10 team members. Similar to a home directory for each team member, the manager wants to grant access to user-specific folders in an Amazon S3 bucket. For the team member with the username “TeamMemberX”, the snippet of the IAM policy looks like this:  Instead of creating distinct policies for each team member, what approach can be used to make this policy snippet generic for all team members?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use IAM policy condition "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use IAM policy principal"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use IAM policy variables"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use IAM policy resource"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    52,
                "questionText":
                    "A legacy service has an XML-based SOAP interface. The Developer wants to expose the functionality of the service to external clients with the Amazon API Gateway. Which technique will accomplish this?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Create a RESTful API with the API Gateway; transform the incoming JSON into a valid XML message for the SOAP interface using mapping templates. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create a RESTful API with the API Gateway; pass the incoming JSON to the SOAP interface through an Application Load Balancer."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Create a RESTful API with the API Gateway; pass the incoming XML to the SOAP interface through an Application Load Balancer."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create a RESTful API with the API Gateway; transform the incoming XML into a valid message for the SOAP interface using mapping templates."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    53,
                "questionText":
                    "A company is using AWS CodeBuild to compile a website from source code stored in AWS CodeCommit. A recent change to the source code has resulted in the CodeBuild project being unable to successfully compile the website. How should the Developer identify the cause of the failures?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Modify the buildspec.yml file to include steps to send the output of build commands to Amazon CloudWatch. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use a custom Docker image that includes the AWS X-Ray agent in the AWS CodeBuild project configuration."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Check the build logs of the failed phase in the last build attempt in the AWS CodeBuild project build history."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Manually re-run the build process on a local machine so that the output can be visualized."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    54,
                "questionText":
                    "A web application is using Amazon Kinesis Streams for clickstream data that may not be consumed for up to 12 hours. How can the Developer implement encryption at rest for data within the Kinesis Streams?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Enable SSL connections to Kinesis "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use Amazon Kinesis Consumer Library"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Encrypt the data once it is at rest with a Lambda function"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Enable server-side encryption in Kinesis Streams"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    55,
                "questionText":
                    "A Developer wants to use AWS X-Ray to trace a user request end-to-end throughput the software stack. The Developer made the necessary changes in the application tested it, and found that the application is able to send the traces to AWS X-Ray. However, when the application is deployed to an EC2 instance, the traces are not available. Which of the following could create this situation? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "The traces are reaching X-Ray, but the Developer does not have access to view the records.  "
                        },
                        {
                            "optionId": "B",
                            "optionText": "The X-Ray daemon is not installed on the EC2 instance."
                        },
                        {
                            "optionId": "C",
                            "optionText": "The X-Ray endpoint specified in the application configuration is incorrect."
                        },
                        {
                            "optionId": "D",
                            "optionText": "The instance role does not have “xray:BatchGetTraces” and “xray:GetTraceGraph” permissions. "
                        },
                        {
                            "optionId": "E",
                            "optionText": "The instance role does not have “xray:PutTraceSegments” and “xray:PutTelemetryRecords” permissions."
                        }
                    ],
                "questionAnswer":
                    "BE"
            }
            ,
            {
                "questionId":
                    56,
                "questionText":
                    "A Developer executed a AWS CLI command and received the error shown below: What action should the Developer perform to make this error human-readable?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Make a call to AWS KMS to decode the message. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use the AWS STS decode-authorization-message API to decode the message."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use an open source decoding library to decode the message."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use the AWS IAM decode-authorization-message API to decode this message."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    57,
                "questionText":
                    "A company is using Amazon API Gateway to manage access to a set of microservices implemented as AWS Lambda functions. Following a bug report, the company makes a minor breaking change to one of the APIs. In order to avoid impacting existing clients when the new API is deployed, the company wants to allow clients six months to migrate from v1 to v2. Which approach should the Developer use to handle this change?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Update the underlying Lambda function and provide clients with the new Lambda invocation URL. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use API Gateway to automatically propagate the change to clients, specifying 180 days in the phased deployment parameter."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use API Gateway to deploy a new stage named v2 to the API and provide users with its URL."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Update the underlying Lambda function, create an Amazon CloudFront distribution with the updated Lambda function as its origin."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    58,
                "questionText":
                    "A company has written a Java AWS Lambda function to be triggered whenever a user uploads an image to an Amazon S3 bucket. The function converts the original image to several different formats and then copies the resulting images to another Amazon S3 bucket. The Developers find that no images are being copied to the second Amazon S3 bucket. They have tested the code on an Amazon EC2 instance with 1GB of RAM, and it takes an average of 500 seconds to complete. What is the MOST likely cause of the problem?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "The Lambda function has insufficient memory and needs to be increased to 1 GB to match the Amazon EC2 instance "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Files need to be copied to the same Amazon S3 bucket for processing, so the second bucket needs to be deleted. "
                        },
                        {
                            "optionId": "C",
                            "optionText": "Lambda functions have a maximum execution limit of 300 seconds, therefore the function is not completing."
                        },
                        {
                            "optionId": "D",
                            "optionText": "There is a problem with the Java runtime for Lambda, and the function needs to be converted to node.js."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    59,
                "questionText":
                    "An application stops working with the following error: The specified bucket does not exist. Where is the BEST place to start the root cause analysis?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Check the Elastic Load Balancer logs for DeleteBucket requests. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Check the application logs in Amazon CloudWatch Logs for Amazon S3 DeleteBucket errors."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Check AWS X-Ray for Amazon S3 DeleteBucket alarms."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Check AWS CloudTrail for a DeleteBucket event."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    60,
                "questionText":
                    "An organization must store thousands of sensitive audio and video files in an Amazon S3 bucket. Organizational security policies require that all data written to this bucket be encrypted. How can compliance with this policy be ensured?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use AWS Lambda to send notifications to the security team if unencrypted objects are pun in the bucket. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Configure an Amazon S3 bucket policy to prevent the upload of objects that do not contain the x-amzserver-side-encryption header."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Create an Amazon CloudWatch event rule to verify that all objects stored in the Amazon S3 bucket are encrypted."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Configure an Amazon S3 bucket policy to prevent the upload of objects that contain the x-amz-serverside-encryption header."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    61,
                "questionText":
                    "An application overwrites an object in Amazon S3, and then immediately reads the same object. Why would the application sometimes retrieve the old version of the object?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "S3 overwrite PUTS are eventually consistent, so the application may read the old object. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "The application needs to add extra metadata to label the latest version when uploading to Amazon S3."
                        },
                        {
                            "optionId": "C",
                            "optionText": "All S3 PUTS are eventually consistent, so the application may read the old object."
                        },
                        {
                            "optionId": "D",
                            "optionText": "The application needs to explicitly specify latest version when retrieving the object."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    62,
                "questionText":
                    "The release process workflow of an application requires a manual approval before the code is deployed into the production environment. What is the BEST way to achieve this using AWS CodePipeline?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use multiple pipelines to allow approval "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use an approval action in a stage"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Disable the stage transition to allow manual approval"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Disable a stage just prior the deployment stage"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    63,
                "questionText":
                    "Where should the appspec.yml file be placed in order for AWS CodeDeploy to work?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "In the root of the application source code directory structure "
                        },
                        {
                            "optionId": "B",
                            "optionText": "In the bin folder along with all the complied code"
                        },
                        {
                            "optionId": "C",
                            "optionText": "In an S3 bucket "
                        },
                        {
                            "optionId": "D",
                            "optionText": "In the same folder as the application configuration files"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    64,
                "questionText":
                    "An existing serverless application processes uploaded image files. The process currently uses a single Lambda function that takes an image file, performs the processing, and stores the file in Amazon S3. Users of the application now require thumbnail generation of the images. Users want to avoid any impact to the time it takes to perform the image uploads. How can thumbnail generation be added to the application, meeting user requirements while minimizing changes to existing code?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Change the existing Lambda function handling the uploads to create thumbnails at the time of upload. Have the function store both the image and thumbnail in Amazon S3. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create a second Lambda function that handles thumbnail generation and storage. Change the existing Lambda function to invoke it asynchronously."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Create an S3 event notification with a Lambda function destination. Create a new Lambda function to generate and store thumbnails."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create an S3 event notification to an SQS Queue. Create a scheduled Lambda function that processes the queue, and generates and stores thumbnails."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    65,
                "questionText":
                    "A Developer must re-implement the business logic for an order fulfilment system. The business logic has to make requests to multiple vendors to decide where to purchase an item. The whole process can take up to a week to complete. What is the MOST efficient and SIMPLEST way to implement a system that meets these requirements?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use AWS Step Functions to execute parallel Lambda functions, and join the results. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create an AWS SQS for each vendor, poll the queue from a worker instance, and joint the results."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use AWS Lambda to asynchronously call a Lambda function for each vendor, and join the results."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use Amazon CloudWatch Events to orchestrate the Lambda functions."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    66,
                "questionText":
                    "A customer wants to deploy its source code on an AWS Elastic Beanstalk environment. The customer needs to perform deployment with minimal outage and should only use existing instances to retain application access log. What deployment policy would satisfy these requirements?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Rolling "
                        },
                        {
                            "optionId": "B",
                            "optionText": "All at once"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Rolling with an additional batch"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Immutable"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    67,
                "questionText":
                    "A Developer has been asked to build a real-time dashboard web application to visualize the key prefixes and storage size of objects in Amazon S3 buckets. Amazon DynamoDB will be used to store the Amazon S3 metadata. What is the optimal and MOST cost-effective design to ensure that the real-time dashboard is kept up to date with the state of the objects in the Amazon S3 buckets?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use an Amazon CloudWatch event backed by an AWS Lambda function. Issue an Amazon S3 API call to get a list of all Amazon S3 objects and persist the metadata within DynamoD"
                        },
                        {
                            "optionId": "B",
                            "optionText": "Have the web application poll the DynamoDB table to reflect this change. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use Amazon S3 Event Notification backed by a Lambda function to persist the metadata into  DynamoD"
                        },
                        {
                            "optionId": "B",
                            "optionText": "Have the web application poll the DynamoDB table to reflect this change."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Run a cron job within an Amazon EC2 instance to list all objects within Amazon S3 and persist the metadata into DynamoD"
                        },
                        {
                            "optionId": "B",
                            "optionText": "Have the web application poll the DynamoDB table to reflect this change."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create a new Amazon EMR cluster to get all the metadata about Amazon S3 objects; persist the metadata into DynamoD"
                        },
                        {
                            "optionId": "B",
                            "optionText": "Have the web application poll the DynamoDB table to reflect this change."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    68,
                "questionText":
                    "A Developer must repeatedly and consistently deploy a serverless RESTful API on AWS. Which techniques will work? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Define a Swagger file. Use AWS Elastic Beanstalk to deploy the Swagger file. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Define a Swagger file. Use AWS CodeDeploy to deploy the Swagger file."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Deploy a SAM template with an inline Swagger definition."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Define a Swagger file. Deploy a SAM template that references the Swagger file. "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Define an inline Swagger definition in a Lambda function. Invoke the Lambda function."
                        }
                    ],
                "questionAnswer":
                    "CD"
            }
            ,
            {
                "questionId":
                    69,
                "questionText":
                    "A set of APIs are exposed to customers using the Amazon API Gateway. These APIs have caching enabled on the API Gateway. Customers have asked for an option to invalidate this cache for each of the APIs. What action can be taken to allow API customers to invalidate the API Cache?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Ask customers to use AWS credentials to call the InvalidateCache API. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Ask customers to invoke an AWS API endpoint which invalidates the cache."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Ask customers to pass an HTTP header called Cache-Control:max-age=0."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Ask customers to add a query string parameter called “INVALIDATE_CACHE” when making an API call."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    70,
                "questionText":
                    "A Developer uses AWS CodeDeploy to automate application deployment that connects to an external MySQL database. The Developer wants to securely access the encrypted secrets, such as API keys and database passwords. Which of the following solutions would involve the LEAST administrative effort?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Save the secrets in Amazon S3 with AWS KMS server-side encryption, and use a signed URL to access them by using the IAM role from Amazon EC2 instances. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use the instance metadata to store the secrets and to programmatically access the secrets from EC2 instances."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use the Amazon DynamoDB client-side encryption library to save the secrets in DynamoDB and to programmatically access the secrets from EC2 instances."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use AWS SSM Parameter Store to store the secrets and to programmatically access them by using the IAM role from EC2 instances."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    71,
                "questionText":
                    "An application running on EC2 instances is storing data in an S3 bucket. Security policy mandates that all data must be encrypted in transit. How can the Developer ensure that all traffic to the S3 bucket is encrypted?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Install certificates on the EC2 instances. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create a bucket policy that allows traffic where SecureTransport is true."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Create an HTTPS redirect on the EC2 instances. "
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create a bucket policy that denies traffic where SecureTransport is false."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    72,
                "questionText":
                    "A company is developing a new online game that will run on top of Amazon ECS. Four distinct Amazon ECS services will be part of the architecture, each requiring specific permissions to various AWS services. The company wants to optimize the use of the underlying Amazon EC2 instances by bin packing the containers based on memory reservation. Which configuration would allow the Development team to meet these requirements MOST securely?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Create a new Identity and Access Management (IAM) instance profile containing the required permissions for the various ECS services, then associate that instance role with the underlying EC2 instances. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create four distinct IAM roles, each containing the required permissions for the associated ECS service, then configure each ECS service to reference the associated IAM role."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Create four distinct IAM roles, each containing the required permissions for the associated ECS service, then, create an IAM group and configure the ECS cluster to reference that group."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create four distinct IAM roles, each containing the required permissions for the associated ECS service, then configure each ECS task definition to referenсe the associated IAM role."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    73,
                "questionText":
                    "A company needs to encrypt data at rest, but it wants to leverage an AWS managed service using its own master key. Which of the following AWS service can be used to meet these requirements?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "SSE with Amazon S3 "
                        },
                        {
                            "optionId": "B",
                            "optionText": "SSE with AWS KMS"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Client-side encryption"
                        },
                        {
                            "optionId": "D",
                            "optionText": "AWS IAM roles and policies"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    74,
                "questionText":
                    "When a Developer tries to run an AWS CodeBuild project, it raises an error because the length of all environment variables exceeds the limit for the combined maximum of characters. What is the recommended solution?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Add the export LC_ALL=“en_US.utf8” command to the pre_build section to ensure POSIX localization. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use Amazon Cognito to store key-value pairs for large numbers of environment variables."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Update the settings for the build project to use an Amazon S3 bucket for large numbers of environment variables."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use AWS Systems Manager Parameter Store to store large numbers of environment variables."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    75,
                "questionText":
                    "A Lambda function is packaged for deployment to multiple environments, including development, test, production, etc. Each environment has unique set of resources such as databases, etc. How can the Lambda function use the resources for the current environment?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Apply tags to the Lambda functions. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Hardcore resources in the source code."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use environment variables for the Lambda functions."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use separate function for development and production. "
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    76,
                "questionText":
                    "The Developer for a retail company must integrate a fraud detection solution into the order processing solution. The fraud detection solution takes between ten and thirty minutes to verify an order. At peak, the web site can receive one hundred orders per minute. What is the most scalable method to add the fraud detection solution to the order processing pipeline?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Add all new orders to an Amazon SQS queue. Configure a fleet of 10 EC2 instances spanning multiple AZs with the fraud detection solution installed on them to pull orders from this queue. Update the order with a pass or fails status. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Add all new orders to an SQS queue. Configure an Auto Scaling group that uses the queue depth metric as its unit of scale to launch a dynamically-sized fleet of EC2 instances spanning multiple AZs with the fraud detection solution installed on them to pull orders from this queue. Update the order with a pass or fails status."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Add all new orders to an Amazon Kinesis Stream. Subscribe a Lambda function to automatically read batches of records from the Kinesis Stream. The Lambda function includes the fraud detection software and will update the order with a pass or fail status."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Write all new orders to Amazon DynamoD"
                        },
                        {
                            "optionId": "B",
                            "optionText": "Configure DynamoDB Streams to include all new orders. Subscribe a Lambda function to automatically read batches of records from the Kinesis Stream. The Lambda function includes the fraud detection software and will update the order with a pass or fail status."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    77,
                "questionText":
                    "A Developer is creating a mobile application with a limited budget. The solution requires a scalable service that will enable customers to sign up and authenticate into the mobile application while using the organization’s current SAML 2.0 identity provider. Which AWS service should be used to meet these requirements?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "AWS Lambda "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Amazon Cognito"
                        },
                        {
                            "optionId": "C",
                            "optionText": "AWS IAM"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Amazon EC2"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    78,
                "questionText":
                    "An application is real-time processing millions of events that are received through an API. What service could be used to allow multiple consumers to process the data concurrently and MOST costeffectively?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Amazon SNS with fanout to an SQS queue for each application "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Amazon SNS with fanout to an SQS FIFO (first-in, firtst-out) queue for each application"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon Kinesis Firehouse"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Amazon Kinesis Streams"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    79,
                "questionText":
                    "A Developer needs to use AWS X-Ray to monitor an application that is deployed on EC2 instances. What steps have to be executed to perform the monitoring?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Deploy the X-Ray SDK with the application and use X-Ray annotation. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Install the X-Ray daemon and instrument the application code."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Install the X-Ray daemon and configure it to forward data to Amazon CloudWatch Events."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Deploy the X-Ray SDK with the application and instrument the application code."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    80,
                "questionText":
                    " A Developer will be using the AWS CLI on a local development server to manage AWS services. What can be done to ensure that the CLI uses the Developer’s IAM permissions when making commands?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Specify the Developer’s IAM access key ID and secret access key as parameters for each CLI command. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Run the aws configure CLI command, and provide the Developer’s IAM access key ID and secret access key."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Specify the Developer’s IAM user name and password as parameters for each CLI command."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use the Developer’s IAM role when making the CLI command."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    81,
                "questionText":
                    "After installing the AWS CLI, a Developer tries to run the command aws configure but receives the following error: Error: aws: command not found What is the most likely cause of this error?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "The aws executable is not in the PATH environment variable. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Access to the aws executable has been denied to the installer."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Incorrect AWS credentials were provided."
                        },
                        {
                            "optionId": "D",
                            "optionText": "The aws script does not have an executable file mode."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    82,
                "questionText":
                    "An on-premises legacy application is caching data files locally and writing shared images to local disks. What is necessary to allow for horizontal scaling when migrating the application to AWS?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Modify the application to have both shared images and caching data written to Amazon EBS. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Modify the application to read and write cache data on Amazon S3, and also store shared images on S3."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Modify the application to use Amazon S3 for serving shared images; cache data can then be written to local disks."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Modify the application to read and write cache data on Amazon S3, while continuing to write shared images to local disks."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    83,
                "questionText":
                    "A Developer must trigger an AWS Lambda function based on the item lifecycle activity in an Amazon DynamoDB table. How can the Developer create the solution?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Enable a DynamoDB stream that publishes an Amazon SNS message. Trigger the Lambda function synchronously from the SNS message. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Enable a DynamoDB stream that publishes an SNS message. Trigger the Lambda function asynchronously from the SNS message."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Enable a DynamoDB stream, and trigger the Lambda function synchronously from the stream."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Enable a DynamoDB stream, and trigger the Lambda function asynchronously from the stream."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    84,
                "questionText":
                    "A gaming company is developing a mobile game application for iOS® and Android® platforms. This mobile game securely stores user data locally on the device. The company wants to allow users to use multiple device for the game, which requires user data synchronization across devices. Which service should be used to synchronize user data across devices without the need to create a  backend application?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "AWS Lambda "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Amazon S3"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon DynamoDB"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Amazon Cognito"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    85,
                "questionText":
                    "An on-premises application is implemented using a Linux, Apache, MySQL and PHP (LAMP) stack. The Developer wants to run this application in AWS. Which of the following sets of AWS services can be used to run this stack?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Amazon API Gateway, Amazon S3 "
                        },
                        {
                            "optionId": "B",
                            "optionText": "AWS Lambda, Amazon DynamoDB"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon EC2, Amazon Aurora"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Amazon Cognito, Amazon RDS "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Amazon ECS, Amazon EBS"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    86,
                "questionText":
                    "An application displays a status dashboard. The status is updated by 1 KB messages from an SQS queue. Although the status changes infrequently, the Developer must minimize the time between the message arrival in the queue and the dashboard update. What technique provides the shortest delay in updating the dashboard?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Retrieve the messages from the queue using long polling every 20 seconds. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Reduce the size of the messages by compressing them before sending."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Retrieve the messages from the queue using short polling every 10 seconds."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Reduce the size of each message payload by sending it in two parts."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    87,
                "questionText":
                    "A company is using AWS CodePipeline to deliver one of its applications. The delivery pipeline is triggered by changes to the master branch of an AWS CodeCommit repository and uses AWS CodeBuild to implement the test and build stages of the process and AWS CodeDeploy to deploy the application. The pipeline has been operating successfully for several months and there have been no modifications. Following a recent change to the application’s source code, AWS CodeDeploy has not deployed the updates application as expected. What are the possible causes? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "The change was not made in the master branch of the AWS CodeCommit repository. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "One of the earlier stages in the pipeline failed and the pipeline has terminated."
                        },
                        {
                            "optionId": "C",
                            "optionText": "One of the Amazon EC2 instances in the company’s AWS CodePipeline cluster is inactive."
                        },
                        {
                            "optionId": "D",
                            "optionText": "The AWS CodePipeline is incorrectly configured and is not executing AWS CodeDeploy. "
                        },
                        {
                            "optionId": "E",
                            "optionText": "AWS CodePipeline does not have permissions to access AWS CodeCommit."
                        }
                    ],
                "questionAnswer":
                    "AC"
            }
            ,
            {
                "questionId":
                    88,
                "questionText":
                    "A social media company is using Amazon Cognito in order to synchronize profiles across different mobile devices, to enable end users to have a seamless experience. Which of the following configurations can be used to silently notify users whenever an update is available on all other devices? ",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Modify the user pool to include all the devices which keep them in sync. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use the SyncCallback interface to receive notifications on the application."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use an Amazon Cognito stream to analyze the data and push the notifications."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use the push synchronization feature with the appropriate IAM role."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    89,
                "questionText":
                    "A website’s page load times are gradually increasing as more users access the system at the same time. Analysis indicates that a user profile is being loaded from a database in all the web pages being visited by each user and this is increasing the database load and the page load latency. To address this issue the Developer decides to cache the user profile data. Which caching strategy will address this situation MOST efficiently?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Create a new Amazon EC2 Instance and run a NoSQL database on it. Cache the profile data within this database using the write-through caching strategy. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create an Amazon ElastiCache cluster to cache the user profile data. Use a cache-aside caching strategy."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use a dedicated Amazon RDS instance for caching profile data. Use a write-through caching strategy."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create an ElastiCache cluster to cache the user profile data. Use a write-through caching strategy."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    90,
                "questionText":
                    "An application needs to use the IP address of the client in its processing. The application has been moved into AWS and has been placed behind an Application Load Balancer (ALB). However, all the client IP addresses now appear to be the same. The application must maintain the ability to scale horizontally. Based on this scenario, what is the MOST cost-effective solution to this problem?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Remove the application from the AL"
                        },
                        {
                            "optionId": "B",
                            "optionText": "Delete the ALB and change Amazon Route 53 to direct traffic to the instance running the application. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Remove the application from the AL"
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create a Classic Load Balancer in its place. Direct traffic to the application using the HTTP protocol."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Alter the application code to inspect the X-Forwarded-For header. Ensure that the code can work properly if a list of IP addresses is passed in the header."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Alter the application code to inspect a custom header. Alter the client code to pass the IP address in the custom header."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    91,
                "questionText":
                    "A development team is using AWS Elastic Beanstalk to deploy a two-tier application that consists of a loadbalanced web tier and an Amazon RDS database tier in production. The team would like to separate the RDS instance from the Elastic Beanstalk. How can this be accomplished?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use the Elastic Beanstalk CLI to disassociate the database. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use the AWS CLI to disassociate the database."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Change the deployment policy to disassociate the database."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Recreate a new Elastic Beanstalk environment without Amazon RDS."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    92,
                "questionText":
                    "According to best practice, how should access keys be managed in AWS? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use the same access key in all applications for consistency. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Delete all access keys for the account root user."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Leave unused access keys in the account for tracking purposes."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Embed and encrypt access keys in code for continuous deployment.  "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Use Amazon IAM roles instead of access keys where possible."
                        }
                    ],
                "questionAnswer":
                    "BE"
            }
            ,
            {
                "questionId":
                    93,
                "questionText":
                    "The development team is working on an API that will be served from Amazon API gateway. The API will be served from three environments: development, test, and production. The API Gateway is configured to use 237 GB of cache in all three stages. Which is the MOST cost-efficient deployment strategy?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Create a single API Gateway with all three stages. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create three API Gateways, one for each stage in a single AWS account."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Create an API Gateway in three separate AWS accounts."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Enable the cache for development and test environments only when needed."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    94,
                "questionText":
                    "An application running on an Amazon Linux EC2 instance needs to manage the AWS infrastructure. How can the EC2 instance be configured to make AWS API calls securely?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Sign the AWS CLI command using the signature version 4 process. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Run the aws configure AWS CLI command and specify the access key id and secret access key."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Specify a role for the EC2 instance with the necessary privileges."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Pass the access key id and secret access key as parameters for each AWS CLI command."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    95,
                "questionText":
                    "A company is migrating from a monolithic architecture to a microservices-based architecture. The Developers need to refactor the application so that the many microservices can asynchronously communicate with each other without impacting performance. Use of which managed AWS services will enable asynchronous message passing? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Amazon SQS "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Amazon Cognito"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon Kinesis"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Amazon SNS "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Amazon ElastiCache"
                        }
                    ],
                "questionAnswer":
                    "AD"
            }
            ,
            {
                "questionId":
                    96,
                "questionText":
                    "An application runs on multiple EC2 instances behind an ELB. Where is the session data best written so that it can be served reliably across multiple requests?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Write data to Amazon ElastiCache "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Write data to Amazon Elastic Block Store."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Write data to Amazon EC2 Instance Store."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Write data to the root filesystem."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    97,
                "questionText":
                    "A Developer is creating a Lambda function that will generate and export a file. The function requires 100 MB of temporary storage for temporary files while executing. These files will not be needed after the function is complete. How can the Developer MOST efficiently handle the temporary files? ",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Store the files in EBS and delete the files at the end of the Lambda function. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Copy the files to EFS and delete the files at the end of the Lambda function."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Store the files in the /tmp directory and delete the files at the end of the Lambda function."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Copy the files to an S3 bucket with a lifecycle policy to delete the files."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    98,
                "questionText":
                    "A Developer has developed a web application and wants to deploy it quickly on a Tomcat server on AWS. The Developer wants to avoid having to manage the underlying infrastructure. What is the easiest way to deploy the application, based on these requirements?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "AWS CloudFormation "
                        },
                        {
                            "optionId": "B",
                            "optionText": "AWS Elastic Beanstalk"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon S3"
                        },
                        {
                            "optionId": "D",
                            "optionText": "AWS CodePipeline"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    99,
                "questionText":
                    "An application uses Lambda functions to extract metadata from files uploaded to an S3 bucket; the metadata is stored in Amazon DynamoDB. The application starts behaving unexpectedly, and the Developer wants to examine the logs of the Lambda function code for errors. Based on this system configuration, where would the Developer find the logs?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Amazon S3 "
                        },
                        {
                            "optionId": "B",
                            "optionText": "AWS CloudTrail"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon CloudWatch"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Amazon DynamoDB"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    100,
                "questionText":
                    "An organization is using Amazon CloudFront to ensure that its users experience low-latency access to its web application. The organization has identified a need to encrypt all traffic between users and CloudFront, and all traffic between CloudFront and the web application. How can these requirements be met? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use AWS KMS to encrypt traffic between CloudFront and the web application. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Set the Origin Protocol Policy to “HTTPS Only”."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Set the Origin’s HTTP Port to 443."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Set the Viewer Protocol Policy to “HTTPS Only” or “Redirect HTTP to HTTPS”. "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Enable the CloudFront option Restrict Viewer Access."
                        }
                    ],
                "questionAnswer":
                    "BD"
            }
            ,
            {
                "questionId":
                    101,
                "questionText":
                    "An application is using Amazon DynamoDB as its data store, and should be able to read 100 items per second as strongly consistent reads. Each item is 5 KB in size. To what value should the table’s provisioned read throughput be set?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "50 read capacity units "
                        },
                        {
                            "optionId": "B",
                            "optionText": "100 read capacity units"
                        },
                        {
                            "optionId": "C",
                            "optionText": "200 read capacity units"
                        },
                        {
                            "optionId": "D",
                            "optionText": "500 read capacity units"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    102,
                "questionText":
                    "A web application is designed to allow new users to create accounts using their email addresses. The  application will store attributes for each user, and is expecting millions of user to sign up. What should the Developer implement to achieve the design goals?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Amazon Cognito user pools "
                        },
                        {
                            "optionId": "B",
                            "optionText": "AWS Mobile Hub user data storage"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon Cognito Sync"
                        },
                        {
                            "optionId": "D",
                            "optionText": "AWS Mobile Hub cloud logic"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    103,
                "questionText":
                    "A company needs a new REST API that can return information about the contents of an Amazon S3 bucket, such as a count of the objects stored in it. The company has decided that the new API should be written as a microservice using AWS Lambda and Amazon API Gateway. How should the Developer ensure that the microservice has the necessary access to the Amazon S3 bucket, while adhering to security best practices?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Create an IAM user that has permissions to access the Amazon S3 bucket, and store the IAM user credentials in the Lambda function source code. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create an IAM role that has permissions to access the Amazon S3 bucket and assign it to the Lambda function as its execution role."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Create an Amazon S3 bucket policy that specifies the Lambda service as its principal and assign it to the Amazon S3 bucket."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create an IAM role, attach the AmazonS3FullAccess managed policy to it, and assign the role to the Lambda function as its execution role."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    104,
                "questionText":
                    "An application is running on an EC2 instance. The Developer wants to store an application metric in Amazon CloudWatch. What is the best practice for implementing this requirement?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use the PUT Object API call to send data to an S3 bucket. Use an event notification to invoke a Lambda function to publish data to CloudWatch. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Publish the metric data to an Amazon Kinesis Stream using a PutRecord API call. Subscribe a Lambda function that publishes data to CloudWatch."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use the CloudWatch PutMetricData API call to submit a custom metric to CloudWatch. Provide the required credentials to enable the API call."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use the CloudWatch PutMetricData API call to submit a custom metric to CloudWatch. Launch the EC2 instance with the required IAM role to enable the API call."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    105,
                "questionText":
                    "Queries to an Amazon DynamoDB table are consuming a large amount of read capacity. The table has a significant number of large attributes. The application does not need all of the attribute data. How can DynamoDB costs be minimized while maximizing application performance?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Batch all the writes, and perform the write operations when no or few reads are being performed. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create a global secondary index with a minimum set of projected attributes."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Implement exponential backoffs in the application."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Load balance the reads to the table using an Application Load Balancer."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    106,
                "questionText":
                    "AWS CodeBuild builds code for an application, creates the Docker image, pushes the image to Amazon Elastic Container Registry (Amazon ECR), and tags the image with a unique identifier.  If the Developers already have AWS CLI configured on their workstations, how can the Docker images be pulled to the workstations?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Run the following: docker pull REPOSITORY URI : TAG "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Run the output of the following: aws ecr get-login and then run: docker pull REPOSITORY URI : TAG"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Run the following: aws ecr get-login and then run: docker pull REPOSITORY URI : TAG"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Run the output of the following: aws ecr get-download-url-for-layer and then run: docker pull REPOSITORY URI : TAG"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    107,
                "questionText":
                    "A company caches session information for a web application in an Amazon DynamoDB table. The company wants an automated way to delete old items from the table. What is the simplest way to do this?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Write a script that deletes old records; schedule the scripts as a cron job on an Amazon EC2 instance. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Add an attribute with the expiration time; enable the Time To Live feature based on that attribute."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Each day, create a new table to hold session data; delete the previous day’s table."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Add an attribute with the expiration time; name the attribute ItemExpiration."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    108,
                "questionText":
                    "An application is expected to process many files. Each file takes four minutes to process each AWS Lambda invocation. The Lambda function does not return any important data. What is the fastest way to process all the files?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "First split the files to make them smaller, then process with synchronous RequestResponse Lambda invocations. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Make synchronous RequestResponse Lambda invocations and process the files one by one."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Make asynchronous Event Lambda invocations and process the files in parallel."
                        },
                        {
                            "optionId": "D",
                            "optionText": "First join all the files, then process it all at once with an asynchronous Event Lambda invocation."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    109,
                "questionText":
                    "The upload of a 15 GB object to Amazon S3 fails. The error message reads: “Your proposed upload exceeds the maximum allowed object size.” What technique will allow the Developer to upload this object?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Upload the object using the multi-part upload API. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Upload the object over an AWS Direct Connect connection."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Contact AWS Support to increase the object size limit."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Upload the object to another AWS region."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    110,
                "questionText":
                    "A company has an AWS CloudFormation template that is stored as a single file. The template is able to launch and create a full infrastructure stack.  Which best practice would increase the maintainability of the template?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use nested stacks for common template patterns. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Embed credentials to prevent typos."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Remove mappings to decrease the number of variables."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use AWS::Include to reference publicly-hosted template files."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    111,
                "questionText":
                    "A Developer wants to encrypt new objects that are being uploaded to an Amazon S3 bucket by an application. There must be an audit trail of who has used the key during this process. There should be no change to the performance of the application. Which type of encryption meets these requirements?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Server-side encryption using S3-managed keys "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Server-side encryption with AWS KMS-managed keys"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Client-side encryption with a client-side symmetric master key"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Client-side encryption with AWS KMS-managed keys"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    112,
                "questionText":
                    "An on-premises application makes repeated calls to store files to Amazon S3. As usage of the application has increased, “LimitExceeded” errors are being logged. What should be changed to fix this error?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Implement exponential backoffs in the application. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Load balance the application to multiple servers."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Move the application to Amazon EC2."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Add a one second delay to each API call."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    113,
                "questionText":
                    "An organization is storing large files in Amazon S3, and is writing a web application to display meta-data about the files to end-users. Based on the metadata a user selects an object to download. The organization needs a mechanism to index the files and provide single-digit millisecond latency retrieval for the metadata. What AWS service should be used to accomplish this?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Amazon DynamoDB "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Amazon EC2"
                        },
                        {
                            "optionId": "C",
                            "optionText": "AWS Lambda"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Amazon RDS"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    114,
                "questionText":
                    "While developing an application that runs on Amazon EC2 in an Amazon VPC, a Developer identifies the need for centralized storage of application-level logs. Which AWS service can be used to securely store these logs?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Amazon EC2 VPC Flow Logs "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Amazon CloudWatch Logs"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon CloudSearch"
                        },
                        {
                            "optionId": "D",
                            "optionText": "AWS CloudTrail"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    115,
                "questionText":
                    " A stock market monitoring application uses Amazon Kinesis for data ingestion. During simulated tests of peak data rates, the Kinesis stream cannot keep up with the incoming data. What step will allow Kinesis to accommodate the traffic during peak hours?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Install the Kinesis Producer Library (KPL) for ingesting data into the stream. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Reduce the data retention period to allow for more data ingestion using DecreaseStreamRetentionPeriod."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Increase the shard count of the stream using UpdateShardCount."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Ingest multiple records into the stream in a single call using PutRecords."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    116,
                "questionText":
                    "Where can PortMapping be defined when launching containers in Amazon ECS?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Security groups "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Amazon Elastic Container Registry (Amazon ECR)"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Container agent"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Task definition"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    117,
                "questionText":
                    "An application uses Amazon Kinesis Data Streams to ingest and process large streams of data records in real time. Amazon EC2 instances consume and process the data from the shards of the Kinesis data stream by using Amazon Kinesis Client Library (KCL). The application handles the failure scenarios and does not require standby workers. The application reports that a specific shard is receiving more data than expected. To adapt to the changes in the rate of data flow, the “hot” shard is resharded. Assuming that the initial number of shards in the Kinesis data stream is 4, and after resharding the number of shards increased to 6, what is the maximum number of EC2 instances that can be deployed to process data from all the shards?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "12 "
                        },
                        {
                            "optionId": "B",
                            "optionText": "6"
                        },
                        {
                            "optionId": "C",
                            "optionText": "4"
                        },
                        {
                            "optionId": "D",
                            "optionText": "1"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    118,
                "questionText":
                    "A Development team is working on a case management solution that allows medical claims to be processed and reviewed. Users log in to provide information related to their medical and financial situations. As part of the application, sensitive documents such as medical records, medical imaging, bank statements, and receipts are uploaded to Amazon S3. All documents must be securely transmitted and stored. All access to the documents must be recorded for auditing. What is the MOST secure approach?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use S3 default encryption using Advanced Encryption Standard-256 (AES-256) on the destination bucket. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use Amazon Cognito for authorization and authentication to ensure the security of the application and documents."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use AWS Lambda to encrypt and decrypt objects as they are placed into the S3 bucket."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use client-side encryption/decryption with Amazon S3 and AWS KMS."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    119,
                "questionText":
                    "A company has an internet-facing application that uses Web Identity Federation to obtain a temporary credential from AWS Security Token Service (AWS STS). The app then uses the token to access AWS  services. Review the following response: Based on the response displayed, what permissions are associated with the call from the application?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Permissions associated with the role AROACLKWSDQRAOEXAMPLE:app1 "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Permissions associated with the default role used when the AWS service was built"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Permission associated with the IAM principal that owns the AccessKeyID ASgeIAIOSFODNN7EXAMPLE"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Permissions associated with the account that owns the AWS service"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    120,
                "questionText":
                    "A Developer is using AWS CLI, but when running list commands on a large number of resources, it is timing out. What can be done to avoid this time-out?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use pagination "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use shorthand syntax"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use parameter values"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use quoting strings"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    121,
                "questionText":
                    "What does an Amazon SQS delay queue accomplish?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Messages are hidden for a configurable amount of time when they are first added to the queue. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Messages are hidden for a configurable amount of time after they are consumed from the queue."
                        },
                        {
                            "optionId": "C",
                            "optionText": "The consumer can poll the queue for a configurable amount of time before retrieving a message."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Message cannot be deleted for a configurable amount of time after they are consumed from the queue."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    122,
                "questionText":
                    "A company has multiple Developers located across the globe who are updating code incrementally for a development project. When Developers upload code concurrently, internet connectivity is slow, and it is  taking a long time to upload code for deployment in AWS Elastic Beanstalk. Which step will result in minimized upload and deployment time with the LEAST amount of administrative effort?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Allow the Developers to upload the code to an Amazon S3 bucket, and deploy it directly to Elastic Beanstalk. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Allow the Developers to upload the code to a central FTP server to deploy the application to Elastic Beanstalk."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Create an AWS CodeCommit repository, allow the Developers to commit code to it, and then directly deploy the code to Elastic Beanstalk."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create a code repository on an Amazon EC2 instance so that all Developers can update the code, and deploy the application from the instance to Elastic Beanstalk."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    123,
                "questionText":
                    "A company recently migrated its web, application and NoSQL database tiers to AWS. The company is using Auto Scaling to scale the web and application tiers. More than 95 percent of the Amazon DynamoDB requests are repeated read-requests. How can the DynamoDB NoSQL tier be scaled up to cache these repeated requests?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Amazon EMR "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Amazon DynamoDB Accelerator"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon SQS"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Amazon CloudFront"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    124,
                "questionText":
                    "A company is building an application to track athlete performance using an Amazon DynamoDB table. Each item in the table is identified by a partition key (user_id) and a sort key (sport_name). The table design is shown below: (Note: Not all table attributes are shown) A Developer is asked to write a leaderboard application to display the top performers (user_id) based on the score for each sport_name. What process will allow the Developer to extract results MOST efficiently from the DynamoDB table?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use a DynamoDB query operation with the key attributes of user_id and sport_name and order the results based on the score attribute. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create a global secondary index with a partition key of sport_name and a sort key of score, and get the results"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use a DynamoDB scan operation to retrieve scores and user_id based on sport_name, and order the results based on the score attribute."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create a local secondary index with a primary key of sport_name and a sort key of score and get the results based on the score attribute."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    125,
                "questionText":
                    "A Developer is creating a mobile application that will not require users to log in.  What is the MOST efficient method to grant users access to AWS resources?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use an identity provider to securely authenticate with the application. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create an AWS Lambda function to create an IAM user when a user accesses the application."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Create credentials using AWS KMS and apply these credentials to users when using the application."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use Amazon Cognito to associate unauthenticated users with an IAM role that has limited access to resources."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    126,
                "questionText":
                    "An application running on Amazon EC2 instances must access objects within an Amazon S3 bucket that are encrypted using server-side encryption using AWS KMS encryption keys (SSE-KMS). The application must have access to the customer master key (CMK) to decrypt the objects. Which combination of steps will grant the application access? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Write an S3 bucket policy that grants the bucket access to the key. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Grant access to the key in the IAM EC2 role attached to the application’s EC2 instances."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Write a key policy that enables IAM policies to grant access to the key."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Grant access to the key in the S3 bucket’s ACL "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Create a Systems Manager parameter that exposes the KMS key to the EC2 instances."
                        }
                    ],
                "questionAnswer":
                    "BC"
            }
            ,
            {
                "questionId":
                    127,
                "questionText":
                    "A company needs a fully-managed source control service that will work in AWS. The service must ensure that revision control synchronizes multiple distributed repositories by exchanging sets of changes peer-topeer. All users need to work productively even when not connected to a network. Which source control service should be used?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Subversion "
                        },
                        {
                            "optionId": "B",
                            "optionText": "AWS CodeBuild"
                        },
                        {
                            "optionId": "C",
                            "optionText": "AWS CodeCommit"
                        },
                        {
                            "optionId": "D",
                            "optionText": "AWS CodeStar"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    128,
                "questionText":
                    "A Developer is writing a serverless application that requires that an AWS Lambda function be invoked every 10 minutes. What is an automated and serverless way to trigger the function?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Deploy an Amazon EC2 instance based on Linux, and edit its /etc/crontab file by adding a command to periodically invoke the Lambda function. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Configure an environment variable named PERIOD for the Lambda function. Set the value to 600."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Create an Amazon CloudWatch Events rule that triggers on a regular schedule to invoke the Lambda function."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create an Amazon SNS topic that has a subscription to the Lambda function with a 600-second timer."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    129,
                "questionText":
                    "A Developer is writing an imaging micro service on AWS Lambda. The service is dependent on several libraries that are not available in the Lambda runtime environment. Which strategy should the Developer follow to create the Lambda deployment package?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Create a ZIP file with the source code and all dependent libraries. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create a ZIP file with the source code and a script that installs the dependent libraries at runtime. "
                        },
                        {
                            "optionId": "C",
                            "optionText": "Create a ZIP file with the source code. Stage the dependent libraries on an Amazon S3 bucket indicated by the Lambda environment variable LD_LIBRARY_PATH"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create a ZIP file with the source code and a buildspec.yaml file that installs the dependent libraries on AWS Lambda."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    130,
                "questionText":
                    "A Developer is designing a fault-tolerant environment where client sessions will be saved. How can the Developer ensure that no sessions are lost if an Amazon EC2 instance fails?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use sticky sessions with an Elastic Load Balancer target group. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use Amazon SQS to save session data."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use Amazon DynamoDB to perform scalable session handling."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use Elastic Load Balancer connection draining to stop sending requests to failing instances."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    131,
                "questionText":
                    "In a move toward using microservices, a company’s Management team has asked all Development teams to build their services so that API requests depend only on that service’s data store. One team is building a Payments service which has its own database; the service needs data that originates in the Accounts database. Both are using Amazon DynamoDB. What approach will result in the simplest, decoupled, and reliable method to get near-real time updates from the Accounts database?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use Amazon Glue to perform frequent ETL updates from the Accounts database to the Payments database. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use Amazon ElastiCache in Payments, with the cache updated by triggers in the Accounts database."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use Amazon Kinesis Data Firehose to deliver all changes from the Accounts database to the Payments database."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use Amazon DynamoDB Streams to deliver all changes from the Accounts database to the Payments database."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    132,
                "questionText":
                    "How should custom libraries be utilized in AWS Lambda?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Host the library on Amazon S3 and reference to it from the Lambda function. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Install the library locally and upload a ZIP file of the Lambda function."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Import the necessary Lambda blueprint when creating the function."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Modify the function runtime to include the necessary library."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    133,
                "questionText":
                    "A company needs to secure its existing website running behind an Elastic Load Balancer. The website’s Amazon EC2 instances are CPU-constrained. What should be done to secure the website while not increasing the CPU load on the EC2 web servers? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Configure an Elastic Load Balancer with SSL pass-through. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Configure SSL certificates on an Elastic Load Balancer."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Configure an Elastic Load Balancer with a Loadable Storage System."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Install SSL certificates on the EC2 instances. "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Configure an Elastic Load Balancer with SSL termination."
                        }
                    ],
                "questionAnswer":
                    "BE"
            }
            ,
            {
                "questionId":
                    134,
                "questionText":
                    " An AWS Lambda function generates a 3MB JSON file and then uploads it to an Amazon S3 bucket daily. The file contains sensitive information, so the Developer must ensure that it is encrypted before uploading to the bucket. Which of the following modifications should the Developer make to ensure that the data is encrypted before uploading it to the bucket?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use the default AWS KMS customer master key for S3 in the Lambda function code. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use the S3 managed key and call the GenerateDataKey API to encrypt the file."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use the GenerateDateKey API, then use that data key to encrypt the file in the Lambda function code."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use a custom KMS customer master key created for S3 in the Lambda function code."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    135,
                "questionText":
                    "A Developer wants to find a list of items in a global secondary index from an Amazon DynamoDB table. Which DynamoDB API call can the Developer use in order to consume the LEAST number of read capacity units?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Scan operation using eventually-consistent reads "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Query operation using strongly-consistent reads"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Query operation using eventually-consistent reads"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Scan operation using strongly-consistent reads"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    136,
                "questionText":
                    "A Developer has published an update to an application that is served to a global user base using Amazon CloudFront. After deploying the application, users are not able to see the updated changes. How can the Developer resolve this issue?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Remove the origin from the CloudFront configuration and add it again. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Disable forwarding of query strings and request headers from the CloudFront distribution configuration."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Invalidate all the application objects from the edge caches."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Disable the CloudFront distribution and enable it again to update all the edge locations."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    137,
                "questionText":
                    "A Developer must deploy a new AWS Lambda function using an AWS CloudFormation template. Which procedures will deploy a Lambda function? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Upload the code to an AWS CodeCommit repository, then add a reference to it in an AWS::Lambda::Function resource in the template. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create an AWS::Lambda::Function resource in the template, then write the code directly inside the CloudFormation template."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Upload a .ZIP file containing the function code to Amazon S3, then add a reference to it in an AWS::Lambda::Function resource in the template."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Upload a .ZIP file to AWS CloudFormation containing the function code, then add a reference to it in an AWS::Lambda::Function resource in the template. "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Upload the function code to a private Git repository, then add a reference to it in an AWS::Lambda::Function resource in the template."
                        }
                    ],
                "questionAnswer":
                    "BC"
            }
            ,
            {
                "questionId":
                    138,
                "questionText":
                    "A Developer wants to enable AWS X-Ray for a secure application that runs in an Amazon ECS environment. What combination of steps will enable X-Ray? (Choose three.) ",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Create a Docker image that runs the X-Ray daemon. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Add instrumentation to the application code for X-Ray."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Install the X-Ray daemon on the underlying EC2 instance."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Configure and use an IAM EC2 instance role. "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Register the application with X-Ray. "
                        },
                        {
                            "optionId": "F",
                            "optionText": "Configure and use an IAM role for tasks."
                        }
                    ],
                "questionAnswer":
                    "ABF"
            }
            ,
            {
                "questionId":
                    139,
                "questionText":
                    "A Developer is designing a new application that uses Amazon S3. To satisfy compliance requirements, the Developer must encrypt the data at rest. How can the Developer accomplish this?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use s3:x-amz-acl as a condition in the S3 bucket policy. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use Amazon RDS with default encryption."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use aws:SecureTransport as a condition in the S3 bucket policy."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Turn on S3 default encryption for the S3 bucket."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    140,
                "questionText":
                    "An AWS Elastic Beanstalk application needs to be deployed in multiple regions and requires a different Amazon Machine Image (AMI) in each region. Which AWS CloudFormation template key can be used to specify the correct AMI for each region?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Parameters "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Outputs"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Mappings"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Resources"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    141,
                "questionText":
                    "A Developer has been asked to make changes to the source code of an AWS Lambda function. The function is managed using an AWS CloudFormation template. The template is configured to load the source code from an Amazon S3 bucket. The Developer manually created a .ZIP file deployment package containing the changes and put the file into the correct location on Amazon S3. When the function is invoked, the code changes have not been applied. What step is required to update the function with the changes?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Delete the .ZIP file on S3, and re-upload by using a different object key name. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Update the CloudFormation stack with the correct values for the function code properties S3Bucket, S3Key, or S3ObjectVersion."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Ensure that the function source code is base64-encoded before uploading the deployment package to S3."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Modify the execution role of the Lambda function to allow S3 access permission to the deployment package .ZIP file."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    142,
                "questionText":
                    "A Developer needs to design an application running on AWS that will be used to consume Amazon SQS messages that range from 1KB up to 1GB in size. How should the Amazon SQS messages be managed?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use Amazon S3 and the Amazon SQS CLI. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use Amazon S3 and the Amazon SQS Extended Client Library for Java. "
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use Amazon EBS and the Amazon SQS CLI."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use Amazon EFS and the Amazon SQS CLI."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    143,
                "questionText":
                    "A company is developing an application that will run on several Amazon EC2 instances in an Auto Scaling group and can access a database running on Amazon EC2. The application needs to store secrets required to connect to the database. The application must allow for periodic secret rotation, and there should be no changes to the application when a secret changes. What is the SAFEST way to meet these requirements?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Associate an IAM role to the EC2 instance where the application is running with permission to access the database. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use AWS Systems Manager Parameter Store with the SecureString data type to store secrets."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Configure the application to store secrets in Amazon S3 object metadata."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Hard code the database secrets in the application code itself."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    144,
                "questionText":
                    "A Developer writes an AWS Lambda function and uploads the code in a .ZIP file to Amazon S3. The Developer makes changes to the code and uploads a new .ZIP file to Amazon S3. However, Lambda executes the earlier code. How can the Developer fix this in the LEAST disruptive way?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Create another Lambda function and specify the new .ZIP file. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Call the update-function-code API."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Remove the earlier .ZIP file first, then add the new .ZIP file."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Call the create-alias API."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    145,
                "questionText":
                    "An AWS Lambda function must read data from an Amazon RDS MySQL database in a VPC and also reach a public endpoint over the internet to get additional data. Which steps must be taken to allow the function to access both the RDS resource and the public endpoint? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Modify the default configuration for the Lambda function to associate it with an Amazon VPC private subnet. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Modify the default network access control list to allow outbound traffic."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Add a NAT Gateway to the VPC."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Modify the default configuration of the Lambda function to associate it with a VPC public subnet. "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Add an environmental variable to the Lambda function to allow outbound internet access."
                        }
                    ],
                "questionAnswer":
                    "AC"
            }
            ,
            {
                "questionId":
                    146,
                "questionText":
                    "A Developer must build an application that uses Amazon DynamoDB. The requirements state that the items being stored in the DynamoDB table will be 7KB in size and that reads must be strongly consistent. The maximum read rate is 3 items per second, and the maximum write rate is 10 items per second. How should the Developer size the DynamoDB table to meet these requirements?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Read: 3 read capacity units Write: 70 write capacity units "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Read: 6 read capacity units Write: 70 write capacity units"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Read: 6 read capacity units  Write: 10 write capacity units"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Read: 3 read capacity units Write: 10 write capacity units"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    147,
                "questionText":
                    "A Developer is creating an AWS Lambda function to process a stream of data from an Amazon Kinesis Data Stream. When the Lambda function parses the data and encounters a missing field, it exits the function with an error. The function is generating duplicate records from the Kinesis stream. When the Developer looks at the stream output without the Lambda function, there are no duplicate records. What is the reason for the duplicates?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "The Lambda function did not advance the Kinesis stream pointer to the next record after the error. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "The Lambda event source used asynchronous invocation, resulting in duplicate records."
                        },
                        {
                            "optionId": "C",
                            "optionText": "The Lambda function did not handle the error, and the Lambda service attempted to reprocess the data."
                        },
                        {
                            "optionId": "D",
                            "optionText": "The Lambda function is not keeping up with the amount of data coming from the stream."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    148,
                "questionText":
                    "A company maintains an application responsible for processing several thousand external callbacks each day. The company’s System administrators want to know how many callbacks are being received on a rolling basis, and they want this data available for 10 days. The company also wants the ability to issue automated alerts if the number of callbacks exceeds the defined thresholds. What is the MOST cost-effective way to address the need to track and alert on these statistics?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Push callback data to an Amazon RDS database that can be queried to show historical data and to alert on exceeded thresholds. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Push callback data to AWS X-Ray and use AWS Lambda to query, display, and alert on exceeded thresholds."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Push callback data to Amazon Kinesis Data Streams and invoke an AWS Lambda function that stores data in Amazon DynamoDB and sends the required alerts."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Push callback data to Amazon CloudWatch as a custom metric and use the CloudWatch alerting mechanisms to alert System Administrators."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    149,
                "questionText":
                    "A company has a website that is developed in PHP and WordPress and is launched using AWS Elastic Beanstalk. There is a new version of the website that needs to be deployed in the Elastic Beanstalk environment. The company cannot tolerate having the website offline if an update fails. Deployments must have minimal impact and rollback as soon as possible. What deployment method should be used?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "All at once "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Rolling"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Snapshots"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Immutable"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    150,
                "questionText":
                    "A company has a multi-tiered web application on AWS. During a recent spike in traffic, one of the primary relational databases on Amazon RDS could not serve all the traffic. Some read queries for repeatedly accessed items failed, so users received error messages. What can be done to minimize the impact on database read queries MOST efficiently during future traffic spikes? ",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use Amazon S3 to cache database query results. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use Amazon RDS as a custom origin for Amazon CloudFront."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use local storage and memory on Amazon EC2 instances to cache data."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use Amazon ElastiCache in front of the primary database to cache data."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    151,
                "questionText":
                    "A Development team currently supports an application that uses an in-memory store to save accumulated game results. Individual results are stored in a database. As part of migrating to AWS, the team needs to use automatic scaling. The team knows this will yield inconsistent results. Where should the team store these accumulated game results to BEST allow for consistent results without impacting performance?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Amazon S3 "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Amazon RDS"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon ElastiCache"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Amazon Kinesis"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    152,
                "questionText":
                    "In a multi-container Docker environment in AWS Elastic Beanstalk, what is required to configure container instances in the environment?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "An Amazon ECS task definition "
                        },
                        {
                            "optionId": "B",
                            "optionText": "An Amazon ECS cluster"
                        },
                        {
                            "optionId": "C",
                            "optionText": "A Dockerfile in an application package"
                        },
                        {
                            "optionId": "D",
                            "optionText": "A CLI for Elastic Beanstalk"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    153,
                "questionText":
                    "An application that runs on an Amazon EC2 instance needs to access and make API calls to multiple AWS services. What is the MOST secure way to provide access to the AWS services with MINIMAL management overhead?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use AWS KMS to store and retrieve credentials. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use EC2 instance profiles."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use AWS root user to make requests to the application."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Store and retrieve credentials from AWS CodeCommit."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    154,
                "questionText":
                    "A company is creating an application that will require users to access AWS services and allow them to reset their own passwords. Which of the following would allow the company to manage users and authorization while allowing users to reset their own passwords?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Amazon Cognito identify pools and AWS STS "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Amazon Cognito identity pools and AWS IAM"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon Cognito user pools and AWS KMS"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Amazon Cognito user pools and identity pools"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    155,
                "questionText":
                    "A company has three different environments: Development, QA, and Production. The company wants to  deploy its code first in the Development environment, then QA, and then Production. Which AWS service can be used to meet this requirement?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use AWS CodeCommit to create multiple repositories to deploy the application. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use AWS CodeBuild to create, configure, and deploy multiple build application projects."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use AWS Data Pipeline to create multiple data pipeline provisions to deploy the application."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use AWS CodeDeploy to create multiple deployment groups."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    156,
                "questionText":
                    "A company uses Amazon DynamoDB for managing and tracking orders. The DynamoDB table is partitioned based on the order date. The company receives a huge increase in orders during a sales event, causing DynamoDB writes to throttle, and the consumed throughput is far below the provisioned throughput. According to AWS best practices, how can this issue be resolved with MINIMAL costs?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Create a new DynamoDB table for every order date. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Increase the read and write capacity units of the DynamoDB table."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Add a random number suffix to the partition key values."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Add a global secondary index to the DynamoDB table."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    157,
                "questionText":
                    "A company is providing services to many downstream consumers. Each consumer may connect to one or more services. This has resulted in a complex architecture that is difficult to manage and does not scale well. The company needs a single interface to manage these services to consumers. Which AWS service should be used to refactor this architecture?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "AWS Lambda "
                        },
                        {
                            "optionId": "B",
                            "optionText": "AWS X-Ray"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon SQS"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Amazon API Gateway"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    158,
                "questionText":
                    "A Developer is creating a serverless website with content that includes HTML files, images, videos, and JavaScript (client-side scripts). Which combination of services should the Developer use to create the website?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Amazon S3 and Amazon CloudFront "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Amazon EC2 and Amazon ElastiCache"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon ECS and Redis"
                        },
                        {
                            "optionId": "D",
                            "optionText": "AWS Lambda and Amazon API Gateway"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    159,
                "questionText":
                    "A Development team has pushed out 10 applications running on several Amazon EC2 instances. The Operations team is asking for a graphical representation of one key performance metric for each application. These metrics should be available on one screen for easy monitoring. Which steps should the Developer take to accomplish this using Amazon CloudWatch?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Create a custom namespace with a unique metric name for each application. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create a custom dimension with a unique metric name for each application."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Create a custom event with a unique metric name for each application. "
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create a custom alarm with a unique metric name for each application."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    160,
                "questionText":
                    "A Developer wants access to make the log data of an application running on an EC2 instance available to systems administrators. Which of the following enables monitoring of this metric in Amazon CloudWatch?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Retrieve the log data from CloudWatch using the GetMetricData API call. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Retrieve the log data from AWS CloudTrail using the LookupEvents API call."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Launch a new EC2 instance, configure Amazon CloudWatch Events, and then install the application."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Install the Amazon CloudWatch Logs agent on the EC2 instance that the application is running on."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    161,
                "questionText":
                    "A nightly batch job loads 1 million new records into a DynamoDB table. The records are only needed for one hour, and the table needs to be empty by the next night’s batch job. Which is the MOST efficient and cost-effective method to provide an empty table?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use DeleteItem using a ConditionExpression. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use BatchWriteItem to empty all of the rows."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Write a recursive function that scans and calls out DeleteItem."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create and then delete the table after the task has completed."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    162,
                "questionText":
                    "A company has an application that logs all information to Amazon S3. Whenever there is a new log file, an AWS Lambda function is invoked to process the log files. The code works, gathering all of the necessary information. However, when checking the Lambda function logs, duplicate entries with the same request ID are found. What is causing the duplicate entries?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "The S3 bucket name was specified incorrectly. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "The Lambda function failed, and the Lambda service retried the invocation with a delay."
                        },
                        {
                            "optionId": "C",
                            "optionText": "There was an S3 outage, which caused duplicate entries of the same log file."
                        },
                        {
                            "optionId": "D",
                            "optionText": "The application stopped intermittently and then resumed."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    163,
                "questionText":
                    "A company maintains a REST service using Amazon API Gateway and the API Gateway native API key validation. The company recently launched a new registration page, which allows users to sign up for the service. The registration page creates a new API key using CreateApiKey and sends the new key to the user. When the user attempts to call the API using this key, the user receives a 403 Forbidden error. Existing users are unaffected and can still call the API. What code updates will grant these new users access to the API?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "The createDeployment method must be called so the API can be redeployed to include the newly created API key. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "The updateAuthorizer method must be called to update the API’s authorizer to include the newly created API key."
                        },
                        {
                            "optionId": "C",
                            "optionText": "The importApiKeys method must be called to import all newly created API keys into the current stage of the API."
                        },
                        {
                            "optionId": "D",
                            "optionText": "The createUsagePlanKey method must be called to associate the newly created API key with the correct usage plan. "
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    164,
                "questionText":
                    "A Developer is writing a mobile application that allows users to view images from an S3 bucket. The users must be able to log in with their Amazon login, as well as Facebook® and/or Google® accounts. How can the Developer provide this authentication functionality?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use Amazon Cognito with web identity federation. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use Amazon Cognito with SAML-based identity federation."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use AWS IAM Access/Secret keys in the application code to allow Get* on the S3 bucket."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use AWS STS AssumeRole in the application code and assume a role with Get* permissions on the S3 bucket."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    165,
                "questionText":
                    "A Developer has created a Lambda function and is finding that the function is taking longer to complete than expected. After some debugging, the Developer has discovered that increasing compute capacity would improve performance. How can the Developer increase the Lambda compute resources?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Run on a larger instance size with more compute capacity. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Increase the maximum execution time."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Specify a larger compute capacity when calling the Lambda function."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Increase the allocated memory for the Lambda function."
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    166,
                "questionText":
                    "An e-commerce site allows returning users to log in to display customized web pages. The workflow is shown in the image below: An application is running on EC2 instances. Amazon RDS is used for the database that stores user  accounts and preferences. The website freezes or is slow to load while waiting for the login step to complete. The remaining components of the site are well-optimized. Which of the following techniques will resolve this issue? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Implement the user login page as an asynchronous Lambda function. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use Amazon ElastiCache for MemCached to cache user data."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use an Amazon Application Load Balancer to load balance the traffic to the website."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Call the database asynchronously so the code can continue executing. "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Batch login requests from hundreds of users together as a single read request to the database."
                        }
                    ],
                "questionAnswer":
                    "BD"
            }
            ,
            {
                "questionId":
                    167,
                "questionText":
                    "A Developer is building a mobile application and needs any update to user profile data to be pushed to all devices accessing the specific identity. The Developer does not want to manage a back end to maintain the user profile data. What is the MOST efficient way for the Developer to achieve these requirements using Amazon Cognito?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use Cognito federated identities. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use a Cognito user pool."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use Cognito Sync."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use Cognito events."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    168,
                "questionText":
                    "A company is migrating a single-server, on-premises web application to AWS. The company intends to use multiple servers behind an Elastic Load Balancer (ELB) to balance the load, and will also store session data in memory on the web server. The company does not want to lose that session data if a server fails or goes offline, and it wants to minimize user’s downtime. Where should the company move session data to MOST effectively reduce downtime and make users’ session data more fault tolerant?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "An Amazon ElastiCache for Redis cluster "
                        },
                        {
                            "optionId": "B",
                            "optionText": "A second Amazon EBS volume"
                        },
                        {
                            "optionId": "C",
                            "optionText": "The web server’s primary disk"
                        },
                        {
                            "optionId": "D",
                            "optionText": "An Amazon EC2 instance dedicated to session data"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    169,
                "questionText":
                    "A Developer created configuration specifications for an AWS Elastic Beanstalk application in a file named healthcheckurl.yaml in the .ebextensions/directory of their application source bundle. The file contains the following: After the application launches, the health check is not being run on the correct path, even though it is valid. What can be done to correct this configuration file?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Convert the file to JSON format. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Rename the file to a .config extension."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Change the configuration section from options_settings to resources. "
                        },
                        {
                            "optionId": "D",
                            "optionText": "Change the namespace of the option settings to a custom namespace."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    170,
                "questionText":
                    "A Developer is making changes to a custom application that is currently using AWS Elastic Beanstalk. After the Developer completes the changes, what solutions will update the Elastic Beanstalk environment with the new application version? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Package the application code into a .zip file, and upload, then deploy the packaged application from the AWS Management Console "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Package the application code into a .tar file, create a new application version from the AWS Management Console, then update the environment by using AWS CLI"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Package the application code into a .tar file, and upload and deploy the packaged application from the AWS Management Console"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Package the application code into a .zip file, create a new application version from the packaged application by using AWS CLI, then update the environment by using AWS CLI "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Package the application code into a .zip file, create a new application version from the AWS Management Console, then rebuild the environment by using AWS CLI"
                        }
                    ],
                "questionAnswer":
                    "AD"
            }
            ,
            {
                "questionId":
                    171,
                "questionText":
                    "To include objects defined by the AWS Serverless Application Model (SAM) in an AWS CloudFormation template, in addition to Resources, what section MUST be included in the document root?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Conditions "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Globals"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Transform"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Properties"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    172,
                "questionText":
                    "A company is using Amazon RDS MySQL instances for its application database tier and Apache Tomcat servers for its web tier. Most of the database queries from web applications are repeated read requests. Use of which AWS service would increase in performance by adding in-memory store for repeated read queries?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Amazon RDS Multi-AZ "
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
                            "optionText": "Amazon RDS read replica"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    173,
                "questionText":
                    "A Developer is investigating an issue whereby certain requests are passing through an Amazon API Gateway endpoint /MyAPI, but the requests do not reach the AWS Lambda function backing /MyAPI. The Developer found that a second Lambda function sometimes runs at maximum concurrency allowed for the given AWS account. How can the Developer address this issue?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Manually reduce the concurrent execution limit at the account level "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Add another API Gateway stage for /MyAPI, and shard the requests"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Configure the second Lambda function’s concurrency execution limit"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Reduce the throttling limits in the API Gateway /MyAPI endpoint"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    174,
                "questionText":
                    "A Developer must analyze performance issues with production-distributed applications written as AWS  Lambda functions. These distributed Lambda applications invoke other components that make up the applications. How should the Developer identify and troubleshoot the root cause of the performance issues in production?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Add logging statements to the Lambda functions, then use Amazon CloudWatch to view the logs. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use AWS CloudTrail and then examine the logs."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use AWS X-Ray, then examine the segments and errors."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Run Amazon Inspector agents and then analyze performance."
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    175,
                "questionText":
                    "A Developer wants to debug an application by searching and filtering log data. The application logs are stored in Amazon CloudWatch Logs. The Developer creates a new metric filter to count exceptions in the application logs. However, no results are returned from the logs. What is the reason that no filtered results are being returned?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "A setup of the Amazon CloudWatch interface VPC endpoint is required for filtering the CloudWatch Logs in the VPC "
                        },
                        {
                            "optionId": "B",
                            "optionText": "CloudWatch Logs only publishes metric data for events that happen after the filter is created"
                        },
                        {
                            "optionId": "C",
                            "optionText": "The log group for CloudWatch Logs should be first streamed to Amazon Elasticsearch Service before metric filtering returns the results"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Metric data points for logs groups can be filtered only after they are exported to an Amazon S3 bucket"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    176,
                "questionText":
                    "An e-commerce web application that shares session state on-premises is being migrated to AWS. The application must be fault tolerant, natively highly scalable, and any service interruption should not affect the user experience. What is the best option to store the session state?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Store the session state in Amazon ElastiCache "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Store the session state in Amazon CloudFront"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Store the session state in Amazon S3"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Enable session stickiness using elastic load balancers"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    177,
                "questionText":
                    "A Developer is creating a template that uses AWS CloudFormation to deploy an application. This application is serverless and uses Amazon API Gateway, Amazon DynamoDB, and AWS Lambda. Which tool should the Developer use to define simplified syntax for expressing serverless resources?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "CloudFormation serverless intrinsic functions "
                        },
                        {
                            "optionId": "B",
                            "optionText": "AWS serverless express"
                        },
                        {
                            "optionId": "C",
                            "optionText": "An AWS serverless application model"
                        },
                        {
                            "optionId": "D",
                            "optionText": "A CloudFormation serverless plugin"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    178,
                "questionText":
                    "A Developer has a stateful web server on-premises that is being migrated to AWS. The Developer must have greater elasticity in the new design. How should the Developer re-factor the application to make it more elastic? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use pessimistic concurrency on Amazon DynamoDB "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use Amazon CloudFront with an Auto Scaling group "
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use Amazon CloudFront with an AWS Web Application Firewall"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Store session state data in an Amazon DynamoDB table "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Use an ELB with an Auto Scaling group"
                        }
                    ],
                "questionAnswer":
                    "DE"
            }
            ,
            {
                "questionId":
                    179,
                "questionText":
                    "A company needs to distribute firmware updates to its customers around the world. Which service will allow easy and secure control of the access to the downloads at the lowest cost?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use Amazon CloudFront with signed URLs for Amazon S3 "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create a dedicated Amazon CloudFront Distribution for each customer"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use Amazon CloudFront with AWS Lambda@Edge"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use Amazon API Gateway and AWS Lambda to control access to an S3 bucket"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    180,
                "questionText":
                    "A company is running an application built on AWS Lambda functions. One Lambda function has performance issues when it has to download a 50MB file from the Internet in every execution. This function is called multiple times a second. What solution would give the BEST performance increase?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Cache the file in the /tmp directory "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Increase the Lambda maximum execution time"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Put an Elastic Load Balancer in front of the Lambda function"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Cache the file in Amazon S3"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    181,
                "questionText":
                    "An application writes items to an Amazon DynamoDB table. As the application scales to thousands of instances, calls to the DynamoDB API generate occasional ThrottlingException errors. The application is coded in a language incompatible with the AWS SDK. How should the error be handled?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Add exponential backoff to the application logic "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use Amazon SQS as an API message bus"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Pass API calls through Amazon API Gateway"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Send the items to DynamoDB through Amazon Kinesis Data Firehose"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    182,
                "questionText":
                    "An application deployed on AWS Elastic Beanstalk experiences increased error rates during deployments of new application versions, resulting in service degradation for users. The Development team believes that this is because of the reduction in capacity during the deployment steps. The team would like to change the deployment policy configuration of the environment to an option that maintains full capacity during deployment while using the existing instances. Which deployment policy will meet these requirements while using the existing instances?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "All at once "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Rolling"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Rolling with additional batch"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Immutable"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    183,
                "questionText":
                    "A Developer is working on an application that handles 10MB documents that contain highly-sensitive data.  The application will use AWS KMS to perform client-side encryption. What steps must be followed?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Invoke the Encrypt API passing the plaintext data that must be encrypted, then reference the customer managed key ARN in the KeyId parameter "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Invoke the GenerateRandom API to get a data encryption key, then use the data encryption key to encrypt the data"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Invoke the GenerateDataKey API to retrieve the encrypted version of the data encryption key to encrypt the data"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Invoke the GenerateDataKey API to retrieve the plaintext version of the data encryption key to encrypt the data"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    184,
                "questionText":
                    "A Developer is building a web application that uses Amazon API Gateway to expose an AWS Lambda function to process requests from clients. During testing, the Developer notices that the API Gateway times out even though the Lambda function finishes under the set time limit. Which of the following API Gateway metrics in Amazon CloudWatch can help the Developer troubleshoot the issue? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "CacheHitCount "
                        },
                        {
                            "optionId": "B",
                            "optionText": "IntegrationLatency"
                        },
                        {
                            "optionId": "C",
                            "optionText": "CacheMissCount"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Latency "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Count"
                        }
                    ],
                "questionAnswer":
                    "BD"
            }
            ,
            {
                "questionId":
                    185,
                "questionText":
                    "An AWS Lambda function must access an external site by using a regularly rotated user name and password. These items must be kept securely and cannot be stored in the function code. What combination of AWS services can be used to accomplish this? (Choose two.)",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "AWS Certificate Manager (ACM) "
                        },
                        {
                            "optionId": "B",
                            "optionText": "AWS Systems Manager Parameter Store"
                        },
                        {
                            "optionId": "C",
                            "optionText": "AWS Trusted Advisor"
                        },
                        {
                            "optionId": "D",
                            "optionText": "AWS KMS "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Amazon GuardDuty"
                        }
                    ],
                "questionAnswer":
                    "BD"
            }
            ,
            {
                "questionId":
                    186,
                "questionText":
                    "A Developer is trying to deploy a serverless application using AWS CodeDeploy. The application was updated and needs to be redeployed. What file does the Developer need to update to push that change through CodeDeploy?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "dockerrun.aws.json "
                        },
                        {
                            "optionId": "B",
                            "optionText": "buildspec.yml"
                        },
                        {
                            "optionId": "C",
                            "optionText": "appspec.yml"
                        },
                        {
                            "optionId": "D",
                            "optionText": "ebextensions.config"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    187,
                "questionText":
                    "A Developer wants to upload data to Amazon S3 and must encrypt the data in transit. Which of the following solutions will accomplish this task? (Choose two.) ",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Set up hardware VPN tunnels to a VPC and access S3 through a VPC endpoint "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Set up Client-Side Encryption with an AWS KMS-Managed Customer Master Key"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Set up Server-Side Encryption with AWS KMS-Managed Keys"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Transfer the data over an SSL connection "
                        },
                        {
                            "optionId": "E",
                            "optionText": "Set up Server-Side Encryption with S3-Managed Keys"
                        }
                    ],
                "questionAnswer":
                    "BD"
            }
            ,
            {
                "questionId":
                    188,
                "questionText":
                    "A company is running a Docker application on Amazon ECS. The application must scale based on user load in the last 15 seconds. How should a Developer instrument the code so that the requirement can be met?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Create a high-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 30 seconds "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create a high-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 5 seconds"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Create a standard-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 30 seconds"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create a standard-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 5 seconds"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    189,
                "questionText":
                    "A company needs to ingest terabytes of data each hour from thousands of sources that are delivered almost continually throughout the day. The volume of messages generated varies over the course of the day. Messages must be delivered in real time for fraud detection and live operational dashboards. Which approach will meet these requirements?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Send the messages to an Amazon SQS queue, then process the messages by using a fleet of Amazon EC2 instances "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use the Amazon S3 API to write messages to an S3 bucket, then process the messages by using Amazon Redshift"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use AWS Data Pipeline to automate the movement and transformation of data"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use Amazon Kinesis Data Streams with Kinesis Client Library to ingest and deliver messages"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    190,
                "questionText":
                    "A Developer accesses AWS CodeCommit over SSH. The SSH keys configured to access AWS CodeCommit are tied to a user with the following permissions:  The Developer needs to create/delete branches. Which specific IAM permissions need to be added, based on the principle of least privilege?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "“codecommit:CreateBranch” “codecommit:DeleteBranch” "
                        },
                        {
                            "optionId": "B",
                            "optionText": "“codecommit:Put*”"
                        },
                        {
                            "optionId": "C",
                            "optionText": "“codecommit:Update*”"
                        },
                        {
                            "optionId": "D",
                            "optionText": "“codecommit:*”"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    191,
                "questionText":
                    "A Developer has been asked to create an AWS Lambda function that is triggered any time updates are made to items in an Amazon DynamoDB table. The function has been created, and appropriate permissions have been added to the Lambda execution role. Amazon DynamoDB streams have been enabled for the table, but the function is still not being triggered. Which option would enable DynamoDB table updates to trigger the Lambda function?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Change the StreamViewType parameter value to NEW_AND_OLD_IMAGES for the DynamoDB table "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Configure event source mapping for the Lambda function"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Map an Amazon SNS topic to the DynamoDB streams"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Increase the maximum execution time (timeout) setting of the Lambda function"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    192,
                "questionText":
                    "An application is being developed to audit several AWS accounts. The application will run in Account A and must access AWS services in Accounts B and C. What is the MOST secure way to allow the application to call AWS services in each audited account?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Configure cross-account roles in each audited account. Write code in Account A that assumes those  roles "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use S3 cross-region replication to communicate among accounts, with Amazon S3 event notifications to trigger Lambda functions"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Deploy an application in each audited account with its own role. Have Account A authenticate with the application"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create an IAM user with an access key in each audited account. Write code in Account A that uses those access keys"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    193,
                "questionText":
                    "A Developer is building a three-tier web application that should be able to handle a minimum of 5000 requests per minute. Requirements state that the web tier should be completely stateless while the application maintains session state for the users. How can session data be externalized, keeping latency at the LOWEST possible value?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Create an Amazon RDS instance, then implement session handling at the application level to leverage a database inside the RDS database instance for session data storage "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Implement a shared file system solution across the underlying Amazon EC2 instances, then implement session handling at the application level to leverage the shared file system for session data storage"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Create an Amazon ElastiCache Memcached cluster, then implement session handling at the application level to leverage the cluster for session data storage"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create an Amazon DynamoDB table, then implement session handling at the application level to leverage the table for session data storage"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    194,
                "questionText":
                    "An Amazon DynamoDB table uses a Global Secondary Index (GSI) to support read queries. The primary table is write-heavy, whereas the GSI is used for read operations. Looking at Amazon CloudWatch metrics, the Developer notices that write operations to the primary table are throttled frequently under heavy write activity. However, write capacity units to the primary table are available and not fully consumed. Why is the table being throttled?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "The GSI write capacity units are underprovisioned "
                        },
                        {
                            "optionId": "B",
                            "optionText": "There are not enough read capacity units on the primary table"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Amazon DynamoDB Streams is not enabled on the table"
                        },
                        {
                            "optionId": "D",
                            "optionText": "A large write operation is being performed against another table"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    195,
                "questionText":
                    "A company runs an e-commerce website that uses Amazon DynamoDB where pricing for items is dynamically updated in real time. At any given time, multiple updates may occur simultaneously for pricing information on a particular product. This is causing the original editor’s changes to be overwritten without a proper review process. Which DynamoDB write option should be selected to prevent this overwriting?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Concurrent writes "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Conditional writes"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Atomic writes"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Batch writes"
                        }
                    ],
                "questionAnswer":
                    "B"
            }
            ,
            {
                "questionId":
                    196,
                "questionText":
                    "A company needs a version control system for collaborative software development. Features of the system must include the following: Support for batches of changes across multiple files Parallel branching Version tracking  Which AWS service will meet these requirements?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "AWS CodePipeline "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Amazon S3"
                        },
                        {
                            "optionId": "C",
                            "optionText": "AWS CodeBuild"
                        },
                        {
                            "optionId": "D",
                            "optionText": "AWS CodeCommit"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    197,
                "questionText":
                    "A company is using continuous integration and continuous delivery systems. A Developer now needs to automate a software package deployment to both Amazon EC2 instances and virtual servers running onpremises. Which AWS service should be used to accomplish this?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "AWS CodePipeline "
                        },
                        {
                            "optionId": "B",
                            "optionText": "AWS CodeBuild"
                        },
                        {
                            "optionId": "C",
                            "optionText": "AWS Elastic Beanstalk"
                        },
                        {
                            "optionId": "D",
                            "optionText": "AWS CodeDeploy"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    198,
                "questionText":
                    "A Developer created a new AWS account and must create a scalable AWS Lambda function that meets the following requirements for concurrent execution: Average execution time of 100 seconds 50 requests per second Which step must be taken prior to deployment to prevent errors?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Implement dead-letter queues to capture invocation errors "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Add an event source from Amazon API Gateway to the Lambda function"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Implement error handling within the application code"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Contact AWS Support to increase the concurrent execution limits"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    199,
                "questionText":
                    "A Development team wants to instrument their code to provide more detailed information to AWS X-Ray than simple outgoing and incoming requests. This will generate large amounts of data, so the Development team wants to implement indexing so they can filter the data. What should the Development team do to achieve this?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Add annotations to the segment document and the code "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Add metadata to the segment document and the code"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Configure the necessary X-Ray environment variables"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Install required plugins for the appropriate AWS SDK"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    200,
                "questionText":
                    "A team of Developers must migrate an application running inside an AWS Elastic Beanstalk environment from a Classic Load Balancer to an Application Load Balancer. Which steps should be taken to accomplish the task using the AWS Management Console?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Update the application code in the existing deployment. 2. Select a new load balancer type before running the deployment. 3. Deploy the new version of the application code to the environment. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create a new environment with the same configurations except for the load balancer type. 2. Deploy the same application version as used in the original environment.  3. Run the swap-environment-cnames action."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Clone the existing environment, changing the associated load balancer type. 2. Deploy the same application version as used in the original environment. 3. Run the swap-environment-cnames action."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Edit the environment definitions in the existing deployment. 2. Change the associated load balancer type according to the requirements. 3. Rebuild the environment with the new load balancer type."
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    201,
                "questionText":
                    "A Developer must encrypt a 100-GB object using AWS KMS. What is the BEST approach?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Make an Encrypt API call to encrypt the plaintext data as ciphertext using a customer master key (CMK) "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Make an Encrypt API call to encrypt the plaintext data as ciphertext using a customer master key (CMK) with imported key material"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Make a GenerateDataKey API call that returns a plaintext key and an encrypted copy of a data key. Use a plaintext key to encrypt the data"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Make a GenerateDataKeyWithoutPlaintext API call that returns an encrypted copy of a data key. Use an encrypted key to encrypt the data"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    202,
                "questionText":
                    "A Development team would like to migrate their existing application code from a GitHub repository to AWS CodeCommit. What needs to be created before they can migrate a cloned repository to CodeCommit over HTTPS?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "A GitHub secure authentication token "
                        },
                        {
                            "optionId": "B",
                            "optionText": "A public and private SSH key file"
                        },
                        {
                            "optionId": "C",
                            "optionText": "A set of Git credentials generated from IAM"
                        },
                        {
                            "optionId": "D",
                            "optionText": "An Amazon EC2 IAM role with CodeCommit permissions"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    203,
                "questionText":
                    "A Developer is writing a REST service that will add items to a shopping list. The service is built on Amazon API Gateway with AWS Lambda integrations. The shopping list items are sent as query string parameters in the method request. How should the Developer convert the query string parameters to arguments for the Lambda function?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Enable request validation "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Include the Amazon Resource Name (ARN) of the Lambda function"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Change the integration type"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Create a mapping template"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    204,
                "questionText":
                    "When developing an AWS Lambda function that processes Amazon Kinesis Data Streams, Administrators within the company must receive a notice that includes the processed data. How should the Developer write the function to send processed data to the Administrators?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Separate the Lambda handler from the core logic "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Use Amazon CloudWatch Events to send the processed data"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Publish the processed data to an Amazon SNS topic"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Push the processed data to Amazon SQS "
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    205,
                "questionText":
                    "A Developer is storing sensitive documents in Amazon S3 that will require encryption at rest. The encryption keys must be rotated annually, at least. What is the easiest way to achieve this?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Encrypt the data before sending it to Amazon S3 "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Import a custom key into AWS KMS with annual rotation enabled"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Use AWS KMS with automatic key rotation"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Export a key from AWS KMS to encrypt the data"
                        }
                    ],
                "questionAnswer":
                    "C"
            }
            ,
            {
                "questionId":
                    206,
                "questionText":
                    "A company is creating a REST service using an Amazon API Gateway with AWS Lambda integration. The service must run different versions for testing purposes. What would be the BEST way to accomplish this?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Use an X-Version header to denote which version is being called and pass that header to the Lambda function(s) "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create an API Gateway Lambda authorizer to route API clients to the correct API version"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Create an API Gateway resource policy to isolate versions and provide context to the Lambda function (s)"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Deploy the API versions as unique stages with unique endpoints and use stage variables to provide further context"
                        }
                    ],
                "questionAnswer":
                    "D"
            }
            ,
            {
                "questionId":
                    207,
                "questionText":
                    "A company wants to implement authentication for its new REST service using Amazon API Gateway. To authenticate the calls, each request must include HTTP headers with a client ID and user ID. These credentials must be compared to authentication data in an Amazon DynamoDB table. What MUST the company do to implement this authentication in API Gateway?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Implement an AWS Lambda authorizer that references the DynamoDB authentication table "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create a model that requires the credentials, then grant API Gateway access to the authentication table"
                        },
                        {
                            "optionId": "C",
                            "optionText": "Modify the integration requests to require the credentials, then grant API Gateway access to the authentication table"
                        },
                        {
                            "optionId": "D",
                            "optionText": "Implement an Amazon Cognito authorizer that references the DynamoDB authentication table"
                        }
                    ],
                "questionAnswer":
                    "A"
            }
            ,
            {
                "questionId":
                    208,
                "questionText":
                    "An Amazon RDS database instance is used by many applications to look up historical data. The query rate is relatively constant. When the historical data is updated each day, the resulting write traffic slows the read query performance and affects all application users. What can be done to eliminate the performance impact on application users?",
                "questionOptions":
                    [
                        {
                            "optionId": "A",
                            "optionText": "Make sure Amazon RDS is Multi-AZ so it can better absorb increased traffic. "
                        },
                        {
                            "optionId": "B",
                            "optionText": "Create an RDS Read Replica and direct all read traffic to the replica."
                        },
                        {
                            "optionId": "C",
                            "optionText": "Implement Amazon ElastiCache in front of Amazon RDS to buffer the write traffic."
                        },
                        {
                            "optionId": "D",
                            "optionText": "Use Amazon DynamoDB instead of Amazon RDS to buffer the read traffic."
                        }
                    ],
                "questionAnswer":
                    "B"
            }
        ]
    }
;