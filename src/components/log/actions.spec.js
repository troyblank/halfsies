import { assert } from 'chai';
import Chance from 'chance';
import {
    LOG_RECEIVED,
    logReceived,
    getLog
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
});
