import React from 'react'
import './index.less'
import Header from './../../components/Header'
import Footer from './../../components/Footer'
import { Checkbox,Input,Button } from 'antd';
export default class Register extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                   <div className="registerContent">
                       <p className="registerHead">
                           楚金招聘
                       </p>
                            <div className="registerDiv">
                                <p className="tc accountRegister">
                                    <span>账号注册</span>
                                </p>
                                <div className=" pb20 pl20 pr20">
                                    <ul>
                                        <li>
                                            <div>
                                                <span className="accountLeft">推荐码：</span>
                                                <Input placeholder="请输入推荐码"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <span className="accountLeft">手机号：</span>
                                                <span className="accountInput">
                                                    <i>+86</i>
                                                     <Input placeholder="请输入手机号"/>
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <span className="accountLeft">登录密码：</span>
                                                <Input placeholder="请输入登录密码"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <span className="accountLeft">确认密码：</span>
                                                <Input placeholder="请输入确认密码"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <span className="accountLeft">验证码：</span>
                                                <Input className="codeInput" placeholder="验证码"/>
                                                <Button className="getCode" type="">获取验证码</Button>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="agreement">
                                        <Checkbox/>
                                        <span className="vtm clblue">注册协议</span>
                                    </div>
                                    <div className="agreement mt10">
                                        <Button className="loginButton" type="">注册</Button>
                                        <a className="clblue ml20">使用已有账号登录</a>
                                    </div>
                                </div>

                            </div>
                   </div>
                <Footer/>
            </div>
        )}
}