import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { Menu, Breadcrumb, Icon, Row, Col } from 'antd';
import styles from './MainLayout.less';
// import Sider from './Sider';

const SubMenu = Menu.SubMenu;
const MainLayout = ({ children }) => {
  return (
    <div className={styles["ant-layout-topaside"]}>
      <div className={styles["ant-layout-header"]}>
        <div className={styles["ant-layout-wrapper"]}>
          <div className={styles["ant-layout-logo"]}><h1>Todo App</h1></div>
        </div>
      </div>
      <div className={styles["ant-layout-wrapper"]}>
        <div className={styles["ant-layout-container"]}>
          <aside className={styles["ant-layout-sider"]}>
            <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
              <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
                <Menu.Item key="all"><Link to="/">All</Link></Menu.Item>
                <Menu.Item key="completed"><Link to="/completed">Completed</Link></Menu.Item>
                <Menu.Item key="actived"><Link to="/actived">Actived</Link></Menu.Item>
                <Menu.Item key="404"><Link to="/404">404</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </aside>
          <div className={styles["ant-layout-content"]}>
            <div style={{ height: 240 }}>
              <div style={{clear: 'both'}}>{children}</div>
            </div>
          </div>
        </div>
        <div className={styles["ant-layout-footer"]}>
        Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
        </div>
      </div>
    </div>
    // <div>
    //   <Row type="flex" align="top">
    //     <h1>TODO APP</h1>
    //   </Row>
    //   <Row type="flex" align="middle">
    //     <Col span={6}>
    //       <Sider/>
    //     </Col>
    //     <Col span={18}>
    //       {children}
    //     </Col>
    //   </Row>
    //   <Row type="flex" align="bottom">
    //     <h3>Built with react, react-router, ant-tool, css-modules, antd...</h3>
    //   </Row>
    // </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
