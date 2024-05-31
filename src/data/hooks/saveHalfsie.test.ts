import { act, renderHook, waitFor } from '@testing-library/react'
import Chance from 'chance'
import { mockUser, mockNewLog, TestProviders } from '../../testing'
import { getAndValidateResponseData } from '../../utils/apiCommunication'
import { queryClient } from '../queryClient'
import { GET_BALANCE_QUERY_KEY } from './getBalance'
import { GET_LOG_QUERY_KEY } from './getLog'
import { useSaveHalfsie } from './saveHalfsie'

jest.mock('../../utils/apiCommunication')

describe('Save Halfsie', () => {
	const chance = new Chance()

	it('Should be able to save a halfsie.', async() => {
		const newBalance = chance.natural()
		const newLogs = mockNewLog()
		const setQueryDataMock = jest.fn()

		global.fetch = jest.fn().mockResolvedValue({
			ok: true,
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Bearer sdfdsf`,
			},
			json: async() => ({ newBalance, newLogs }),
		})

		jest.mocked(getAndValidateResponseData).mockResolvedValue({ response: { ok: true }, data: { newBalance, newLogs } } as any)
		jest.spyOn(queryClient, 'setQueryData').mockImplementation(setQueryDataMock)

		const { result } = renderHook(() => useSaveHalfsie(), { wrapper: TestProviders })

		act(() => {
			result.current.mutate({ user: mockUser(), newLog: mockNewLog() })
		})

		await waitFor(() => result.current.isSuccess)

		expect(setQueryDataMock).toHaveBeenCalledTimes(2)
		expect(setQueryDataMock).toHaveBeenNthCalledWith(1, [GET_BALANCE_QUERY_KEY], newBalance)
		expect(setQueryDataMock).toHaveBeenNthCalledWith(2, [GET_LOG_QUERY_KEY], newLogs)
	})
})
