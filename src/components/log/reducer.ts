import { LOG_RECEIVED, ADD_LOG } from './actions';
import { LogState } from './interfaces';

export const initialState: LogState = {};

export default (state = initialState, action) => {
    const nextState = { ...state };
    const { log } = nextState;

    switch (action.type) {
    case LOG_RECEIVED: {
        nextState.log = action.log;
        break;
    }
    case ADD_LOG: {
        const newLog = log.slice(0);

        newLog.unshift(action.log);
        nextState.log = newLog;
        break;
    }
    default:
        return state;
    }

    return nextState;
};
