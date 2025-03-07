# Serverless To-Do List App

## Overview

This project is a simple to-do list application built using a fully serverless architecture on AWS. It demonstrates how to integrate several AWS services, including:

- **Amazon S3** – for hosting static assets (HTML, CSS, JavaScript)
- **AWS Lambda** – for executing backend code (business logic)
- **Amazon API Gateway** – for exposing RESTful API endpoints
- **Amazon DynamoDB** – for storing to-do items
- **Amazon SNS** – for sending notifications (when a task is created)

The goal of this project is to provide a scalable and cost-effective solution for managing tasks without managing servers.

## Architecture

The app uses AWS services to create a seamless, serverless workflow:

1. **Frontend:**  
   - Hosted on an S3 bucket configured for static website hosting.
   - Provides a user interface to interact with the to-do list.

2. **API Layer:**  
   - Managed by API Gateway, which routes HTTP requests to the appropriate Lambda functions.

3. **Business Logic:**  
   - Implemented in Lambda functions (`createTask`, `getTasks`).
   - Each function performs specific CRUD operations.

4. **Data Storage:**  
   - To-do items are stored in a DynamoDB table.
   - DynamoDB offers low-latency, scalable data storage.

5. **Notifications:**  
   - SNS is used to send notifications on task-related events (task creation).

The following diagram illustrates the overall architecture:

       +-----------------------+
       |      Amazon S3        |
       | (Static Website Host) |
       +-----------+-----------+
                   |
                   v
          +--------+---------+
          |  API Gateway     |
          +--------+---------+
                   |
       +-----------+-----------+
       | AWS Lambda Functions  |<----> Amazon SNS (Notifications)
       +-----------+-----------+
                   |
                   v
         +---------+---------+
         |   Amazon DynamoDB  |
         +--------------------+

## Technologies Used

- **AWS S3**
- **AWS Lambda**
- **Amazon API Gateway**
- **Amazon DynamoDB**
- **Amazon SNS**
- **Git & GitHub** (for version control and collaboration)

## Setup & Deployment

### Prerequisites

- An AWS account with permissions for Lambda, API Gateway, DynamoDB, S3, and SNS.
- AWS CLI installed and configured.
- A development environment (e.g., VS Code) with Git support.

## Usage

- **Access the Frontend:**  
  Navigate to your S3 bucket’s static website URL to load the to-do list UI : https://fewdis.s3.us-east-1.amazonaws.com/index.html

- **API Endpoints:**  
  The API Gateway provides endpoints to perform operations on tasks:
  - `GET /tasks` – Retrieve all tasks
  - `POST /tasks` – Create a new task


- **Notifications:**  
  When tasks are created or updated, SNS notifications are sent to the configured subscribers.

## Future Enhancements

- Add user authentication and authorization.
- Improve the UI/UX of the frontend.
- Add support for task categorization or priority levels.
- Enhance logging and monitoring using CloudWatch.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for any improvements or bug fixes.
