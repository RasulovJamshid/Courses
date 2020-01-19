// import Button from 'antd/es/button';
import 'antd/lib/page-header/style/index.css';
import 'antd/lib/icon/style/index.css';
import 'antd/lib/typography/style/index.css';
import 'antd/lib/avatar/style/index.css';
import 'antd/lib/breadcrumb/style/index.css';
// import 'antd/lib/row/style/index.css';
import PageHeader from 'antd/es/page-header';
import Icon from 'antd/es/icon';
import Typography from 'antd/es/typography';
// import Tag from 'antd/es/tag';
import Row from 'antd/es/row';
import React from "react";
const { Paragraph } = Typography;
import {connect} from "react-redux";
import {idAct} from '../store';
import { withRouter } from "react-router";


const dollar=()=>(<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4.82 19.407c-2.966-1.857-4.94-5.153-4.94-8.907 0-5.795 4.705-10.5 10.5-10.5 3.605 0 6.789 1.821 8.68 4.593 2.966 1.857
4.94 5.153 4.94 8.907 0 5.795-4.705 10.5-10.5 10.5-3.599 0-6.778-1.815-8.67-4.579l-.01-.014zm8.68-15.407c5.243 0 9.5 4.257 9.5 9.5s-4.257 9.5-9.5 9.5-9.5-4.257-9.5-9.5 4.257-9.5 9.5-9.5zm.5 15h-1.021v-.871c-2.343-.302-2.599-2.179-2.599-2.744h1.091c.025.405.157
 1.774 2.182 1.774.599 0 1.088-.141 1.453-.419.361-.276.536-.612.536-1.029 0-.793-.513-1.367-2.07-1.718-2.368-.536-2.923-1.398-2.923-2.533 0-1.509 1.223-2.216 2.33-2.406v-1.054h1.021v1.015c2.491.195 2.695 2.215 2.695 2.771h-1.098c0-1.161-.918-1.766-1.996-1.766-1.077 
 0-1.854.532-1.854 1.408 0 .781.439 1.165 1.994 1.554 1.879.473 2.999 1.101 2.999 2.681 0 1.744-1.509 2.393-2.74 2.493v.844zm2.85-15.453c-1.696-1.58-3.971-2.547-6.47-2.547-5.243 0-9.5 4.257-9.5 9.5 0 2.633 1.073 5.017 2.806 6.739l-.004-.01c-.44-1.159-.682-2.416-.682-3.729
  0-5.795 4.705-10.5 10.5-10.5 1.171 0 2.298.192 3.35.547z"/>
  </svg>);


const Dollar = props => <Icon  style={{fill: "#1890ff"}} component={dollar} {...props} />;

class Card extends React.Component{
  constructor(){
    super();
    this.state={

    };
    this.toSingle=this.toSingle.bind(this);
  }

  toSingle(){
    console.log("hey");
    this.props.idAct(this.props.id);
    this.props.history.push(`course/${this.props.id}`);
    console.log("by");
  }

  render(){
    return(
    <div style={{borderRadius:10,marginTop:5}} onClick={this.toSingle}>
      <PageHeader
      style={{backgroundColor:"#fff",borderRadius:"inherit"}} 
    title={this.props.name}
    
    // extra={<div><img src='https://i.udemycdn.com/course/240x135/1642074_7ef3.jpg'/></div>}#81ccc58f
    subTitle={this.props.region}
      // tags={this.props.recomended==1&&<Tag color="red">Рекомендовано</Tag>}
   
    avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
    breadcrumb={{routes:[{
      path: 'index',
      breadcrumbName: this.props.label[0],
    },
    {
      path: 'first',
      breadcrumbName: this.props.label[1],
    }]}
  }
  >



    
    <div >
    
    
    <div  style={{marginRight:13}}>
    
    <div style={{display:'flex' ,flexWrap:'wrap'}}>
     
    <Paragraph style={{flexGrow:1}} ellipsis={{rows:4}}>
      {this.props.brief}
    </Paragraph> 
    
    </div>

    <Row className="contentLink" type="flex">
      <div style={{
      marginRight: 16,
      display: 'flex',
      alignItems: 'center',
        }} >
        <Dollar />
    <div style={{marginLeft:5,fontSize:15,}}>  {this.props.cost}
    </div>
    </div>

    <div style={{
      marginRight: 16,
      display: 'flex',
      alignItems: 'center',
        }} >
    </div>

    </Row>
    
  </div>
  


    </div>
  </PageHeader>
  </div>)
  }
}

const mapStateToProps=(state)=>({
  stateId:state.id,
});

const mapDispatchToProps=(dispatch,ownProps)=>({
  idAct :()=>dispatch(idAct(ownProps.id))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Card));