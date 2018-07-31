import React from 'react'
import './index.less'
import Header from './../../components/Header'
import Footer from './../../components/Footer'
import { Checkbox,Input,Button } from 'antd';
export default class Approve extends React.Component{
    render(){
        return(
            <div className="approve">
                <Header/>
                   <div className="registerContent">
                       <p className="registerHead">
                           企业认证
                       </p>
                            <div className="registerDiv">
                                <div className=" pb20 pl20 pr20">
                                    <ul>
                                        <li>
                                            <div>
                                                <span className="accountLeft"><em className="clred">*</em>企业名称：</span>
                                                <Input placeholder="请输入企业名称"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <span className="accountLeft"><em className="clred">*</em>营业执照：</span>
                                                <Input placeholder="6 - 16位密码，区分大小写"/>
                                                <div className="companyPic">
                                                    <a href="" className="upload"/>
                                                    <img src="/asset/exzample01.png" alt=""/>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <span className="accountLeft"><em className="clred">*</em>社会统一信用代码：</span>
                                                <Input placeholder="请输入税务登记号"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <span className="accountLeft">社会统一信码：</span>
                                                <Input placeholder="请输入企业对公账号"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <span className="accountLeft">开户银行：</span>
                                                <Input placeholder="请输入企业对公账号"/>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="tc mt10">
                                        <Button className="loginButton" type="">认证</Button>
                                    </div>
                                </div>

                            </div>
                   </div>
                <Footer/>
            </div>
        )}
}