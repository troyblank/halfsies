import { assert } from 'chai'
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

		assert.deepEqual(action, { type: BALANCE_RECEIVED, amount })
	})

	it('should be able to get a balance', () => {
		assert.equal('function', typeof getBalance())
	})
})
