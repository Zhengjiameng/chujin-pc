import React from 'react'
import './index.less'
import Header from './../../components/Header'
import Footer from './../../components/Footer'
import Banner from './../../components/Banner'
import {Input,DatePicker,Tabs } from 'antd';
import JobList from "../../components/JobList";
const TabPane = Tabs.TabPane;
export default class PostJobs extends React.Component{
    onChange=(date, dateString)=>{
        console.log(date, dateString);
    }
    callback=(key)=>{}
    render(){
        return(
            <div className="postJobs">
                <Header/>
                <div className="container">
                    <Banner/>
                    <div className="content">
                        <div className="search">
                            <ul>
                                <li>
                                    <div>
                                        <h1>
                                            公司名称：
                                        </h1>
                                        <Input placeholder="请输入"/>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h1>
                                            部门名称：
                                        </h1>
                                        <Input placeholder="请输入"/>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h1>
                                            职位名称：
                                        </h1>
                                        <Input placeholder="请输入"/>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h1>
                                            选择日期：
                                        </h1>
                                        <DatePicker onChange={this.onChange} placeholder="开始时间"/>
                                        <em>~</em>
                                        <DatePicker onChange={this.onChange} placeholder="结束时间"/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="searchContent">
                            <Tabs defaultActiveKey="1" onChange={this.callback}>
                                <TabPane tab="招聘中" key="1">
                                    <JobList/>
                                </TabPane>
                                <TabPane tab="未发布" key="2"><JobList/></TabPane>
                                <TabPane tab="已暂停" key="3"><JobList/></TabPane>
                            </Tabs>,
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        )}
}