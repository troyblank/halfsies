import { assert } from 'chai';
import Chance from 'chance';
import {
    SIGN_IN_ERROR,
    signIn,
    signInError
} from './actions';

describe('SignIn Actions', () => {
    const chance = new Chance();

    it('should be able to generate a sign in error action', () => {
        const errorMessage = chance.word();
        const action = signInError(errorMessage);

        assert.deepEqual(action, { type: SIGN_IN_ERROR, errorMessage });
    });

    it('should be able to sign in as a sanity check', () => {
        const userName = chance.word();
        const password = chance.word();

        assert.equal('function', typeof signIn({ userName, password }));
    });
});
