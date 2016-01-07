'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mongo',
  host: '127.0.0.1',
  port: '',
  name: 'demoee',
  user: '',
  pwd: '',
  prefix: 'think_',
  encoding: 'utf8',
  nums_per_page: 10,
  log_sql: true,
  log_connect: true,
  cache: {
    on: true,
    type: '',
    timeout: 3600
  }
};