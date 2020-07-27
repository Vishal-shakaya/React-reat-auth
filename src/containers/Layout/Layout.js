import React from 'react';
import {Link} from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom'
const LayoutDefine = (props) => {

const { Header, Content, Footer } = Layout;
return(
  <Layout className="layout">

    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
       { props.isAuthenticated ? 
          <Menu.Item key="2">
            <NavLink to='/logout'> Logout </NavLink>
          </Menu.Item>
          :
           <Menu.Item key="2">
            <NavLink to='/login'> Login </NavLink>
          </Menu.Item>
       }
        
        
        <Menu.Item key="3">
            <NavLink to='/'> Post </NavLink>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item><Link to='/' >List </Link></Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
    {props.children}
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  
  </Layout>
);

}

export default LayoutDefine;