import React from 'react'
import {Row,Col} from 'antd'
import './index.less'
import {Navbar} from 'react-bootstrap'
export default class Banner extends React.Component{

    render(){
        return(
            <div className="Banner">
                {/*<Navbar className="header">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <div className="logo">
                                <img src="/asset/logo.png" alt="" className="vtm"/>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Text>
                            <Navbar.Link href="#">
                                首页
                            </Navbar.Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Navbar.Link href="#">
                                免费注册
                            </Navbar.Link>
                        </Navbar.Text>
                        <Navbar.Text pullRight>
                            <Navbar.Link href="#">
                                应聘中心
                            </Navbar.Link>
                        </Navbar.Text>
                        <Navbar.Text pullRight>
                            <Navbar.Link href="#">
                                发布职位
                            </Navbar.Link>
                        </Navbar.Text>
                        <Navbar.Text pullRight>
                            <Navbar.Link href="#">
                                简历搜索
                            </Navbar.Link>
                        </Navbar.Text>
                        <Navbar.Text pullRight>
                            <Navbar.Link href="#">
                                企业中心
                            </Navbar.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>;*/}
                <Row >
                    <Col span={24} className="">
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
                        <div className="right bannerSearch">
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