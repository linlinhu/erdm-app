/**
 * Webview插件
 * 可获取指定的webview(默认是当前webview)的id,以及被传递进来的参数等
 *
 * created by Sam 2017/1/11
 */
;(function(w){
    var pluginName = "pluginWebview";
    var webview = {
        currentWebview : function(){
            var methodName = "currentWebview";
            EminBridge.executePlugin(pluginName,methodName,[]);
        },
        getWebviewById : function(viewId){
            var methodName = "getWebviewById";
            return EminBridge.executePlugin(pluginName,methodName,[viewId]);
        },
        getId : function(){
            var methodName = "getId";
            return EminBridge.executePlugin(pluginName,methodName,[]);
        },
        getExtras : function(){
            var methodName = "getExtras";
            return EminBridge.executePlugin(pluginName,methodName,[]);
        },
        invokeMethod : function(viewId,name,paramJsonString){
            var methodName = "invokeMethod";
            return EminBridge.executePlugin(pluginName,methodName,[viewId,name,paramJsonString]);
        }
    };
    w.EminBridge.pluginWebview = webview;
})(window)