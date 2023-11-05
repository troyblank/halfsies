import { assert } from 'chai'
import Chance from 'chance'
import {
	SIGN_IN_PENDING,
	SIGN_IN_SUCCESS,
	SIGN_IN_ERROR,
	signInPending,
	signInSuccess,
	signInUser,
	signInError,
} from './actions'

describe('SignIn Actions', () => {
	const chance = new Chance()
	const userName = chance.word()

	it('should be able to generate a sign in error action', () => {
		const token = chance.word()
		const expireTime = chance.word()
		const refreshToken = chance.word()
		const user = { userName, token, expireTime, refreshToken }
		const action = signInSuccess(user)

		assert.deepEqual(action, { type: SIGN_IN_SUCCESS, ...user })
	})

	it('should be able to generate a sign in error action', () => {
		const errorMessage = chance.word()
		const action = signInError(errorMessage)

		assert.deepEqual(action, { type: SIGN_IN_ERROR, errorMessage })
	})

	it('should be able to generate a sign in pending action', () => {
		const action = signInPending()

		assert.deepEqual(action, { type: SIGN_IN_PENDING })
	})

	it('should be able to sign in as a sanity check', () => {
		const password = chance.word()

		assert.equal('function', typeof signInUser({ userName, password }))
	})
})
