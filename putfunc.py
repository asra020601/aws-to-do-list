import json
import boto3

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table = dynamodb.Table('myData')
sns = boto3.client('sns')
topic_arn = 'arn:aws:sns:us-east-1:891612555350:mytopic'  # Corrected ARN

def lambda_handler(event, context):
    try:
        # Validate required fields
        required_fields = ['task', 'description', 'priority', 'duedate']
        if not all(field in event for field in required_fields):
            raise KeyError(f"Missing fields: {required_fields}")

        # Send SNS notification
        sns.publish(
            TopicArn=topic_arn,
            Message=f"New task added: {event['task']}",
            Subject="Task Created"
        )

        # Save to DynamoDB
        response = table.put_item(Item=event)

        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps('Data saved successfully!')
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': str(e)})
        }