
import React from 'react'
import { render } from '@testing-library/react'
import Chance from 'chance'
import { SKULL_GRAPHIC_TITLE, SHEEP_GRAPHIC_TITLE } from '../../graphics'
import Balance from './balance'

describe('Balance', () => {
	const chance = new Chance()
	const users: string[] = [chance.word(), chance.word()]

	it('should not render if there is no balance', () => {
		const balance: { amount?: number } = {}
		const { container } = render(<Balance users={users} balanceStore={balance} dispatch={jest.fn()} />)

		expect(container).toBeEmptyDOMElement()
	})

	it('should render with a zero balance', async() => {
		const balance: { amount?: number } = { amount: 0 }

		const { findAllByText, getByTitle } = render(<Balance users={users} balanceStore={balance} dispatch={jest.fn()} />)

		await expect(await findAllByText(balance.amount)).toHaveLength(2)
		expect(getByTitle(SKULL_GRAPHIC_TITLE)).toBeInTheDocument()
		expect(getByTitle(SHEEP_GRAPHIC_TITLE)).toBeInTheDocument()
	})

	it('should render user 1 active if the balance is positive', () => {
		const balance: { amount?: number } = { amount: 10 }

		const { getByTitle } = render(<Balance users={users} balanceStore={balance} dispatch={jest.fn()} />)

		expect(getByTitle(SKULL_GRAPHIC_TITLE)).toBeInTheDocument()
	})

	it('should render user 2 active if the balance is negative', () => {
		const balance: { amount?: number } = { amount: -10 }
		const { getByTitle } = render(<Balance users={users} balanceStore={balance} dispatch={jest.fn()} />)

		expect(getByTitle(SHEEP_GRAPHIC_TITLE)).toBeInTheDocument()
	})

	it('should be able to fetch balance on mount', () => {
		const balance: { amount?: number } = {}
		const dispatch = jest.fn()

		render(<Balance users={users} balanceStore={balance} dispatch={dispatch} />)

		expect(dispatch).toHaveBeenCalledTimes(1)
	})

	it('should not fetch balance on mount if there is already a balance', () => {
		const balance = { amount: chance.natural() }
		const dispatch = jest.fn()

		render(<Balance users={users} balanceStore={balance} dispatch={dispatch} />)

		expect(dispatch).toHaveBeenCalledTimes(0)
	})
})
