/**
 * 二维码扫描插
 * 1.二维码扫描并非在另外单独Activity加载
 * 2.二维码扫描功能扫码支持成功后不退出,可接着扫(类似扫码枪)
 * 3.二维码扫描的区域(正方形区域)最佳宽度为432(屏幕宽的分辨率的60%,一般手机720*1280)
 * 4.由于扫码成功后不退出,所以在不设置开始停止开关的情况下,后台做了暂停一小段时间(如1秒)的处理
 *   关于这种方式有待优化
 *
 * 变更履历
 * 2017/02/09 追加由web端传入的位置信息自动适配(居中)二维码扫描区域
 *
 * created by Sam 2017/11/08
 */
;(function(w){
    var pluginName = "pluginBarcode";
    var barcodePlugin = {
        // 加载二维码扫描控件
        loadBarcodeView : function(options,callback){
            var methodName = "loadBarcodeView";
            EminBridge.executePlugin(pluginName,methodName,[JSON.stringify(options), callback]);
        },
        // 停止二维码控件
        stopBarcode : function(){
            var methodName = "stopBarcode";
            EminBridge.executePlugin(pluginName,methodName,[]);
        },
        // 暂停扫描
        pauseScan : function() {
            var methodName = "pauseScan";
            EminBridge.executePlugin(pluginName,methodName,[]);
        },
        // 停止扫描
        stopScan : function() {
            var methodName = "stopScan";
            EminBridge.executePlugin(pluginName,methodName,[]);
        },
        // 恢复扫描
        resumeScan : function() {
            var methodName = "resumeScan";
            EminBridge.executePlugin(pluginName,methodName,[]);
        },
        // 打开/关闭闪光灯
        setFlashLight : function(onOrOff) {
            var methodName = "setFlashLight";
            EminBridge.executePlugin(pluginName,methodName,[onOrOff]);
        }
    }
    w.EminBridge.pluginBarcode = barcodePlugin;

})(window);