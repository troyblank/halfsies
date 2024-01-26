
import React from 'react'
import { render } from '@testing-library/react'
import Chance from 'chance'
import { mockAuthContext, mockUser } from '../../testing'
import { useAuth } from '../../contexts'
import { Header } from './header'

jest.mock('../../contexts')

describe('Header', () => {
	const chance = new Chance()

	it('should render', () => {
		const username: string = chance.word()

		jest.mocked(useAuth).mockReturnValue(mockAuthContext({ user:mockUser({ username }) }))

		const { getByText } = render(<Header />)

		expect(getByText(username)).toBeInTheDocument()
	})
})
