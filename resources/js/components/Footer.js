import React from 'react'
import Layout from 'antd/es/layout';


const {  Footer } = Layout;

    class FooterDerived extends React.Component{
      constructor(){
        super();
      }

      render(){
        return(
          <Footer style={{ 
            textAlign: 'center',
            height: "200px",
            marginTop: 200,
            bottom: 0,
            
            
         }}>COURSES Design ©2019 Created by COURSES UED</Footer>
        )
      }
    }

    export default FooterDerived;