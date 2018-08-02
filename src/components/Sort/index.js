import React from 'react'
import {Row,Col,Icon,Button} from 'antd'
import './index.less'
import {Navbar} from 'react-bootstrap'
export default class Sort extends React.Component{
    dom=null
    constructor(props) {
        super(props);
        if(props.params){
            this.dom=[<span key={0} className="fs18 mr20 ml20 clblue" >默认</span>,<span className="fs18 mr20" key={1}>薪资<i className="iconfont icon-xiangxiajiantou fs18" ></i></span>,<span className="fs18 mr20" key={2}>更新时间<i className="iconfont icon-xiangxiajiantou"></i></span>]
        }else{
            this.dom=[<Icon type="delete" className="fs18 mr20 ml20 mb30"/>,<Button type="primary">新增</Button>]
        }
        console.log(props)
    }
    render(){
        return(
            <div className="sort">
                {this.dom.map((item)=>{
                    return item
                })}
            </div>
        )
    }
}