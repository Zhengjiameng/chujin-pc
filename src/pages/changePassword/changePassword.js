import React from 'react'
import './index.less'
import Header from './../../components/Header'
import Footer from './../../components/Footer'
import { Input,Button,Icon} from 'antd';
export default class ChangePassword extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                   <div className="registerContent">
                       <p className="registerHead">
                           楚金招聘
                       </p>
                            <div className="loginDiv">
                                <p className="tc accountLogin">
                                    <span>重置密码</span>
                                </p>
                                <div className=" pb20 pl40 pr40 pt20">
                                    <ul>
                                        <li>
                                            <div>
                                                <Input placeholder="请输入手机号" prefix={<Icon type="tablet" style={{ color: 'rgba(0,0,0,.25)',fontSize:'18px'}}/>}/>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <Input className="codeInput" placeholder="验证码" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)',fontSize:'18px'}}/>}/>
                                                <Button className="getCode" type="">获取验证码</Button>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <Input placeholder="请输入密码" prefix={<Icon type="safety" style={{ color: 'rgba(0,0,0,.25)',fontSize:'18px'}}/>}/>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <Input placeholder="请重新输入密码" prefix={<Icon type="safety" style={{ color: 'rgba(0,0,0,.25)',fontSize:'18px'}}/>}/>
                                            </div>
                                        </li>
                                       {/* <li>
                                            <div className="flex flex-space-between">
                                                        <span>
                                                            <Checkbox/>
                                                            <span className="vtm ">注册协议</span>
                                                        </span>
                                                <span className="clblue">
                                                            忘记密码
                                                        </span>
                                            </div>
                                        </li>*/}
                                        <li>
                                            <div>
                                                <Button className="loginButton" type="">注册</Button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex flex-space-between">
                                                <a href="">返回首页</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                   </div>
                <Footer/>
            </div>
        )}
}