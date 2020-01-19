    import React, { Component } from 'react'
    import Layout from 'antd/es/layout';
    import 'antd/lib/layout/style/index.css';
    // import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
    import Course from './Course';
    import NewCreator from './NewCreator';
    // import Footer from './Footer';
    // import LeftSide from './LeftSide';
    import Single from './Single';
    import {Switch,Route} from 'react-router-dom';
    import {connect} from "react-redux";
    import { withRouter } from "react-router";
    // import  LogIn from "./LogIn";
    const {Content}=Layout; 
    class LayoutDerived extends Component {
      constructor () {
        super()
       
      }
      render () {
        return (
          
              <Layout >
              <Switch>
                <Layout>
              <Content >
                <Route exact path='/' component={Course} />
                <Route path='/create' component={NewCreator}/>
                <Route path='/course/:id' children={<Single id={this.props.match.params.id}/>}/>
              </Content>
              
              </Layout>
              </Switch>
              {/* <Footer/> */}
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