import { PageHeader, Menu, Dropdown, Icon, Button, Tag, Typography, Row } from 'antd';
import React from "react";
const { Paragraph } = Typography;
import {connect} from "react-redux";
import {state,idAct} from '../store';
import { withRouter } from "react-router";





const Extra=({content})=>(
  <div>{content}</div>
)

const Content = ({ children, extraContent }) => {
  return (
    <Row className="content" type="flex">
      <div className="main" style={{ flex: 1 }}>
        {children}
      </div>
      <div
        className="extra"
        style={{
          marginLeft: 80,
        }}
      >
        {extraContent}
      </div>
    </Row>
  );
};

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
    return(<PageHeader
    title={this.props.name}
    style={{
      marginBottom:3,
      backgroundColor:"#fff",
      borderRight:this.props.recomended==1?'3px solid #fc0f03':'3px solid #169cf5',
      
    }}
    // extra={<Extra>{this.props.region}</Extra>}
    subTitle={this.props.region}
      tags={this.props.recomended==1&&<Tag color="red">Рекомендовано</Tag>}
   
    // avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
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



    
    <Content>


    <div className="content">
    
     <Paragraph  ellipsis={{rows:4}}>
      {this.props.brief}
    </Paragraph> 
    <Row className="contentLink" type="flex">
      <div style={{
      marginRight: 16,
      display: 'flex',
      alignItems: 'center',
        }} ><Icon  style={{ fontSize: '16px', color: '#08c' }} type="dollar" theme="twoTone" />
    <div style={{marginLeft:5,fontSize:15,}}>  {this.props.cost}</div>
    </div>

    <div style={{
      marginRight: 16,
      display: 'flex',
      alignItems: 'center',
        }} >
      <Button key="1" onClick={this.toSingle} type="default">
      подробно...
      </Button>
    </div>

    </Row>
    
  </div>


    </Content>
  </PageHeader>)
  }
}

const mapStateToProps=(state)=>({
  stateId:state.id,
});

const mapDispatchToProps=(dispatch,ownProps)=>({
  idAct :()=>dispatch(idAct(ownProps.id))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Card));