import { SIGN_IN_ERROR } from './actions';

export const initialState = {
    errorMessage: null
};

export default (state = initialState, action) => {
    const nextState = { ...state };

    switch (action.type) {
    case SIGN_IN_ERROR: {
        nextState.errorMessage = action.errorMessage;
        break;
    }
    default:
        return state;
    }

    return nextState;
};
