// @ts-nocheck // remove when removing reducers
import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { type User } from '../types'
import { AuthProvider } from '../contexts'
import {
	Balance,
	Head,
	Header,
	Log,
} from '../components'
import { getServerSidePropsOrRedirect } from '../utils'

export const getServerSideProps = async (serverSideContext: GetServerSidePropsContext) => getServerSidePropsOrRedirect(serverSideContext)

export const HomePage = ({ user }: { user: User }) => {


	return (
		<AuthProvider user={user}>
			<Head />
			<Header />
			<Balance />
			<Log />
		</AuthProvider>
	)
}

export default HomePage
