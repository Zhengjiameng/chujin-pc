import React from 'react'
import {Row,Col} from 'antd'
import './index.less'
export default class Banner extends React.Component{

    render(){
        return(
            <div className="Banner">
                <Row >
                    <Col span={18} className="" offset="3">
                        <div className="logo">
                            <img src="/asset/logo.png" alt="" className="vtm"/>
                        </div>
                        <ul className='headUl clr left'>
                            <li>
                                首页
                            </li>
                            <li>
                                应聘中心
                            </li>
                            <li>
                                发布职位
                            </li>
                            <li>
                                简历搜索
                            </li>
                            <li>
                                企业中心
                            </li>
                        </ul>
                        <div className="right">
                            <span className="fs16">深圳</span>
                            <span className="search">
                                <input type="text" className="" placeholder="请输入"/>
                                <a href="">搜索</a>
                            </span>
                        </div>
                    </Col>

                </Row>
            </div>
        )
    }
}