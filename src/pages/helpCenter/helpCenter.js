import React from 'react'
import './index.less'
import Header from './../../components/Header'
import Footer from './../../components/Footer'
import HelpLeft from './../../components/helpLeft'
import {Row,Col} from 'antd'
import Banner from './../../components/Banner'
export default class HelpCenter extends React.Component{
    render(){
        return(
            <div className="helpCenter ">
                <Header/>
                <div className="container  ">
                    <Banner/>
                </div>
                    <div className="container">
                        <Row>
                            <Col lg={4} xs={24}>
                                <HelpLeft />
                            </Col>
                            <Col span={20} className="main">
                                <Row className="content">
                                    {/*<Home/>*/}
                                    {this.props.children}
                                </Row>
                            </Col>
                        </Row>
                    </div>
                <Footer/>
            </div>
        )}
}