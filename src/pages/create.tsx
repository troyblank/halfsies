// @ts-nocheck // remove when removing reducers
import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { UserType } from '../types'
import { AuthProvider } from '../contexts'
import { getServerSidePropsOrRedirect } from '../utils'
import { Head } from '../components'
import { CreateForm } from '../components/connections'

export const getServerSideProps: any = async (serverSideContext: GetServerSidePropsContext) => getServerSidePropsOrRedirect(serverSideContext)

export default function SignInPage({ user }: { user: UserType }) {
	return (
		<AuthProvider user={user}>
			<Head />
			<CreateForm />
		</AuthProvider>
	)
}
