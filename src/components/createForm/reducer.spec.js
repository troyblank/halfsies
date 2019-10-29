import { assert } from 'chai';
import Chance from 'chance';
import reducer, { initialState } from './reducer';
import {
    CREATE_HALFSIE_PENDING,
    CREATE_HALFSIE_ERROR
} from './actions';

describe('Create Form Reducer', () => {
    const chance = new Chance();

    it('should return initial state', () => {
        assert.deepEqual(reducer(undefined, {}), {
            errorMessage: null,
            pending: false
        });
    });

    it('should handle a sign in pending state', () => {
        assert.deepEqual(reducer(initialState, { type: CREATE_HALFSIE_PENDING }), {
            errorMessage: null,
            pending: true
        });
    });

    it('should handle a sign in pending state', () => {
        const errorMessage = chance.word();

        assert.deepEqual(reducer(initialState, { type: CREATE_HALFSIE_ERROR, errorMessage }), {
            errorMessage,
            pending: false
        });
    });
});
