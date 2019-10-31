const getBalance = require('./getBalance');

exports.handler = async () => {
    const { balance, errorMessage } = await getBalance();
    const body = JSON.stringify({ balance, errorMessage });
    let statusCode = 200;

    if (errorMessage) statusCode = 401;

    const response = {
        statusCode,
        body
    };

    return response;
};
