    import axios from 'axios'
    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'
    import { Button, Layout } from 'antd';
    import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
    import Header from './Header';
    import Course from './Course';
    import NewCreator from './NewCreator';
    import Footer from './Footer';
    import LeftSide from './LeftSide';
    import Single from './Single';
    import {Switch,Route} from 'react-router-dom';
    import {connect} from "react-redux";
    import { withRouter } from "react-router";
    import AdBlock from './AdBlock';
    const {Content}=Layout; 
    class LayoutDerived extends Component {
      constructor () {
        super()
        this.state = {
          margin:200,
          course: [
            {name:"Programming",
             id:"23",
             desc:"fsafsdfsdfsf"
             }
          ]
        }
      }

      // componentDidMount () {
      //   axios.get('/api/courses').then(response => {
      //     this.setState({
      //       course: response.data
      //     })
      //   })
      // }

      render () {
        const { course } = this.state;
        return (
          <Layout>
            
            <LeftSide />
              <Layout style={{marginLeft:this.props.collapsed?0:50}} >
              <Header />
              <Switch>
                <Layout>
              <Content >
                <Route exact path='/' component={Course} />
                <Route path='/admin' component={NewCreator}/>
                <Route path='/course/:id' children={<Single id={this.props.match.params.id}/>}/>
              </Content>
              <AdBlock />
              </Layout>
              </Switch>
              <Footer/>
              </Layout>
            
          </Layout>
        )
      }
    }
  
    const mapStateToProps=(state)=>(
      {
        collapsed:state.collapsed
      }
    );

    

    export default withRouter(connect(mapStateToProps)(LayoutDerived))