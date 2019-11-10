import { assert } from 'chai';
import {
    CREATE_HALFSIE_PENDING,
    createHalfsiePending,
    createHalfsie
} from './actions';

describe('Creat Form Actions', () => {
    it('should be able to generate a create action', () => {
        assert.equal('function', typeof createHalfsie());
    });

    it('should be able to generate a create pending action', () => {
        const action = createHalfsiePending();

        assert.deepEqual(action, { type: CREATE_HALFSIE_PENDING });
    });
});
