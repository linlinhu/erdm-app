/**
 * 文本工具类 
 */
var TextUtil = function() {
    var action = {
        isEmpty : function(txt) {
            if(txt == null || txt == "" || txt == 'undefined') {
                return true;
            }
            return false;
        }
    };
    return action;
}();