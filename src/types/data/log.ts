import { USERS } from '../../../config'
import { type ISO8601Time } from '../'

export type NewLog = {
	amount: number
	description: string
}

export type Log = {
	amount: number
	description: string
	date: ISO8601Time
	id: number,
	user: typeof USERS[number]
}
