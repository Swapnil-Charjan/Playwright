// config/env.js
const ENV = {
  DEV: {
    baseURL: 'https://works-jnc.dev.skewbdigital.co.uk/',
    username: 'james.tyreman@skewb.uk',
    password: 'Password!444'
  },
  STAGING: {
    baseURL: 'https://works-jnc.staging.skewbdigital.co.uk/',
    username: 'james.tyreman@skewb.uk',
    password: 'Password!444'
  },
  PROD: {
    baseURL: 'https://works-jnc.skewbdigital.co.uk/',
    username: 'james.tyreman@skewb.uk',
    password: 'Password!444'
  }
};

export default ENV[process.env.ENV || 'DEV'];