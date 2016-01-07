'use strict';

var Base = require('./base.js');

var fs = require('fs');
var path = require('path');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction: function(self){
    //auto render template file index_index.html
    return self.display();
  },
  uploadAction: function(){
    //这里的 key 需要和 form 表单里的 name 值保持一致
    var file = think.extend({}, this.file('image'));

    var filepath = file.path;

    //文件上传后，需要将文件移动到项目其他地方，否则会在请求结束时删除掉该文件
    var uploadPath = think.RESOURCE_PATH + '/upload';
    think.mkdir(uploadPath);
    var basename = path.basename(filepath);
    fs.renameSync(filepath, uploadPath + '/' + basename);

    file.path = uploadPath + '/' + basename;

    if(think.isFile(file.path)){
      console.log('is file')
    }else{
      console.log('not exist')
    }

    this.assign('fileInfo', file);

    this.display();
  }
});