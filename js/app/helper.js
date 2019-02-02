//Template7中的自定义方法，需要在var myApp = new Framework7({...,precompileTemplates: true});之前引用
/**
 * 格式化日期[年月日时分]
 */
/*Template7.registerHelper('yyyyMMddHHmm', function (value) {
    var date = new Date(value);
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
});
*/
Template7.registerHelper('yyyyMMddHHmm', function (value) {
    var date = new Date(value);
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + (Array(2).join(0) + date.getMinutes()).slice(-2);
});

/**
 * 格式化日期[年月日]
 */
Template7.registerHelper('yyyyMMdd', function (value) {
    var date = new Date(value);
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
});

