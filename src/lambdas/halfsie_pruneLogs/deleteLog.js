const AWS = require('aws-sdk')

const dynamo = new AWS.DynamoDB.DocumentClient()

function deleteLog(id, date, TableName) {
	return new Promise((resolve) => {
		const deleteParams = {
			TableName,
			Key: { id, date },
		}

		dynamo.delete(deleteParams, (error) => {
			/* eslint-disable-next-line no-console */
			if (error) console.log(error)

			resolve()
		})
	})
}

module.exports = deleteLog
