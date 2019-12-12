import React from 'react';
import {Card,Layout} from 'antd';
const x=[1,2,3,4,5,6];
const {  Sider } = Layout;
class AdBlock extends React.Component {
    component(){
        this.state={
            isLoaded:false,
        }
    }
    render(){
        return(
            <Sider  
        style={{position:'sticky',top:20,backgroundColor:'#f0f2f5'}}
      
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
        
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
        this.setState({isCollapsed:collapsed});
      }}
    > 
         {  x.map((item,j)=>( 
           <div style={{ background: '#ECECEC' ,margin:4}}>
                <Card hoverable title="Card title" bordered={false} style={{ width: 200 }}>
                      <p>Card content{item}</p>
                      <p>Card content</p>
                      <p>Card content</p>
                      
              </Card>
          </div>
          ))}
          </Sider>
            
        )
    }
    
}
export default AdBlock