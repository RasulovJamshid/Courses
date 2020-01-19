import { Form, Input, Button} from 'antd';
import React ,{Component} from "react";
import axios from 'axios';

class NormalLoginForm extends Component {
  constructor(props){
    this.state={
      user:"",
      password:"",
      email:"jamshid.rasulov2000@gmail.com"
    };
  }

  handleSubmit(e){
    e.preventDefault();
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
    axios.post("/admin",{
      name:this.state.user,
      password:this.state.password,
      email:this.state.email,
    })
    .then(response => {
      console.log(response);
      // redirect to the homepage
      history.push('/');
    })
    .catch(error => {
      console.log(error.response)
      })
  };



  render() {

    const { getFieldDecorator } = this.props.form;
    return (
        <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
      <Form style={{maxWidth:350,margin:10,flexGrow:1}} onSubmit={this.handleSubmit} className="login-form">
          <div style={{margin:10,textAlign:"center",userSelect:"none"}}>Courses</div>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input onChange={(e)=>this.setState({user:e.target.value})}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              onChange={(e)=>this.setState({password:e.target.value})}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
           <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
  </div>
  );
  }
}

// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default NormalLoginForm