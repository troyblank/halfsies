// @ts-nocheck // remove when removing reducers
import React from 'react'
import { type User } from '../types'
import { AuthProvider } from '../contexts'
import { Head, SignIn } from '../components'

export const SignInPage = ({ user }: { user: User }) => (
	<AuthProvider user={user}>
		<Head />
		<SignIn />
	</AuthProvider>
)

export default SignInPage
