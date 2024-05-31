
import { type Log,type NewLog, type User } from '../../types'
import { getAPIURL, getAndValidateResponseData, getHeaders } from '../../utils/apiCommunication'

export const saveHalfsie = async ({user, newLog }: {user: User, newLog: NewLog}): Promise<{
	newBalance: number,
	newLogs: Log[]
}> => {
	const { jwtToken } = user
	const { data } = await getAndValidateResponseData(await fetch(`${getAPIURL()}/createHalfsie`, {
		method: 'POST',
		headers: getHeaders(jwtToken),
		body: JSON.stringify({ ...newLog }),
	}))
	const { newBalance, newLogs } = data

	return { newBalance, newLogs }
}
