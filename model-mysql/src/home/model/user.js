'use strict';
/**
 * model
 */
export default class extends think.model.base {
  tableTest(){
    return this.table('user', true).select();
  }
  unionTest(){
    return this.union('SELECT * FROM think_pic2').select();
  }
  union2Test(){
    return this.union({table: "think_pic2"}, true).select();
  }
  joinTest(){
    return this.join("think_cate ON think_group.cate_id=think_cate.id").select();
  }
  join2Test(){
    return this.join([
      "think_cate ON think_group.cate_id=think_cate.id", 
      "RIGHT JOIN think_tag ON think_group.tag_id=think_tag.id"
    ]).select();
  }
  join3Test(){
    return this.join({
      table: 'cate', 
      join: 'inner', //join 方式，有 left, right, inner 3 种方式
      as: 'c', // 表别名
      on: ['cate_id', 'id'] //ON 条件
    }).select();
  }
  join4Test(){
    return this.alias('a').join({
      table: 'cate',
      join: 'left',
      as: 'c',
      on: ['cate_id', 'id']
    }).join({
      table: 'group_tag',
      join: 'left',
      as: 'd',
      on: ['id', 'group_id']
    }).select()
  }
  join5Test(){
    return this.alias('a').join({
      cate: {
        join: 'left', // 有 left,right,inner 3 个值
        as: 'c',
        on: ['id', 'id']
      },
      group_tag: {
        join: 'left',
        as: 'd',
        on: ['id', 'group_id']
      }
    }).select()
  }
  join6Test(){
    return this.join({
      cate: {
        on: ['id', 'id']
      },
      group_tag: {
        on: ['id', 'group_id']
      }
    }).select()
  }
  join7Test(){
    return this.join({
      cate: {on: 'id, id'},
      group_tag: {on: ['id', 'group_id']},
      tag: {
        on: { // 多个字段的 ON
          id: 'id',
          title: 'name'
        }
      }
    }).select()
  }
  async join8Test(){
    let sql = await this.model('group').buildSql();
    return this.join({
      table: sql,
      on: ['gid', 'id']
    }).select();
  }
  order1Test(){
    return this.order("id DESC, name ASC").select();
  }
  order2Test(){
    return this.order(['id DESC', 'name ASC']).select();
  }
  order3Test(){
    return this.order({
      id: 'DESC',
      name: 'ASC'
    }).select();
  }
  havingTest(){
    return this.having('view_nums> 1000 AND view_nums <2000').select();
  }
  groupTest(){
    return this.group('name').select();
  }
  distinctTest(){
    return this.distinct('name').select();
  }
  where1Test(){
    return this.where().select();
  }
  where2Test(){
    return this.where({id: 10}).select();
  }
  where3Test(){
    return this.where('id = 10 OR id < 2').select();
  }
  where4Test(){
    return this.where({id: ['!=', 10]}).select();
  }
  where5Test(){
    return this.where({name: ['EXP', "='name'"]}).select();
  }
  where6Test(){
    return this.where({title: ['NOTLIKE', 'welefen']}).select();
  }
  where7Test(){
    return this.where({title: ['like', '%welefen%']}).select();
  }
  where8Test(){
    return this.where({title: ['like', ['welefen', 'suredy']]}).select();
  }
  where9Test(){
    return this.where({'title|content': ['like', '%welefen%']}).select();
  }
  where10Test(){
    return this.where({id: ['IN', '10,20']}).select();
  }
  where11Test(){
    return this.where({id: ['IN', [10, 20]]}).select();
  }
  where12Test(){
    return this.where({id: ['BETWEEN', 1, 2]}).select();
  }
  where13Test(){
    return this.where({id: ['between', '1,2']}).select();
  }
  where14Test(){
    return this.where({id: 10, title: "www"}).select();
  }
  where15Test(){
    return this.where({id: {'>': 10, '<': 20}}).select();
  }
  where16Test(){
    return this.where({id: {'<': 10, '>': 20, _logic: 'OR'}}).select()
  }
  where17Test(){
    return this.where({
      title: 'test',
      _complex: {id: ['IN', [1, 2, 3]],
        content: 'www',
        _logic: 'or'
      }
    }).select()
  }
  where18Test(){
    return this.where({id: [10, 20, 30, 'OR']}).select();
  }
  where19Test(){
    return this.where({ id: { IN: [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ] } }).select();
  }
}