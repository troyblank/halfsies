
import { type Log, type User } from '../../types'
import { getAPIURL, getAndValidateResponseData, getHeaders } from '../../utils/apiCommunication'

export const getLog = async (user: User): Promise<Log[]> => {
	const { jwtToken } = user
	const { data } = await getAndValidateResponseData(await fetch(`${getAPIURL()}/getLog`, {
		method: 'GET',
		headers: getHeaders(jwtToken),
	}))

	return data.log
}
