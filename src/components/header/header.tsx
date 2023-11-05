import React from 'react'
import { LogoGraphic } from '../../graphics'

export default function HeadComponent({ authStore }) {
	const { userName } = authStore

	return (
		<header>
			<div className={'page-wrap'}>
				<div className={'icon-logo'}>
					<LogoGraphic />
				</div>
				<div className={'username'}>{ userName }</div>
			</div>
		</header>
	)
}
