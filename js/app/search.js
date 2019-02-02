(function($){
    $.fn.textSearch = function(str,options){
        var defaults = {
            divFlag: true,//时候要拆分搜索
            divStr: " ",//拆分标志
            markClass: "",
            markColor: "red",
            nullReport: true,
            callback: function(){
                return false;   
            }
        };
        var sets = $.extend({}, defaults, options || {}), clStr;
        if(sets.markClass){
            clStr = "class='"+sets.markClass+"'";   
        }else{
            clStr = "style='color:"+sets.markColor+";'";
        }
        
        //瀵瑰墠涓€娆￠珮浜鐞嗙殑鏂囧瓧杩樺師      
        $("span[rel='mark']").each(function() {
            var text = document.createTextNode($(this).text()); 
            $(this).replaceWith($(text));
        });
        
        //瀛楃涓叉鍒欒〃杈惧紡鍏抽敭瀛楄浆鍖�
        $.regTrim = function(s){
            var imp = /[\^\.\\\|\(\)\*\+\-\$\[\]\?]/g;
            var imp_c = {};
            imp_c["^"] = "\\^";
            imp_c["."] = "\\.";
            imp_c["\\"] = "\\\\";
            imp_c["|"] = "\\|";
            imp_c["("] = "\\(";
            imp_c[")"] = "\\)";
            imp_c["*"] = "\\*";
            imp_c["+"] = "\\+";
            imp_c["-"] = "\\-";
            imp_c["$"] = "\$";
            imp_c["["] = "\\[";
            imp_c["]"] = "\\]";
            imp_c["?"] = "\\?";
            s = s.replace(imp,function(o){
                return imp_c[o];                       
            }); 
            return s;
        };

        $(this).each(function(){
            var t = $(this);
            str = $.trim(str);
            if(str === ""){//高亮的内容为空
                return false;
            }else{ //高亮的内容不为空
                var arr = [];
                if(sets.divFlag){
                    arr = str.split(sets.divStr);   
                }else{
                    arr.push(str);  
                }
            }
            var v_html = t.html();
            //鍒犻櫎娉ㄩ噴
            v_html = v_html.replace(/<!--(?:.*)\-->/g,"");
            
            //灏咹TML浠ｇ爜鏀涓篐TML鐗囨鍜屾枃瀛楃墖娈碉紝鍏朵腑鏂囧瓧鐗囨鐢ㄤ簬姝ｅ垯鏇挎崲澶勭悊锛岃€孒TML鐗囨缃箣涓嶇悊
            var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
            var a = v_html.match(tags), test = 0;
            $.each(a, function(i, c){
                if(!/<(?:.|\s)*?>/.test(c)){//闈炴爣绛�
                    //寮€濮嬫墽琛屾浛鎹�
                    $.each(arr,function(index, con){
                        if(con === ""){return;}
                        var reg = new RegExp($.regTrim(con), "g");
                        if(reg.test(c)){
                            //姝ｅ垯鏇挎崲
                            c = c.replace(reg,"鈾�"+con+"鈾€");
                            test = 1;
                        }
                    });
                    c = c.replace(/鈾�/g,"<mark "+clStr+">").replace(/鈾€/g,"</mark>");
                    a[i] = c;
                }
            });
            //灏嗘敮绂绘暟缁勯噸鏂扮粍鎴愬瓧绗︿覆
            var new_html = a.join("");
            
            $(this).html(new_html);
            
            if(test === 0 && sets.nullReport){
                alert("娌℃湁鎼滅储缁撴灉"); 
                return false;
            }
            sets.callback();
        });
    };
})(jQuery);

function search(){
    var keyword = $$('input.keyword').val();
}

$(".test").textSearch('有',{markColor: "#619DCA"});

function eminReady() {
    /*myApp.showPreloader('');*/
    setTimeout(function() {
       
    }, 200);
};

eminBack = function() {
    pager.back();
};
//返回上一页
$$('.back i').on('click', function() {
    eminBack();
});

//消息展开
$$('.searchContainer').on('click','.item',function(){
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
$$('.cearchContainer').on('click','.go-task a',function(){
    console.log('去任务详情界面')
    pager.toTaskPage();
})