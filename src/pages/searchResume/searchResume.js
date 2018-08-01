import React from 'react'
import './index.less'
import Header from './../../components/Header'
import Footer from './../../components/Footer'
import Banner from './../../components/Banner'
import {Input,Button,Modal,Cascader,Row,Col,Card,Select} from 'antd';
import JobList from "../../components/JobList";
const Search = Input.Search;
const Option = Select.Option;
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
                       <div className="condition">
                           <ul>
                               <li>
                                   <span>行业类别:</span>
                                   <span>不限</span>
                                   <span>金融</span>
                                   <span>IT互联网</span>
                                   <span>服务</span>
                               </li>
                               <li>
                                   <span>发布时间:</span>
                                   <span>不限</span>
                                   <span>金融</span>
                                   <span>IT互联网</span>
                                   <span>服务</span>
                               </li>
                               <li>
                                   <span>工作经验:</span>
                                   <span>不限</span>
                                   <span>金融</span>
                                   <span>IT互联网</span>
                                   <span>服务</span>
                               </li>
                               <li>
                                   <span>薪资范围:</span>
                                   <span>不限</span>
                                   <span>金融</span>
                                   <span>IT互联网</span>
                                   <span>服务</span>
                               </li>
                               <li>
                                   <span>
                                       职位区域
                                   </span>
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
                           <JobList/>
                       </div>
                   </div>
                <Footer/>
            </div>
        )}
}