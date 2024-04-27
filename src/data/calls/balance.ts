
import { type User } from '../../types'
import { getAPIURL, getAndValidateResponseData, getHeaders } from '../../utils/apiCommunication'

export const getBalance = async (user: User): Promise<number> => {
	const { jwtToken } = user
	const { data } = await getAndValidateResponseData(await fetch(`${getAPIURL()}/getBalance`, {
		method: 'GET',
		headers: getHeaders(jwtToken),
	}))

	return data.balance
}
