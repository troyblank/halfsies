import { act, renderHook } from '@testing-library/react-hooks'
import { Auth } from 'aws-amplify'
import Chance from 'chance'
import { AuthProvider, useAuth } from './auth'

describe('Use Auth', () => {
	const chance = new Chance()

	beforeEach(() => {
		jest.spyOn(Auth, 'currentAuthenticatedUser').mockResolvedValue({})
	})

	it('should allow attempts to sign in', async () => {
		const signInUserName: string = chance.name()
		const signInPassword: string = chance.word()
		const username: string = chance.first()

		jest.spyOn(Auth, 'signIn').mockResolvedValue({
			challengeName: 'NO_CHALLENGE',
			challengeParam: {
				requiredAttributes: [],
			},
			username,
		})

		const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider })

		const { attemptToSignIn } = result.current

		await act(async() => { await attemptToSignIn(signInUserName, signInPassword) })

		expect(Auth.signIn).toBeCalledWith(signInUserName, signInPassword)
	})

	it('should handle any errors with attempts to sign in', async () => {
		const signInUserName: string = chance.name()
		const signInPassword: string = chance.word()

		const error: string = chance.paragraph()
		jest.spyOn(Auth, 'signIn').mockRejectedValue(error)

		const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider })

		const { attemptToSignIn } = result.current

		expect(async() => await attemptToSignIn(signInUserName, signInPassword)).rejects.toThrow(error)
	})
})
