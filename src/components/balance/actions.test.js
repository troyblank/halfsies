// @ts-nocheck - reducer code is not typed and is planned to be removed
import Chance from 'chance'
import {
	BALANCE_RECEIVED,
	balanceReceived,
	getBalance,
} from './actions'

describe('Balance Actions', () => {
	const chance = new Chance()

	it('should be able to receive a balance', () => {
		const amount = chance.natural()
		const action = balanceReceived(amount)

		expect(action).toStrictEqual({ type: BALANCE_RECEIVED, amount })
	})

	it('should be able to get a balance', () => {
		expect(typeof getBalance()).toEqual('function')
	})
})
