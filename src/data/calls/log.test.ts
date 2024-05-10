import { Log } from '../../types'
import { mockLog, mockUser } from '../../testing'
import { getAndValidateResponseData } from '../../utils/apiCommunication'
import { getLog } from './log'

jest.mock('../../utils/apiCommunication')

describe('Log', () => {

	it('Should be able to get a log.', async() => {
		const log: Log[] = mockLog()

		jest.mocked(getAndValidateResponseData).mockResolvedValue({ data: { log } })

		expect(await getLog(mockUser())).toEqual(log)
	})
})
