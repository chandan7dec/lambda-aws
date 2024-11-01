import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);


export const handler = async (event) => {
const programid = event.pathParameters.id;
//console.log("********",event.pathParameters.id);
  const command = new GetCommand({
    TableName: "todo",
    Key: {
      id: programid,
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



