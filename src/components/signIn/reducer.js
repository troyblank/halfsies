import {
    SIGN_IN_PENDING,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR
} from './actions';

export const initialState = {
    errorMessage: null,
    needsRedirect: false,
    pending: false
};

export default (state = initialState, action) => {
    const nextState = { ...state };

    switch (action.type) {
    case SIGN_IN_PENDING: {
        nextState.pending = true;
        break;
    }
    case SIGN_IN_SUCCESS: {
        nextState.errorMessage = null;
        nextState.needsRedirect = true;
        break;
    }
    case SIGN_IN_ERROR: {
        nextState.errorMessage = action.errorMessage;
        nextState.pending = false;
        break;
    }
    default:
        return state;
    }

    return nextState;
};
