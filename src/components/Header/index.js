import React from 'react'
import {Row,Col} from 'antd'
import './index.less'
export default class Header extends React.Component{

    render(){
        return(
            <div className="header">
                <Row>
                    <Col span={3}/>
                    <Col span={18} className="clr">
                        <ul className='headUl clr left'>
                            <li>
                                <i className="iconfont icon-home"></i>楚金首页
                            </li>
                            <li>
                                请登录
                            </li>
                            <li>
                                免费注册
                            </li>
                        </ul>
                        <ul className='headUl clr right tr'>
                            <li>
                                <i className="iconfont icon-bangzhuzhongxin"></i>帮助中心
                            </li>
                            <li>
                                <i className="iconfont icon-service"></i>在线客服
                            </li>
                            <li>
                                <i className="iconfont icon-iconchange"></i>切换身份
                            </li>
                        </ul>
                    </Col>
                    <Col span={3}/>
                </Row>
            </div>
        )
    }
}