
import React from 'react'
import Chance from 'chance'
import { act, fireEvent, render } from '@testing-library/react'
import { useRouter } from 'next/router'
import { nextTick } from 'process'
import CreateForm from './createForm'

jest.mock('next/router')

describe('Create Form', () => {
	const chance = new Chance()
	const logStore = { log: [] }

	it('should keep amount in state', () => {
		const value = chance.natural()
		const dispatch = jest.fn()
		const { getByLabelText } = render(<CreateForm createStore={{}} logStore={logStore} dispatch={dispatch} />)
		const amountInput = getByLabelText('Amount')

		fireEvent.change(amountInput, { target: { value } })

		expect(amountInput.value).toStrictEqual(value.toString())
	})

	it('should keep description in state', async() => {
		const value = chance.word()
		const dispatch = jest.fn()
		const { getByLabelText } = render(<CreateForm createStore={{}} logStore={logStore} dispatch={dispatch} />)
		const descriptionTextArea = getByLabelText('Description')

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
			expect(push).toBeCalledTimes(1)
			expect(push).toBeCalledWith('/')
			expect(dispatch).toBeCalledTimes(1)
		})
	})
})
