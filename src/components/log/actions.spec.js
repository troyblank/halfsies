import { assert } from 'chai';
import Chance from 'chance';
import {
    LOG_RECEIVED,
    ADD_LOG,
    logReceived,
    getLog,
    addLog
} from './actions';

describe('Log Actions', () => {
    const chance = new Chance();

    it('should be able to receive a log', () => {
        const log = [chance.word()];
        const action = logReceived(log);

        assert.deepEqual(action, { type: LOG_RECEIVED, log });
    });

    it('should be able to get a log', () => {
        assert.equal('function', typeof getLog());
    });

    it('should be able to add a log', () => {
        const log = {};
        const action = addLog(log);

        assert.deepEqual(action, { type: ADD_LOG, log });
    });
});
