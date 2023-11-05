import React from 'react'
import { assert } from 'chai'
import { shallow } from 'enzyme'
import Chance from 'chance'
import sinon from 'sinon'
import { act, render } from '@testing-library/react'
import { useRouter } from 'next/router'

import CreateForm from './createForm'

jest.mock('next/router')

describe('Create Form', () => {
	const chance = new Chance()
	const logStore = { log: [] }

	beforeEach(() => {
		jest.mocked(useRouter).mockReturnValue({
			push: jest.fn(),
		})
	})

	it('should render', () => {
		const wrapper = shallow(<CreateForm createStore={{}} logStore={logStore} />)

		assert.equal(wrapper.find('h1').text(), 'Create a new Halfsie')
	})

	it('should not render without a log', () => {
		act(() => {
			const wrapper = shallow(<CreateForm createStore={{}} logStore={{}} />)

			assert.equal(wrapper.html(), null)
		})
	})

	it('should be able to sign in a user', () => {
		const createStore = { pending: false }
		const dispatch = sinon.spy()
		const preventDefault = sinon.spy()
		const wrapper = shallow(<CreateForm createStore={createStore} logStore={logStore} dispatch={dispatch} />)
		const form = wrapper.find('form')

		form.simulate('submit', { preventDefault })

		assert.isTrue(dispatch.calledOnce)
		assert.isTrue(preventDefault.calledOnce)
	})

	it('should not be able to create a halfsie if a pending form submit is already in progress', () => {
		const createStore = { pending: true }
		const dispatch = sinon.spy()
		const preventDefault = sinon.spy()
		const wrapper = shallow(<CreateForm createStore={createStore} logStore={logStore} dispatch={dispatch} />)
		const form = wrapper.find('form')

		act(() => {
			form.simulate('submit', { preventDefault })

			assert.isFalse(dispatch.called)
			assert.isTrue(preventDefault.calledOnce)
		})
	})

	it('should show an error message if the create form does not work', () => {
		const errorMessage = chance.word()
		const createStore = { pending: true, errorMessage }

		act(() => {
			const wrapper = shallow(<CreateForm createStore={createStore} logStore={logStore} />)

			assert.equal(wrapper.find('.alert__error strong').text(), errorMessage)

		})
	})

	it('should fetch a log if there is no log to be found', () => {
		const dispatch = sinon.spy()
		render(<CreateForm createStore={{}} logStore={{}} dispatch={dispatch} />)

		assert.isTrue(dispatch.calledTwice)
	})
})
