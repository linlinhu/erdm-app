/**
 * 服务端service相关配置
 * 1.服务器地址配置
 * 2.接口地址与路劲配置
 * 3.错误信息配置
 * 
 * created by Sam 2017/12/12
 */

(function(sc) {
    // 服务器的地址配置
    var dockerIp = 'http://192.168.0.201';
    var dockerPort = '8881';

    var localIp = 'http://192.168.0.202';
    var localPort = '10001';

    var ip = localIp;
    var port = localPort;
    var serverAddress = ip + ":" + port;

    sc.basePath = serverAddress;
    sc.version = '1.0.0';

    // app登录接口
    sc.loginUrl = serverAddress + '/api-erdm-user/';
    sc.loginPath = 'clientLogin';
    
    // app注册接口
    sc.registerUrl = serverAddress + '/api-erdm-user/erdm/user/';
    sc.registerPath = 'appRegister';

    // 查询用户的详细信息接口
    sc.userDetailUrl = serverAddress + '/erdm/user/';
    sc.userDetailPath = 'queryDetail';

    // 用户信息详情接口
    sc.getUserDetailUrl = serverAddress + '/api-erdm-user/erdm/user/';
    sc.getUserDetailPath = 'queryDetail';
    
    // 个人中心编辑用户信息接口
    sc.submitPersonalMsgUrl = serverAddress + '/api-erdm-user/erdm/user/';
    sc.submitPersonalMsgPath = 'perfectUserInfo';
    
    // 修改密码
    sc.modifyPasswordUrl = serverAddress + '/api-erdm-user/erdm/user/';
    sc.modifyPasswordPath = 'modifyPassword';
    
    // 绑定手机号码
    sc.bindMobileUrl = serverAddress + '/api-user/member/user/';
    sc.bindMobilePath = 'bindMobile';
    
    // 获取手机验证码
    sc.sendSMSUrl = serverAddress + '/api-erdm-user/erdm/user/';
    sc.sendSMSPath = 'appRegisterSms';
    
    // 保存用户主页封面
    sc.modifyPersonalBgImgUrl = serverAddress + '/api-user/common/';
    sc.modifyPersonalBgImgPath = 'sendSMS';
    
    // 数据字典组查询
    sc.groupQueryUrl = serverAddress + '/api-common/dd/group/';
    sc.groupQueryPath = 'query';
    
    // 数据字典 根据gid查询父节点下一层的子节点
    sc.stepQueryUrl = serverAddress + '/api-common/dd/item/';
    sc.stepQueryPath = 'stepQuery';
    
    // 数据字典 根据code查询父节点下一层的子节点
    sc.queryTreeByGroupCodeUrl = serverAddress + '/api-common/dd/item/';
    sc.queryTreeByGroupCodePath = 'queryTreeByGroupCode';
    
    //查询所有平台
    sc.findAllEcmUrl = serverAddress + '/api-erdm-ecm/ecm/';
    sc.findAllEcmPath = 'findAllEcm';
    //申请志愿者
    sc.volunteerCreateOrUpdateUrl = serverAddress + '/api-volunteer/volunteer/';
    /*sc.volunteerCreateOrUpdatePath = 'createOrUpdate';*/
    sc.volunteerCreateOrUpdatePath = 'createOrUpdateMobile';
    
    //根据userId查询志愿者详情
    sc.findVolunteerByUserIdUrl = serverAddress + '/api-volunteer/volunteer/user/';
    sc.indVolunteerByUserIdPath = '';
    
    
    
    
    // 接口地址配置
    /**
     * 根据服务端提供的code与message构建错误信息对象
     */
    var errorInfo = {
        '0.0.001': '系统错误',
        '0.0.002': '参数非法',
        '0.0.003': 'IO异常',
        '0.0.004': '数据库操作异常',
        
        '0.0.100': 'feign接口请求超时',
        '0.0.101': 'feign接口请求错误 ',
        '0.0.200': '实体参数对应关系错误',
        
        '0.1.000': '实体参数错误',
        
        '0.2.001': '手机号码验证不通过',
        '0.2.002': '创建用户失败',
        '0.2.003': '身份证错误',
        '0.2.004': '身份证已经存在',
    };

    /**
     * 调用service后,通过返回的code获取相应的message
     * 
     * @param {string} code 服务端返回的错误代码,如'RDG_0.1.1'
     */
    sc.getErrorMsg = function(code) {
        var msg = errorInfo[code];
        if(msg == null || msg == 'undefined') {
            msg = '';
        }
        return msg;
    };

}(window.serviceConfig = {}));