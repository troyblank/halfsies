import { CognitoUserPool } from 'amazon-cognito-identity-js';

const POOL_DATA = {
    UserPoolId: 'us-west-2_eEQSBTOTA',
    ClientId: 'tlm54p6avpb3uph23irei9388'
};

export const userPool = new CognitoUserPool(POOL_DATA);

export default null;
