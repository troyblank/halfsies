import { type User } from '../../types'
import { getAPIURL, getAndValidateResponseData, getHeaders } from '../../utils/apiCommunication'

export const LOG_RECEIVED = 'LOG_RECEIVED'
export const ADD_LOG = 'ADD_LOG'

export const logReceived = (log) => ({ type: LOG_RECEIVED, log })
export const addLog = (log) => ({ type: ADD_LOG, log })

export const getLog = (user: User) => (
	/* istanbul ignore next */
	async (dispatch) => {
		const { jwtToken } = user
		const { data }: { data: any } = await getAndValidateResponseData(
			await fetch(`${getAPIURL()}/getLog`, {
				method: 'GET',
				headers: getHeaders(jwtToken),
			}),
		)

		dispatch(logReceived(data.log))
	}
)
