/**
 * 网络插件
 * 可注册设备对网络状态的监听,并通过回调的方式通知web
 *
 * created by Sam 2017/1/11
 */
;(function(w){
    var pluginName = "pluginNetwork";
    var pluginNetwork = {
        addNetStateListener : function(callback){
            var methodName = "addNetStateListener";
            EminBridge.executePlugin(pluginName,methodName,[callback]);
        },
        removeNetStateListener : function(){
        	var methodName = "removeNetStateListener";
        	EminBridge.executePlugin(pluginName,methodName,[]);
        },
        getNetworkState : function(){
            var methodName = "getNetworkState";
            return EminBridge.executePlugin(pluginName,methodName,[]);
        }
    };
    w.EminBridge.pluginNetwork = pluginNetwork;

})(window)