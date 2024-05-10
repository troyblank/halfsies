
import React from 'react'
import { render } from '@testing-library/react'
import Chance from 'chance'
import { useGetBalance } from '../../data'
import { SKULL_GRAPHIC_TITLE, SHEEP_GRAPHIC_TITLE } from '../../graphics'
import { Balance } from './balance'

jest.mock('../../data', () => ({
	...jest.requireActual('../../data'),
	useGetBalance: jest.fn(),
}))

describe('Balance', () => {
	const chance = new Chance()

	beforeEach(() => {
		jest.mocked(useGetBalance).mockReturnValue({
			isFetching: false,
			data: chance.integer(),
		} as any)
	})

	it('Should render with a zero balance.', async() => {
		const balance: number = chance.natural()

		jest.mocked(useGetBalance).mockReturnValue({
			isFetching: false,
			data: balance,
		} as any)

		const { findAllByText, getByTitle } = render(<Balance />)

		await expect(await findAllByText(balance)).toHaveLength(2)
		expect(getByTitle(SKULL_GRAPHIC_TITLE)).toBeInTheDocument()
		expect(getByTitle(SHEEP_GRAPHIC_TITLE)).toBeInTheDocument()
	})

	it('Should render user 1 active if the balance is positive.', () => {
		jest.mocked(useGetBalance).mockReturnValue({
			isFetching: false,
			data: chance.natural(),
		} as any)

		const { getByTitle } = render(<Balance />)

		expect(getByTitle(SKULL_GRAPHIC_TITLE)).toBeInTheDocument()
	})

	it('Should render user 2 active if the balance is negative.', () => {
		jest.mocked(useGetBalance).mockReturnValue({
			isFetching: false,
			data: chance.integer({ max: -5 }),
		} as any)

		const { getByTitle } = render(<Balance />)

		expect(getByTitle(SHEEP_GRAPHIC_TITLE)).toBeInTheDocument()
	})

	it('Should not show any prices while data is pending.', async() => {
		const balance: number = chance.integer()

		jest.mocked(useGetBalance).mockReturnValue({
			isFetching: true,
			data: balance,
		} as any)

		const { queryByText } = render(<Balance />)

		await expect(await queryByText(balance)).not.toBeInTheDocument()
	})
})
