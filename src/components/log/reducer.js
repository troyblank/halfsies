import { LOG_RECEIVED } from './actions';

export const initialState = {};

export default (state = initialState, action) => {
    const nextState = { ...state };

    switch (action.type) {
    case LOG_RECEIVED: {
        nextState.log = action.log;
        break;
    }
    default:
        return state;
    }

    return nextState;
};
