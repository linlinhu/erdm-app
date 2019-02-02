/**
 * 已收货清单数据表模型
 * 储存用户的收货清单列表
 * 
 * created by Sam 2017/12/01
 */
function ReceivedList() {
    BaseEntity.call(this);
    this.tableName = "receive_list";

    this.data = null;
    this.lastModifyTime = null;
}
ReceivedList.prototype = new BaseEntity();
