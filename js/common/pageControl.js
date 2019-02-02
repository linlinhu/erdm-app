var pager = function() {
    
    var action = {
        back :function() {
            EminBridge.back();  
        },
        openWindow : function(options) {
            EminBridge.openWindow(JSON.stringify(options));
        },
        // 1.跳转[登录]界面
        toLoginPage : function(ops) {
            var defaultOption = {
                url: 'pages/login.html',
                id: 'login'
            };
            var options = (ops == null) ? defaultOption : ops;
            EminBridge.openWindow(JSON.stringify(options));
        },
        // 2.跳转到[用户注册]界面
        toRegisterPage : function(ops) {
            var defaultOption = {
                url: 'pages/register.html',
                id: 'register'
            };
            var options = (ops == null) ? defaultOption : ops;
            EminBridge.openWindow(JSON.stringify(options));
        },
        // 3.跳转到主页[志愿者新闻]界面
        toIndexPage : function(ops) {
            var defaultOption = {
                url: 'index.html',
                id: 'index'
            };
            var options = (ops == null) ? defaultOption : ops;
            EminBridge.openWindow(JSON.stringify(options));
        },
        
        // 4.跳转到[个人主页]界面
        toPersonalPage : function(ops) {
            var defaultOption = {
                url: 'pages/personal.html',
                id: 'personal'
            };
            var options = (ops == null) ? defaultOption : ops;
            EminBridge.openWindow(JSON.stringify(options));
        },
        // 5.跳转到[个人账户]界面
        toAccountPage : function(ops) {
            var defaultOption = {
                url: 'pages/account.html',
                id: 'account'
            };
            var options = (ops == null) ? defaultOption : ops;
            EminBridge.openWindow(JSON.stringify(options));
        },
        // 6.跳转到[任务详情]界面
        toTaskPage : function(ops) {
            var defaultOption = {
                url: 'pages/task.html',
                id: 'task'
            };
            var options = (ops == null) ? defaultOption : ops;
            EminBridge.openWindow(JSON.stringify(options));
        },
        // 7.跳转到[消息通知]界面
        toMessagePage : function(ops) {
            var defaultOption = {
                url: 'pages/message.html',
                id: 'message'
            };
            var options = (ops == null) ? defaultOption : ops;
            EminBridge.openWindow(JSON.stringify(options));
        },
        // 8.跳转到[消息搜索]界面
        toSearchPage : function(ops) {
            var defaultOption = {
                url: 'pages/search.html',
                id: 'search'
            };
            var options = (ops == null) ? defaultOption : ops;
            EminBridge.openWindow(JSON.stringify(options));
        },
        // 9.跳转到认证信息界面
        toAttestationPage : function(ops) {
            var defaultOption = {
                url: 'pages/attestation.html',
                id: 'attestation'
            };
            var options = (ops == null) ? defaultOption : ops;
            EminBridge.openWindow(JSON.stringify(options));
        },
        //10.跳转到志愿者申请界面
        toApplicationPage : function(ops) {
            var defaultOption = {
                url: 'pages/application.html',
                id: 'application'
            };
            var options = (ops == null) ? defaultOption : ops;
            EminBridge.openWindow(JSON.stringify(options));
        },
        // 12.跳转到待开发界面
        toWaitPage : function(ops) {
            var defaultOption = {
                url: 'pages/wait.html',
                id: 'wait'
            };
            var options = (ops == null) ? defaultOption : ops;
            EminBridge.openWindow(JSON.stringify(options));
        }
    };
    
    return action;
}();