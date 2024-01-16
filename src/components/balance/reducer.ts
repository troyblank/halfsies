// @ts-nocheck - reducer code is not typed and is planned to be removed
import { BALANCE_RECEIVED } from './actions'
import { BalanceState } from './interfaces'

export const initialState: BalanceState = {}

export default (state = initialState, action) => {
	const nextState = { ...state }

	switch (action.type) {
	case BALANCE_RECEIVED: {
		nextState.amount = action.amount
		break
	}
	default:
		return state
	}

	return nextState
}
