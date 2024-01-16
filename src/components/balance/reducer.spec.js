import Chance from 'chance'
import reducer from './reducer'
import { BALANCE_RECEIVED } from './actions'


describe('Balance Reducer', () => {
	const chance = new Chance()

	it('should return initial state', () => {
		expect(reducer(undefined, {})).toStrictEqual({})
	})

	it('should set a balance received', () => {
		const amount = chance.natural()

		expect(reducer({}, { type: BALANCE_RECEIVED, amount })).toStrictEqual({ amount })
	})
})
