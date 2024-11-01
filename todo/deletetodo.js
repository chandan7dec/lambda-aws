import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, DeleteCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);


export const handler = async (event) => {
const Id = event.pathParameters.id;

  const command = new DeleteCommand({
    TableName: "todo",
    Key: {
      id: Id,
    },
  });

  const response = await docClient.send(command);
  
  const statusCode = 200;
  const body = JSON.stringify(response.Item);
  const headers = {"Access-Control-Allow-Origin":"*"};
  
  const finalResponse = {
    statusCode,
    body,
    headers
  };
  return finalResponse;
};



