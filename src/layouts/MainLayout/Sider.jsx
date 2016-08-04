import React from 'react';
import { Menu, Icon } from 'antd';
import { Router, Route, IndexRoute, Link } from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {

    return (
      <Menu onClick={this.handleClick}
        style={{ width: 240 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[this.state.current]}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>操作</span></span>}>
          <MenuItemGroup title="类型">
            <Menu.Item key="all"><Link to="/">All</Link></Menu.Item>
            <Menu.Item key="completed"><Link to="/completed">Completed</Link></Menu.Item>
            <Menu.Item key="actived"><Link to="/actived">Actived</Link></Menu.Item>
            <Menu.Item key="404"><Link to="/404">404</Link></Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sider;
