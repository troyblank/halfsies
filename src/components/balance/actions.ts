import { getAPIURL } from '../../util/apiCommunication'

export const BALANCE_RECEIVED = 'BALANCE_RECEIVED'

export const balanceReceived = (amount) => ({ type: BALANCE_RECEIVED, amount })

export const getBalance = () => (
	/* istanbul ignore next */
	(dispatch) => {
		fetch(`${getAPIURL()}/getbalance`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		})
			.then((response) => response.json())
			.then((body) => {
				const { balance } = body

				dispatch(balanceReceived(balance))
			})
	}
)
