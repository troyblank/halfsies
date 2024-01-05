import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

global.userEvent = userEvent.setup()

global.afterEach(() => {
	jest.spyOn(console, 'info').mockImplementation(() => {})

	jest.clearAllMocks()
})

window.alert = jest.fn()
