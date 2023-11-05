import React from 'react'
import classnames from 'classnames'

export default function LogItem({ log, userName }) {
	const { amount, description, user } = log
	const isUsers = userName === user
	const isNegative = isUsers ? amount < 0 : amount > 0

	return (
		<li className={classnames({ negative: isNegative })}>
			<span>{ amount }</span>
			<span>{ description }</span>
			<span>{ user }</span>
		</li>
	)
}
