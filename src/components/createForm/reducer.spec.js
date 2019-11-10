import { assert } from 'chai';
import Chance from 'chance';
import reducer, { initialState } from './reducer';
import {
    CREATE_HALFSIE_PENDING,
    CREATE_HALFSIE_ERROR,
    CREATE_HALFSIE_SUCCESS,
    CREATE_HALFSIE_RESET
} from './actions';

describe('Create Form Reducer', () => {
    const chance = new Chance();

    it('should return initial state', () => {
        assert.deepEqual(reducer(undefined, {}), {
            errorMessage: null,
            pending: false,
            needsRedirect: false
        });
    });

    it('should handle a create form pending state', () => {
        assert.deepEqual(reducer(initialState, { type: CREATE_HALFSIE_PENDING }), {
            errorMessage: null,
            pending: true,
            needsRedirect: false
        });
    });

    it('should handle a create form error message', () => {
        const errorMessage = chance.word();

        assert.deepEqual(reducer(initialState, { type: CREATE_HALFSIE_ERROR, errorMessage }), {
            errorMessage,
            pending: false,
            needsRedirect: false
        });
    });

    it('should handle when the form needs a redirect', () => {
        assert.deepEqual(reducer(initialState, { type: CREATE_HALFSIE_SUCCESS }), {
            errorMessage: null,
            pending: false,
            needsRedirect: true
        });
    });

    it('should be able to reset the halfsie form', () => {
        const dirtyState = {
            errorMessage: chance.word(),
            pending: chance.bool(),
            needsRedirect: chance.bool()
        };

        assert.deepEqual(reducer(dirtyState, { type: CREATE_HALFSIE_RESET }), initialState);
    });
});
