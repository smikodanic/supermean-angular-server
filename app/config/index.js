/*
 * environment dependant configuration:
 * $ export NODE_ENV=development
 * $ export NODE_ENV=production
 */

const config_env = require('./env/' + (process.env.NODE_ENV || 'development'));

const config = {
  server_name: 'SuperMEAN Angular Server',
  env: config_env
};

module.exports = config;
