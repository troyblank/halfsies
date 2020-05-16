const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

function getBalance(TableName) {
    return new Promise((resolve) => {
        const queryParams = {
            TableName,
            Key: { id: 0 }
        };

        dynamo.get(queryParams, (error, data) => {
            let balance, errorMessage;
            if (error) {
                errorMessage = error.message;
            } else {
                balance = data.Item.balance;
            }

            resolve({ errorMessage, balance });
        });
    });
}

module.exports = getBalance;
