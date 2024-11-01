
//PUT /todos/{id} >> API Gateway >> Proxy Integration Rest api

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);


export const handler = async (event) => {
//console.log("*****event", event);
//const todoid = event.pathParameters.id;
const item = JSON.parse(event.body);
//console.log("******body", body);

  const command = new PutCommand({
    TableName: "todo",
    Item: item
    // Item: {
    //   "description": item.description,
    //   "done": item.done,
    //   "id": item.id,
    //   "tragetDate" : item.targetDate,
    //   "usernmae": item.usernmae
    // },
  });

  const response = await docClient.send(command);
  console.log("******response", response);
  const statusCode = 200;
 
  const headers = {"Access-Control-Allow-Origin":"*"};
  
  const finalResponse = {
    statusCode,
    body:'',
    headers
  };
  return finalResponse;
};



