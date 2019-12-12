import React from 'react'
import { Link } from 'react-router-dom'
import {Menu,Layout,Typography,Input} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from 'axios';

const {Title} =Typography;
const { Header, Content, Sider } = Layout;
const {Search }=Input;


    class HeaderNav extends React.Component{
      constructor(){
        super();
        this.state={
          data:'',
          isLoaded:false,
        }
        
      }


      render(){
        return(
          <Header style={{alignItems:"center", background: '#fff ',display:"flex", padding: 0,borderBottomColor:'#1890ff',borderBottomWidth:1,borderBottomStyle:'solid' }} >
            
            <Search style={{justifySelf:"center",display:"flex",marginLeft:20,width:"20vw"}} placeholder="search" onSearch={value => this.props.search(value)} enterButton /> 
            {/* <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton /> */}
            </Header>

            )
      }
    }

    const mapDispatchToProps=(dispatch,ownProps)=>(
      {
        search:()=>dispatch(searchAct(ownProps.value))
      }
    )
    export default HeaderNav;