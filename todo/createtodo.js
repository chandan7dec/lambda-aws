
//PUT /todos/{id} >> API Gateway >> Proxy Integration Rest api

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);


export const handler = async (event) => {

const item = JSON.parse(event.body);

if(item.id || item.id === '-1')
{
  item.id = Math.random() * Math.pow(10,16) + '';
}
  
  const command = new PutCommand({
    TableName: "todo",
    Item: item
    
  });

  const response = await docClient.send(command);
  console.log(response);
  
  const statusCode = 200;
 
  const headers = {"Access-Control-Allow-Origin":"*"};
  
  const finalResponse = {
    statusCode,
    body:'',
    headers
  };
  return finalResponse;
};



