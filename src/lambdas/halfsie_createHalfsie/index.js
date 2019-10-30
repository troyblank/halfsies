const getUser = require('./getUser');
const getBalance = require('./getBalance');
const updateBalance = require('./updateBalance');
const addLog = require('./addLog');

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
        const { balance, errorMessage: getBalanceErrorMessage } = await getBalance();
        const { balance: updatedBalance, errorMessage: updateBalanceErrorMessage } = await updateBalance(Username, amount, balance);
        const { errorMessage: logErrorMessage } = await addLog(newLog);

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
