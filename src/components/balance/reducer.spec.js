import { assert } from 'chai'
import Chance from 'chance'
import reducer from './reducer'
import { BALANCE_RECEIVED } from './actions'


describe('Balance Reducer', () => {
	const chance = new Chance()

	it('should return initial state', () => {
		assert.deepEqual(reducer(undefined, {}), {})
	})

	it('should set a balance received', () => {
		const amount = chance.natural()

		assert.deepEqual(reducer({}, { type: BALANCE_RECEIVED, amount }), { amount })
	})
})
