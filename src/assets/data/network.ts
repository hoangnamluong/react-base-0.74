const environment: 'TEST' | 'PRODUCTION' = 'TEST';
const API: string =
  environment === 'TEST'
    ? 'http://115.146.123.107:9999/api/'
    : 'http://115.146.123.107:9999/api/';

export {API};
