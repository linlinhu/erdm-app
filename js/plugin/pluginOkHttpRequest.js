;
(function(w) {
    var pluginName = "pluginOkHttpRequest";
    var plugin = {
        request: function(options) {
            var url = options.url;
            var path = options.path;
            var data = options.data ? options.data : {};
            var header = options.header;
            var okCb = options.success;
            var errorCb = options.error;
            var success = typeof(okCb) == 'function' ? okCb.toString() : null;
            var fail = typeof(errorCb) == 'function' ? errorCb.toString() : null;
            options.success = success;
            options.error = fail;

            var methodName = 'get';
            if(options.type === 'post') {
                methodName = 'post';
            }
            return EminBridge.executePlugin(pluginName, methodName, [JSON.stringify(options)]);
        },
        cancel: function(requestId) {
            var methodName = "cancel";
            return EminBridge.executePlugin(pluginName, methodName, [requestId]);
        }
    };
    w.EminBridge.ohr = plugin;
})(window);