import {
    CREATE_HALFSIE_PENDING,
    CREATE_HALFSIE_ERROR,
    CREATE_HALFSIE_SUCCESS
} from './actions';

export const initialState = {
    errorMessage: null,
    pending: false,
    needsRedirect: false
};

export default (state = initialState, action) => {
    const nextState = { ...state };

    switch (action.type) {
    case CREATE_HALFSIE_PENDING: {
        nextState.pending = true;
        break;
    }
    case CREATE_HALFSIE_ERROR: {
        nextState.errorMessage = action.errorMessage;
        nextState.pending = false;
        break;
    }
    case CREATE_HALFSIE_SUCCESS: {
        nextState.needsRedirect = true;
        break;
    }
    default:
        return state;
    }

    return nextState;
};
