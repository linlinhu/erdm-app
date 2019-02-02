var message = function(){
    var action = {};
    function init(){
       EminBridge.ohr.request({
            url: serviceConfig.modifyPersonalBgImgUrl,
            path:serviceConfig.modifyPersonalBgImgPath,
            data:data,
            type:'post',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    //渲染列表
                    
                    
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
    action = {
        init:init
    }
    return action;
}()

function eminReady() {
    /*myApp.showPreloader('');*/
    setTimeout(function() {
        //message.init();//界面初始化    
    }, 200);
};

eminBack = function() {
    pager.back();
};
//返回上一页
$$('.icon-back').on('click', function() {
    pager.toIndexPage();
    localStorage.asideOpen = true;
});
//去搜索界面
$$('a.search').on('click',function(){
    pager.toSearchPage();
})
//消息展开
$$('.messageContainer').on('click','.item',function(){
    var el = $$(this).find('p');
    if(el.hasClass('dot')) {
       $$('.item p').addClass('dot');
       $$('.item .go-task').addClass('hide');
       el.removeClass('dot');
       el.next('.go-task').removeClass('hide')
    } else {
       el.addClass('dot')
       el.next('.go-task').addClass('hide')
    }    
})
$$('.messageContainer').on('click','.go-task a',function(){
    console.log('去任务详情界面')
    pager.toTaskPage();
})
