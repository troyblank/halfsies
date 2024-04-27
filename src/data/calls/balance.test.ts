import Chance from 'chance'
import { mockUser } from '../../testing'
import { getAndValidateResponseData } from '../../utils/apiCommunication'
import { getBalance } from './balance'

jest.mock('../../utils/apiCommunication')

describe('Balance', () => {
	const chance = new Chance()

	it('Should be able to get a balance.', async() => {
		const balance: number = chance.integer()

		jest.mocked(getAndValidateResponseData).mockResolvedValue({ data: { balance } })

		expect(await getBalance(mockUser())).toEqual(balance)
	})
})
