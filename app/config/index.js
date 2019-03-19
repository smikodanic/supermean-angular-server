/*
 * environment dependant configuration:
 * $ export NODE_ENV=development
 * $ export NODE_ENV=production
 */

const config_env = require('./env/' + (process.env.NODE_ENV || 'development'));

const config = {
  project_name: '', // must be same as angular.json::defaultProject value
  env: config_env
};

module.exports = config;
