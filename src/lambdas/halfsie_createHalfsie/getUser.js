const AWS = require('aws-sdk');

const CISP = new AWS.CognitoIdentityServiceProvider();

function getUser(AccessToken) {
    return new Promise((resolve) => {
        CISP.getUser({ AccessToken }, (err, result) => {
            let errorMessage;
            let user;

            if (err) {
                errorMessage = err.message;
            } else {
                user = result;
            }

            resolve({ user, errorMessage });
        });
    });
}

module.exports = getUser;
