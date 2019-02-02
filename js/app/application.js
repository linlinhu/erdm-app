var applicationDetail = {
    knowledgeSkills: [],
    languageSkills: [],
    serviceIntentions: [],
    serviceFields: [],
    serviceTime: []
},
    ecmList = [],
    dds = {
        province: [],
        knowledgeSkills: [],
        languageSkills: [],
        serviceIntentions: [],
        serviceFields: [],
        serviceTime: []
    },
    ddsCode = {
        region: 'base-regionalism',
        education: 'education',
        jobTitle: 'job-title',
        nation: 'nation',
        languageSkills: 'language-ability',
        serviceTime: 'service-time',
        knowledgeSkills: 'knowledge-skill',
        serviceIntentions: 'service-intention',
        serviceFields: 'service-field'
    },
    applicationFormData;    
var application = function(){
    var action = {};
    function init(){
        var codeList = [
                {key:'region', value:ddsCode.region},
                {key:'education', value:ddsCode.education},
                {key:'jobTitle', value:ddsCode.jobTitle},
                {key:'nation', value:ddsCode.nation}
            ],
            num = 0,
            timer = setInterval(function(){
                if(num < codeList.length) {
                    num++;
                    if(num == 1){
                       application.queryRegion({
                            groupCode: ddsCode.region,
                            pid:2
                        });
                    } else if(num == 2){
                        application.queryEducation({
                            groupCode: ddsCode.education,
                        });
                    } else if(num == 3) {
                       application.queryJob({
                            groupCode: ddsCode.jobTitle,
                        });
                    } else if(num == 4) {
                        application.queryNation({
                            groupCode: ddsCode.nation,
                        });
                    };
                } else {
                    clearInterval(timer);
                }
            },50);
            
        EminBridge.ohr.request({
            url: serviceConfig.findAllEcmUrl,
            path: serviceConfig.findAllEcmPath,
            data: {},
            type:'get',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    ecmList = result.result;
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
    function queryRegion(ops) {
        EminBridge.ohr.request({
            url: serviceConfig.queryTreeByGroupCodeUrl+ops.groupCode+'/',
            path: serviceConfig.queryTreeByGroupCodePath,
            data: {pid: ops.pid},
            type:'get',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    application.regionRender(result.result);
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
    function queryEducation(ops) {
        console.log('#### ops.groupCode==='+ops.groupCode);
        EminBridge.ohr.request({
            url: serviceConfig.queryTreeByGroupCodeUrl+ops.groupCode+'/',
            path: serviceConfig.queryTreeByGroupCodePath,
            data:{},
            type:'get',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    application.selectRender(result.result,'education');
                    dds.education = result.result;
                } else {
                    var errCode = result.code;
                    var errMsg = serviceConfig.getErrorMsg(errCode);
                    myApp.alert(errMsg, '温馨提示');
                }
            },
            error:function(e) {
                console.log('#### Education 请求无响应');
                myApp.hidePreloader();
                EminBridge.toast('网络不给力');
            }
        });
    };
    function queryJob(ops) {
        EminBridge.ohr.request({
            url: serviceConfig.queryTreeByGroupCodeUrl+ops.groupCode+'/',
            path: serviceConfig.queryTreeByGroupCodePath,
            data:{},
            type:'get',
            success: function(result,ops) {
                myApp.hidePreloader();
                if(result.success) {
                    application.selectRender(result.result,'jobTitle');
                    dds.jobTitle = result.result;
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
    function queryNation(ops) {
        EminBridge.ohr.request({
            url: serviceConfig.queryTreeByGroupCodeUrl+ops.groupCode+'/',
            path: serviceConfig.queryTreeByGroupCodePath,
            data:{},
            type:'get',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    application.selectRender(result.result,'nation');
                    dds.nation = result.result;
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
    function queryLanguageAbilitys(ops) {
        EminBridge.ohr.request({
            url: serviceConfig.queryTreeByGroupCodeUrl+ops.groupCode+'/',
            path: serviceConfig.queryTreeByGroupCodePath,
            data:{},
            type:'get',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    dds.languageSkills = result.result;
                    application.tabRender('languageSkills',dds.languageSkills,applicationDetail.languageSkills);
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
    function queryKnowledgeSkills(ops) {
        EminBridge.ohr.request({
            url: serviceConfig.queryTreeByGroupCodeUrl+ops.groupCode+'/',
            path: serviceConfig.queryTreeByGroupCodePath,
            data:{},
            type:'get',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    dds.knowledgeSkills = result.result;
                    application.tabRender('knowledgeSkills',dds.knowledgeSkills,applicationDetail.knowledgeSkills);
                    console.log('#### dds.knowledgeSkills ===='+JSON.stringify(result.result));
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
    function queryServiceTime(ops) {
        EminBridge.ohr.request({
            url: serviceConfig.queryTreeByGroupCodeUrl+ops.groupCode+'/',
            path: serviceConfig.queryTreeByGroupCodePath,
            data:{},
            type:'get',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    dds.serviceTime = result.result;
                    application.tabRender('serviceTime',dds.serviceTime,applicationDetail.serviceTime);
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
    function queryServiceIntentions(ops) {
        EminBridge.ohr.request({
            url: serviceConfig.queryTreeByGroupCodeUrl+ops.groupCode+'/',
            path: serviceConfig.queryTreeByGroupCodePath,
            data:{},
            type:'get',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    dds.serviceIntentions = result.result;
                    application.tabRender('serviceIntentions',dds.serviceIntentions,applicationDetail.serviceIntentions);
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
    function queryServiceFields(ops) {
        EminBridge.ohr.request({
            url: serviceConfig.queryTreeByGroupCodeUrl+ops.groupCode+'/',
            path: serviceConfig.queryTreeByGroupCodePath,
            data:{},
            type:'get',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    dds.serviceFields = result.result;
                    application.tabRender('serviceFields',dds.serviceFields,applicationDetail.serviceFields);
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
    
    function regionRender(data) {
        var html = '<option value="" disabled selected>请选择</option>',
                name = '',
                level;
        if(data && data != ''){
            level = data[0].extend.level;
            if(level == 1) {
                name = 'province';
                $$('select[name="city"]').addClass('hide');
                $$('select[name="district"]').addClass('hide');
                dds.province = data;
            } else if(level == 2) {
                name = 'city';
                $$('select[name="city"]').removeClass('hide');
                dds.city = data;
            } else if(level == 3) {
                name = 'district';
                $$('select[name="district"]').removeClass('hide');
                dds.district = data;
            };
            $$('.short-list .hide').html('<option value="" disabled selected>请选择</option>');
            data.forEach(function(value,index,array){
                html += '<option value=\''+JSON.stringify(value)+'\'>' + value.name + '</option>';
            });
            $$('select[name="'+ name +'"]').html(html);
        } 
    };
    function selectRender(data,name) {
        var html = '<option value="" disabled selected>请选择</option>';
        data.forEach(function(value,index,array){
            html += '<option value=\''+ JSON.stringify(value) +'\'>' + value.name + '</option>';
        });
        $$('select[name="'+ name +'"]').html(html);
    };
    function getFormDate(){
        var data = myApp.formToJSON('.applicationContainer form');
        return data;
    };
    function tabRender(dataPage, data, selectedList) {
        var tabContainer = $$('.' + dataPage + 'Container .main'),
            html = '';
      
        for(var i = 0; i < data.length; i++) {
            data[i].chosen = '';
            for(var j = 0; j < selectedList.length; j++) {
    
                if(data[i].id == selectedList[j].id) {
                    data[i].chosen = 'chosen';
                };
            };
            html += '<span class="cell ' + data[i].chosen + '" data-value=\'' + JSON.stringify(data[i]) + '\'>' + data[i].name + '</span>';
        };
        tabContainer.html(html);
    };
    function getChosenTab(dataPage){
        var elList = $$('.'+dataPage+'Container .main .chosen'),
            chosenList = [];
            
        elList.forEach(function(value,index,array){
            value = $$(value);
            chosenList.push(JSON.parse(value.attr('data-value')));
        })
        return chosenList;
    };
    function formRender(data){
        console.log('####重新渲染form了'+JSON.stringify(data));
        data.province = JSON.stringify(data.province);
        data.city = JSON.stringify(data.city);
        data.district = JSON.stringify(data.district);
        var el = '.application-page';
        $$(el + ' input[name="realName"]').val(data.realName);
        $$(el + ' select[name="nation"]').val(data.nation);
        $$(el + ' input[name="idnumber"]').val(data.idnumber);
        $$(el + ' input[name="endPointAddress"]').val(data.endPointAddress);
        $$(el + ' select[name="province"]').val(data.province);
        $$(el + ' select[name="city"]').val(data.city);
        $$(el + ' select[name="district"]').val(data.district);
        $$(el + ' select[name="education"]').val(data.education);
        $$(el + ' select[name="jobTitle"]').val(data.jobTitle);
        $$(el + ' input[name="gender"]').removeAttr('checked');
        $$($$(el + ' input[name="gender"]')[data.gender]).attr('checked','checked');
    };
    action = {
        init: init,
        queryRegion: queryRegion,
        queryEducation: queryEducation,
        queryJob:queryJob,
        queryNation: queryNation,
        queryLanguageAbilitys: queryLanguageAbilitys,
        queryKnowledgeSkills: queryKnowledgeSkills,
        queryServiceTime: queryServiceTime,
        queryServiceIntentions: queryServiceIntentions,
        queryServiceFields: queryServiceFields,
        regionRender: regionRender,
        selectRender: selectRender,
        getFormDate: getFormDate,
        tabRender: tabRender,
        getChosenTab: getChosenTab,
        formRender: formRender
    };
    return action; 
}();
myApp.onPageInit('application', function (page) {
    if(dds.province.length == 0){
        application.init();//界面初始化 
    } else {
        application.regionRender(dds.province);
        application.regionRender(dds.city);
        application.regionRender(dds.district);
        application.selectRender(dds.nation,'nation');
        application.selectRender(dds.education,'education');
        application.selectRender(dds.jobTitle,'jobTitle');
    }
    
});
myApp.onPageInit('knowledgeSkills', function (page) {
    console.log('页面展开',page.name,page.query);
    if(dds.knowledgeSkills.length == 0){
        application.queryKnowledgeSkills({
            groupCode: ddsCode.knowledgeSkills,
        });
    } else {
        application.tabRender('knowledgeSkills',dds.knowledgeSkills,applicationDetail.knowledgeSkills);
    }
    
});

myApp.onPageInit('languageSkills', function (page) {
    console.log('页面展开',page.name,page.query);
    if(dds.languageSkills.length == 0){
        application.queryLanguageAbilitys({
            groupCode: ddsCode.languageSkills,
        });
    } else {
        application.tabRender('languageSkills',dds.languageSkills,applicationDetail.languageSkills);
    }
    
});

myApp.onPageInit('serviceIntentions', function (page) {
    console.log('页面展开',page.name,page.query);
    if(dds.serviceIntentions.length == 0){
        application.queryServiceIntentions({
            groupCode: ddsCode.serviceIntentions,
        });
    } else {
        application.tabRender('serviceIntentions',dds.serviceIntentions,applicationDetail.serviceIntentions);
    } 
});

myApp.onPageInit('serviceFields', function (page) {
    console.log('页面展开',page.name,page.query);
    if(dds.serviceFields.length == 0){
        application.queryServiceFields({
            groupCode: ddsCode.serviceFields,
        });
    } else {
        application.tabRender('serviceFields',dds.serviceFields,applicationDetail.serviceFields);
    }
    
});

myApp.onPageInit('serviceTime', function (page) {
    console.log('页面展开',page.name,page.query);
    if(dds.serviceTime.length == 0){
        application.queryServiceTime({
            groupCode: ddsCode.serviceTime,
        });
    } else {
        application.tabRender('serviceTime',dds.serviceTime,applicationDetail.serviceTime);
    } 
});

function eminReady() {
    myApp.showPreloader('');
    setTimeout(function() {
       /* application.init();//界面初始化*/   
       mainView.router.loadPage('application/applicationSub.html');
    }, 50);
}
eminBack = function() {
    pager.back();
};

$$('.views').on('click' ,'.icon-back' ,function() {
    /*pager.toIndexPage();*/
   eminBack();
});
$$('.views').on('click','.applicationContainer .button',function(){
    var formData = application.getFormDate(),
        IDNumberReg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    
    applicationFormData = formData;
    /*mainView.router.loadPage('application/knowledgeSkills.html');*/
    if(formData.realName==''){
        myApp.alert('请填写真实姓名', '温馨提示');
    } else if(formData.nation==''){
        myApp.alert('请选择民族', '温馨提示');
    } else if(!IDNumberReg.test(formData.idnumber)){
        myApp.alert('请填写18位有效身份证号', '温馨提示');
    } else if(formData.district==''){
        myApp.alert('请选择所属区域', '温馨提示');
    } else {
        formData.province = JSON.parse(formData.province);
        formData.district = JSON.parse(formData.district);
        applicationDetail.contactAddr = {
            type: 'volunteerBase',
            provinceCode: formData.province.code,
            provinceName: formData.province.name,
            cityFirstLevelCode: formData.district.code,
            cityFirstLevelName: formData.district.name,
            endPointAddress: formData.endPointAddress,
            latitude: 0,
            longitude: 0,
        };
        if(formData.city!= '') {
           formData.city = JSON.parse(formData.city);
           applicationDetail.contactAddr.cityCode = formData.city.code;
           applicationDetail.contactAddr.cityName = formData.city.name;
           applicationDetail.contactAddr.fullAddress = applicationDetail.contactAddr.provinceName + formData.city.name + applicationDetail.contactAddr.cityFirstLevelName + applicationDetail.contactAddr.endPointAddress;
        } else {
            applicationDetail.contactAddr.fullAddress = applicationDetail.contactAddr.provinceName + applicationDetail.contactAddr.cityFirstLevelName + applicationDetail.contactAddr.endPointAddress;
        };
        applicationDetail.dependences = [{
            ecmId: ecmList[0].id,
            ecmName: ecmList[0].describe
        }];
        applicationDetail.education = (formData.education == ''?'':JSON.parse(formData.education));
        applicationDetail.nation = (formData.nation == ''?'':JSON.parse(formData.nation));
        applicationDetail.jobTitle = (formData.jobTitle == ''?'':JSON.parse(formData.jobTitle));
        applicationDetail.gender = formData.gender;
        applicationDetail.idnumber = formData.idnumber;
        applicationDetail.realName = formData.realName;
        applicationDetail.mobile = localStorage.mobile;
        applicationDetail.userId = localStorage.userId;
        mainView.router.loadPage('application/knowledgeSkills.html');  
    };
})
$$('.views').on('click', '.knowledgeSkills-page .prev',function(){
    mainView.router.back('application/applicationSub.html');
    application.formRender(applicationFormData);
});
$$('.views').on('click','.knowledgeSkills-page .next',function(){
    console.log('####去下一页=====languageSkills-page');
    mainView.router.loadPage('application/languageSkills.html');
});
$$('.views').on('click','.languageSkills-page .next',function(){
    console.log('####去下一页=====serviceIntentions-page');
    mainView.router.loadPage('application/serviceIntentions.html');
});
$$('.views').on('click','.serviceIntentions-page .next',function(){
    console.log('####去下一页=====serviceTime-page');
    mainView.router.loadPage('application/serviceTime.html');
});
$$('.views').on('click','.serviceTime-page .next',function(){
    console.log('####去下一页=====serviceFields-page');
    mainView.router.loadPage('application/serviceFields.html');
});
$$('.views').on('click','.serviceFields-page .submit',function(){
    console.log('##### 正在提交==='+JSON.stringify(applicationDetail));
    EminBridge.ohr.request({
        url: serviceConfig.volunteerCreateOrUpdateUrl,
        path: serviceConfig.volunteerCreateOrUpdatePath,
        data: {
            data:JSON.stringify(applicationDetail)
        },
        type:'post',
        success: function(result) {
            myApp.hidePreloader();
            if(result.success) {
                EminBridge.toast('申请提交成功，正在审核中，请耐心等待');
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
});
$$('.views').on('click','.cancel',function(){
    myApp.confirm('确认取消自愿者申请吗？', '温馨提示：', function() {
        pager.toIndexPage();  
    });
});
$$('.views').on('click','.main .cell',function(){
    var dataPage =$$(this).parent().parent().parent().attr('data-page');
    $$(this).toggleClass('chosen');
    
    applicationDetail[dataPage] = application.getChosenTab(dataPage);
});
$$('.views').on('change','.short-list select',function(){
    console.log('#### 区域===='+$$(this).val());
    var nodeId = JSON.parse($$(this).val()).id,
        selectName = $$(this).attr('name');
    if(selectName == 'province') {
        $$('select[name="city"]').addClass('hide');
        $$('select[name="district"]').addClass('hide');
        dds.city = '';
        dds.district = '';
    };
    application.queryRegion({
        groupCode: ddsCode.region,
        pid: nodeId
    });
})
