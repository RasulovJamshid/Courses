import React from 'react'
import { Link } from 'react-router-dom'
import {Menu,Layout} from 'antd';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const { Header, Content, Sider } = Layout;


    class RightSide extends React.Component{
      constructor(){
        super();
      }

      render(){
        return(
          <Header className="header">
                <div className="logo" />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="1">nav 1</Menu.Item>
                  <Menu.Item key="2">nav 2</Menu.Item>
                  <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
          </Header>
        )
      }
    }

    export default RightSide;