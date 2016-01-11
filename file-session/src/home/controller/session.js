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
      name: this.get('name') || 'wwww'
    }
    await this.session('userInfo', data);
    return this.redirect('/session/get');
  }
  async deleteAction(){
    await this.session();
    return this.redirect('/session/get');
  }
}