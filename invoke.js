const AWS = require('aws-sdk');
const lambda = new AWS.Lambda({
  region: 'sa-east-1',
  endpoint: process.env.IS_OFFLINE ? 'http://localhost:3002' : null,
});


const invokeLambdaAsync =(funcName, payload) => {
    var params = {
        FunctionName: `${funcName}`,
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify(payload),
    };

    return lambda.invoke(params).promise().then(resp => JSON.parse(resp.Payload))
};

module.exports = { invokeLambdaAsync };
