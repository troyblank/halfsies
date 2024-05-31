import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import classnames from 'classnames'
import { useAuth } from '../../contexts'
import { useSaveHalfsie } from '../../data'
import { AlertGraphic } from '../../graphics'

export const CreateForm = () => {
	const { user } = useAuth()
	const { mutate: saveHalfsie, isPending, isSuccess, error } = useSaveHalfsie()
	const router = useRouter()
	const [amount, setAmount] = useState< string >('')
	const [description, setDescription] = useState< string >('')

	useEffect(() => {
		if (isSuccess) router.push('/')
	}, [isSuccess])

	const onCreate = (e) => {
		if (!isPending) {
			saveHalfsie({ user, newLog: { amount: Number(amount), description }})
		}

		e.preventDefault()
	}

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
				{ error &&
					<div className={'alert alert__error'}>
						<div className={'icon-alert-error'}>
							<AlertGraphic />
						</div>
						<strong>{ error.toString() }</strong>
					</div>
				}
				<div>
					<input
						type={'submit'}
						value={'Submit'}
						className={classnames({ pending: isPending })}
						aria-label={'submit'}
						disabled={isPending}
					/>
					<Link href={'/'}>
						<button className={'btn btn--alt'}>Cancel</button>
					</Link>
				</div>
			</form>
		</section>
	)
}
