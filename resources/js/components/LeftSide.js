import React from 'react'
import { Link } from 'react-router-dom'
import {Menu,Layout,Icon,Typography} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {collapsedAct} from "../store";
const {  Sider } = Layout;
const { SubMenu } = Menu;
import {connect} from "react-redux";
import {options} from '../options';
const {Title} =Typography;

    class Left extends React.Component{
      constructor(){
        super();
        this.state={
          isCollapsed:false,
        }
      }

      render(){
        return(
          
    <Sider  
    
      theme='light'
      breakpoint="md"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
        
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
        this.setState({isCollapsed:collapsed});
        this.props.collapsedAct(collapsed);
      }}
    > 
      <div >
      
      <Menu  style={{overflowY:"auto",height:'100vh',position:'fixed',width:this.state.isCollapsed?0:250,}} mode="inline" defaultSelectedKeys={['1']}>
        <Title  style={{justifySelf:"center",display:"flex",marginLeft:20,alignSelf:'center'}} level={2}>
               Courses
      </Title>
      {options.map((e,i)=>(
       <SubMenu
            key={i}
            title={
              <span>{e.label}</span>
              
            }>
          {options[i].children.map((se,j)=>(
            <Menu.Item key={j}>{se.label}</Menu.Item>
          ))}
      </SubMenu>
      )
      )}
      </Menu>
      </div>
    </Sider>
  
        )
      }
    }

    const mapDispatchToProps=(dispatch,ownProps)=>({
      collapsedAct :()=>dispatch(collapsedAct(ownProps.collapsed))
    });
    

    export default connect(null,mapDispatchToProps)(Left);