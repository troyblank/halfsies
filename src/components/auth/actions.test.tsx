import Chance from 'chance'
import {
	TOKEN_REFRESH,
	tokenRefresh,
} from './actions'

describe('Auth Actions', () => {
	const chance = new Chance()

	test('should be able to generate a token refresh action', () => {
		const token = chance.word()
		const expireTime = chance.word()
		const refreshedToken = { token, expireTime }
		const action = tokenRefresh(refreshedToken)

		expect(action).toEqual({ type: TOKEN_REFRESH, ...refreshedToken })
	})
})
