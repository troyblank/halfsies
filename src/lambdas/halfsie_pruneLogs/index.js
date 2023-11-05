const getLog = require('./getLog')
const pruneLog = require('./pruneLog')

const PROD_TABLE_NAME = 'halfsie_log'
const DEV_TABLE_NAME = 'halfsie_log_dev'

exports.handler = async () => {
	const maxLogCount = 100
	const { log: prodLog } = await getLog(PROD_TABLE_NAME)
	const { log: devLog } = await getLog(DEV_TABLE_NAME)

	await pruneLog(prodLog, maxLogCount, PROD_TABLE_NAME)
	await pruneLog(devLog, maxLogCount, DEV_TABLE_NAME)

	return 'The log has been pruned.'
}
