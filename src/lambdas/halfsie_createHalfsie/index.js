const getUser = require('./getUser');
const getBalance = require('./getBalance');
const updateBalance = require('./updateBalance');
const addLog = require('./addLog');

const BALANCE_TABLE_NAME = 'halfsie_balance';
const LOG_TABLE_NAME = 'halfsie_log';

exports.handler = async (newHalfsieData) => {
    let newBalance;
    let statusCode = 200;
    let errorMessage;
    const { accessToken, log } = newHalfsieData;
    const { user, errorMessage: userErrorMessage } = await getUser(accessToken);

    if (user) {
        const { Username } = user;
        const { date, amount } = log;

        const newLog = {
            id: new Date(date).getTime(),
            user: Username,
            ...log
        };
        const { balance, errorMessage: getBalanceErrorMessage } = await getBalance(BALANCE_TABLE_NAME);
        const { balance: updatedBalance, errorMessage: updateBalanceErrorMessage } = await updateBalance(Username, amount, balance, BALANCE_TABLE_NAME);
        const { errorMessage: logErrorMessage } = await addLog(newLog, LOG_TABLE_NAME);

        newBalance = updatedBalance;
        errorMessage = getBalanceErrorMessage || updateBalanceErrorMessage || logErrorMessage;
    }
    if (!user) {
        statusCode = 401;
        errorMessage = userErrorMessage;
    }

    const body = JSON.stringify({ newBalance, errorMessage });
    return { statusCode, body };
};
