var DemoData = function() {
    var action = {
        // 获取待收货清单列表demo数据
        orderListData: function() {
            return getOrderListData();
        },
        orderDetailData: function() {
            return getOrderDetailData();
        },
        scanListData: function() {
            return getScanListData();
        }
    };

    function getOrderListData() {
        var data = [{
            "id": 25,
            "status": 1,
            "createTime": 1512028216226,
            "lastModifyTime": 1512028345917,
            "company": {
                "id": 31,
                "status": 1,
                "createTime": 1512028345866,
                "lastModifyTime": 1512028345867,
                "name": null,
                "decode": null,
                "trucks": [],
                "drivers": []
            },
            "truck": {
                "id": 44,
                "status": 1,
                "createTime": 1512028190215,
                "lastModifyTime": 1512028190215,
                "carNo": "川A66666",
                "size": null,
                "logisticsCompanyId": 29
            },
            "truckDriver": {
                "id": 48,
                "status": 1,
                "createTime": 1512028190231,
                "lastModifyTime": 1512028190231,
                "driverName": "司机er",
                "driverMobile": "13982023595",
                "logisticsCompanyId": 29
            },
            "delivers": [{
                "id": 49,
                "status": 0,
                "createTime": 1512028345901,
                "lastModifyTime": 1512028345901,
                "deliverJson": {
                    "registerAmount": 0,
                    "address": "万达广场110",
                    "scale": "",
                    "industories": [{
                        "createTime": 1509107000480,
                        "lastModifyTime": 1511495602807,
                        "name": "旅游业",
                        "id": 3,
                        "status": 1
                    }],
                    "activeStatus": 1,
                    "createTime": 1511243259236,
                    "lastModifyTime": 1511422698385,
                    "name": "分销商根节点4",
                    "logo": "logo",
                    "id": 707,
                    "sn": "12345",
                    "describe": "万达企业110",
                    "status": 1
                },
                "deliverSn": "DE151202780106980",
                "receiverJson": {
                    "address": "山东省济宁市任城产业园1号",
                    "brands": [],
                    "parentNodeId": 134,
                    "telephone": "13982023594",
                    "activeStatus": 1,
                    "createTime": 1511243372524,
                    "chargePerson": "陈金科3",
                    "lastModifyTime": 1511243372658,
                    "ecmId": 706,
                    "name": "剑南春分销商103",
                    "id": 3,
                    "nodeId": 135,
                    "status": 1
                },
                "goods": [{
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品一",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                }]
            }],
            "receives": [{
                "id": 49,
                "status": 0,
                "createTime": 1512028345901,
                "lastModifyTime": 1512028345901,
                "deliverJson": {
                    "registerAmount": 0,
                    "address": "万达广场110",
                    "scale": "",
                    "industories": [{
                        "createTime": 1509107000480,
                        "lastModifyTime": 1511495602807,
                        "name": "旅游业",
                        "id": 3,
                        "status": 1
                    }],
                    "activeStatus": 1,
                    "createTime": 1511243259236,
                    "lastModifyTime": 1511422698385,
                    "name": "分销商根节点4",
                    "logo": "logo",
                    "id": 707,
                    "sn": "12345",
                    "describe": "万达企业110",
                    "status": 1
                },
                "deliverSn": "DE151202780106980",
                "receiverJson": {
                    "address": "山东省济宁市任城产业园1号",
                    "brands": [],
                    "parentNodeId": 134,
                    "telephone": "13982023594",
                    "activeStatus": 1,
                    "createTime": 1511243372524,
                    "chargePerson": "陈金科3",
                    "lastModifyTime": 1511243372658,
                    "ecmId": 706,
                    "name": "剑南春分销商103",
                    "id": 3,
                    "nodeId": 135,
                    "status": 1
                },
                "goods": [{
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品一",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                }, {
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品一",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                }, {
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品一",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                }]
            }],
            "logisticsSn": "400"
        }, {
            "id": 25,
            "status": 1,
            "createTime": 1512028216226,
            "lastModifyTime": 1512028345917,
            "company": {
                "id": 31,
                "status": 1,
                "createTime": 1512028345866,
                "lastModifyTime": 1512028345867,
                "name": null,
                "decode": null,
                "trucks": [],
                "drivers": []
            },
            "truck": {
                "id": 44,
                "status": 1,
                "createTime": 1512028190215,
                "lastModifyTime": 1512028190215,
                "carNo": "川A66666",
                "size": null,
                "logisticsCompanyId": 29
            },
            "truckDriver": {
                "id": 48,
                "status": 1,
                "createTime": 1512028190231,
                "lastModifyTime": 1512028190231,
                "driverName": "司机er",
                "driverMobile": "13982023595",
                "logisticsCompanyId": 29
            },
            "delivers": [{
                "id": 49,
                "status": 0,
                "createTime": 1512028345901,
                "lastModifyTime": 1512028345901,
                "deliverJson": {
                    "registerAmount": 0,
                    "address": "万达广场110",
                    "scale": "",
                    "industories": [{
                        "createTime": 1509107000480,
                        "lastModifyTime": 1511495602807,
                        "name": "旅游业",
                        "id": 3,
                        "status": 1
                    }],
                    "activeStatus": 1,
                    "createTime": 1511243259236,
                    "lastModifyTime": 1511422698385,
                    "name": "分销商根节点4",
                    "logo": "logo",
                    "id": 707,
                    "sn": "12345",
                    "describe": "万达企业110",
                    "status": 1
                },
                "deliverSn": "DE151202780106980",
                "receiverJson": {
                    "address": "山东省济宁市任城产业园1号",
                    "brands": [],
                    "parentNodeId": 134,
                    "telephone": "13982023594",
                    "activeStatus": 1,
                    "createTime": 1511243372524,
                    "chargePerson": "陈金科3",
                    "lastModifyTime": 1511243372658,
                    "ecmId": 706,
                    "name": "剑南春分销商103",
                    "id": 3,
                    "nodeId": 135,
                    "status": 1
                },
                "goods": [{
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品一",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                }, {
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品一",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                }, {
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品一",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                }]
            }, {
                "id": 49,
                "status": 0,
                "createTime": 1512028345901,
                "lastModifyTime": 1512028345901,
                "deliverJson": {
                    "registerAmount": 0,
                    "address": "万达广场110",
                    "scale": "",
                    "industories": [{
                        "createTime": 1509107000480,
                        "lastModifyTime": 1511495602807,
                        "name": "旅游业",
                        "id": 3,
                        "status": 1
                    }],
                    "activeStatus": 1,
                    "createTime": 1511243259236,
                    "lastModifyTime": 1511422698385,
                    "name": "分销商根节点4",
                    "logo": "logo",
                    "id": 707,
                    "sn": "12345",
                    "describe": "万达企业110",
                    "status": 1
                },
                "deliverSn": "DE151202780106980",
                "receiverJson": {
                    "address": "山东省济宁市任城产业园1号",
                    "brands": [],
                    "parentNodeId": 134,
                    "telephone": "13982023594",
                    "activeStatus": 1,
                    "createTime": 1511243372524,
                    "chargePerson": "陈金科3",
                    "lastModifyTime": 1511243372658,
                    "ecmId": 706,
                    "name": "剑南春分销商103",
                    "id": 3,
                    "nodeId": 135,
                    "status": 1
                },
                "goods": [{
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品一",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                }, {
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品一",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                }, {
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品一",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                }]
            }],
            "receives": [{
                "id": 49,
                "status": 0,
                "createTime": 1512028345901,
                "lastModifyTime": 1512028345901,
                "deliverJson": {
                    "registerAmount": 0,
                    "address": "万达广场110",
                    "scale": "",
                    "industories": [{
                        "createTime": 1509107000480,
                        "lastModifyTime": 1511495602807,
                        "name": "旅游业",
                        "id": 3,
                        "status": 1
                    }],
                    "activeStatus": 1,
                    "createTime": 1511243259236,
                    "lastModifyTime": 1511422698385,
                    "name": "分销商根节点4",
                    "logo": "logo",
                    "id": 707,
                    "sn": "12345",
                    "describe": "万达企业110",
                    "status": 1
                },
                "deliverSn": "DE151202780106980",
                "receiverJson": {
                    "address": "山东省济宁市任城产业园1号",
                    "brands": [],
                    "parentNodeId": 134,
                    "telephone": "13982023594",
                    "activeStatus": 1,
                    "createTime": 1511243372524,
                    "chargePerson": "陈金科3",
                    "lastModifyTime": 1511243372658,
                    "ecmId": 706,
                    "name": "剑南春分销商103",
                    "id": 3,
                    "nodeId": 135,
                    "status": 1
                },
                "goods": [{
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品一",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                }, {
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品一",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                }, {
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品一",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                }]
            }],
            "logisticsSn": "400"
        }];
        return data;
    }

    function getScanListData() {
        var logisticsSn = Math.round(Math.random() * 9 + 1);
        var sn = Math.round(Math.random() * 2 + 1);
        var data = {
            "name": "我的测试商品",
            "logisticsSn": logisticsSn,
            "sn": sn,
            "prdFeatures": [{
                    "prdFeatureTemplateName": "颜色",
                    "type": 1,
                    "value": "红色"
                },
                {
                    "prdFeatureTemplateName": "盒",
                    "type": 2,
                    "value": "12"
                }
            ]
        }
        return data;
    }

    function getOrderDetailData() {
        var data = {
            "id": 25,
            "status": 1,
            "createTime": 1512028216226,
            "lastModifyTime": 1512028345917,
            "company": {
                "id": 31,
                "status": 1,
                "createTime": 1512028345866,
                "lastModifyTime": 1512028345867,
                "name": "顺丰",
                "decode": null,
                "trucks": [],
                "drivers": []
            },
            "truck": {
                "id": 44,
                "status": 1,
                "createTime": 1512028190215,
                "lastModifyTime": 1512028190215,
                "carNo": "川A66666",
                "size": null,
                "logisticsCompanyId": 29
            },
            "truckDriver": {
                "id": 48,
                "status": 1,
                "createTime": 1512028190231,
                "lastModifyTime": 1512028190231,
                "driverName": "司机er",
                "driverMobile": "13982023595",
                "logisticsCompanyId": 29
            },
            "delivers": [{
                "id": 49,
                "status": 0,
                "createTime": 1512028345901,
                "lastModifyTime": 1512028345901,
                "deliverJson": {
                    "registerAmount": 0,
                    "address": "万达广场110",
                    "scale": "",
                    "industories": [{
                        "createTime": 1509107000480,
                        "lastModifyTime": 1511495602807,
                        "name": "旅游业",
                        "id": 3,
                        "status": 1
                    }],
                    "activeStatus": 1,
                    "createTime": 1511243259236,
                    "lastModifyTime": 1511422698385,
                    "name": "分销商根节点4",
                    "logo": "logo",
                    "id": 707,
                    "sn": "12345",
                    "describe": "万达企业110",
                    "status": 1
                },
                "deliverSn": "DE151202780106980",
                "receiverJson": {
                    "address": "山东省济宁市任城产业园1号",
                    "brands": [],
                    "parentNodeId": 134,
                    "telephone": "13982023594",
                    "activeStatus": 1,
                    "createTime": 1511243372524,
                    "chargePerson": "陈金科3",
                    "lastModifyTime": 1511243372658,
                    "ecmId": 706,
                    "name": "剑南春分销商103",
                    "id": 3,
                    "nodeId": 135,
                    "status": 1
                },
                "goods": [{
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品rwerw",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                },{
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品rwerw",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                }]
            }],
            "receives": [{
                "id": 49,
                "status": 0,
                "createTime": 1512028345901,
                "lastModifyTime": 1512028345901,
                "deliverJson": {
                    "registerAmount": 0,
                    "address": "万达广场110",
                    "scale": "",
                    "industories": [{
                        "createTime": 1509107000480,
                        "lastModifyTime": 1511495602807,
                        "name": "旅游业",
                        "id": 3,
                        "status": 1
                    }],
                    "activeStatus": 1,
                    "createTime": 1511243259236,
                    "lastModifyTime": 1511422698385,
                    "name": "分销商根节点4",
                    "logo": "logo",
                    "id": 707,
                    "sn": "12345",
                    "describe": "万达企业110",
                    "status": 1
                },
                "deliverSn": "DE151202780106980",
                "receiverJson": {
                    "address": "山东省济宁市任城产业园1号",
                    "brands": [],
                    "parentNodeId": 134,
                    "telephone": "13982023594",
                    "activeStatus": 1,
                    "createTime": 1511243372524,
                    "chargePerson": "陈金科3",
                    "lastModifyTime": 1511243372658,
                    "ecmId": 706,
                    "name": "剑南春分销商103",
                    "id": 3,
                    "nodeId": 135,
                    "status": 1
                },
                "goods": [{
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品一",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                }, {
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品一",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                }, {
                    "id": 1,
                    "status": 1,
                    "createTime": 1512028345901,
                    "lastModifyTime": 1512028345901,
                    "dgId": 49,
                    "code": "605",
                    "good": {
                        "prdCategories": [{
                            "isParent": false,
                            "createTime": 1511316182961,
                            "lastModifyTime": 1511316228417,
                            "name": "酒",
                            "prdTemplateId": 3,
                            "description": "",
                            "pid": 1,
                            "id": 3,
                            "status": 1,
                            "prdTemplate": {
                                "createTime": 1511316182884,
                                "lastModifyTime": 1511316228412,
                                "pid": 1,
                                "id": 3,
                                "status": 0,
                                "prdFeatureTemplates": [{
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "度数",
                                        "id": 1,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "香型",
                                        "id": 3,
                                        "templateId": 3,
                                        "type": 1,
                                        "status": 1
                                    },
                                    {
                                        "createTime": 1511316182884,
                                        "level": 0,
                                        "lastModifyTime": 1511316228412,
                                        "name": "瓶",
                                        "id": 2,
                                        "templateId": 3,
                                        "type": 2,
                                        "status": 1
                                    }
                                ]
                            }
                        }],
                        "createTime": 1511316381582,
                        "lastModifyTime": 1511316381585,
                        "name": "陈金科测试产品一",
                        "prdFeatures": [{
                                "prdFeatureTemplateName": "度数",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 1,
                                "lastModifyTime": 1511316381582,
                                "id": 2,
                                "type": 1,
                                "value": "20",
                                "status": 1
                            },
                            {
                                "prdFeatureTemplateName": "瓶",
                                "productId": 1,
                                "createTime": 1511316381582,
                                "prdFeatureTemplateId": 2,
                                "lastModifyTime": 1511316381582,
                                "id": 3,
                                "type": 2,
                                "value": "1",
                                "status": 1
                            }
                        ],
                        "id": 1,
                        "sn": "1511316381320",
                        "describe": "陈金科测试产品一",
                        "brand": {
                            "createTime": 1511316319,
                            "lastModifyTime": 1511316319,
                            "name": "剑南春一",
                            "logo": "剑南春一",
                            "id": 1,
                            "describe": "剑南春一",
                            "status": 1
                        },
                        "pictures": [],
                        "tags": [],
                        "status": 1
                    }
                }]
            }],
            "logisticsSn": "400"
        }
        return data;
    }

    return action;
}();