const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

function addLog(Item) {
    return new Promise((resolve) => {
        const putParams = {
            TableName: 'halfsie_log',
            Item
        };
        let errorMessage;

        dynamo.put(putParams, (error) => {
            if (error) {
                errorMessage = error.message;
            }

            resolve({ errorMessage });
        });
    });
}

module.exports = addLog;
