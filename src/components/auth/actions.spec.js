import { assert } from 'chai';
import Chance from 'chance';
import sinon from 'sinon';
import {
    TOKEN_REFRESH,
    tokenRefresh,
    getUpToDateToken
} from './actions';

describe('Auth Actions', () => {
    const chance = new Chance();

    it('should be able to generate a token refresh action', () => {
        const token = chance.word();
        const expireTime = chance.word();
        const refreshedToken = { token, expireTime };
        const action = tokenRefresh(refreshedToken);

        assert.deepEqual(action, { type: TOKEN_REFRESH, ...refreshedToken });
    });

    it('should be able to get an updated token if the current one is out of date without blowing up', () => {
        const auth = { expireTime: new Date().getTime() };

        assert.isTrue(Boolean(getUpToDateToken(sinon.spy(), auth)));
    });

    it('should be able to return the same token if it is not expired yet', (done) => {
        const token = chance.word();
        const expireTime = new Date().getTime() + 360000; // Six minutes in the future
        const auth = { expireTime, token };

        getUpToDateToken(sinon.spy(), auth)
            .then((resultToken) => {
                assert.equal(token, resultToken);
                done();
            });
    });
});
