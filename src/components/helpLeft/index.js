import React from 'react'
import { Menu} from 'antd';
import './index.less'
/*const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;*/
const SubMenu = Menu.SubMenu;

export default class HelpLeft extends React.Component{
   /* handleClick = (e) => {
        console.log('click ', e);
    }*/
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    render(){
        return(
            <div className="helpLeft">
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                >
                    <SubMenu key="sub1" title={<span><span>账号问题</span></span>}>
                        <Menu.Item key="1">如何注册账号</Menu.Item>
                        <Menu.Item key="2">如何登录</Menu.Item>
                        <Menu.Item key="3">如何找回密码</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><span>协议说明</span></span>}>
                        <Menu.Item key="9">会员注册协议</Menu.Item>
                        <Menu.Item key="10">免责条款</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}