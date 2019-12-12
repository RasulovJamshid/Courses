import 'antd/dist/antd.css';
import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button,Spin } from 'antd';
import Card from './Card';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { List, Avatar, Icon,Layout ,Switch} from 'antd';
const {Content}=Layout;
import {options,regionOptions} from '../options';
import { withRouter } from "react-router";
import LeftSide from './LeftSide'



const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


    class Course extends Component {
      constructor () {
        super()
        this.state = {
          course: [],
          isLoaded:false,
        }
        this.valueOf=this.valueOf.bind(this);
        this.search=this.search.bind(this);
      }

      search(searchTerm){
        axios.get(`/api/search/${searchTerm}`).then(response => {
          this.setState({
            data: response.data,
            isLoaded:false,
          })
        })
      }

      componentDidMount () {
        axios.get('/api/courses').then(response => {
          this.setState({
            course: response.data,
            isLoaded:true,
          })
        })
      }

      valueOf(value,child){
        for(let i =0;i<options.length;++i){
          if(options[i].value==value){
            return [options[i].label,options[i].children[parseInt(child)-1].label];
          }
        }
      }

     

      render () {
        const { course ,isLoaded} = this.state;
        return (
           
            <Content >
              <List style={{margin:10}}
                itemLayout="vertical"
                loading={!isLoaded}
                pagination={{  onChange: page => {console.log(page);},
                pageSize: 6,
                   }}
              dataSource={course}
              renderItem={item => (<Card  region={regionOptions[item.regionType[0]-1].label} id={item.id} {...item}  label={this.valueOf(item.type[0],item.type[1])} name={item.name} title={item.title} cost={item.cost}/>)} />,
          </Content>
          
        )
      }
    }

    export default withRouter(Course)












    
    //sk.eyJ1IjoiamFtc2hpZHIiLCJhIjoiY2szMDFoNWkwMG1ycDNna3RnaXV1MHV3ciJ9._z3iLQ8ReFHL4hi5p7-1LA