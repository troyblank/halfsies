import { UserType } from '..'

export type RequiredNewUserAttributesType = {
    // eslint-disable-next-line camelcase
    family_name: string,
    // eslint-disable-next-line camelcase
    given_name: string,
}

export type AttemptToSignInType = (userName: string, password: string) => Promise<UserType | null>
export type AttemptToCompleteNewUserType = (password: string, attributes: RequiredNewUserAttributesType) => Promise<any>

export type AuthContextType = {
    attemptToCompleteNewUser: AttemptToCompleteNewUserType
    attemptToSignIn: AttemptToSignInType,
    user: UserType | null,
}
