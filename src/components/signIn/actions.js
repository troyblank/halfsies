import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { userPool } from '../../config/awsCognito';

export const SIGN_IN_PENDING = 'SIGN_IN_PENDING';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

export const signInPending = () => ({ type: SIGN_IN_PENDING });
export const signInSuccess = ({ userName, token, expireTime, refreshToken }) => ({ type: SIGN_IN_SUCCESS, userName, token, expireTime, refreshToken });
export const signInError = (errorMessage) => ({ type: SIGN_IN_ERROR, errorMessage });

export const signInUser = ({ userName, password }) => (
    /* istanbul ignore next */
    (dispatch) => {
        const authenticationData = {
            Username: userName,
            Password: password
        };
        const authenticationDetails = new AuthenticationDetails(authenticationData);
        const userData = { Username: userName, Pool: userPool };
        const cognitoUser = new CognitoUser(userData);

        dispatch(signInPending());

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
                const t = result.getAccessToken();
                const token = t.getJwtToken();
                const expireTime = new Date(t.payload.exp * 1000);
                const refreshToken = result.getRefreshToken().getToken();

                dispatch(signInSuccess({ userName, token, expireTime, refreshToken }));
            },
            onFailure: (err) => {
                dispatch(signInError(err.message));
            }
        });
    }
);
