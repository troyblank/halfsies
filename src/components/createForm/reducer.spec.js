import { assert } from 'chai';
import reducer, { initialState } from './reducer';
import {
    CREATE_HALFSIE_PENDING
} from './actions';

describe('Create Form Reducer', () => {
    it('should return initial state', () => {
        assert.deepEqual(reducer(undefined, {}), {
            pending: false
        });
    });

    it('should handle a sign in pending state', () => {
        assert.deepEqual(reducer(initialState, { type: CREATE_HALFSIE_PENDING }), {
            pending: true
        });
    });
});
