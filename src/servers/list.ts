import { APIGatewayProxyEvent } from 'aws-lambda'
import { DynamoDB } from "aws-sdk";

export async function handler(event: APIGatewayProxyEvent) {
  const dynamoDB = new DynamoDB.DocumentClient();
  const getParams = {
    Key: { userId: '' },
    TableName: ''
  }
  const data = await dynamoDB.get(getParams).promise()
  console.log(data.Item)
  return {
    statusCode: 200,
    body: JSON.stringify([]),
  }
}