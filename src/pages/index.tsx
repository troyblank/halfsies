// @ts-nocheck // remove when removing reducers
import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { UserType } from '../types'
import { AuthProvider } from '../contexts'
import { Head, Header } from '../components'
import { getServerSidePropsOrRedirect } from '../utils'
import { Balance, Log } from '../components/connections'

export const getServerSideProps: any = async (serverSideContext: GetServerSidePropsContext) => getServerSidePropsOrRedirect(serverSideContext)

export const HomePage = ({ user }: { user: UserType }) => {
	const users = ['troy', 'lurita']

	return (
		<AuthProvider user={user}>
			<Head />
			<Header />
			<Balance users={users} />
			<Log />
		</AuthProvider>
	)
}

export default HomePage
