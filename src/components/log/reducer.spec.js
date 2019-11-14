import { assert } from 'chai';
import Chance from 'chance';
import reducer, { initialState } from './reducer';
import {
    LOG_RECEIVED,
    ADD_LOG
} from './actions';

describe('Log Reducer', () => {
    const chance = new Chance();

    it('should return initial state', () => {
        assert.deepEqual(reducer(undefined, {}), {});
    });

    it('should handle receiving a log', () => {
        const log = [chance.word()];

        assert.deepEqual(reducer(initialState, { type: LOG_RECEIVED, log }), {
            log
        });
    });

    it('should handle adding a log', () => {
        const log = [2, 3];
        const newLog = 1;

        assert.deepEqual(reducer({ log }, { type: ADD_LOG, log: newLog }), {
            log: [1, 2, 3]
        });
    });
});
