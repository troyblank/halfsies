export enum REQUIRED_USER_FIELDS {
    // eslint-disable-next-line camelcase
    family_name,
    // eslint-disable-next-line camelcase
    given_name
}

export type UserType = {
    fullName: string,
    isValid: boolean,
    jwtToken: string,
    needsNewPassword: boolean,
    requiredAttributes: REQUIRED_USER_FIELDS[],
    userName: string
}
