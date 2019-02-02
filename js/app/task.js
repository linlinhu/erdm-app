var task = function() {
    var action = {};

    function init() {
        var volunteerDetail = localStorage.volunteerDetail;
        if(volunteerDetail && volunteerDetail.length > 0) {
            $$('.volunteerContainer').removeClass('hide');
            $$('.visitorContainer').addClass('hide');
        } else {
            $$('.volunteerContainer').addClass('hide');
            $$('.visitorContainer').removeClass('hide');
        }
    };
    action = {
        init: init
    };
    return action;
}();

function eminReady() {
    /*myApp.showPreloader('');*/
    setTimeout(function() {
        task.init(); //界面初始化    
    }, 200);
};
eminBack = function() {
    pager.back();
};
$$('.icon-back').on('click', function() {
    eminBack();
});
$$('.application a').on('click', function() {
    pager.toApplicationPage();
});