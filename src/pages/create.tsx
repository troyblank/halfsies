// @ts-nocheck // remove when removing reducers
import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { type User } from '../types'
import { AuthProvider } from '../contexts'
import { getServerSidePropsOrRedirect } from '../utils'
import { Head } from '../components'
import { CreateForm } from '../components/connections'

export const getServerSideProps = async (serverSideContext: GetServerSidePropsContext) => getServerSidePropsOrRedirect(serverSideContext)

export default function SignInPage({ user }: { user: User }) {
	return (
		<AuthProvider user={user}>
			<Head />
			<CreateForm />
		</AuthProvider>
	)
}
