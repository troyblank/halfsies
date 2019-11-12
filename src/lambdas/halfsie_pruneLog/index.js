const getLog = require('./getLog');
const pruneLog = require('./pruneLog');

exports.handler = async () => {
    const maxLogCount = 100;
    const { log } = await getLog();

    await pruneLog(log, maxLogCount);

    return 'The log has been pruned.';
};
