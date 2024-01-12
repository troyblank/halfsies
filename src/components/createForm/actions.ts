
/* istanbul ignore file */
import { UserType } from '../../types'
import { balanceReceived } from '../balance/actions'
import { addLog } from '../log/actions'
import { getAPIURL } from '../../util/apiCommunication'

export const CREATE_HALFSIE_PENDING = 'CREATE_HALFSIE_PENDING'
export const CREATE_HALFSIE_ERROR = 'CREATE_HALFSIE_ERROR'
export const CREATE_HALFSIE_SUCCESS = 'CREATE_HALFSIE_SUCCESS'
export const CREATE_HALFSIE_RESET = 'CREATE_HALFSIE_RESET'

export const createHalfsiePending = () => ({ type: CREATE_HALFSIE_PENDING })
export const createHalfsieError = (errorMessage) => ({ type: CREATE_HALFSIE_ERROR, errorMessage })
export const createHalfsieSuccess = () => ({ type: CREATE_HALFSIE_SUCCESS })
export const resetCreateForm = () => ({ type: CREATE_HALFSIE_RESET })

export const createHalfsie = (user: UserType, formData) => (
	/* istanbul ignore next */
	(dispatch) => {
		const { userName, jwtToken } = user
		const log = {
			date: new Date().toUTCString(),
			...formData,
		}

		dispatch(createHalfsiePending())

		const body = { accessToken: jwtToken, log }

		fetch(`${getAPIURL()}/createHalfsie`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		}).then((response) => {
			if (response.ok) {
				return response.json()
			}

			throw new Error('There was an issue saving your Halfise.')
		}).then((responseBody) => {
			const { balance } = responseBody

			dispatch(addLog({ user: userName, ...log }))
			dispatch(balanceReceived(balance))
			dispatch(createHalfsieSuccess())
		}).catch(() => {
			dispatch(createHalfsieError('There was an issue saving your Halfise.'))
		})
	}
)
