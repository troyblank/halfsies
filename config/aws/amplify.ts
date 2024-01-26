import { ResourcesConfig } from 'aws-amplify';

export const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'us-west-2_eEQSBTOTA',
      userPoolClientId: 'tlm54p6avpb3uph23irei9388',
      identityPoolId: '',
    },
  },
} as ResourcesConfig;
