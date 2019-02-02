myApp.onPageInit('introduce', function (page) {
    console.log('页面展开',page.name,page.query);
    var ops = page.query
    $$('.introduce-page .navbar .center').html(ops.title);
    $$('.introduce-page form textarea').focus().val(ops.value);
})
function eminReady() {
    myApp.showPreloader('');
    setTimeout(function() {
        personal.init();//界面初始化    
    }, 50);
}
var options = null;
var personal = function(){
    var action = {};
    //初始化
    function init(){
        $$('h4.username').html(localStorage.username)
        EminBridge.ohr.request({
            url: serviceConfig.getUserDetailUrl,
            path:serviceConfig.getUserDetailPath,
            data:{
                id: localStorage.userId
            },
            type:'get',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success){
                    console.log('## user result==='+JSON.stringify(result));
                    if(result.result.signature && result.result.signature.trim().length > 0) {
                        $$('.introduceMsg').removeClass('hide');
                        $$('.add-introduceMsg').addClass('hide');
                        $$('.introduceMsg pre').html(result.result.signature);
                    } else {
                        $$('.introduceMsg').addClass('hide');
                        $$('.add-introduceMsg').removeClass('hide');
                    };
                } else {
                    var errCode = result.code,
                        errMsg = serviceConfig.getErrorMsg(errCode);
                    myApp.alert(errMsg, '温馨提示'); 
                };
            },
            error:function(e) {
                myApp.hidePreloader();
                EminBridge.toast('网络不给力');
            }
        }); 
    };
    //保存背景
    function saveBgImg(data){
        console.log('修改封面data',data);
        EminBridge.ohr.request({
            url: serviceConfig.modifyPersonalBgImgUrl,
            path:serviceConfig.modifyPersonalBgImgPath,
            data:data,
            type:'post',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    EminBridge.toast('封面更换成功');
                    //更换封面图片
                    $$('.bg-img ').css('background-image','url('+ data.url +')');
                    
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
    //编辑个人说明
    function editIntroduce(data){
        personal.editPage(data);
        $$('.pages').on('click','.saveIntroduce',function(){
            var formData = myApp.formToJSON('.introduce-page form');
            if(formData.introduce.length > 150){
                myApp.alert('心得体会的长度不能大于150个字符', '温馨提示');
            } else {
                var option = {
                    id: localStorage.userId,
                    key: 'signature',
                    value: formData.introduce
                }
                personal.saveIntroduce(option);
            }
            
        })
    };
    //保存个人说明
    function saveIntroduce(data){
        options = data;
        console.log('## options'+JSON.stringify(options))
        EminBridge.ohr.request({
            url: serviceConfig.submitPersonalMsgUrl,
            path:serviceConfig.submitPersonalMsgPath,
            data:data,
            type:'post',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    if($$('.introduceMsg').hasClass('hide')){
                        $$('.introduceMsg').removeClass('hide');
                        $$('.add-introduceMsg').addClass('hide');
                    };
                    $$('.introduceMsg pre').html(options.value);
                    EminBridge.toast('保存成功');
                    mainView.router.back();
                } else {
                    var errCode = result.code,
                        errMsg = serviceConfig.getErrorMsg(errCode);
                    myApp.alert(errMsg, '温馨提示');
                };
            },
            error:function(e) {
                myApp.hidePreloader();
                EminBridge.toast('网络不给力');
            }
        }); 
    };
    function editPage(data){
        mainView.router.loadPage('personal/introduce.html?title=' + data.title + '&value=' + data.value);
    }
    
    action = {
       init: init,
       saveBgImg: saveBgImg,
       editIntroduce: editIntroduce,
       saveIntroduce: saveIntroduce,
       editPage: editPage
    };
    
   return action;  
}();

$$('.icon-back').on('click', function() {
    localStorage.asideOpen = true;
    pager.toIndexPage();
});
$$('.go-attestationMsg').on('click',function(){
    pager.toAttestationPage();
})
$$('.go-accountMsg').on('click',function(){
    pager.toAccountPage();
})

$$('.bg-img').on('click',function(){
    console.log('是否更换封面');
    var buttons = [
        [{
            text: '拍摄封面',
            bold: true,
            onClick: function () {
                myApp.alert('此处应该调用相机');
            }
        }],
        [{
            text: '从相册选择封面',
            onClick: function () {
                myApp.alert('此处应该打开相册');
            }
        }]
    ];
    myApp.actions(buttons);
})

$$('.photo img').on('click',function(){
    console.log('是否更换头像');
    var buttons = [
        [{
            text: '拍照',
            bold: true,
            onClick: function () {
                myApp.alert('此处应该调用相机');
            }
        }],
        [{
            text: '从相册选择照片',
            onClick: function () {
                myApp.alert('此处应该打开相册');
            }
        }]
    ];
    myApp.actions(buttons);
})

$$('.introduce .add').on('click',function(){
    var option = {
        title:'添加心得体会',
        value:''
    };
    personal.editIntroduce(option);
});
$$('.introduce .edit span').on('click',function(){
    var option = {
        title:'编辑心得体会',
        value:''
    },
    value = $$('.introduceMsg pre').html();
    option.value = value;
    personal.editIntroduce(option);
})


