const AWS = require('aws-sdk')

const dynamo = new AWS.DynamoDB.DocumentClient()

function addLog(Item, TableName) {
	return new Promise((resolve) => {
		const putParams = { TableName, Item }
		let errorMessage

		dynamo.put(putParams, (error) => {
			if (error) {
				errorMessage = error.message
			}

			resolve({ errorMessage })
		})
	})
}

module.exports = addLog
