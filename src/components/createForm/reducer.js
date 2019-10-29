import {
    CREATE_HALFSIE_PENDING
} from './actions';

export const initialState = {
    pending: false
};

export default (state = initialState, action) => {
    const nextState = { ...state };

    switch (action.type) {
    case CREATE_HALFSIE_PENDING: {
        nextState.pending = true;
        break;
    }
    default:
        return state;
    }

    return nextState;
};
