import React, { createContext, useContext, useState, ReactElement } from 'react'
import { CognitoUser } from '@aws-amplify/auth'
import { Auth } from 'aws-amplify'
import {
	AuthContextType,
	AttemptToSignInType,
	UserType,
} from '../types'
import { extractUserInformationFromCognito } from '../utils'

export const AuthContext = createContext<AuthContextType>({
	attemptToSignIn: /* istanbul ignore next */ () => new Promise((_, reject) => reject(new Error('Auth Context not initiated'))),
	user: null,
})

type PropsType = {
    user: UserType | null,
    children: ReactElement,
}

export const AuthProvider: React.FC<PropsType> = ({ user: userToSet, children }) => {
	const [user, setUser] = useState<UserType | null>(userToSet)

	const attemptToSignIn: AttemptToSignInType = async (userName, password) => {
		let extractedUser: UserType | null = null

		try {
			const signedIncognitoUser: CognitoUser = await Auth.signIn(userName, password)
			extractedUser = extractUserInformationFromCognito(signedIncognitoUser)

			setUser(extractedUser)
		} catch (error) {
			throw new Error(error)
		}

		return extractedUser
	}

	return (
		<AuthContext.Provider value={{ attemptToSignIn, user }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = (): AuthContextType => useContext(AuthContext)
