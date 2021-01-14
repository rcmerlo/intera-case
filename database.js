const AWS = require('aws-sdk');

AWS.config.update({
    endpoint: process.env.IS_OFFLINE ? 'http://localhost:8000' : undefined,
    region: "sa-east-1"
    });

const DynamoDBOptions = {
    httpOptions: {
        connectTimeout: 1000,
        timeout: 5000,
    },
    maxRetries: 5,
};


const docClient = new AWS.DynamoDB.DocumentClient(DynamoDBOptions);


const scanFromDB = (table) => {
    const params = {
      TableName: table
    };

    return docClient
      .scan(params)
      .promise()
      .then(resp => {
        if (!resp.Items) return [];

        return resp.Items;
      });
  };


module.exports  = { scanFromDB }