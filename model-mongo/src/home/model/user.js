'use strict';
/**
 * model
 */

export default class extends think.model.mongo {
  init(...args){
    super.init(...args);
    this.indexes = {
      name1: 1,
      test1: {
        name2: 1,
        title2: 1
      }
    }
  }
  addUser(){
    return this.add({
      name: 'welefen' + Math.random(),
      title: 'haha'
    })
  }
}