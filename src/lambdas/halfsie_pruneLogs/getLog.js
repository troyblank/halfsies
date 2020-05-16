const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

function getLog(TableName) {
    return new Promise((resolve) => {
        const queryParams = { TableName };

        dynamo.scan(queryParams, (error, data) => {
            let log, errorMessage;
            if (error) {
                errorMessage = error.message;
            } else {
                log = data.Items.sort((a, b) => {
                    if (new Date(a.date) > new Date(b.date)) return -1;

                    return 1;
                });
            }

            resolve({ errorMessage, log });
        });
    });
}

module.exports = getLog;
