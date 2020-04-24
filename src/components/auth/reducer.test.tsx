import Chance from 'chance';
import reducer, { initialState } from './reducer';
import { TOKEN_REFRESH } from './actions';
import { SIGN_IN_SUCCESS } from '../signIn/actions';

describe('Auth Reducer', () => {
    const chance = new Chance();
    const token = chance.word();
    const expireTime = chance.word();
    const nonCookieState = {
        userName: undefined,
        token: undefined,
        expireTime: undefined,
        refreshToken: undefined
    };

    test('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(nonCookieState);
    });

    test('should handle a sign in success', () => {
        const userName = chance.word();
        const refreshToken = chance.word();
        const user = { userName, token, expireTime, refreshToken };

        expect(reducer(initialState, { type: SIGN_IN_SUCCESS, ...user })).toEqual({ ...user });
    });

    test('should handle a token refresh', () => {
        const refreshedToken = { ...initialState, token, expireTime };
        expect(reducer(initialState, { type: TOKEN_REFRESH, ...refreshedToken })).toEqual({ ...refreshedToken });
    });
});
