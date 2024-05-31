
import Chance from 'chance'
import { ISO8601Time } from '../../types'
import { USERS } from '../../../config'
import { type Log, type NewLog } from '../../types'

const chance = new Chance()

export const mockALog = (overrides: Partial<Log> = {}): Log => {
	return {
		amount: chance.integer({ min: -100, max: 100 }),
		date: chance.date().toISOString() as ISO8601Time,
		description: chance.sentence(),
		user: chance.pickone(USERS),
		id: chance.natural(),
		...overrides,
	}
}

export const mockLog = (): Log[] => {
	const amountOfLogs: number = chance.natural({ min: 1, max: 300 })

	return Array.from (Array(amountOfLogs)).map(() => mockALog())
}

export const mockNewLog = (): NewLog => ({
	amount: chance.natural(),
	description: chance.sentence(),
})
