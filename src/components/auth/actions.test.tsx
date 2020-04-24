import Chance from 'chance';
import {
    TOKEN_REFRESH,
    tokenRefresh,
    getUpToDateToken
} from './actions';

describe('Auth Actions', () => {
    const chance = new Chance();

    test('should be able to generate a token refresh action', () => {
        const token = chance.word();
        const expireTime = chance.word();
        const refreshedToken = { token, expireTime };
        const action = tokenRefresh(refreshedToken);

        expect(action).toEqual({ type: TOKEN_REFRESH, ...refreshedToken });
    });

    test('should be able to get an updated token if the current one is out of date without blowing up', () => {
        const auth = { expireTime: new Date().getTime() };

        expect(Boolean(getUpToDateToken(jest.fn(), auth))).toBe(true);
    });

    test('should be able to return the same token if it is not expired yet', (done) => {
        const token = chance.word();
        const expireTime = new Date().getTime() + 360000; // Six minutes in the future
        const auth = { expireTime, token };

        getUpToDateToken(jest.fn(), auth)
            .then((resultToken) => {
                expect(token).toEqual(resultToken);
                done();
            });
    });
});
