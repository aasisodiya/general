# Serverless Architecture

> Below notes are w.r.t AWS services

- [Serverless Architecture](#serverless-architecture)
  - [Key Benefits](#key-benefits)
  - [Challenges](#challenges)
  - [Core Serverless Services in AWS](#core-serverless-services-in-aws)
  - [Additional Serverless Services in AWS](#additional-serverless-services-in-aws)
  - [Applications of Serverless](#applications-of-serverless)
  - [Frameworks for Serverless](#frameworks-for-serverless)
  - [AWS Lambda](#aws-lambda)
  - [Lambda Invocation Types](#lambda-invocation-types)
  - [Lambda Event Sources Types](#lambda-event-sources-types)
  - [Throwing Error](#throwing-error)
  - [Use Lambda Proxy Integration](#use-lambda-proxy-integration)

## Key Benefits

- Don't have to manage server / infrastructure part
- No Server Management
- Easy & Efficient Scaling
- Built-In High Availability and Fault Tolerance
- Service Integration (AWS)
- No Idle Capacity - Pay for what you use and how long you use it for

## Challenges

- Vendor Lock-ins (Making you use the services provided by your cloud service provider)
- Public Cloud (Regulatory Requirement - Since some use-cases don't allow public cloud)
- Level of Control (Letting other control Infrastructure)

## Core Serverless Services in AWS

- AWS Lambda
- Amazon API Gateway
- DynamoDB

## Additional Serverless Services in AWS

- Amazon S3
- Amazon SNS
- Amazon SQS
- AWS Step Function
- Amazon Kinesis
- Amazon Athena
- AWS X-Ray
- Amazon CloudWatch
- Amazon Cognito

## Applications of Serverless

- Application Backend
- Real-time/Streaming Data Processing

## Frameworks for Serverless

- AWS SAM (Lightweight Version of AWS CloudFormation)
- The Serverless Framework (Third Party Tool)

## AWS Lambda

- Charged per 100ms
- Maximum Timeout is 15 minutes
- Run Code without provisioning or managing server
- Scalable
- Stateless (Cannot store data for long-term)

## Lambda Invocation Types

1. Synchronous (Ex. API Gateway, Cognito events)
2. Asynchronous (Ex. S3 Event)

## Lambda Event Sources Types

1. Push Events (Push data to invoke function, ex. S3 Event, API Gateway event)
2. Pull.Poll Events (Lambda polls the event stream to look for events data, Ex. DynamoDB Stream Event, Kenesis Stream event)

`Event` Object holds input data that we want

`Context` Object provides useful run-time info, ex. How much time is remaining before timeout, what log group or log screening is associated with, what is request id and so on.

## Throwing Error

```js
exports.handler = (event, context, callback) => {
  const error = new Error("Error");
  callback(error);
};
```

Using Async

```js
exports.handler = async (event, context) => {
  const error = new Error("Error");
  throw error;
};
```

API Gateway AWS Proxy Event is used for path param testing

## Use Lambda Proxy Integration

- Request from user is passed to lambda as it is without any modification and similarly for response, response from lambda is passed to user without any modification
- We cannot use any mapping or request response transformations if we use this option
