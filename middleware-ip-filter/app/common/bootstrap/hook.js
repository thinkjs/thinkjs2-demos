/**
 * this file will be loaded before server started
 * you can register app hook
 */

var ipFilter = require('think-ip-filter');
think.middleware('ip_filter', ipFilter);