import React from 'react'
import { Link } from 'react-router-dom'
import Menu from 'antd/es/menu';
import 'antd/lib/menu/style/index.css';
import 'antd/lib/typography/style/index.css'
import 'antd/lib/layout/style/index.css';
import 'antd/lib/icon/style/index.css'
import Layout from 'antd/es/layout';
import Typography from 'antd/es/typography';
// import Icon from 'antd/es/icon';
import {searchPlaceAct,searchtypeAct} from "../store";
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
    // trigger={<Icon component={locationSVG} />}
      width="250"
      theme='dark'
      breakpoint="md"
			collapsedWidth={0}
      
      onCollapse={(collapsed, type) => {
        
        this.setState({isCollapsed:collapsed});
        
      }}
    > 
      
      
      <Menu theme="dark" style={{overflowY:"auto",height:'100vh',position:'fixed',width:this.state.isCollapsed?0:250,}} mode="inline" >
        <Title  style={{justifyContent:"center",marginTop:10,display:"flex"}} level={2}>
              <Link onClick={()=>location.reload()} to="/">EduGo</Link>
      </Title>
      {options.map((e,i)=>(
       <SubMenu
            key={i}
            title={
              <span>{e.label}</span>
              
            }>
          {options[i].children.map((se,j)=>(
            <Menu.Item  onClick={()=>{this.props.searchPlace();this.props.searchtypeAct([e.value,se.value])}} key={j}>{se.label}</Menu.Item>
          ))}
      </SubMenu>
      )
      )}
      </Menu>
      
    </Sider>
  
        )
      }
    }

    const mapDispatchToProps=(dispatch,ownProps)=>{
      
      return ({
      searchtypeAct :(x)=>dispatch(searchtypeAct(x)),
      searchPlace:()=>dispatch(searchPlaceAct('side')),
    });
  };
    

    export default connect(null,mapDispatchToProps)(Left);