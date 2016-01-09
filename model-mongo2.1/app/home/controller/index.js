'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction: function(self){
    var model = this.model('demo');
    model.where({id: {$eq: 6}}).find().then(function(data){
      console.log(data);
    })
    //auto render template file index_index.html
    return self.display();
  },
  addAction: function(){
    var model = this.model('demo');
    model.add({
        "id" : 6,
        "canshu" : [ 
            {
                "a" : 1,
                "b" : "111"
            }, 
            {
                "a" : 2,
                "b" : "222"
            }, 
            {
                "a" : 3,
                "b" : "333"
            }
        ]
    }).then(function(data){
      console.log(data);
    })
    return this.success(); 
  },
  pullAction: function(){
    var model = this.model('demo');
    model.where({id: 6}).update({$pull:{'canshu':{'a':1}}}).then(function(data){
      console.log(data);
    });
    return this.success(); 
  }
});