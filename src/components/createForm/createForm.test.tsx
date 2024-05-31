
import React from 'react'
import Chance from 'chance'
import { act, fireEvent, render, waitFor } from '@testing-library/react'
import { useRouter } from 'next/router'
import { nextTick } from 'process'
import { type User } from '../../types'
import { mockAuthContext, mockUser } from '../../testing'
import { useSaveHalfsie } from '../../data'
import { useAuth } from '../../contexts'
import { CreateForm } from './createForm'

jest.mock('next/router', () => ({
	__esModule: true,
	useRouter: jest.fn().mockImplementation(() => ({ push: jest.fn() })),
}))

jest.mock('../../data')

jest.mock('../../contexts')

describe('Create Form', () => {
	const chance = new Chance()

	beforeEach(() => {
		jest.mocked(useAuth).mockReturnValue(mockAuthContext({
			user: mockUser(),
		}))

		jest.mocked(useSaveHalfsie).mockReturnValue({
			mutate: jest.fn(),
			isPending: false,
			isSuccess: false,
			error: undefined,
		} as any)
	})

	it('should render', () => {
		const { getByText } = render(<CreateForm />)

		expect(getByText('Create a new Halfsie')).toBeInTheDocument()
	})

	it('should be able to create a halfsie', async() => {
		const user: User = mockUser()
		const saveHalfsie = jest.fn()

		jest.mocked(useAuth).mockReturnValue(mockAuthContext({ user }))

		jest.mocked(useSaveHalfsie).mockReturnValue({
			mutate: saveHalfsie,
			isPending: false,
			isSuccess: false,
		} as any)

		const { getByLabelText } = render(<CreateForm />)

		await waitFor(async() => {
			await fireEvent.submit(getByLabelText('submit'))
		})

		expect(saveHalfsie).toHaveBeenCalledWith({user, newLog: {amount: 0, description: ''}})
	})

	it('should not be able to create a halfsie if a pending form submit is already in progress', async() => {
		const saveHalfsie = jest.fn()

		jest.mocked(useSaveHalfsie).mockReturnValue({
			mutate: saveHalfsie,
			isPending: true,
			isSuccess: false,
		} as any)

		const { getByLabelText } = render(<CreateForm />)

		await waitFor(async() => {
			await fireEvent.submit(getByLabelText('submit'))
		})

		expect(saveHalfsie).toHaveBeenCalledTimes(0)
	})

	it('should show an error message if the create form does not work', () => {
		const errorMessage = chance.word()

		jest.mocked(useSaveHalfsie).mockReturnValue({
			mutate: jest.fn(),
			isPending: false,
			isSuccess: false,
			error: errorMessage,
		} as any)

		const { getByText } = render(<CreateForm />)

		expect(getByText(errorMessage)).toBeInTheDocument()
	})

	it('should keep amount in state', () => {
		const value = chance.natural()
		const { getByLabelText } = render(<CreateForm />)
		const amountInput = getByLabelText('Amount') as HTMLInputElement

		fireEvent.change(amountInput, { target: { value } })

		expect(amountInput.value).toStrictEqual(value.toString())
	})

	it('should keep description in state', async() => {
		const value = chance.word()
		const { getByLabelText } = render(<CreateForm />)
		const descriptionTextArea = getByLabelText('Description') as HTMLInputElement

		await act(async () => {
			fireEvent.change(descriptionTextArea, { target: { value } })

			await nextTick(() => {
				expect(descriptionTextArea.value).toStrictEqual(value.toString())
			})
		})
	})

	it('should be able to redirect to root of website after successful creation', async() => {
		jest.mocked(useSaveHalfsie).mockReturnValue({
			mutate: jest.fn(),
			isPending: false,
			isSuccess: true,
			error: undefined,
		} as any)

		const push = jest.fn()

		// @ts-ignore - not sure why typescript is complaining about this
		jest.mocked(useRouter).mockReturnValue({ push })

		render(<CreateForm />)

		await act(async () => {
			expect(push).toHaveBeenCalledTimes(1)
			expect(push).toHaveBeenCalledWith('/')
		})
	})
})
