export const CREATE_HALFSIE_PENDING = 'CREATE_HALFSIE_PENDING';
export const CREATE_HALFSIE_ERROR = 'CREATE_HALFSIE_ERROR';

export const createHalfsiePending = () => ({ type: CREATE_HALFSIE_PENDING });
export const createHalfsieError = (errorMessage) => ({ type: CREATE_HALFSIE_ERROR, errorMessage });

export const createHalfsie = () => (
    /* istanbul ignore next */
    (dispatch) => {
        dispatch(createHalfsiePending());

        // post action to go here
    }
);
