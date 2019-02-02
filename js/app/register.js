var el = '#registerForm';
var register = function(){
    var action = {};
    function reset(){
        $$(el + ' input').val('');
    };
    function getCode(data){
        EminBridge.ohr.request({
            url: serviceConfig.sendSMSUrl,
            path: serviceConfig.sendSMSPath,
            data: {
                mobile:data
            },
            type: 'post',
            success: function(result) {
                var num = 60;
                if(result.success) {
                    $$(el + ' .getCode').addClass('hide');
                    $$(el + ' .num').removeClass('hide');
                    $$(el + ' .num').html(num + ' s');
                    var timer = setInterval(function(){
                        num -= 1;
                        if(num < 1){
                            $$(el + ' .getCode').removeClass('hide');
                           $$(el + ' .num').addClass('hide');
                            clearInterval(timer)
                        } else {
                            $$(el + ' .num').html(num + ' s');
                        }
                    },1000)  
                } else {
                    var errCode = result.code,
                        errMsg = serviceConfig.getErrorMsg(errCode);
                    myApp.alert(errMsg, '温馨提示');
                } 
            },
            error: function(e) {
                myApp.hidePreloader();
                EminBridge.toast('网络不给力');
            }
        });
    };
    function submit(ops){
        console.log('## 注册 ops...' + JSON.stringify(ops));
        EminBridge.ohr.request({
            url: serviceConfig.registerUrl,
            path:serviceConfig.registerPath,
            data:ops,
            type:'post',
            success: function(result) {
                console.log('## 注册有响应' + JSON.stringify(result));
                myApp.hidePreloader();
                if(result.success) {
                    EminBridge.toast('注册成功');
                    setTimeout(function(){
                        pager.toIndexPage();
                    },500);
                } else {
                    var errCode = result.code;
                    var errMsg = serviceConfig.getErrorMsg(errCode);
                    myApp.alert(errMsg, '温馨提示');
                }
            },
            error:function(e) {
                console.log('注册无响应');
                myApp.hidePreloader();
                EminBridge.toast('网络不给力');
            }
        });
    };
    action = {
        reset: reset,
        submit: submit,
        getCode: getCode
    };
    return action;
}();

//重置
$$('#registerForm .reset').on('click',function(){
    register.reset()
});

//提交
$$('#registerForm .submit').on('click',function(){
    var formData = myApp.formToJSON('#registerForm'),
        mobileReg = /^1[34578]\d{9}$/,
        passwordReg = /^[0-9a-zA-Z]{6,20}$/;
    
    console.log('formData'+formData)
    if(formData.username && formData.mobile.trim().length == 0){
        myApp.alert('请填写手机号码','温馨提示');
    } else if(formData.code && formData.code.trim().length == 0){
        myApp.alert('请填写手机验证码','温馨提示');
    } else if (formData.password && formData.password.trim().length == 0){
        myApp.alert('请填写密码','温馨提示');
    } else if(!mobileReg.test(formData.mobile)){
        myApp.alert('请填写11位有效的手机号码','温馨提示');
    } else if(!passwordReg.test(formData.password)) {
        myApp.alert('密码由数字、字母组成，长度为6-20','温馨提示');
    } else if(formData.password == formData.rPassword){
        myApp.alert('两次输入的密码不一致','温馨提示');
    } else {
        delete formData.rPassword;
        myApp.showPreloader('注册中...');
        formData.password = md5(formData.password);
        setTimeout(function(){
            register.submit(formData);
        },500);  
    } 
});
//获取验证码
$$('#registerForm a.getCode').on('click',function(){
    var formData = myApp.formToJSON('#registerForm'),
        mobileReg = /^1[34578]\d{9}$/;
    if(mobileReg.test(formData.mobile)){
        register.getCode(formData.mobile)
    } else {
        myApp.alert('请输入11位有效的手机号码','温馨提示')
    }  
})
//去登录界面
$$('.goLogin').on('click',function(){
    pager.toLoginPage();
});