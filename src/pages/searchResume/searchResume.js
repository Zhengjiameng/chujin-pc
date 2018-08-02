import React from 'react'
import './index.less'
import Header from './../../components/Header'
import Footer from './../../components/Footer'
import Banner from './../../components/Banner'
import {Input,Modal,Cascader,Select,Tabs} from 'antd';
import Sort from './../../components/Sort'
import JobList from "../../components/JobList";
const Search = Input.Search;
const Option = Select.Option;
const TabPane = Tabs.TabPane;
export default class SearchResume extends React.Component{
    dom=null
    constructor(props) {
        super(props);
        console.log(props)
    }
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
    show=true
    state = { visible: false }
    clickHandle=()=>{
        this.setState({
            visible: true,
        });
    }
    handleOk=()=>{
        this.setState({
            visible: false,
        });
    }
    handleCancel=()=>{
        this.setState({
            visible: false,
        });
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
                       <div className="condition">
                           <ul >
                               <li className="clr">
                                   <strong>行业类别:</strong>
                                   <span>不限</span>
                                   <span>金融</span>
                                   <span>IT互联网</span>
                                   <span>服务</span>
                                   <span className="right" onClick={this.clickHandle}>更多</span>
                               </li>
                               <li>
                                   <strong>发布时间:</strong>
                                   <span>不限</span>
                                   <span>金融</span>
                                   <span>IT互联网</span>
                                   <span>服务</span>
                               </li>
                               <li>
                                   <strong>工作经验:</strong>
                                   <span>不限</span>
                                   <span>金融</span>
                                   <span>IT互联网</span>
                                   <span>服务</span>
                               </li>
                               <li>
                                   <strong>薪资范围:</strong>
                                   <span>不限</span>
                                   <span>金融</span>
                                   <span>IT互联网</span>
                                   <span>服务</span>
                               </li>
                               <li>
                                   <strong>
                                       职位区域
                                   </strong>
                                   <Select defaultValue="lucy">
                                       <Option value="jack">Jack</Option>
                                       <Option value="lucy">Lucy</Option>
                                       <Option value="disabled" disabled>Disabled</Option>
                                       <Option value="Yiminghe">yiminghe</Option>
                                   </Select>
                               </li>
                           </ul>
                       </div>
                       <div className="mt20">
                           <Sort params={this.show}/>
                           <JobList params={this.show}/>
                       </div>
                   </div>
                <Footer/>
                <Modal
                    title="选择行业"
                    visible={this.state.visible}
                     onOk={this.handleOk}
                     onCancel={this.handleCancel}
                    width={860}
                    okText="确认"
                    cancelText="取消"
                >
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition="left"
                        style={{ height: 420 }}
                    >
                        <TabPane tab="计算机 / 互联网 / 通信 / 电子" key="1">
                            <ul className="sortContent">
                                <li>
                                    计算机软件
                                </li>
                                <li>
                                    计算机软件
                                </li>
                                <li>
                                    计算机软件
                                </li>
                                <li>
                                    通信/电信运营，增值服务
                                </li>
                                <li>
                                    电子技术/半导体/集成电路
                                </li>
                            </ul>
                        </TabPane>
                        <TabPane tab="会计 / 金融 / 保险" key="2">Content of tab 2</TabPane>
                        <TabPane tab="贸易 / 消费 / 制造 / 营运" key="3">Content of tab 3</TabPane>
                        <TabPane tab="制药 / 医疗" key="4">Content of tab 4</TabPane>
                        <TabPane tab="广告 / 媒体" key="5">Content of tab 5</TabPane>
                        <TabPane tab="房地产 / 建筑" key="6">Content of tab 6</TabPane>
                        <TabPane tab="专业服务 / 教育 / 培训" key="7">Content of tab 7</TabPane>
                        <TabPane tab="服务业" key="8">Content of tab 8</TabPane>
                        <TabPane tab="物流 / 运输" key="9">Content of tab 9</TabPane>
                        <TabPane tab="能源 / 原材料" key="10">Content of tab 10</TabPane>
                        <TabPane tab="政府 / 非营利组织 / 其它" key="11">Content of tab 11</TabPane>
                    </Tabs>
                </Modal>
            </div>
        )}
}