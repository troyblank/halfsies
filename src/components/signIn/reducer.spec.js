import { assert } from 'chai';
import Chance from 'chance';
import reducer, { initialState } from './reducer';
import {
    SIGN_IN_PENDING,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR
} from './actions';

describe('SignIn Reducer', () => {
    const chance = new Chance();

    it('should return initial state', () => {
        assert.deepEqual(reducer(undefined, {}), {
            errorMessage: null,
            needsRedirect: false,
            pending: false
        });
    });

    it('should handle a sign in success', () => {
        const errorMessage = chance.word();

        assert.deepEqual(reducer(initialState, { type: SIGN_IN_ERROR, errorMessage }), {
            errorMessage,
            needsRedirect: false,
            pending: false
        });
    });

    it('should handle a sign in error', () => {
        assert.deepEqual(reducer(initialState, { type: SIGN_IN_SUCCESS }), {
            errorMessage: null,
            needsRedirect: true,
            pending: false
        });
    });

    it('should handle a sign in pending state', () => {
        assert.deepEqual(reducer(initialState, { type: SIGN_IN_PENDING }), {
            errorMessage: null,
            needsRedirect: false,
            pending: true
        });
    });
});
