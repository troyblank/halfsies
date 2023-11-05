// @ts-nocheck // remove when removing reducers
import React from 'react'
import { Head } from '../src/components'
import { AuthRedirect, Header, Balance, Log } from '../src/components/connections'

export default function IndexPage() {
	const users = ['troy', 'lurita']

	return (
		<AuthRedirect>
			<Head />
			<Header />
			<Balance users={users} />
			<Log />
		</AuthRedirect>
	)
}
