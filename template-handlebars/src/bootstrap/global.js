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

import HandlebarseAdapter from 'think-template-handlebars';
think.adapter('template', 'handlebars', HandlebarseAdapter);


// console.log(thinkCache(thinkCache.ALIAS_EXPORT))