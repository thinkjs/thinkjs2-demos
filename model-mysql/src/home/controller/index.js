'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    let data = await this.model('user').select();
    //auto render template file index_index.html
    return this.success(data);
  }
  async addAction(){
    let data = {
      name: 'welefen' + Math.random(),
      email: 'admin@thinkjs.org',
      title: Math.random()
    }
    let result = await this.model('user').add(data);
    this.success(result);
  }
  async findAction(){
    let data = await this.model('user').where({id: 1}).find();
    this.success(data);
  }
  async countSelectAction(){
    let data = await this.model('user').page(100, 3).countSelect(false);
    this.success(data);
  }
  testAction(){
    let model = this.model('user');
    model.where19Test();
    this.success();
  }
}