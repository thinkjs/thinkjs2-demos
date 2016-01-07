'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }
  async selectAction(){
    let data = await this.model('user').select();
    this.success(data);
  }
  async addAction(){
    let id = await this.model('user').addUser();
    this.success(id)
  }
  async countSelectAction(){
    let model = this.model('user');
    let result = await model.page(this.get('page'), 3).order('name ASC').field('name').countSelect(true);
    this.success(result);
  }

  async deleteAction(){
    let model = this.model('model');
    let result = await model.where({value: 'suredy1'}).delete();
    this.success(result);
  }

  async countAction(){
    let model = this.model('user');
    let data = await model.where({name: 'welefen2'}).count('name');
    this.success(data);
  }

  async findAction(){
    let model = this.model('user');
    let data = await model.find();
    this.success(data);
  }
  async indexesAction(){
    let model = this.model('user');
    let data = await model.getIndexes();
    this.success(data);
  }
  async distinctAction(){
    let data = await this.model('user').where({name: 'welefen2'}).distinct('name').select();
    this.success(data);
  }
  async sumAction(){
    let data = await this.model('user').where({sum: {'$gt': 300}}).sum('sum');
    this.success(data);
  }
  async incrementAction(){
    let model = this.model('user');
    var key = 'incrementAction' + Math.random();
    await model.add({
      key: key,
      num: 1
    });
    await model.where({key: key}).increment('num', 10);
    let data = await model.where({key: key}).find();
    this.success(data);
  }
  async decrementAction(){
    let model = this.model('user');
    var key = 'incrementAction' + Math.random();
    await model.add({
      key: key,
      num: 100
    });
    await model.where({key: key}).decrement('num', 10);
    let data = await model.where({key: key}).find();
    this.success(data);
  }
}