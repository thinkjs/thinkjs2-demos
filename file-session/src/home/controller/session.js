'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async getAction(){
    let data = await this.session('userInfo');
    this.success(data);
  }
  async setAction(){
    let data = {
      name: 'wwww'
    }
    await this.session('userInfo', data);
    this.success();
  }
}