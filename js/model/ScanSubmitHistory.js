/**
 * 扫码收货提交记录表模型
 * 
 * 储存用户的提交的收货记录,不做业务处理,只记录
 * 
 * created by Sam 2017/12/01
 */
function ScanSubmitHistory() {
    BaseEntity.call(this);
    this.tableName = "scan_submit_history";

    this.logisticsSn = null;
    this.data = null;
    this.lastModifyTime = null;
}
ScanSubmitHistory.prototype = new BaseEntity();
