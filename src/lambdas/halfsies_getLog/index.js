const getLog = require('./getLog');

const TABLE_NAME = 'halfsie_log';

exports.handler = async () => {
    const { log, errorMessage } = await getLog(TABLE_NAME);
    const body = JSON.stringify({ log, errorMessage });
    let statusCode = 200;

    if (errorMessage) statusCode = 401;

    const response = {
        statusCode,
        body
    };

    return response;
};
