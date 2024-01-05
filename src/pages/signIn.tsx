// @ts-nocheck // remove when removing reducers
import React from 'react'
import { UserType } from '../types'
import { AuthProvider } from '../contexts'
import { Head } from '../components'
import { SignIn } from '../components/connections'

export const SignInPage = ({ user }: { user: UserType }) => (
	<AuthProvider user={user}>
		<Head />
		<SignIn />
	</AuthProvider>
)

export default SignInPage
