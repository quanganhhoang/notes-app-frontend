const config = {
  STRIPE_KEY: 'pk_test_TUqy271L51ic4Bit4cV6vxKN006lgDDgKV',
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: 'us-west-2',
    BUCKET: 'notes-app-upload-cs7680',
  },
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://cllwsrrf55.execute-api.us-west-2.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_2zqCAtJfi',
    APP_CLIENT_ID: '5lhq2kvnmq1l1fvp85dmad36b4',
    IDENTITY_POOL_ID: 'us-west-2:6e95fb5f-f5fc-48d6-8f49-a69dae06b377',
  },
};

export default config;
