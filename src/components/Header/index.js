import React from 'react'
import {Row,Col} from 'antd'
import {Navbar} from 'react-bootstrap'
import './index.less'
export default class Header extends React.Component{

    render(){
        return(
            <div className="header">
                <Navbar >
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home" className="">
                                <i className="iconfont icon-home"></i>
                                <span>
                                    楚金首页
                                </span>
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Text>
                            <Navbar.Link href="#" className="clblue">
                                请登录
                            </Navbar.Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Navbar.Link href="#">
                                免费注册
                            </Navbar.Link>
                        </Navbar.Text>
                        <Navbar.Text pullRight>
                            <Navbar.Link href="#">
                                <i className="iconfont icon-bangzhuzhongxin"/>
                                <span className="bannerName">
                                    帮助中心
                                </span>
                            </Navbar.Link>
                        </Navbar.Text>
                        <Navbar.Text pullRight>
                            <Navbar.Link href="#">
                                <i className="iconfont icon-service"/>
                                <span className="bannerName">
                                   在线客服
                                </span>
                            </Navbar.Link>
                        </Navbar.Text>
                        <Navbar.Text pullRight>
                            <Navbar.Link href="#">
                                <i className="iconfont icon-iconchange"/>
                                <span className="bannerName">
                                    切换身份
                                </span>
                            </Navbar.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>;
            {/*<div className="header">
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
            </div>*/}
            </div>
        )
    }
}