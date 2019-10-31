const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

function getLog() {
    return new Promise((resolve) => {
        const queryParams = {
            TableName: 'halfsie_log',
            limit: 100
        };

        dynamo.scan(queryParams, (error, data) => {
            let log, errorMessage;
            if (error) {
                errorMessage = error.message;
            } else {
                log = data.Items;
            }

            resolve({ errorMessage, log });
        });
    });
}

module.exports = getLog;
