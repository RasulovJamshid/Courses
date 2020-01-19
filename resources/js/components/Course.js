import axios from 'axios'
import React, { Component } from 'react'
import Card from './Card';
import 'antd/lib/layout/style/index.css';
import 'antd/lib/list/style/index.css';
import 'antd/lib/pagination/style/index.css';
import List from 'antd/es/list';
import Layout from 'antd/es/layout';
const {Content}=Layout;
import {options,regionOptions} from '../options';
import { withRouter } from "react-router";
import {searchPlaceAct} from '../store'; 
import {connect} from "react-redux";
import {compose} from "redux";
import Header from './Header';
import LeftSide from './LeftSide';

    class Course extends Component {
      constructor () {
        super()
        this.state = {
          course: [],
          isLoaded:false,
        }
        this.valueOf=this.valueOf.bind(this);
      }

      
     

      componentDidMount () {
        
        axios.get('/api/courses').then(response => {
          this.setState({
            course: response.data,
            isLoaded:true,
          })
        });
      }

      componentDidUpdate(prevProps){
        if(prevProps.searchPlace!==this.props.searchPlace){
          this.setState({isLoaded:false});
          if(this.props.searchPlace=="head"){
            console.log("term",this.props.search);
          axios.get(`/api/search/${this.props.search}`).then(response => {
            this.setState({
              course: response.data,
            });
              this.props.searchPlaceAct();            
          });
          }
          else if(this.props.searchPlace=="side"){
            console.log("term",this.props.searchtype);
            axios.get(`/api/search/${this.props.searchtype[0]}/${this.props.searchtype[1]}`).then(response => {
              this.setState({
                course: response.data,
              });
                this.props.searchPlaceAct();            
            });
          }
          this.setState({isLoaded:true});
        }
      }

      valueOf(value,child){
        for(let i =0;i<options.length;++i){
          if(options[i].value==value){
            return [options[i].label,options[i].children[parseInt(child)-1].label];
          }
          else{
            return [options[1].label,options[1].children[1].label];
          }
        }
      }

     

      render () {
        const { course ,isLoaded} = this.state;
        return (
          <div>

            <Layout>
              <LeftSide/>
            <Layout>
          <Header /> 

            <Content style={{backgroundColor:"rgba(255, 255, 255, 0.82)"}}>
              <List style={{margin:10}}
                itemLayout="vertical"
                loading={!isLoaded}
                pagination={{  onChange: page => {console.log(page);},
                pageSize: 6,
                   }}
              dataSource={course}
              renderItem={item => (<Card  region={regionOptions[item.regionTypeS-1].label} id={item.id} {...item}  label={this.valueOf(item.type,item.typeS)} name={item.name} title={item.title} cost={item.cost}/>)} />,
          </Content>
          </Layout>
          </Layout>
          </div>
        )
      }
    }

    const mapStateToProps=(state)=>({
        searchPlace:state.searchPlace,
        search:state.search,
        searchtype:state.searchtype
      }
    )
    const mapDispatchToProps=(dispatch)=>({
        searchPlaceAct:()=>dispatch(searchPlaceAct("main")),
      }
    )
    export default compose(
      withRouter,
      connect(mapStateToProps,mapDispatchToProps)
    )(Course);












    
    //sk.eyJ1IjoiamFtc2hpZHIiLCJhIjoiY2szMDFoNWkwMG1ycDNna3RnaXV1MHV3ciJ9._z3iLQ8ReFHL4hi5p7-1LA