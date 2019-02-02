var volunteerDetail = {},
    applicationDetail = {
        knowledgeSkills: [],
        languageSkills: [],
        serviceIntentions: [],
        serviceFields: [],
        serviceTime: []
    },
    ecmList = [],
    dds = {
        province: [],
        nation: [],
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
    regionData = {
        ops:{},
        result:{}
    };
    
var attestation = function(){
    var action = {};
    
    function getDate(){
        volunteerDetail = JSON.parse(localStorage.volunteerDetail);
        attestation.render(volunteerDetail);
        regionData.ops = {
            provinceName: volunteerDetail.contactAddr.provinceName,
            provinceCode: volunteerDetail.contactAddr.provinceCode,
            cityName: volunteerDetail.contactAddr.cityName,
            cityCode: volunteerDetail.contactAddr.cityCode,
            cityFirstLevelName: volunteerDetail.contactAddr.cityFirstLevelName,
            cityFirstLevelCode: volunteerDetail.contactAddr.cityFirstLevelCode,
            nation: volunteerDetail.nation,
            education: volunteerDetail.education,
            jobTitle: volunteerDetail.jobTitle
        };
        attestation.getRegionData();
        attestation.queryDds();
        /*EminBridge.ohr.request({
            url: serviceConfig.findVolunteerByUserIdUrl,
            path:localStorage.userId,
            data:{},
            type:'get',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    volunteerDetail = result.result;
                    attestation.render(volunteerDetail);
                    regionData.ops = {
                        provinceName: volunteerDetail.contactAddr.provinceName,
                        provinceCode: volunteerDetail.contactAddr.provinceCode,
                        cityName: volunteerDetail.contactAddr.cityName,
                        cityCode: volunteerDetail.contactAddr.cityCode,
                        cityFirstLevelName: volunteerDetail.contactAddr.cityFirstLevelName,
                        cityFirstLevelCode: volunteerDetail.contactAddr.cityFirstLevelCode,
                        nation: volunteerDetail.nation,
                        education: volunteerDetail.education,
                        jobTitle: volunteerDetail.jobTitle
                    };
                    attestation.getRegionData();
                    attestation.queryDds();
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
        });*/
    };
    function queryDds(){
        var codeList = [
                {key:'education', value:ddsCode.education},
                {key:'jobTitle', value:ddsCode.jobTitle},
                {key:'nation', value:ddsCode.nation}
            ],
            num = 0,
            timer = setInterval(function(){
                if(num < codeList.length) {
                    num++;
                    if(num == 1){
                        attestation.queryEducation({
                            groupCode: ddsCode.education,
                        });
                    } else if(num == 2) {
                       attestation.queryJob({
                            groupCode: ddsCode.jobTitle,
                        });
                    } else if(num == 3) {
                       attestation.queryNation({
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
    function getRegionData(ops) {
        console.log('####获取region数据'+JSON.stringify(regionData));
        EminBridge.ohr.request({
            url: serviceConfig.queryTreeByGroupCodeUrl+ddsCode.region+'/',
            path: serviceConfig.queryTreeByGroupCodePath,
            data: {pid: 2},
            type:'get',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    volunteerFn.regionRender(result.result);
                    regionData.result.province = attestation.getSelectedItem({code:regionData.ops.provinceCode,name:regionData.ops.provinceName},result.result);
                    EminBridge.ohr.request({
                        url: serviceConfig.queryTreeByGroupCodeUrl+ddsCode.region+'/',
                        path: serviceConfig.queryTreeByGroupCodePath,
                        data: {pid: regionData.result.province.id},
                        type:'get',
                        success: function(result) {
                            myApp.hidePreloader();
                            if(result.success) {
                                volunteerFn.regionRender(result.result);
                                if(regionData.ops.cityCode && regionData.ops.cityCode != '') {
                                    regionData.result.city = attestation.getSelectedItem({code:regionData.ops.cityCode,name:regionData.ops.cityName},result.result);
                                    EminBridge.ohr.request({
                                        url: serviceConfig.queryTreeByGroupCodeUrl+ddsCode.region+'/',
                                        path: serviceConfig.queryTreeByGroupCodePath,
                                         data: {pid: regionData.result.city.id},
                                        type:'get',
                                        success: function(result) {
                                            myApp.hidePreloader();
                                            if(result.success) {
                                                volunteerFn.regionRender(result.result);
                                                regionData.result.district = attestation.getSelectedItem({code:regionData.ops.cityFirstLevelCode,name:regionData.ops.cityFirstLevelName},result.result);
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
                                } else {
                                    regionData.result.district = attestation.getSelectedItem({code:regionData.ops.cityFirstLevelCode,name:regionData.ops.cityFirstLevelName},result.result);
                                }   
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
                    volunteerFn.selectRender(result.result,'education');
                    dds.education = result.result;
                    regionData.result.education = attestation.getSelectedItem(regionData.ops.education,result.result);
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
                    volunteerFn.selectRender(result.result,'jobTitle');
                    dds.jobTitle = result.result;
                    regionData.result.jobTitle = attestation.getSelectedItem(regionData.ops.jobTitle,result.result);
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
                    volunteerFn.selectRender(result.result,'nation');
                    dds.nation = result.result;
                    regionData.result.nation = attestation.getSelectedItem(regionData.ops.nation,result.result);
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
    function render(data){
        var el = '.attestationContainer',
            region = '';
        $$(el + ' .realName').html(data.realName);
        $$(el + ' .education').html(data.education.name);
        $$(el + ' .nation').html(data.nation.name);
        $$(el + ' .gender').html(data.gender == 0 ? '男' : '女');
        $$(el + ' .jobTitle').html(data.jobTitle.name);
        $$(el + ' .mobile').html(data.mobile);
        $$(el + ' .idnumber').html(data.idnumber);
        $$(el + ' .endPointAddress').html(data.contactAddr.endPointAddress);
        if(data.contactAddr.cityName) {
            region = data.contactAddr.provinceName + data.contactAddr.cityName + data.contactAddr.cityFirstLevelName;
        } else {
            region = data.contactAddr.provinceName + data.contactAddr.cityFirstLevelName;
        }
        $$(el + ' .region').html(region);
        
        attestation.tabRender($$('#tab-2 .knowledgeSkills .main'), data.knowledgeSkills, []);
        attestation.tabRender($$('#tab-2 .languageSkills .main'), data.languageSkills, []);
        attestation.tabRender($$('#tab-2 .serviceIntentions .main'), data.serviceIntentions, []);
        attestation.tabRender($$('#tab-2 .serviceTime .main'), data.serviceTime, []);
        attestation.tabRender($$('#tab-2 .serviceFields .main'), data.serviceFields, []);
       
    };
    function tabRender(el, data, selectedList) {
        var tabContainer = el,
            html = '';
        if(data.length > 0){
            for(var i = 0; i < data.length; i++) {
                data[i].chosen = '';
                for(var j = 0; j < selectedList.length; j++) {
        
                    if(data[i].id == selectedList[j].id) {
                        data[i].chosen = 'chosen';
                    };
                };
                html += '<span class="cell ' + data[i].chosen + '" data-value=\'' + JSON.stringify(data[i]) + '\'>' + data[i].name + '</span>';
            };
        } else {
           html = '<span>暂无</span>' 
        }
        tabContainer.html(html);
    };
    function userMsgRender(data){
        console.log('####重新渲染form了'+JSON.stringify(regionData.result));
     
        var el = '.userMsg-page';    
        volunteerFn.regionRender(dds.province);
        volunteerFn.regionRender(dds.city);
        volunteerFn.regionRender(dds.district);
        volunteerFn.selectRender(dds.nation,'nation');
        volunteerFn.selectRender(dds.education,'education');
        volunteerFn.selectRender(dds.jobTitle,'jobTitle');
        $$(el + ' input[name="realName"]').val(data.realName);
        $$(el + ' select[name="nation"]').val(JSON.stringify(regionData.result.nation));
        $$(el + ' input[name="idnumber"]').val(data.idnumber);
        $$(el + ' input[name="endPointAddress"]').val(data.endPointAddress);
        $$(el + ' select[name="province"]').val(JSON.stringify(regionData.result.province));
        $$(el + ' select[name="district"]').val(JSON.stringify(regionData.result.district));
        $$(el + ' select[name="education"]').val(JSON.stringify(regionData.result.education));
        $$(el + ' select[name="jobTitle"]').val(JSON.stringify(regionData.result.jobTitle));
        $$(el + ' input[name="gender"]').removeAttr('checked');
        $$($$(el + ' input[name="gender"]')[data.gender]).attr('checked','checked');
        $$(el + ' select[name="city"]').val(JSON.stringify(regionData.result.city));
       
        
    };
    function getSelectedItem(ops,list){
        var getItem = '';
        ops.id = ops.id?ops.id:'';
        ops.code = ops.code?ops.code:'';
        for(var i = 0; i < list.length; i++) {
            if(list[i].name == ops.name && (list[i].code == ops.code||list[i].id == ops.id)){
                getItem = list[i];
            }
        };
        return getItem;
    };
    function save(ops) {
        console.log('####save 数据===='+JSON.stringify(ops));
        EminBridge.ohr.request({
            url: serviceConfig.volunteerCreateOrUpdateUrl,
            path: serviceConfig.volunteerCreateOrUpdatePath,
            data: {
                data:JSON.stringify(ops)
            },
            type:'post',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    EminBridge.toast('保存成功，正在审核中，请耐心等待');
                    volunteerDetail = result.result;
                    attestation.render(volunteerDetail);
                    mainView.router.back('attestation.html'); 
                    regionData.ops = {
                        provinceName: volunteerDetail.contactAddr.provinceName,
                        provinceCode: volunteerDetail.contactAddr.provinceCode,
                        cityName: volunteerDetail.contactAddr.cityName,
                        cityCode: volunteerDetail.contactAddr.cityCode,
                        cityFirstLevelName: volunteerDetail.contactAddr.cityFirstLevelName,
                        cityFirstLevelCode: volunteerDetail.contactAddr.cityFirstLevelCode,
                        nation: volunteerDetail.nation,
                        education: volunteerDetail.education,
                        jobTitle: volunteerDetail.jobTitle
                    };
                    attestation.getRegionData();
                    attestation.queryDds();
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
    function viewBack(ops){
        if(ops != 'userMsg'){
            $$('a.tab-link').removeClass('active');
            $$('#tab-1').removeClass('active');
            $$('a.tab-2').addClass('active');
            $$('#tab-2').addClass('active');  
        }
    };    
    action = {
        getDate: getDate,
        getRegionData: getRegionData,
        queryDds: queryDds,
        queryEducation: queryEducation,
        queryJob:queryJob,
        queryNation: queryNation,
        save: save,
        render: render,
        tabRender: tabRender,
        userMsgRender: userMsgRender,
        getSelectedItem: getSelectedItem,
        viewBack: viewBack
    };
    return action;
}();
myApp.onPageInit('attestation', function (page) {
    console.log('页面展开',page.name,page.query);
    attestation.render(volunteerDetail);
});
myApp.onPageInit('userMsg', function (page) {
    attestation.userMsgRender(volunteerDetail);
});
myApp.onPageInit('knowledgeSkills', function (page) {
    console.log('页面展开',page.name,page.query);
    $$('.sub-page .navbar .title').html('服务意向及知识技能');
    if(dds.knowledgeSkills.length == 0){
        volunteerFn.queryKnowledgeSkills({
            groupCode: ddsCode.knowledgeSkills,
        });
    } else {
        volunteerFn.tabRender('knowledgeSkills',dds.knowledgeSkills,volunteerDetail.knowledgeSkills);
    }
    
});

myApp.onPageInit('languageSkills', function (page) {
    console.log('页面展开',page.name,page.query);
    $$('.sub-page .navbar .title').html('服务意向及知识技能');
    if(dds.languageSkills.length == 0){
        volunteerFn.queryLanguageAbilitys({
            groupCode: ddsCode.languageSkills,
        });
    } else {
        volunteerFn.tabRender('languageSkills',dds.languageSkills,volunteerDetail.languageSkills);
    }
    
});

myApp.onPageInit('serviceIntentions', function (page) {
    console.log('页面展开',page.name,page.query);
    $$('.sub-page .navbar .title').html('服务意向及知识技能');
    if(dds.serviceIntentions.length == 0){
        volunteerFn.queryServiceIntentions({
            groupCode: ddsCode.serviceIntentions,
        });
    } else {
        volunteerFn.tabRender('serviceIntentions',dds.serviceIntentions,volunteerDetail.serviceIntentions);
    } 
});

myApp.onPageInit('serviceFields', function (page) {
    console.log('页面展开',page.name,page.query);
    $$('.sub-page .navbar .title').html('服务意向及知识技能');
    if(dds.serviceFields.length == 0){
        volunteerFn.queryServiceFields({
            groupCode: ddsCode.serviceFields,
        });
    } else {
        volunteerFn.tabRender('serviceFields',dds.serviceFields,volunteerDetail.serviceFields);
    }
    
});

myApp.onPageInit('serviceTime', function (page) {
    console.log('页面展开',page.name,page.query);
    $$('.sub-page .navbar .title').html('服务意向及知识技能');
    if(dds.serviceTime.length == 0){
        volunteerFn.queryServiceTime({
            groupCode: ddsCode.serviceTime,
        });
    } else {
        volunteerFn.tabRender('serviceTime',dds.serviceTime,volunteerDetail.serviceTime);
    } 
});
function eminReady() {
    myApp.showPreloader('');
    setTimeout(function() {
       attestation.getDate();
    }, 50);
}
eminBack = function() {
    pager.back();
};
$$('.views').on('click','.icon-back', function() {
    /*pager.toPersonalPage();*/
   eminBack();
});
$$('.views').on('click','.edit',function(){
    var activeId = $$('div.active')[0].id;
    if(activeId == 'tab-1'){
        mainView.router.loadPage('attestation/userMsg.html')
    } else {
        mainView.router.loadPage('application/knowledgeSkills.html');
        applicationDetail = {
            knowledgeSkills: volunteerDetail.knowledgeSkills,
            languageSkills: volunteerDetail.languageSkills,
            serviceIntentions: volunteerDetail.serviceIntentions,
            serviceFields: volunteerDetail.serviceFields,
            serviceTime: volunteerDetail.serviceTime
        };
    }
})
$$('.views').on('click','.cancel',function(){
    var dataPage = $$(this).parent().parent().parent().parent().attr('data-page');
    myApp.confirm('确认取消编辑吗？', '温馨提示：', function() {
        mainView.router.loadPage('attestation.html');
        attestation.viewBack(dataPage);
        
    });
});
$$('.views').on('click','.userMsgContainer .submit',function(){
    var formData = myApp.formToJSON('.userMsgContainer form'),
        IDNumberReg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    console.log('####formData===='+JSON.stringify(formData));
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
        volunteerDetail.contactAddr = {
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
           volunteerDetail.contactAddr.cityCode = formData.city.code;
           volunteerDetail.contactAddr.cityName = formData.city.name;
           volunteerDetail.contactAddr.fullAddress = volunteerDetail.contactAddr.provinceName + formData.city.name + volunteerDetail.contactAddr.cityFirstLevelName + volunteerDetail.contactAddr.endPointAddress;
        } else {
            volunteerDetail.contactAddr.fullAddress = volunteerDetail.contactAddr.provinceName + volunteerDetail.contactAddr.cityFirstLevelName + volunteerDetail.contactAddr.endPointAddress;
        };
        volunteerDetail.dependences = [{
            ecmId: ecmList[0].id,
            ecmName: ecmList[0].describe
        }];
        volunteerDetail.education = (formData.education == ''?'':JSON.parse(formData.education));
        volunteerDetail.nation = (formData.nation == ''?'':JSON.parse(formData.nation));
        volunteerDetail.jobTitle = (formData.jobTitle == ''?'':JSON.parse(formData.jobTitle));
        volunteerDetail.gender = formData.gender;
        volunteerDetail.idnumber = formData.idnumber;
        volunteerDetail.realName = formData.realName;
        applicationDetail.userId = localStorage.userId;
        attestation.save(volunteerDetail);
    };
})

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
    volunteerDetail.knowledgeSkills = applicationDetail.knowledgeSkills;
    volunteerDetail.languageSkills = applicationDetail.languageSkills;
    volunteerDetail.serviceIntentions = applicationDetail.serviceIntentions;
    volunteerDetail.serviceFields = applicationDetail.serviceFields;
    console.log('##### 正在提交==='+JSON.stringify(volunteerDetail));
    volunteerDetail.serviceTime = applicationDetail.serviceTime;
    EminBridge.ohr.request({
        url: serviceConfig.volunteerCreateOrUpdateUrl,
        path: serviceConfig.volunteerCreateOrUpdatePath,
        data: {
            data:JSON.stringify(volunteerDetail)
        },
        type:'post',
        success: function(result) {
            myApp.hidePreloader();
            if(result.success) {
                EminBridge.toast('保存成功，正在审核中，请耐心等待');
                volunteerDetail = result.result;
                attestation.render(volunteerDetail);
                mainView.router.loadPage('attestation.html');
                attestation.viewBack('dataPage');
                regionData.ops = {
                    provinceName: volunteerDetail.contactAddr.provinceName,
                    provinceCode: volunteerDetail.contactAddr.provinceCode,
                    cityName: volunteerDetail.contactAddr.cityName,
                    cityCode: volunteerDetail.contactAddr.cityCode,
                    cityFirstLevelName: volunteerDetail.contactAddr.cityFirstLevelName,
                    cityFirstLevelCode: volunteerDetail.contactAddr.cityFirstLevelCode,
                    nation: volunteerDetail.nation,
                    education: volunteerDetail.education,
                    jobTitle: volunteerDetail.jobTitle
                };
                attestation.getRegionData();
                attestation.queryDds();
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
$$('.views').on('click','.main .cell',function(){
    var dataPage =$$(this).parent().parent().parent().attr('data-page');
    $$(this).toggleClass('chosen');
    
    applicationDetail[dataPage] = volunteerFn.getChosenTab(dataPage);
});
$$('.views').on('change','.short-list select',function(){
    var nodeId = JSON.parse($$(this).val()).id,
        selectName = $$(this).attr('name');
    if(selectName == 'province') {
        $$('select[name="city"]').addClass('hide');
        $$('select[name="district"]').addClass('hide');
        dds.city = '';
        dds.district = '';
    };
    volunteerFn.queryRegion({
        groupCode: ddsCode.region,
        pid: nodeId
    });
})
