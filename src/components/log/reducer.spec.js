import Chance from 'chance'
import reducer, { initialState } from './reducer'
import {
	LOG_RECEIVED,
	ADD_LOG,
} from './actions'

describe('Log Reducer', () => {
	const chance = new Chance()

	it('should return initial state', () => {
		expect(reducer(undefined, {})).toStrictEqual({})
	})

	it('should handle receiving a log', () => {
		const log = [chance.word()]

		expect(reducer(initialState, { type: LOG_RECEIVED, log })).toStrictEqual({ log })
	})

	it('should handle adding a log', () => {
		const log = [2, 3]
		const newLog = 1

		expect(reducer({ log }, { type: ADD_LOG, log: newLog })).toStrictEqual({ log: [1, 2, 3] })
	})
})
