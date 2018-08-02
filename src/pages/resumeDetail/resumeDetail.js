import React from 'react'
import './index.less'
import Header from './../../components/Header'
import Footer from './../../components/Footer'
import Banner from './../../components/Banner'
import {Button,Icon} from 'antd'
export default class ResumeDetail extends React.Component{
    constructor(props) {
        super(props);
        console.log(props)
    }

    render(){
        return(
            <div className="detail">
                <Header/>
                <div className="container">
                    <Banner/>
                </div>
                <div className="contain">
                    <div className="container flex flex-space-between">
                        <img src="/asset/exzample01.png" alt="" className="tx"/>
                        <div className="flex-1 ml40">
                            <p className="fs22 c3 ">程晓明</p>
                            <p className="userInfo">
                                <i className="iconfont icon-sexw"></i>
                                <span>男</span>
                                <span>23岁</span>
                                <span>本科</span>
                                <span>应届毕业</span>
                            </p>
                            <p className="userTel">
                                <Icon type="mail" />
                                <span>chengxiaoming@eims.com.cn</span>
                                <Icon type="tablet" />
                                <span>
                                15898767865
                            </span>
                            </p>
                        </div>
                        <div className="share">
                            <p>
                                <Button type="primary" className="mr20">邀请投递</Button>
                                <Button>联系求职者</Button>
                            </p>
                            <p className="mt20 tr fs16">
                                <span>分享到</span>
                                <Icon type="qq" className="ml20 mr20"/>
                                <Icon type="weibo" />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container relative">
                    <div className="workDetail">
                        <p className="flex flex-align-center">
                            <h1>求职意向</h1>
                            <i className="longLine"/>
                        </p>
                        <p>
                            <div className="flex-1">
                                <span className="title">期望薪资： </span>
                                <span>
                                 8000-100a00元/月
                            </span>
                            </div>
                            <div className="flex-1">
                                <span className="title">地点：  </span>
                                <span>
                                 8000-100a00元/月
                            </span>
                            </div>

                        </p>
                        <p>
                            <div className="flex-1">
                                <span className="title">期望薪资： </span>
                                <span>
                                 8000-100a00元/月
                            </span>
                            </div>
                            <div className="flex-1">
                                <span className="title">地点：  </span>
                                <span>
                                 8000-100a00元/月
                            </span>
                            </div>
                        </p>
                        <p>
                            <span className="title">个人标签：</span>
                            <span className="flex-1">
                            Axure  Visio  Xmind  MockingBot
                        </span>
                        </p>
                        <p>
                            <span className="title">自我评价：</span>
                            <span className="flex-1">熟悉ERP、法律领域，有相关工作经验；熟悉完整的产品开发、交付工作流程，有一定的团队协调能力；
有一定的自主学习能力，会换位思考，有同理心和较强责任心，抗压能力强；能很好的适应环境，擅与人沟通。</span>
                        </p>
                        <p>
                            <span className="title">工作类型：</span>
                            <span className="flex-1">
                            全职
                        </span>
                        </p>
                    </div>
                    <div className="workDetail">
                        <p className="flex flex-align-center">
                            <h1>工作经验</h1>
                            <i className="longLine"/>
                        </p>
                        <p>
                            <div className="flex-1">
                                <span className="title">工作时间： </span>
                                <span>
                                 8000-100a00元/月
                            </span>
                            </div>
                            <div className="flex-1">
                                <span className="title">所在部门：  </span>
                                <span>
                                 8000-100a00元/月
                            </span>
                            </div>

                        </p>
                        <p>
                            <div className="flex-1">
                                <span className="title">公司名称： </span>
                                <span>
                                 8000-100a00元/月
                            </span>
                            </div>
                            <div className="flex-1">
                                <span className="title">所在岗位：  </span>
                                <span>
                                 8000-100a00元/月
                            </span>
                            </div>
                        </p>
                        <p>
                            <span className="title">自我评价：</span>
                            <span className="flex-1">1、负责产品的需求收集、整理
2、负责产品的功能设计，曾写过100多页的设计文档
3、协助项目团队完成项目实施，给予技术支持；
4、负责产品项目的开发，对进度和质量进行监控；
5、优化产品组合，提升产品价值；
6、对产品市场有足够的把握，充分了解用户需求；
7、协助企业和部门领导完成有关产品的其它工作；
8、负责与相关部门（销售、研发、测试等）进行联络和协调。</span>
                        </p>
                        <p>
                            <span className="title">工作类型：</span>
                            <span className="flex-1">
                            全职
                        </span>
                        </p>
                    </div>
                    <div className="workDetail">
                        <p className="flex flex-align-center">
                            <h1>项目经验</h1>
                            <i className="longLine"/>
                        </p>
                        <div>
                            <p>
                                <span className="mr40">O2O书店平台</span>
                                <span className="">
                                    2017/7-2017/9
                                </span>
                            </p>
                            <p className="projectDetail">
                                <span className="title">公司名称：</span>
                                <span className="flex-1">北京吉威时代软件股份有限公司</span>
                            </p>
                            <p>
                                <span className="title">项目描述：</span>
                                <span className="flex-1">1、负责产品的需求收集、整理
2、负责产品的功能设计，曾写过100多页的设计文档
3、协助项目团队完成项目实施，给予技术支持；
4、负责产品项目的开发，对进度和质量进行监控；
5、优化产品组合，提升产品价值；
6、对产品市场有足够的把握，充分了解用户需求；
7、协助企业和部门领导完成有关产品的其它工作；
8、负责与相关部门（销售、研发、测试等）进行联络和协调。</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className="mr40">O2O书店平台</span>
                                <span className="">
                                    2017/7-2017/9
                                </span>
                            </p>
                            <p className="projectDetail">
                                <span className="title">公司名称：</span>
                                <span className="flex-1">北京吉威时代软件股份有限公司</span>
                            </p>
                            <p>
                                <span className="title">项目描述：</span>
                                <span className="flex-1">1、负责产品的需求收集、整理
2、负责产品的功能设计，曾写过100多页的设计文档
3、协助项目团队完成项目实施，给予技术支持；
4、负责产品项目的开发，对进度和质量进行监控；
5、优化产品组合，提升产品价值；
6、对产品市场有足够的把握，充分了解用户需求；
7、协助企业和部门领导完成有关产品的其它工作；
8、负责与相关部门（销售、研发、测试等）进行联络和协调。</span>
                            </p>
                        </div>

                    </div>
                    <div className="workDetail">
                        <p className="flex flex-align-center">
                            <h1>教育经历</h1>
                            <i className="longLine"/>
                        </p>
                        <p>
                            <span className="title">2015/9-2018/6       </span>
                            <span className="flex-1">
                                <span className="mr20">
                                    湖南理工大学</span>
                                <span className="mr20">
                                    软件工程
                                </span>
                                <span className="mr20">
                                    本科
                                </span>
                            </span>
                        </p>

                    </div>
                    <div className="workDetail">
                        <p className="flex flex-align-center">
                            <h1>技能特长</h1>
                            <i className="longLine"/>
                        </p>
                        <p>
                            <span className="title">证书</span>
                            <span className="flex-1">
                                <span className="mr20">
                                    湖南理工大学</span>
                                <span className="mr20">
                                    软件工程
                                </span>
                                <span className="mr20">
                                    本科
                                </span>
                            </span>
                        </p>

                    </div>
                    <i className="iconfont icon-qunfengkefujingli"></i>
                </div>
                <Footer/>
            </div>
        )}
}