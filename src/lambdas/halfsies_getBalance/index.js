const getBalance = require('./getBalance');

const TABLE_NAME = 'halfsie_balance';

exports.handler = async () => {
    const { balance, errorMessage } = await getBalance(TABLE_NAME);
    const body = JSON.stringify({ balance, errorMessage });
    let statusCode = 200;

    if (errorMessage) statusCode = 401;

    const response = {
        statusCode,
        headers: {
            'Access-Control-Allow-Origin': 'https://halfsies.troyblank.com',
            'Content-Type': 'application/json'
        },
        body
    };

    return response;
};
