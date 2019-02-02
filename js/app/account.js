myApp.onPageInit('editAccountItem', function (page) {
    console.log('页面展开',page.name,page.query);
    var ops = page.query
    $$('.editAccountItem-page .navbar .center').html(ops.title);
    $$('.editAccountItem-page form input').attr('name',ops.name);
    $$('.editAccountItem-page form input').focus().val(ops.value);
})
function eminReady() {
    myApp.showPreloader('');
    setTimeout(function() {
        init();//界面初始化    
    }, 50);
}

eminBack = function() {
    pager.back();
};
var edit = function() {
    var subEl = '.sub-page',
        action = {
        nickname: function(ops) {
            var option = {
                title: '编辑用户昵称',
                name: 'nickname',
                value: ops
            };
            edit.item(option);
            $$('.pages').on('click', subEl + ' .save', function(){
                var formDate =  edit.getFormData(),
                    isValidate = false;
                formDate.nickname = formDate.nickname.trim();
                isValidate = edit.validate({
                    value:formDate.nickname,
                    reg:/^\S[\s\S]{0,18}\S$/,
                    errorMsg:'昵称长度为2-20个字符'
                });
                console.log('formDate',formDate)
               
                if(isValidate) {
                    save.personalMsg({
                        id:localStorage.userId,
                        key: "nickname",
                        value: formDate.nickname
                    });
                }
            });
        },
        mobile: function(ops) {
            var option = {
                title: '编辑手机号码',
                name: 'mobile',
                value: ops
            };
            edit.item(option);
            $$('.pages').on('click', subEl + ' .save', function(){
                var formDate =  edit.getFormData(),
                    isValidate = false;
                formDate.mobile = formDate.mobile.trim();
                isValidate = edit.validate({
                    value:formDate.mobile,
                    reg:/^1[34578]\d{9}$/,
                    errorMsg:'请输入有效的手机号码'
                });
                
                if(isValidate) {
                    save.personalMsg({
                        id:localStorage.userId,
                        key: "mobile",
                        value: formDate.mobile
                    });
                }
            });
        },
        email: function(ops) {
            var option = {
                title: '编辑电子邮箱',
                name: 'email',
                value: ops
            };
            edit.item(option);
            $$('.pages').on('click', subEl + ' .save', function(){
                var formDate =  edit.getFormData(),
                    isValidate = false;
                formDate.email = formDate.email.trim();
                isValidate = edit.validate({
                    value:formDate.email,
                    reg:/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,
                    errorMsg:'请输入有效的电子邮箱'
                });
                if(isValidate) {
                    save.personalMsg({
                        id:localStorage.userId,
                        key: "email",
                        value: formDate.email
                    });
                }
            });
        },
        password: function(ops) {
            var option = {
                title: '修改密码'
            };
            edit.passwordPage(option);
            
            setTimeout(function() {
                $$(subEl + ' input[name="oldPassword"]').focus();
            }, 200);
            $$('.pages').on('click', subEl + ' .save', function(){
                var formDate =  edit.getFormData(),
                    isValidate = false;
                formDate.oldpassword = formDate.oldPassword.trim();
                formDate.newPassword = formDate.newPassword.trim();
                formDate.rNewPassword = formDate.rNewPassword.trim();
                isValidate = edit.passwordValidate(formDate);
                if(isValidate) {
                    save.password({
                        id: localStorage.userId,
                        oldPassword: md5(formDate.oldpassword),
                        newPassword: md5(formDate.newPassword)
                    });
                }
            });
        },
        item: function(ops){
            mainView.router.loadPage('account/item.html?title='+ops.title+'&name='+ops.name+'&value='+ops.value)
        },
        passwordPage: function(){
            mainView.router.loadPage('account/password.html')
        },
        validate: function(ops){
            var isValidate = false;
            if(ops.reg.test(ops.value)){
               isValidate = true;
            } else {
                myApp.alert(ops.errorMsg,'温馨提示');
            }
            return isValidate;
        },
        passwordValidate: function(ops){
            var isValidate = false,
                passwordReg = /^[0-9a-zA-Z]{6,20}$/;
            if(!passwordReg.test(ops.oldPassword)){
                myApp.alert('原密码由数字、字母组成，长度为6-20','温馨提示');
            } else if(!passwordReg.test(ops.newPassword)){
                myApp.alert('新密码由数字、字母组成，长度为6-20','温馨提示');
                
            } else if(ops.newPassword != ops.rNewPassword){
                myApp.alert('两次输入的密码不一致','温馨提示');
            } else {
                isValidate = true
            }
            return isValidate;
        },
        getFormData: function(){
            var formData = myApp.formToJSON(subEl + ' form');
            return formData;
        }
    };
    return action;
}();

var options = null;
var save = function(){
    var action  = {
        password: function(ops){
            EminBridge.ohr.request({
                url: serviceConfig.modifyPasswordUrl,
                path:serviceConfig.modifyPasswordPath,
                data:ops,
                type:'post',
                success: function(result) {
                    myApp.hidePreloader();
                    if(result.success) {
                        EminBridge.toast('密码修改成功');
                        mainView.router.back();
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
        },
        personalMsg: function(ops){
            options = ops;
            EminBridge.ohr.request({
                url: serviceConfig.submitPersonalMsgUrl,
                path:serviceConfig.submitPersonalMsgPath,
                data:options,
                type:'post',
                success: function(result) {
                    myApp.hidePreloader();
                    if(result.success) {
                        $$('a[name="' + options.key + '"] .item-title').html(options.value);
                        EminBridge.toast('编辑成功');
                        mainView.router.back();
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
    };
    return action;  
}();

$$('.icon-back').on('click', function() {
    eminBack();
});
$$('a[name="nickname"]').on('click', function() {
    var value = $$('a[name="nickname"] .item-title').html();
    edit.nickname(value);   
});

$$('a[name="mobile"]').on('click', function() {
    var value = $$('a[name="mobile"] .item-title').html();
    edit.mobile(value);
});

$$('a[name="email"]').on('click', function() {
    var value = $$('a[name="email"] .item-title').html();
    edit.email(value);
});

$$('a[name="password"]').on('click', function() {
    edit.password();
});



function init(){
    EminBridge.ohr.request({
        url: serviceConfig.getUserDetailUrl,
        path:serviceConfig.getUserDetailPath,
        data:{
            id: localStorage.userId
        },
        type:'get',
        success: function(result) {
            console.log('## personnal center init result:' + JSON.stringify(result));
            myApp.hidePreloader();
            if(result.success) {
                userDetail = result.result;
                $$('a[name="nickname"] .item-title').html(userDetail.nickname);
                $$('a[name="mobile"] .item-title').html(userDetail.mobile);
                $$('a[name="email"] .item-title').html(userDetail.email);
                $$('span[name="createtime"] .time').html(formatDate(userDetail.createTime,'yyyy-MM-dd'));
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


