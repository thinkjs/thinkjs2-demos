/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 * 
 * global.fn1 = function(){
 *     
 * }
 */

var crontab = require('node-crontab');

console.log('bootstrap/global')
// 1 分钟执行一次
var jobId = crontab.scheduleJob("*/1 * * * *", function(){
  var d = new Date();
  console.log('conrtab callback', d.getMinutes())
  return think.http('/index/test', true);
});
