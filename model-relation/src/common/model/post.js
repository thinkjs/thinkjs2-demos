'use strict';
/**
 * relation model
 */
export default class extends think.model.relation {
  relation = {
    cate: {
      type: think.model.MANY_TO_MANY,
      rModel: 'post_cate',
      //rfKey: 'cate_id'
    }
  }
  /**
   * init
   * @param  {} args []
   * @return {}         []
   */
  init(...args){
    super.init(...args);

    // this.relation = {
    //   // comment: {
    //   //   type: think.model.HAS_MANY
    //   // },
    //   cate: {
    //     type: think.model.MANY_TO_MANY,
    //     rModel: 'post_cate',
    //     //rfKey: 'cate_id'
    //   }
    // }
  }
}