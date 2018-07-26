import React from 'react'
import {Row,Col} from 'antd'
import './index.less'
export default class Footer extends React.Component{
    render(){
        return(
            <div className='footer'>
                <Row>
                    <Col span={4}/>
                    <Col span={16}>
                        <Row className='footContent'>
                            <Col span={6}>关于我们</Col>
                            <Col span={6}>加入我们</Col>
                            <Col span={6}>免责声明</Col>
                            <Col span={6}>友情链接</Col>
                        </Row>
                        <Row className="footRight">
                            Copyright© 楚金招聘 2017. All Rights Reserved. 沪ICP备1302275660
                        </Row>
                    </Col>
                    <Col span={4}/>
                </Row>
            </div>
        )
    }
}