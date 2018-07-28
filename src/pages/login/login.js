import React from 'react'
import './index.less'
import Header from './../../components/Header'
import Footer from './../../components/Footer'
import { Checkbox,Input,Button,Tabs,Icon} from 'antd';
const TabPane = Tabs.TabPane;
export default class Login extends React.Component{
    callback=(key)=>{
        console.log(key);
    }
    render(){
        return(
            <div>
                <Header/>
                   <div className="loginContent">
                       <p className="loginHead">
                           楚金招聘
                       </p>

                            <div className="loginDiv">
                                <Tabs defaultActiveKey="1" onChange={this.callback}>
                                    <TabPane tab="我要招聘" key="1">
                                        <div className=" pb20 pl40 pr40 pt20">
                                            <ul>
                                                <li>
                                                    <div>
                                                        <Input placeholder="请输入手机号" prefix={<Icon type="tablet" style={{ color: 'rgba(0,0,0,.25)',fontSize:'18px'}}/>}/>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <Input placeholder="请输入密码" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)',fontSize:'18px'}}/>}/>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex flex-space-between">
                                                        <span>
                                                            <Checkbox/>
                                                            <span className="vtm ">注册协议</span>
                                                        </span>
                                                        <span className="clblue">
                                                            忘记密码
                                                        </span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                            <Button className="loginButton" type="">注册</Button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex flex-space-between">
                                                        <div>
                                                            <span>其他登录方式：</span>
                                                            <Icon type="qq" className="mr20" style={{ color: '#2fb3e8',fontSize:'24px'}}/>
                                                            <Icon type="weibo" className="mr20" style={{ color: '#2fb3e8',fontSize:'24px'}}  />
                                                            <Icon type="wechat" style={{ color: '#2fb3e8',fontSize:'24px'}}/>
                                                        </div>
                                                        <span className="clblue">
                                                            注册用户
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="我要求职" key="2">
                                        <div className=" pb20 pl40 pr40 pt20">
                                            <ul>
                                                <li>
                                                    <div>
                                                        <Input placeholder="请输入手机号" prefix={<Icon type="tablet" style={{ color: 'rgba(0,0,0,.25)',fontSize:'18px'}}/>}/>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <Input placeholder="请输入密码" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)',fontSize:'18px'}}/>}/>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex flex-space-between">
                                                        <span>
                                                            <Checkbox/>
                                                            <span className="vtm ">注册协议</span>
                                                        </span>
                                                        <span className="clblue">
                                                            忘记密码
                                                        </span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <Button className="loginButton" type="">注册</Button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex flex-space-between">
                                                        <div>
                                                            <span>其他登录方式：</span>
                                                            <Icon type="qq" className="mr20" style={{ color: '#2fb3e8',fontSize:'24px'}}/>
                                                            <Icon type="weibo" className="mr20" style={{ color: '#2fb3e8',fontSize:'24px'}}  />
                                                            <Icon type="wechat" style={{ color: '#2fb3e8',fontSize:'24px'}}/>
                                                        </div>
                                                        <span className="clblue">
                                                            注册用户
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPane>
                                </Tabs>

                            </div>
                   </div>
                <Footer/>
            </div>
        )}
}