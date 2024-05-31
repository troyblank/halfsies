import Chance from 'chance'
import { mockLog, mockNewLog, mockUser } from '../../testing'
import { getAndValidateResponseData } from '../../utils/apiCommunication'
import { saveHalfsie } from './halfsie'

jest.mock('../../utils/apiCommunication')

describe('Halfsie', () => {
	const chance = new Chance()

	it('Should be able to save a halfsie.', async() => {
		const newBalance: number = chance.integer()
		const newLogs = mockLog()

		jest.mocked(getAndValidateResponseData).mockResolvedValue({ data: { newBalance, newLogs } })

		expect(await saveHalfsie({ user: mockUser(), newLog: mockNewLog()})).toEqual({
			newBalance,
			newLogs,
		})
	})
})
