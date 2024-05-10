
import React from 'react'
import Chance from 'chance'
import { render } from '@testing-library/react'
import { mockAuthContext, mockLog, mockUser } from '../../testing'
import { useAuth } from '../../contexts'
import { useGetLog } from '../../data'
import { Log } from './log'

jest.mock('../../data')
jest.mock('../../contexts')

describe('Log', () => {
	const chance = new Chance()
	const log = mockLog()

	beforeEach(() => {
		jest.mocked(useAuth).mockReturnValue(mockAuthContext({
			user: mockUser({ username:  chance.word() }),
		}))

		jest.mocked(useGetLog).mockReturnValue({
			isFetching: false,
			data: log,
		} as any)
	})

	it('Should render.', () => {
		const { getByText } = render(<Log />)

		expect(getByText('Create a halfsie')).toBeInTheDocument()
	})

	it('Should be able to show a log.', () => {
		const { getByText } = render(<Log />)

		expect(getByText(log[chance.natural({ min: 0, max: log.length-1 })].description)).toBeInTheDocument()
	})

	it('Should show a pending state if the log is loading', () => {
		jest.mocked(useGetLog).mockReturnValue({
			isFetching: true,
			data: log,
		} as any)

		const { getByLabelText } = render(<Log />)

		expect(getByLabelText('Log is loading.')).toBeInTheDocument()
	})
})
