import { assert } from 'chai';
import Chance from 'chance';
import {
    CREATE_HALFSIE_PENDING,
    CREATE_HALFSIE_ERROR,
    createHalfsiePending,
    createHalfsie,
    createHalfsieError
} from './actions';

describe('Creat Form Actions', () => {
    const chance = new Chance();

    it('should be able to generate a create action', () => {
        assert.equal('function', typeof createHalfsie());
    });

    it('should be able to generate a create pending action', () => {
        const action = createHalfsiePending();

        assert.deepEqual(action, { type: CREATE_HALFSIE_PENDING });
    });

    it('should be able to generate a create error action', () => {
        const errorMessage = chance.word();
        const action = createHalfsieError(errorMessage);

        assert.deepEqual(action, { type: CREATE_HALFSIE_ERROR, errorMessage });
    });
});
