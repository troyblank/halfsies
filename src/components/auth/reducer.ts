import Cookies from 'js-cookie';
import { TOKEN_REFRESH } from './actions';
import { SIGN_IN_SUCCESS } from '../signIn/actions';

export const TOKEN_STORE_KEY = 'token';
export const REFRESH_TOKEN_STORE_KEY = 'refreshToken';

// Loosely coupled server setting of JWT_EXPIRE_DAYS.
const JWT_EXPIRE_DAYS = 90;

const tokenCookie = Cookies.get(TOKEN_STORE_KEY);
const refreshTokenCookie = Cookies.get(REFRESH_TOKEN_STORE_KEY);
const initialToken = tokenCookie ? /* istanbul ignore next */ (JSON.parse(tokenCookie) || {}) : {};
const initialRefreshToken = refreshTokenCookie ? /* istanbul ignore next */ (JSON.parse(refreshTokenCookie) || {}) : {};

export type Auth = {
    userName?: string,
    token?: string,
    expireTime?: string,
    refreshToken?: string
}

export type Action = {
    type: string,
    userName?: string,
    token?: string,
    expireTime?: string,
    refreshToken?: string
}

export const initialState = {
    userName: initialRefreshToken.userName,
    token: initialToken.token,
    expireTime: initialToken.expireTime,
    refreshToken: initialRefreshToken.refreshToken
};

export default (state: Auth = initialState, action: Action): Auth => {
    const { userName, token, expireTime, refreshToken } = action;
    let nextState = { ...state };

    switch (action.type) {
    case SIGN_IN_SUCCESS: {
        const tokenData = { token, expireTime };
        const refreshTokenData = { refreshToken, userName };

        nextState = {
            ...nextState,
            ...tokenData,
            ...refreshTokenData
        };

        Cookies.set(TOKEN_STORE_KEY, tokenData, { expires: JWT_EXPIRE_DAYS });
        Cookies.set(REFRESH_TOKEN_STORE_KEY, refreshTokenData, { expires: JWT_EXPIRE_DAYS });
        break;
    }
    case TOKEN_REFRESH: {
        const tokenData = { token, expireTime };

        nextState = {
            ...nextState,
            ...tokenData
        };

        Cookies.set(TOKEN_STORE_KEY, tokenData, { expires: JWT_EXPIRE_DAYS });
        break;
    }
    default:
        return state;
    }

    return nextState;
};
