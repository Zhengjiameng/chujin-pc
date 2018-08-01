import React from 'react'
import './index.less'
import Header from './../../components/Header'
import Footer from './../../components/Footer'
import Banner from './../../components/Banner'
import {Input,Button,Modal,Cascader,Row,Col,Card} from 'antd';
const Search = Input.Search;
export default class SearchResume extends React.Component{
    options = [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
                value: 'xihu',
                label: 'West Lake',
            }],
        }],
    }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
            }],
        }],
    }];

    onChange=(value)=>{
        console.log(value);
    }

// Just show the latest item.
    displayRender=(label)=> {
        return label[label.length - 1];
    }
    render(){
        return(
            <div className="index">
                <Header/>
                   <div className="container">
                       <Banner/>
                       <div className="contain">
                           <div className="search">
                               <Cascader
                                   options={this.options}
                                   expandTrigger="hover"
                                   displayRender={this.displayRender}
                                   onChange={this.onChange}
                                   className="cityChange"
                                   placeholder="深圳"
                               />
                               <Search placeholder="搜索职位/公司" enterButton="搜索" className="searchInput"/>
                           </div>
                       </div>
                   </div>
                    <div className="banner">
                        <div className="container">
                            <ul>
                                <li>
                                    <div>
                                        <i className="iconfont icon-order-pending"></i>
                                        <p className="pt20">
                                            待处理的简历
                                        </p>
                                        <p className="fs16 pt10 pb20">
                                            13
                                        </p>
                                        <p>
                                            <Button>应聘中心</Button>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <i className="iconfont icon-xinxifabu"></i>
                                        <p className="pt20">
                                            待处理的简历
                                        </p>
                                        <p className="fs16 pt10 pb20">
                                            13
                                        </p>
                                        <p>
                                            <Button>应聘中心</Button>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <i className="iconfont icon-tubiao-"></i>
                                        <p className="pt20">
                                            待处理的简历
                                        </p>
                                        <p className="fs16 pt10 pb20">
                                            13
                                        </p>
                                        <p>
                                            <Button>应聘中心</Button>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        <div className="container">
                            <p className="pt20 pb20 clblue fs16 tc">热门简历</p>
                            <Row gutter={16}>
                                <Col lg={8} className="pt20" xs={24}>
                                    <div className="card">
                                        <div className="cardHead">
                                            <div className="top">
                                                <p>
                                                    <span>程晓明
                                                        <i className="iconfont icon-sexw"></i>
                                                    </span>
                                                    <span>3年</span>
                                                </p>
                                                <p>
                                                    <span>23岁</span>
                                                    <span>本科</span>
                                                </p>
                                            </div>
                                            <div className="bottom">
                                                <div className="flex-1 flex flex-align-center">
                                                    <img src="/asset/tx.png" alt=""/>
                                                    <span className="ml20">产品经理</span>
                                                </div>
                                                <span>07-12</span>
                                            </div>
                                        </div>
                                        <div className="cardFoot">
                                            <a href="">简历详情</a>
                                            <a href="">与他联系</a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8} xs={24} className="pt20">
                                    <div className="card">
                                        <div className="cardHead">
                                            <div className="top">
                                                <p>
                                                    <span>程晓明
                                                        <i className="iconfont icon-sexw"></i>
                                                    </span>
                                                    <span>3年</span>
                                                </p>
                                                <p>
                                                    <span>23岁</span>
                                                    <span>本科</span>
                                                </p>
                                            </div>
                                            <div className="bottom">
                                                <div className="flex-1 flex flex-align-center">
                                                    <img src="/asset/tx.png" alt=""/>
                                                    <span className="ml20">产品经理</span>
                                                </div>
                                                <span>07-12</span>
                                            </div>
                                        </div>
                                        <div className="cardFoot">
                                            <a href="">简历详情</a>
                                            <a href="">与他联系</a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8} xs={24} className="pt20">
                                    <div className="card">
                                        <div className="cardHead">
                                            <div className="top">
                                                <p>
                                                    <span>程晓明
                                                        <i className="iconfont icon-sexw"></i>
                                                    </span>
                                                    <span>3年</span>
                                                </p>
                                                <p>
                                                    <span>23岁</span>
                                                    <span>本科</span>
                                                </p>
                                            </div>
                                            <div className="bottom">
                                                <div className="flex-1 flex flex-align-center">
                                                    <img src="/asset/tx.png" alt=""/>
                                                    <span className="ml20">产品经理</span>
                                                </div>
                                                <span>07-12</span>
                                            </div>
                                        </div>
                                        <div className="cardFoot">
                                            <a href="">简历详情</a>
                                            <a href="">与他联系</a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8} xs={24} className="pt20">
                                    <div className="card">
                                        <div className="cardHead">
                                            <div className="top">
                                                <p>
                                                    <span>程晓明
                                                        <i className="iconfont icon-sexw"></i>
                                                    </span>
                                                    <span>3年</span>
                                                </p>
                                                <p>
                                                    <span>23岁</span>
                                                    <span>本科</span>
                                                </p>
                                            </div>
                                            <div className="bottom">
                                                <div className="flex-1 flex flex-align-center">
                                                    <img src="/asset/tx.png" alt=""/>
                                                    <span className="ml20">产品经理</span>
                                                </div>
                                                <span>07-12</span>
                                            </div>
                                        </div>
                                        <div className="cardFoot">
                                            <a href="">简历详情</a>
                                            <a href="">与他联系</a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8} xs={24} className="pt20">
                                    <div className="card">
                                        <div className="cardHead">
                                            <div className="top">
                                                <p>
                                                    <span>程晓明
                                                        <i className="iconfont icon-sexw"></i>
                                                    </span>
                                                    <span>3年</span>
                                                </p>
                                                <p>
                                                    <span>23岁</span>
                                                    <span>本科</span>
                                                </p>
                                            </div>
                                            <div className="bottom">
                                                <div className="flex-1 flex flex-align-center">
                                                    <img src="/asset/tx.png" alt=""/>
                                                    <span className="ml20">产品经理</span>
                                                </div>
                                                <span>07-12</span>
                                            </div>
                                        </div>
                                        <div className="cardFoot">
                                            <a href="">简历详情</a>
                                            <a href="">与他联系</a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8} xs={24} className="pt20">
                                    <div className="card">
                                        <div className="cardHead">
                                            <div className="top">
                                                <p>
                                                    <span>程晓明
                                                        <i className="iconfont icon-sexw"></i>
                                                    </span>
                                                    <span>3年</span>
                                                </p>
                                                <p>
                                                    <span>23岁</span>
                                                    <span>本科</span>
                                                </p>
                                            </div>
                                            <div className="bottom">
                                                <div className="flex-1 flex flex-align-center">
                                                    <img src="/asset/tx.png" alt=""/>
                                                    <span className="ml20">产品经理</span>
                                                </div>
                                                <span>07-12</span>
                                            </div>
                                        </div>
                                        <div className="cardFoot">
                                            <a href="">简历详情</a>
                                            <a href="">与他联系</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </div>
                <Footer/>
            </div>
        )}
}