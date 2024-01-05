
import React from 'react'
import Chance from 'chance'
import { render } from '@testing-library/react'
import { mockAuthContext, mockUser } from '../../testing'
import { useAuth } from '../../contexts'
import Log from './log'

jest.mock('../../contexts')

describe('Log', () => {
	const chance = new Chance()
	const userName: string = chance.word()

	it('should render', () => {
		const logStore = {
			log: [{
				amount: chance.natural(),
				description: chance.word(),
				user: userName,
				date: '2020-04-18T16:57:31.447Z',
			}],
		}

		jest.mocked(useAuth).mockReturnValue(mockAuthContext({
			user: mockUser({ userName }),
		}))

		const { getByText } = render(<Log logStore={logStore} dispatch={jest.fn()} />)

		expect(getByText('Create a halfsie')).toBeInTheDocument()
	})

	it('should be able to fetch log on mount', () => {
		const logStore = {}
		const dispatch = jest.fn()

		render(
			<Log logStore={logStore} dispatch={dispatch} />,
		)

		expect(dispatch).toBeCalledTimes(1)
	})

	it('should not fetch a log on mount if there is already a log in state', () => {
		const logStore = { log: [] }
		const dispatch = jest.fn()

		jest.mocked(useAuth).mockReturnValue(mockAuthContext({
			user: mockUser({ userName }),
		}))

		render(<Log logStore={logStore} dispatch={dispatch} />)

		expect(dispatch).toHaveBeenCalledTimes(0)
	})
})
