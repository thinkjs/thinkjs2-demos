'use strict';
/**
 * db config
 * @type {Object}
 */
module.exports = {
  type: 'mongo',
  log_sql: true,
  log_connect: true,
  adapter: {
    mongo: {
      host: '127.0.0.1',
      port: '',
      database: 'test',
      user: '',
      password: '',
      prefix: 'think_',
      encoding: 'utf8'
    }
  }
};