const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

const updateBalance = async (userName, amount, oldBalance) => new Promise((resolve) => {
    const directionalAmount = 'troy' === userName ? amount : amount * -1;
    const newBalance = oldBalance + directionalAmount;
    let errorMessage;

    const updateParams = {
        TableName: 'halfsie_balance',
        Key: { id: 0 },
        UpdateExpression: 'set balance = :num',
        ExpressionAttributeValues: {
            ':num': newBalance
        },
        ReturnValues: 'UPDATED_NEW'
    };

    dynamo.update(updateParams, (error, data) => {
        const { Attributes } = data;

        if (error) {
            errorMessage = error.message;
        } else {
            const { balance } = Attributes;

            resolve({ balance, errorMessage });
        }
    });
});

module.exports = updateBalance;
