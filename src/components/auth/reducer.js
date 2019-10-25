import Cookies from 'js-cookie';
import { TOKEN_REFRESH } from './actions';
import { SIGN_IN_SUCCESS } from '../signIn/actions';

export const USER_STORE_KEY = 'user';

const userCookie = Cookies.get(USER_STORE_KEY);
const cookieUser = userCookie ? /* istanbul ignore next */ (JSON.parse(userCookie) || {}) : {};

export const initialState = {
    userName: cookieUser.userName,
    token: cookieUser.token,
    expireTime: cookieUser.expireTime,
    refreshToken: cookieUser.refreshToken
};

export default (state = initialState, action) => {
    const nextState = { ...state };

    switch (action.type) {
    case SIGN_IN_SUCCESS: {
        nextState.userName = action.userName;
        nextState.token = action.token;
        nextState.expireTime = action.expireTime;
        nextState.refreshToken = action.refreshToken;
        break;
    }
    case TOKEN_REFRESH: {
        nextState.token = action.token;
        nextState.expireTime = action.expireTime;
        break;
    }
    default:
        return state;
    }

    return nextState;
};
