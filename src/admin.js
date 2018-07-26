import React from 'react'
import {Row,Col} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/common.less'
import './style/app.css'
import './style/iconfont.css'
import Banner from './components/Banner'
export default class Admin extends React.Component{

    render(){
        return (
            <div>
                <Header>
                    header
                </Header>
                <Banner/>
                <Row className="container" >
                    <Col span={18} offset="3">
                        <Row>
                            <Col span={3} className="nav-left">
                                <NavLeft />
                            </Col>
                            <Col span={15} className="main">
                                <Row className="content">
                                    {/*<Home/>*/}
                                    {this.props.children}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Footer/>

            </div>
        );
    }
}