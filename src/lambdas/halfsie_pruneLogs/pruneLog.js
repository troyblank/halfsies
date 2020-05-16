const deleteLog = require('./deleteLog');

function pruneLog(log, limit, tableName) {
    return new Promise((resolve) => {
        const toDelete = log.slice(limit, log.index);
        const deletePromises = [];

        toDelete.forEach((l) => {
            const { id, date } = l;
            deletePromises.push(deleteLog(id, date, tableName));
        });

        Promise.all(deletePromises).then(() => {
            resolve();
        });
    });
}

module.exports = pruneLog;
