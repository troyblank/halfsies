import { USERS } from '../../config'

export type User = {
    fullName: string,
    jwtToken: string,
    username: typeof USERS[number]
}
