
import React from 'react'
import { render } from '@testing-library/react'
import Chance from 'chance'
import LogItem from './logItem'

describe('Log Item', () => {
	const chance = new Chance()

	it('should render a negative item', () => {
		const userName: string = chance.word()
		const log = {
			amount: chance.natural(),
			description: chance.word(),
			user: `${userName}${chance.word()}`,
		}
		const { container } = render(<LogItem log={log} userName={userName} />)

		expect(container.firstChild).toHaveClass('negative')
	})

	it('should render a positive item', () => {
		const userName = chance.word()
		const log = {
			amount: chance.natural(),
			description: chance.word(),
			user: userName,
		}

		const { container } = render(<LogItem log={log} userName={userName} />)

		expect(container.firstChild).not.toHaveClass('negative')
	})

	it('should render a negative negative making it positive item', () => {
		const userName = chance.word()
		const log = {
			amount: 0 - chance.natural(),
			description: chance.word(),
			user: `${userName}${chance.word()}`,
		}

		const { container } = render(<LogItem log={log} userName={userName} />)

		expect(container.firstChild).not.toHaveClass('negative')
	})

	it('should render a positive negative item making it a negative', () => {
		const userName = chance.word()
		const log = {
			amount: 0 - chance.natural(),
			description: chance.word(),
			user: userName,
		}

		const { container } = render(<LogItem log={log} userName={userName} />)

		expect(container.firstChild).toHaveClass('negative')
	})
})
