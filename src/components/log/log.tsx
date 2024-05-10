import React from 'react'
import Link from 'next/link'
import { useAuth } from '../../contexts'
import { useGetLog } from '../../data'
import LogItem from './logItem'

export const Log = () => {
	const { user } = useAuth()
	const { isFetching, data: log } = useGetLog(user)
	const { username } = user

	return (
		<div className={'page-wrap'}>
			<Link href={'/create'}>
				<button className={'btn'}>Create a halfsie</button>
			</Link>
			{ isFetching && (<div className={'log-list__pending'} aria-label={'Log is loading.'} />) }
			{ !isFetching && (
				<ul className={'log-list'}>
					{ log.map((l) => (<LogItem log={l} userName={username} key={l.date} />))}
				</ul>
			)}
		</div>
	)
}
