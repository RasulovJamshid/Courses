import { withRouter } from "react-router";
import 'antd/dist/antd.css';
import { PageHeader, Menu, Dropdown, Icon, Button,Tag, Typography, Row } from 'antd';
// import {locationSVG, moneySVG} from '../icons/icons';
// import '../../style/style.css'
import React from "react";
import axios from 'axios'
// import Paragraph from "antd/lib/skeleton/Paragraph";
const { Paragraph  } = Typography;



const locationSVG=()=>(
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 0c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895
     2-2 2zm8 12c0 2.209-3.581 4-8 4s-8-1.791-8-4c0-1.602 1.888-2.98 4.608-3.619l1.154 1.824c-.401.068-.806.135-1.178.242-3.312.949-3.453 2.109-.021 3.102 2.088.603 4.777.605 6.874-.001 
     3.619-1.047 3.164-2.275-.268-3.167-.296-.077-.621-.118-.936-.171l1.156-1.828c2.723.638 4.611 2.016 4.611 3.618z"/>
     </svg>
)


const moneySVG=()=>(<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4.82 19.407c-2.966-1.857-4.94-5.153-4.94-8.907 0-5.795 4.705-10.5 10.5-10.5 3.605 0 6.789 1.821 8.68 4.593 2.966 1.857
 4.94 5.153 4.94 8.907 0 5.795-4.705 10.5-10.5 10.5-3.599 0-6.778-1.815-8.67-4.579l-.01-.014zm8.68-15.407c5.243 0 9.5 4.257 9.5 9.5s-4.257 9.5-9.5 9.5-9.5-4.257-9.5-9.5 4.257-9.5 9.5-9.5zm.5 15h-1.021v-.871c-2.343-.302-2.599-2.179-2.599-2.744h1.091c.025.405.157
  1.774 2.182 1.774.599 0 1.088-.141 1.453-.419.361-.276.536-.612.536-1.029 0-.793-.513-1.367-2.07-1.718-2.368-.536-2.923-1.398-2.923-2.533 0-1.509 1.223-2.216 2.33-2.406v-1.054h1.021v1.015c2.491.195 2.695 2.215 2.695 2.771h-1.098c0-1.161-.918-1.766-1.996-1.766-1.077 
  0-1.854.532-1.854 1.408 0 .781.439 1.165 1.994 1.554 1.879.473 2.999 1.101 2.999 2.681 0 1.744-1.509 2.393-2.74 2.493v.844zm2.85-15.453c-1.696-1.58-3.971-2.547-6.47-2.547-5.243 0-9.5 4.257-9.5 9.5 0 2.633 1.073 5.017 2.806 6.739l-.004-.01c-.44-1.159-.682-2.416-.682-3.729
   0-5.795 4.705-10.5 10.5-10.5 1.171 0 2.298.192 3.35.547z"/>
   </svg>)


const LocationSVG = props => <Icon component={locationSVG} {...props} />;
const MoneySVG = props => <Icon component={moneySVG} {...props} />;

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];





const Content = ({ children, extraContent }) => {
  return (
    <Row className="content" type="flex">
      <div className="main" style={{ flex: 1 }}>
        {children}
      </div>
      <div
        className="extra"
        
      >
        {extraContent}
      </div>
    </Row>
  );
};




class Single extends React.Component{
  constructor(props){
    super(props);
    this.state={
    data:{},
    isLoaded:false,
    };
  }
  componentDidMount () {
    axios.get(`/api/courses/${this.props.match.params.id}`).then(response => {
      this.setState({
        data: response.data[0],
        isLoaded:true,
      })
    })
  }
  render(){
   const {data}=this.state
    return(
      <PageHeader
    title={data.name}
    style={{
      border: '1px solid rgb(235, 237, 240)',
      margin: 10,
      borderRadius:4,
      backgroundColor:"#fff",
    }}
    subTitle={data.title}
    tags={<Tag color="blue">{data.name}</Tag>}
    
    avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
    breadcrumb={{ routes }}
  >
    <img style={{display:'flex',alignSelf:'center',alignItems:'center',justifySelf:'center',justifyContent:'center',margin:5}}
          src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
          alt="content"
        />

    <Content
      className="content"
    >



       <div className="content">
    <Paragraph  style={{fontSize:15,color:'black'}}>
      {data.brief}
    </Paragraph>
    <Paragraph style={{fontSize:15,color:'black'}}>
      {data.description}
    </Paragraph >
    <Row style={{marginTop:15}} className="contentLink" type="flex">
      <div style={{alignItems:"center",justifyContent:'center'}}><MoneySVG style={{margin:5}} />{data.cost}</div>
      <div style={{alignItems:"center",justifyContent:'center'}}><LocationSVG  style={{margin:5}}/>{data.cost}</div>
    <div style={{alignItems:"center",justifyContent:'center'}}> <Icon type="phone" style={{margin:5}} />{data.tNumber}</div>
    </Row>
  </div>




    </Content>
  </PageHeader>

    )
  }
}


export default withRouter(Single)