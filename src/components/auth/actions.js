import { CognitoRefreshToken, CognitoUser } from 'amazon-cognito-identity-js';
import { userPool } from '../../config/awsCognito';

export const TOKEN_REFRESH = 'TOKEN_REFRESH';

export const tokenRefresh = ({ token, expireTime }) => ({ type: TOKEN_REFRESH, token, expireTime });

// Returns a token that will be automatically refreshed if it needs to be.
export const getUpToDateToken = (dispatch, auth) => new Promise((resolve, reject) => {
    const { userName, token, expireTime, refreshToken } = auth;
    const now = new Date();
    const threeMinutesFromNow = new Date(now.getTime() + 180000);

    if (new Date(expireTime) <= threeMinutesFromNow) {
        const cognitoRefreshToken = new CognitoRefreshToken({ RefreshToken: refreshToken });
        const cognitoUser = new CognitoUser({
            Username: userName,
            Pool: userPool
        });

        /* istanbul ignore next */
        cognitoUser.refreshSession(cognitoRefreshToken, (err, session) => {
            if (err) {
                reject(err);
            } else {
                const t = session.getAccessToken();
                const refreshedToken = t.getJwtToken();
                const refreshedExpireTime = new Date(t.payload.exp * 1000);

                dispatch(tokenRefresh({ token: refreshedToken, expireTime: refreshedExpireTime }));
                resolve(refreshedToken);
            }
        });
    } else {
        resolve(token);
    }
});
