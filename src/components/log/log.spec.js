
import React from 'react'
import { assert } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Chance from 'chance'
import { render } from '@testing-library/react'
import Log from './log'

describe('Log', () => {
	const chance = new Chance()
	const userName = chance.word()

	it('should render', () => {
		const auth = { userName }
		const logStore = {
			log: [{
				amount: chance.natural(),
				description: chance.word(),
				user: userName,
				date: '2020-04-18T16:57:31.447Z',
			}],
		}
		const wrapper = shallow(<Log logStore={logStore} authStore={auth} />)

		assert.isTrue(wrapper.find('.log-list').exists())
	})

	it('should be able to fetch balance on mount', () => {
		const logStore = {}
		const auth = { userName }
		const dispatch = sinon.spy()

		render(
			<Log logStore={logStore} authStore={auth} dispatch={dispatch} />,
		)

		assert.isTrue(dispatch.calledOnce)
	})
})
