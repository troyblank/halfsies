const getLog = require('./getLog');

exports.handler = async () => {
    const { log, errorMessage } = await getLog();
    const body = JSON.stringify({ log, errorMessage });
    let statusCode = 200;

    if (errorMessage) statusCode = 401;

    const response = {
        statusCode,
        body
    };

    return response;
};
