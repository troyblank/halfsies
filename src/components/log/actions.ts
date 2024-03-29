// @ts-nocheck - reducer code is not typed and is planned to be removed
import { getAPIURL } from '../../util/apiCommunication'

export const LOG_RECEIVED = 'LOG_RECEIVED'
export const ADD_LOG = 'ADD_LOG'

export const logReceived = (log) => ({ type: LOG_RECEIVED, log })
export const addLog = (log) => ({ type: ADD_LOG, log })

export const getLog = () => (
	/* istanbul ignore next */
	(dispatch) => {
		fetch(`${getAPIURL()}/getlog`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		})
			.then((response) => response.json())
			.then((body) => {
				const { log } = body

				dispatch(logReceived(log))
			})
	}
)
