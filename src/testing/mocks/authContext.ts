/* istanbul ignore file */
import { mockUser } from './user'
import { AuthContextType } from '../../types'

export const mockAuthContext = (overrides: Partial<AuthContextType> = {}): AuthContextType => {
	return {
		attemptToSignIn: jest.fn(),
		user: mockUser(),
		...overrides,
	}
}
