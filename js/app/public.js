//跳转到用户中心界面
$$('.toolbar-inner .personal').on('click', function() {
    pager.toPersonalCenterPage();
});
//跳转到待开发界面
$$('.toolbar-inner .wait').on('click', function() {
    pager.toWaitPage();
});

var volunteerFn = function(){
    var action = {};
    function queryRegion(ops) {
        EminBridge.ohr.request({
            url: serviceConfig.queryTreeByGroupCodeUrl+ops.groupCode+'/',
            path: serviceConfig.queryTreeByGroupCodePath,
            data: {pid: ops.pid},
            type:'get',
            success: function(result) {
                myApp.hidePreloader();
                if(result.success) {
                    volunteerFn.regionRender(result.result);
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
                    volunteerFn.tabRender('languageSkills',dds.languageSkills,applicationDetail.languageSkills);
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
                    volunteerFn.tabRender('knowledgeSkills',dds.knowledgeSkills,applicationDetail.knowledgeSkills);
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
                    volunteerFn.tabRender('serviceTime',dds.serviceTime,applicationDetail.serviceTime);
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
                    volunteerFn.tabRender('serviceIntentions',dds.serviceIntentions,applicationDetail.serviceIntentions);
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
                    volunteerFn.tabRender('serviceFields',dds.serviceFields,applicationDetail.serviceFields);
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
    action = {
        queryRegion: queryRegion,
        queryLanguageAbilitys: queryLanguageAbilitys,
        queryKnowledgeSkills: queryKnowledgeSkills,
        queryServiceTime: queryServiceTime,
        queryServiceIntentions: queryServiceIntentions,
        queryServiceFields: queryServiceFields,
        regionRender: regionRender,
        selectRender: selectRender,
        getFormDate: getFormDate,
        tabRender: tabRender,
        getChosenTab: getChosenTab
    };
    return action; 
}();

/**
 * 将毫秒转换为日期
 * date 毫秒
 * format 日期格式，例如yyyy-MM-dd HH:mm:ss
 * */
function formatDate(date, format) {
    var v = "";
    date = new Date(date);
    if(typeof date == "string" || typeof date != "object") {
        return;
    }

    console.log('====v', v, date)
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var weekDay = date.getDay();
    var ms = date.getMilliseconds();
    var weekDayString = "";
    console.log('year', year)
    if(weekDay == 1) {
        weekDayString = "星期一";
    } else if(weekDay == 2) {
        weekDayString = "星期二";
    } else if(weekDay == 3) {
        weekDayString = "星期三";
    } else if(weekDay == 4) {
        weekDayString = "星期四";
    } else if(weekDay == 5) {
        weekDayString = "星期五";
    } else if(weekDay == 6) {
        weekDayString = "星期六";
    } else if(weekDay == 7) {
        weekDayString = "星期日";
    }

    v = format;
    //Year 
    v = v.replace(/yyyy/g, year);
    v = v.replace(/YYYY/g, year);
    v = v.replace(/yy/g, (year + "").substring(2, 4));
    v = v.replace(/YY/g, (year + "").substring(2, 4));

    //Month 
    var monthStr = ("0" + month);
    v = v.replace(/MM/g, monthStr.substring(monthStr.length - 2));

    //Day 
    var dayStr = ("0" + day);
    v = v.replace(/dd/g, dayStr.substring(dayStr.length - 2));

    //hour 
    var hourStr = ("0" + hour);
    v = v.replace(/HH/g, hourStr.substring(hourStr.length - 2));
    v = v.replace(/hh/g, hourStr.substring(hourStr.length - 2));

    //minute 
    var minuteStr = ("0" + minute);
    v = v.replace(/mm/g, minuteStr.substring(minuteStr.length - 2));

    //Millisecond 
    v = v.replace(/sss/g, ms);
    v = v.replace(/SSS/g, ms);

    //second 
    var secondStr = ("0" + second);
    v = v.replace(/ss/g, secondStr.substring(secondStr.length - 2));
    v = v.replace(/SS/g, secondStr.substring(secondStr.length - 2));

    //weekDay 
    v = v.replace(/E/g, weekDayString);
    console.log('====v', v)
    return v;
};