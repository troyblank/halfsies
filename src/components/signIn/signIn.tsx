import React, { useState } from 'react'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import { type SignInOutput } from '../../types'
import { useAuth } from '../../contexts'
import { HOME_PATH } from '../../utils'
import { AlertGraphic, LogoGraphic } from '../../graphics'

export const SignIn = () => {
	const { push } = useRouter()
	const { attemptToSignIn } = useAuth()
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [pending, setPending] = useState<boolean>(false)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	const onSignIn = (event) => {
		setPending(true)

		attemptToSignIn({ username, password }).then(({ isUserComplete }: SignInOutput) => {
			if (isUserComplete) {
				push(HOME_PATH)
			} else {
				setErrorMessage('User is invalid.')
			}
		}).catch((error) => {
			setErrorMessage(String(error))
		}).finally(() => {
			setPending(false)
		})

		event.preventDefault()
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
						aria-label={'username'}
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor={'password'}>Password:</label>
					<input
						id={'password'}
						type={'password'}
						name={'password'}
						aria-label={'password'}
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
						aria-label={'submit'}
						data-pending-value={''}
					/>
				</div>
			</form>
		</div>
	)
}
