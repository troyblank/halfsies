import React, { useEffect } from 'react'
import Link from 'next/link'
import LogItem from './logItem'
import { getLog } from './actions'

export default function LogComponent({ logStore, authStore, dispatch }) {
	const { log } = logStore
	const { userName } = authStore

	useEffect(() => {
		if (!log) dispatch(getLog())
	}, [])

	return (
		<div className={'page-wrap'}>
			{ log &&
			<React.Fragment>
				<Link href={'/create'}>
					<button className={'btn'}>Create a halfsie</button>
				</Link>
				<ul className={'log-list'}>
					{ log.map((l) => (<LogItem log={l} userName={userName} key={l.date} />))}
				</ul>
			</React.Fragment>}
		</div>
	)
}
