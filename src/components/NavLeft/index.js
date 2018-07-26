import React from 'react'
/*import { Menu} from 'antd';*/
import './index.less'
/*const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;*/
export default class NavLeft extends React.Component{
   /* handleClick = (e) => {
        console.log('click ', e);
    }*/
    render(){
        return(
            <div>
                <ul className="navLeft">
                    <li>
                        <i className="iconfont icon-user1"/>
                        <span>
                            信息中心
                        </span>
                        <i className="iconfont icon-left">
                        </i>
                    </li>
                    <li>

                        <i className="iconfont icon-money1"/>
                        <span>
                            我的钱包
                        </span>
                        <i className="iconfont icon-left" />
                    </li>
                    <li>
                        <i className="iconfont icon-email"/>
                        <span>
                            我的消息
                        </span>
                        <i className="iconfont icon-left"/>
                    </li>
                    <li>
                        <i className="iconfont icon-pingjiatousu"/>
                        <span>
                            我的投诉
                        </span>
                        <i className="iconfont icon-left"/>
                    </li>
                </ul>
            </div>
        )
    }
}