/**
 * 扫码收货提交记录表模型
 * 
 * 储存用户的提交的收货记录,不做业务处理,只记录
 * 
 * created by Sam 2017/12/01
 */
function ScanList() {
    BaseEntity.call(this);
    this.tableName = "scan_list";
    
    // 物流单号,扫码查询产品信息后会匹配物流单号
    this.logisticsSn = null;
    this.data = null;
    this.lastModifyTime = null;
}
ScanList.prototype = new BaseEntity();
