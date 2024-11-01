import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);


export const handler = async (event) => {
const username = 'in28minutes';

  const command = new ScanCommand({
    TableName: "todo",
    FilterExpression: 'username = :username',
    ExpressionAttributeValues : {':username' : username}
  });

  const response = await docClient.send(command);
  const statusCode = 200;
  const body = JSON.stringify(response.Items);
  const headers = {"Access-Control-Allow-Origin":"*"};
  
  const finalResponse = {
    statusCode,
    body,
    headers
  };
  return finalResponse;
};



