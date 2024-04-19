import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import classnames from 'classnames'
import { useAuth } from '../../contexts'
import { createHalfsie, resetCreateForm } from './actions'
import { AlertGraphic } from '../../graphics'
import { getLog } from '../log/actions'

export const CreateFormComponent = ({
	createStore,
	logStore,
	dispatch,
}) => {
	const { user } = useAuth()
	const { pending, errorMessage } = createStore
	const { log } = logStore
	const router = useRouter()

	const [amount, setAmount] = useState< string >('')
	const [description, setDescription] = useState< string >('')

	useEffect(() => {
		if (!log) dispatch(getLog(user))
	}, [])

	useEffect(() => {
		if (createStore.needsRedirect) router.push('/')

		dispatch(resetCreateForm())
	}, [createStore.needsRedirect])

	const onCreate = (e) => {
		if (!pending) dispatch(createHalfsie(user, { amount: Number(amount), description }))

		e.preventDefault()
	}

	if (!log) return null

	return (
		<section className={'page-wrap'}>
			<h1>Create a new Halfsie</h1>
			<form method={'post'} onSubmit={onCreate}>
				<div>
					<label htmlFor={'amount'}>Amount</label>
					<div>
						<input
							autoComplete={'off'}
							type={'number'}
							id={'amount'}
							required={true}
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
						/>
					</div>
				</div>
				<div>
					<label htmlFor={'description'}>Description</label>
					<div>
						<textarea
							id={'description'}
							cols={30}
							rows={10}
							required={true}
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
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
						type={'submit'}
						value={'Submit'}
						className={classnames({ pending })}
						aria-label={'submit'}
					/>
					<Link href={'/'}>
						<button className={'btn btn--alt'}>Cancel</button>
					</Link>
				</div>
			</form>
		</section>
	)
}

export default CreateFormComponent
