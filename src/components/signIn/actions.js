import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { userPool } from '../../config/awsCognito';

export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

export const signInError = (errorMessage) => ({ type: SIGN_IN_ERROR, errorMessage });

export const signIn = ({ userName, password }) => (
    /* istanbul ignore next */
    (dispatch) => {
        const authenticationData = {
            Username: userName,
            Password: password
        };
        const authenticationDetails = new AuthenticationDetails(authenticationData);
        const userData = { Username: userName, Pool: userPool };
        const cognitoUser = new CognitoUser(userData);

        cognitoUser.authenticateUser(authenticationDetails, {
            onFailure: (err) => {
                dispatch(signInError(err.message));
            }
        });
    }
);
