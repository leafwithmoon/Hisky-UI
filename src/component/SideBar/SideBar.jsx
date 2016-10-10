import React, {Component, PropTypes} from 'react';
import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;
export default class SideBar extends Component {
    state = {
        current:'1',
        openKeys:[]
    }
    handleClick(e) {
        this.setState({current:e.key})
    }
    render() {
        return (
            <Menu
                mode='inline'
                selectedKeys={[this.state.current]}
                onClick={this.handleClick.bind(this)}
                style={{width:240}}
                >
                <SubMenu key='sub1' title={<span>心得</span>}>
                    <Item key='1'></Item>
                    <Item key='2'></Item>
                    <Item key='3'></Item>
                    <Item key='4'></Item>
                </SubMenu>
                <SubMenu key='sub2' title={<span>日常</span>}>
                    <Item key='5'></Item>
                    <Item key='6'></Item>
                    <Item key='7'></Item>
                    <Item key='8'></Item>
                </SubMenu>
                <SubMenu key='sub3' title={<span>项目</span>}>
                    <Item key='9'></Item>
                    <Item key='10'></Item>
                    <Item key='11'></Item>
                    <Item key='12'></Item>
                </SubMenu>
                <SubMenu key='sub4' title={<span>新闻</span>}>
                    <Item key='13'></Item>
                    <Item key='14'></Item>
                    <Item key='15'></Item>
                    <Item key='16'></Item>
                </SubMenu>
            </Menu>
        )
    }
}
