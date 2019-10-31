import { BALANCE_RECEIVED } from './actions';

export const initialState = {};

export default (state = initialState, action) => {
    const nextState = { ...state };

    switch (action.type) {
    case BALANCE_RECEIVED: {
        nextState.amount = action.amount;
        break;
    }
    default:
        return state;
    }

    return nextState;
};
