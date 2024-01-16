import Chance from 'chance'
import reducer, { initialState } from './reducer'
import {
	CREATE_HALFSIE_PENDING,
	CREATE_HALFSIE_ERROR,
	CREATE_HALFSIE_SUCCESS,
	CREATE_HALFSIE_RESET,
} from './actions'

describe('Create Form Reducer', () => {
	const chance = new Chance()

	it('should return initial state', () => {
		expect(reducer(undefined, {})).toStrictEqual(initialState)
	})

	it('should handle a create form pending state', () => {
		expect(reducer(initialState, { type: CREATE_HALFSIE_PENDING })).toStrictEqual({
			errorMessage: null,
			pending: true,
			needsRedirect: false,
		})
	})

	it('should handle a create form error message', () => {
		const errorMessage = chance.word()

		expect(reducer(initialState, { type: CREATE_HALFSIE_ERROR, errorMessage })).toStrictEqual({
			errorMessage,
			pending: false,
			needsRedirect: false,
		})
	})

	it('should handle when the form needs a redirect', () => {
		expect(reducer(initialState, { type: CREATE_HALFSIE_SUCCESS })).toStrictEqual({
			errorMessage: null,
			pending: false,
			needsRedirect: true,
		})
	})

	it('should be able to reset the halfsie form', () => {
		const dirtyState = {
			errorMessage: chance.word(),
			pending: chance.bool(),
			needsRedirect: chance.bool(),
		}

		expect(reducer(dirtyState, { type: CREATE_HALFSIE_RESET })).toStrictEqual(initialState)
	})
})
