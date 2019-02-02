
function eminReady() {
    var lastInputName = localStorage.lastInputUserName;
    if(!TextUtil.isEmpty(lastInputName)) {
        $$('.user-name').val(lastInputName);
    }
}

$$('.loginSub').on('click', function() {
	var formData = myApp.formToJSON('#loginForm'),
	    usernameReg = /^1[34578]\d{9}$/,
	    passwordReg = /^[0-9a-zA-Z]{6,20}$/;
	if(formData.username.length == 0) {
		myApp.alert('请填写手机号码','温馨提示');
	} else if(formData.password.length == 0) {
		myApp.alert('请填写密码','温馨提示');
	} else if(!usernameReg.test(formData.username)){
        myApp.alert('请填写11位有效的手机号码','温馨提示');
    } else if(!passwordReg.test(formData.password)) {
        myApp.alert('密码由数字、字母组成，长度为6-20','温馨提示');
    } else {
        myApp.showPreloader('登录中...');
        setTimeout(function() {
            login(formData);
        }, 200);
	}
});
//去注册页面
$$('.loginPage .goRegister').on('click',function(){
    console.log('## goRegister clicked..');
    pager.toRegisterPage();
});

//忘记密码
$$('.loginPage .forgetPassword').on('click',function(){
    myApp.alert('正在开发，请耐心等待','温馨提示');
})
/**
 * 登录
 * 
 * @param {Object} loginInfo 登录form表单
 */
function login(loginInfo) {
	EminBridge.ohr.request({
		url: serviceConfig.loginUrl,
		path:serviceConfig.loginPath,
		data:{
			username:loginInfo.username,
			password:md5(loginInfo.password)
		},
		type:'post',
		success: function(result) {
		    myApp.hidePreloader();
			if(result.success) {
			    localStorage.asideOpen = false;
				didLoginSuccess(result.result);
				$$('#loginForm input[name="password"]').val('');
                pager.toIndexPage();
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
}

/**
 * 登录成功业务处理
 * 备注:
 * 1.首次登录/是否需要完善个人信息 返回信息中edit为true代表用户已经更新过信息
 * 2.保存用户上一次成功登陆所输入的值.该值可能是手机号、邮箱、账号
 * 
 * @param {Object} data 服务端返回的业务数据
 */
function didLoginSuccess(data) {
    localStorage.lastInputUserName = $$('.user-name').val();
    localStorage.userId = data.id;
	localStorage.username = data.username;
	localStorage.token = data.token;
	localStorage.isLogin = true;
	localStorage.infoIsUpdated = data.edit;
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
};
