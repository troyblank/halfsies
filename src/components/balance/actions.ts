import { type User } from '../../types'
import { getAPIURL, getAndValidateResponseData, getHeaders } from '../../utils/apiCommunication'

export const BALANCE_RECEIVED = 'BALANCE_RECEIVED'

export const balanceReceived = (amount : number) => ({ type: BALANCE_RECEIVED, amount })

export const getBalance = (user: User) => (
	/* istanbul ignore next */
	async (dispatch) => {
		const { jwtToken } = user
		const { data }: { data: any } = await getAndValidateResponseData(
			await fetch(`${getAPIURL()}/getBalance`, {
				method: 'GET',
				headers: getHeaders(jwtToken),
			}),
		)

		dispatch(balanceReceived(data.balance))
	}
)
