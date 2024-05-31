
import React from 'react'
import { render } from '@testing-library/react'
import { Head } from './head'

describe('Head', () => {
	it('should render', () => {
		const { container } = render(<Head />)

		expect(container).toBeInTheDocument()
	})
})
