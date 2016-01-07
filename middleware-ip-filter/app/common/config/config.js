'use strict';
/**
 * config
 * @type {Object}
 */
module.exports = {
  ip_filter: function(){
    return Promise.resolve(['10.*'])
  }
  //key: value
};