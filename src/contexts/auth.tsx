import React, { createContext, useContext, useState, ReactElement } from 'react'
import { Auth } from 'aws-amplify'
import {
	AuthContextType,
	AttemptToCompleteNewUserType,
	AttemptToSignInType,
	UserType,
} from '../types'
import { extractUserInformationFromAmplifySignIn } from '../utils'

export const AuthContext = createContext<AuthContextType>({
	attemptToSignIn: /* istanbul ignore next */ () => new Promise((_, reject) => reject(new Error('Auth Context not initiated'))),
	attemptToCompleteNewUser: /* istanbul ignore next */ () => new Promise((_, reject) => reject(new Error('Auth Context not initiated'))),
	user: null,
})

type PropsType = {
    user: UserType | null,
    children: ReactElement,
}

export const AuthProvider: React.FC<PropsType> = ({ user: userToSet, children }) => {
	const [cognitoUser, setCognitoUser] = useState<any | undefined>()
	const [user, setUser] = useState<UserType | null>(userToSet)

	const getCognitoUser = async (): Promise<any> => {
		/* istanbul ignore next */
		if (cognitoUser) {
			return cognitoUser
		}

		const authenticatedUser: UserType = await Auth.currentAuthenticatedUser()

		return authenticatedUser
	}

	const attemptToSignIn: AttemptToSignInType = async (userName, password) => {
		let extractedUser: UserType | null = null

		try {
			const signedIncognitoUser: any = await Auth.signIn(userName, password)
			extractedUser = extractUserInformationFromAmplifySignIn(signedIncognitoUser)

			setCognitoUser(signedIncognitoUser)
			setUser(extractedUser)
		} catch (error) {
			// eslint-disable-next-line no-alert
			alert(error)
		}

		return extractedUser
	}

	const attemptToCompleteNewUser: AttemptToCompleteNewUserType = async (password, attributes) => {
		let extractedUser: UserType | undefined

		try {
			const signedIncognitoUser: any = await getCognitoUser()
			const authorizedCognitoUser: any = await Auth.completeNewPassword(signedIncognitoUser, password, attributes)
			extractedUser = extractUserInformationFromAmplifySignIn(authorizedCognitoUser)

			setCognitoUser(authorizedCognitoUser)
			setUser(extractedUser)
		} catch (error) {
			// eslint-disable-next-line no-alert
			alert(error)
		}
	}

	return (
		<AuthContext.Provider value={{ attemptToCompleteNewUser, attemptToSignIn, user }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = (): AuthContextType => useContext(AuthContext)
