import React, { Fragment } from 'react'
import classnames from 'classnames'
import { useAuth } from '../../contexts'
import { useGetBalance } from '../../data'
import { BalanceSheepGraphic, BalanceSkullGraphic } from '../../graphics'

export default function BalanceComponent({ users }) {
	const { user } = useAuth()
	const { isFetching, data: amount } = useGetBalance(user)

	const balanceDisplay = Math.abs(amount)
	const user1Active = amount >= 0
	const user2Active = amount <= 0

	return (
		<section className={'balance'}>
			<div className={'page-wrap'}>
				<div
					className={classnames('balance__circle', {
						active: user1Active,
					})}
				>
					{ isFetching && <div className={'balance__pending'} /> }
					{ !isFetching &&
						<Fragment>
							<div className={'balance__circle-content'}>
								<div className={'icon'} >
									<BalanceSkullGraphic />
								</div>
								<div className={'dollar-icon'}>$</div>
								<div className={'number'}>{ balanceDisplay }</div>
								<div className={'user'}>{ users[0] }</div>
							</div>
							<div className={'balance__circle-highlight'}><div /></div>
						</Fragment>
					}
				</div>
				<div className={'balance__vs'}>
					<h1>Vs</h1>
				</div>
				<div
					className={classnames('balance__circle', {
						active: user2Active,
					})}
				>
					{ isFetching && <div className={'balance__pending'} /> }
					{ !isFetching &&
						<Fragment>
							<div className={'balance__circle-content'}>
								<div className={'icon'} >
									<BalanceSheepGraphic />
								</div>
								<div className={'dollar-icon'}>$</div>
								<div className={'number'}>{ balanceDisplay }</div>
								<div className={'user'}>{ users[1] }</div>
							</div>
							<div className={'balance__circle-highlight'}><div /></div>
						</Fragment>
					}
				</div>
			</div>
		</section>
	)
}
