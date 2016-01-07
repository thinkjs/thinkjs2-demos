'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    let model = this.model('post');
    let data = await model.select();

    this.success(data);
    //auto render template file index_index.html
    //return this.display();
  }
}