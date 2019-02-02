var volunteerId  = null;
var index = function() {
    var action = {};
    function getUserDetail(){
        EminBridge.ohr.request({
            url: serviceConfig.getUserDetailUrl,
            path:serviceConfig.getUserDetailPath,
            data:{
                id: localStorage.userId
            },
            type:'get',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    localStorage.mobile =result.result.mobile;
                    $$('.panel-left .mobile').html(localStorage.mobile);
                } else {
                    var errCode = result.code;
                    var errMsg = serviceConfig.getErrorMsg(errCode);
                    myApp.alert(errMsg, '温馨提示');
                }
            },
            error:function(e) {
                myApp.hidePreloader();
                EminBridge.toast('网络不给力');
            }
        });
    };
    function getVolunteerDetail(){
        EminBridge.ohr.request({
            url: serviceConfig.findVolunteerByUserIdUrl,
            path:localStorage.userId,
            data:{},
            type:'get',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    volunteerId  = result.result.id;
                    localStorage.volunteerDetail = JSON.stringify(result.result);
                    $$('.volunteer .application').addClass('hide');
                    $$('.volunteer .attestation').removeClass('hide');
                } else {
                    volunteerId  = null;
                    localStorage.volunteerDetail = null;
                    $$('.volunteer .application').removeClass('hide');
                    $$('.volunteer .attestation').addClass('hide');
                }
            },
            error:function(e) {
                myApp.hidePreloader();
                EminBridge.toast('网络不给力');
            }
        });
    };
    
    //将用户数据存到本地
    function saveLocalUser(data) {
        console.log('## should save username:' + data.username);
        localStorage.mobile = data.mobile;
        localStorage.username = data.username;
        localStorage.email = data.email;
    };
    //清除本地用户信息
    function clearLocalUser() {
        localStorage.mobile = '';
        localStorage.username = '';
        localStorage.email = '';
    };
    function onNetStateChange(e) {
        console.log("## onNetStateChange:" + JSON.stringify(e));
        var state = Number(JSON.parse(e).type);
        switch(state) {
            case -1:
                console.log("## 无网络");
                break;
            case 0:
                console.log("## 当前使用的是移动蜂窝煤网络");
                break;
            case 1:
                console.log("## 当前使用的是wifi网络");
                break;
            default:
                break
        }
    };

    function logout() {
        myApp.confirm('确认退出app吗？', '温馨提示：', function() {
            localStorage.isLogin = false;
            index.clearLocalUser();
            var viewId = 'login';
            var view = EminBridge.pluginWebview.getWebviewById(viewId);
            if(view == null) {
                pager.toLoginPage();
            } else {
                EminBridge.popToWindow(viewId);
            }
        });
    };
    action = {
        getUserDetail: getUserDetail,
        getVolunteerDetail: getVolunteerDetail,
        saveLocalUser: saveLocalUser,
        clearLocalUser: clearLocalUser,
        onNetStateChange: onNetStateChange,
        logout: logout
    };

    return action;

}();
//初始化
/*myApp.onPageInit('index', function (page) {
    console.log('页面展开',page.name,page.query);
    var ops = page.query
    $$('.introduce-page .navbar .center').html(ops.title);
    $$('.introduce-page form textarea').focus().val(ops.value);
})*/
function eminReady() {
    myApp.hidePreloader();
    $$('.panel-left .username').html(localStorage.username);
    index.getUserDetail();
    index.getVolunteerDetail();
    /*$$('.panel-left .mobile').html(localStorage.mobile);*/
    if(localStorage.asideOpen == true || localStorage.asideOpen == 'true') { //判断是否需要打开侧边栏
        localStorage.asideOpen = false;
        $$('body').addClass('framework7-root with-panel-left-cover');
        $$('div.panel-left').addClass('panel-cover active');
        $$('div.panel-left').css('display', 'block');
    }
}
//首次按键，提示'再按一次退出应用'
var firstClick = null;
eminBack = function() {
    if(!firstClick) {
        firstClick = new Date().getTime();
        EminBridge.toast('再按一次退出应用');
        setTimeout(function() {
            firstClick = null;
        }, 1000);
    } else {
        if(new Date().getTime() - firstClick < 1000) {
            EminBridge.pluginRuntime.exit();
        }
    }
}

//跳转到任务详情界面
$$('.event .event-enter a').on('click', function() {
    //此处应该先判断用户的角色，如果是志愿者，跳转
    pager.toTaskPage();
})

//跳转到历史活动详情界面
$$('.event .record a').on('click', function() { 
    myApp.alert('历史活动详情界面正在开发，请耐心等待','温馨提示')
})

//申请成为志愿者
$$('.application').on('click', function(){
    pager.toApplicationPage();
})
//查看认证信息
$$('.attestation').on('click', function(){
    pager.toAttestationPage();
})

//跳转到个人主页
$$('.go-personal').on('click', function() {
    console.log('## 跳转到个人主页。。。toPersonalPage')
    pager.toPersonalPage();
})
//跳转到消息通知
$$('.go-message').on('click', function() {
    pager.toMessagePage()
})
//跳转到志愿活动
$$('.go-activity').on('click', function() {
    myApp.alert('志愿活动正在开发，请耐心等待','温馨提示')
})
//跳转到设置界面
$$('.go-set').on('click', function() {
    myApp.alert('设置功能正在开发，请耐心等待','温馨提示')
})

//跳转到搜索页面
$$('.search').on('click', function(){
    myApp.alert('搜索页面正在开发，请耐心等待','温馨提示')
})

//退出
$$('.footer .exit').on('click', function() {
    index.logout();
})