import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import { AlertGraphic, LogoGraphic } from '../../graphics'
import { signInUser } from './actions'

export const SignInComponent = ({ dispatch, signInStore }) => {
	const { errorMessage, pending } = signInStore
	const router = useRouter()

	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		if (signInStore.needsRedirect) router.push('/')
	}, [signInStore.needsRedirect])

	const onSignIn = (e) => {
		if (!pending) dispatch(signInUser({ userName, password }))

		e.preventDefault()
	}

	return (
		<div className={'page-wrap sign-in'}>
			<header>
				<div className={'icon-logo'}>
					<LogoGraphic />
				</div>
			</header>
			<form method={'post'} onSubmit={onSignIn}>
				<div>
					<label htmlFor={'username'}>Username:</label>
					<input
						id={'username'}
						type={'text'}
						name={'username'}
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor={'password'}>Password:</label>
					<input
						id={'password'}
						type={'password'}
						name={'password'}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				{ errorMessage &&
					<div className={'alert alert__error'}>
						<div className={'icon-alert-error'}>
							<AlertGraphic />
						</div>
						<strong>{ errorMessage }</strong>
					</div>
				}
				<div>
					<input
						className={classnames({ pending })}
						type={'submit'}
						value={'Login'}
						data-pending-value={''}
					/>
				</div>
			</form>
		</div>
	)
}

export default SignInComponent
