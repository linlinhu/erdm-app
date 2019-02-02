/**
 * orm模型基础类
 * 通过orm操作数据库的前端模型(表)均继承该类
 *
 * created by Sam 2017/11/03
 */
function BaseEntity() {
	this.tableName = ""; // 表名
	this.id = null;      // 主键id
	
	this.description = function() {
		console.log("Entity for table '" + this.tableName + "'");
	};
}

BaseEntity.prototype.test = function() {
};

