export const CREATE_HALFSIE_PENDING = 'CREATE_HALFSIE_PENDING';

export const createHalfsiePending = () => ({ type: CREATE_HALFSIE_PENDING });

export const createHalfsie = () => (
    /* istanbul ignore next */
    (dispatch) => {
        dispatch(createHalfsiePending());

        // post action to go here
    }
);
