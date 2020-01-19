import React from 'react'
import 'antd/lib/input/style/index.css';
import 'antd/lib/layout/style/index.css';
import 'antd/lib/button/style/index.css';

import Button from 'antd/es/button';
import Layout from 'antd/es/layout';
import Input from 'antd/es/input';
import {connect} from "react-redux";
import {searchAct,searchPlaceAct} from "../store"

const { Header } = Layout;
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
          <Header style={{background: '#fff ',display:"flex", padding: 0 ,boxShadow:"0px 1px 20px 10px"}} >
            
            <Search style={{maxWidth:400,padding:15,marginInline:20,}} placeholder="поиск курсов" enterButton="поиск"
            
             onSearch={value => {this.props.search(value);this.props.searchType()}}  />
            
            {/* <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton /> */}
            </Header>

            )
      }
    }

    const mapDispatchToProps=(dispatch)=>{
     
      return { 
        search:(e)=>dispatch(searchAct(e)),
        searchType:()=>dispatch(searchPlaceAct("head"))
      }
    }
    export default connect(null,mapDispatchToProps)(HeaderNav);