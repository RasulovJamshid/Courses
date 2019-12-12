import React from 'react'
import { Link } from 'react-router-dom'
import {Layout} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const {  Footer } = Layout;

    class FooterDerived extends React.Component{
      constructor(){
        super();
      }

      render(){
        return(
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        )
      }
    }

    export default FooterDerived;