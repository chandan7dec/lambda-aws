export const handler = async (event, context) => {
    // TODO implement
    console.log(event);
    console.log(context);
    console.log(context.function);
    console.log(context.memoryLimitInMB);
    console.log(context.getRemainingTimeInMillis());
    
    //console.log(event.key1);
    
    let statusCode =200;
    let todo = {
      "id": 100,
      "description": "Become aws certified v8.1",
      "isDone": false
    }
    
    let headers = {
      "Content-Type" :  "application/json"
    }
    
    
    //let body = JSON.stringify('Hello from Lambda!');
    let body = JSON.stringify(todo);
    
    const response = {
      statusCode,
      body,
      headers
    };
    return response;
  };
  