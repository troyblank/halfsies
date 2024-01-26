
import React from 'react'
import Chance from 'chance'
import { act, fireEvent, render, waitFor } from '@testing-library/react'
import { useRouter } from 'next/router'
import { nextTick } from 'process'
import { type User } from '../../types'
import { mockAuthContext, mockUser } from '../../testing'
import { useAuth } from '../../contexts'
import CreateForm from './createForm'
import * as actions from './actions'

jest.mock('next/router', () => ({
	__esModule: true,
	useRouter: jest.fn().mockImplementation(() => ({ push: jest.fn() })),
}))

jest.mock('../../contexts')

describe('Create Form', () => {
	const chance = new Chance()
	const logStore = { log: [] }

	beforeEach(() => {
		jest.mocked(useAuth).mockReturnValue(mockAuthContext({
			user: mockUser(),
		}))
	})

	it('should render', () => {
		const { getByText } = render(<CreateForm createStore={{}} logStore={logStore} dispatch={jest.fn()} />)

		expect(getByText('Create a new Halfsie')).toBeInTheDocument()
	})

	it('should not render without a log', () => {
		act(() => {
			const { container } = render(<CreateForm createStore={{}} logStore={{}} dispatch={jest.fn()} />)

			expect(container).toBeEmptyDOMElement()
		})
	})

	it('should be able to create a halfsie', async() => {
		const createStore = { pending: false }
		const dispatch = jest.fn()
		const user: User = mockUser()

		jest.mocked(useAuth).mockReturnValue(mockAuthContext({ user }))
		jest.spyOn(actions, 'createHalfsie')

		const { getByLabelText } = render(<CreateForm createStore={createStore} logStore={logStore} dispatch={dispatch} />)

		await waitFor(async() => {
			await fireEvent.submit(getByLabelText('submit'))
		})

		expect(actions.createHalfsie).toHaveBeenLastCalledWith(user, {amount: 0, description: ''})
	})

	it('should not be able to create a halfsie if a pending form submit is already in progress', async() => {
		const createStore = { pending: true, log: [] }
		const dispatch = jest.fn()
		const { getByLabelText } = render(<CreateForm createStore={createStore} logStore={logStore} dispatch={dispatch} />)

		await waitFor(async() => {
			await fireEvent.submit(getByLabelText('submit'))
		})

		expect(dispatch).toHaveBeenCalledTimes(1)
		expect(dispatch).toHaveBeenCalledWith({ type: 'CREATE_HALFSIE_RESET' })
	})

	it('should show an error message if the create form does not work', () => {
		const errorMessage = chance.word()
		const createStore = { pending: true, errorMessage }

		const { getByText } = render(<CreateForm createStore={createStore} logStore={logStore} dispatch={jest.fn()} />)

		expect(getByText(errorMessage)).toBeInTheDocument()
	})

	it('should fetch a log if there is no log to be found', () => {
		const dispatch = jest.fn()

		render(<CreateForm createStore={{}} logStore={{}} dispatch={dispatch} />)

		expect(typeof dispatch.mock.calls[0][0]).toBe('function')
	})

	it('should keep amount in state', () => {
		const value = chance.natural()
		const dispatch = jest.fn()
		const { getByLabelText } = render(<CreateForm createStore={{}} logStore={logStore} dispatch={dispatch} />)
		const amountInput = getByLabelText('Amount') as HTMLInputElement

		fireEvent.change(amountInput, { target: { value } })

		expect(amountInput.value).toStrictEqual(value.toString())
	})

	it('should keep description in state', async() => {
		const value = chance.word()
		const dispatch = jest.fn()
		const { getByLabelText } = render(<CreateForm createStore={{}} logStore={logStore} dispatch={dispatch} />)
		const descriptionTextArea = getByLabelText('Description') as HTMLInputElement

		await act(async () => {
			fireEvent.change(descriptionTextArea, { target: { value } })

			await nextTick(() => {
				expect(descriptionTextArea.value).toStrictEqual(value.toString())
			})
		})
	})

	it('should be able to redirect to root of website after successful creation', async() => {
		const dispatch = jest.fn()
		const createStore = { needsRedirect: true }
		const push = jest.fn()

		// @ts-ignore - not sure why typescript is complaining about this
		jest.mocked(useRouter).mockReturnValue({ push })

		render(<CreateForm createStore={createStore} logStore={logStore} dispatch={dispatch} />)

		await act(async () => {
			expect(push).toHaveBeenCalledTimes(1)
			expect(push).toHaveBeenCalledWith('/')
			expect(dispatch).toHaveBeenCalledTimes(1)
		})
	})
})
