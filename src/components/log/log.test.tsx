
import React from 'react'
import Chance from 'chance'
import { render } from '@testing-library/react'
import Log from './log'

describe('Log', () => {
	const chance = new Chance()
	const userName: string = chance.word()

	it('should not fetch a log on mount if there is already a log in state', () => {
		const logStore = { log: [] }
		const auth = { userName }
		const dispatch = jest.fn()

		render(<Log logStore={logStore} authStore={auth} dispatch={dispatch} />)

		expect(dispatch).toHaveBeenCalledTimes(0)
	})
})
