import React, { FunctionComponent } from 'react'
import { useAuth } from '../../contexts'
import { LogoGraphic } from '../../graphics'

export const Header: FunctionComponent = () => {
	const { user } = useAuth()

	return (
		<header>
			<div className={'page-wrap'}>
				<div className={'icon-logo'}>
					<LogoGraphic />
				</div>
				<div className={'username'}>{ user.userName }</div>
			</div>
		</header>
	)
}
