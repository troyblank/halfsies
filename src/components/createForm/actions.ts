
// @ts-nocheck - reducer code is not typed and is planned to be removed
/* istanbul ignore file */
import { type NewLog, type User } from '../../types'
import { queryClient, GET_BALANCE_QUERY_KEY } from '../../data'
import { addLog } from '../log/actions'
import { getAPIURL, getHeaders, getAndValidateResponseData } from '../../utils/apiCommunication'

export const CREATE_HALFSIE_PENDING = 'CREATE_HALFSIE_PENDING'
export const CREATE_HALFSIE_ERROR = 'CREATE_HALFSIE_ERROR'
export const CREATE_HALFSIE_SUCCESS = 'CREATE_HALFSIE_SUCCESS'
export const CREATE_HALFSIE_RESET = 'CREATE_HALFSIE_RESET'

export const createHalfsiePending = () => ({ type: CREATE_HALFSIE_PENDING })
export const createHalfsieError = (errorMessage) => ({ type: CREATE_HALFSIE_ERROR, errorMessage })
export const createHalfsieSuccess = () => ({ type: CREATE_HALFSIE_SUCCESS })
export const resetCreateForm = () => ({ type: CREATE_HALFSIE_RESET })

export const createHalfsie = (user: User, newLog: NewLog) => (
	/* istanbul ignore next */
	async (dispatch) => {
		const { username, jwtToken } = user
		const body = { ...newLog }

		dispatch(createHalfsiePending())

		getAndValidateResponseData(
			await fetch(`${getAPIURL()}/createHalfsie`, {
				method: 'POST',
				headers: getHeaders(jwtToken),
				body: JSON.stringify(body),
			}),
			'There was an issue saving your Halfise.',
		).then(({ data }) => {
			const { newBalance } = data
			queryClient.setQueryData([GET_BALANCE_QUERY_KEY], newBalance)

			dispatch(addLog({ user: username, ...newLog }))
			dispatch(createHalfsieSuccess())
		}).catch(() => {
			dispatch(createHalfsieError('There was an issue saving your Halfise.'))
		})
	}
)
