/**
 * 运行时插件
 *
 * created by Sam 2017/12/13
 */
;(function(w){
    var pluginName = "pluginRuntime";
    var pg = {
        exit : function(){
            var methodName = "exit";
            EminBridge.executePlugin(pluginName, methodName, []);
        }
    };
    w.EminBridge.pluginRuntime = pg;

})(window);