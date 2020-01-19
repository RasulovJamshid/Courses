import axios from 'axios'
import React, { Component } from 'react'
import 'antd/lib/button/style/index.css';
import 'antd/lib/checkbox/style/index.css';
import 'antd/lib/cascader/style/index.css';
import 'antd/lib/divider/style/index.css';
import 'antd/lib/input/style/index.css';
import 'antd/lib/message/style/index.css';
// import 'antd/lib/upload/style/index.css';

import Button from 'antd/es/button';
import Checkbox from 'antd/es/checkbox';
import Cascader from 'antd/es/cascader';
import Divider from 'antd/es/divider';
import Input from 'antd/es/input';
import message from 'antd/es/message';
import { withRouter } from "react-router";
import {options,regionOptions} from '../options';
const {TextArea}=Input;

const props = {
  name: 'file',
  multiple: false,
  action: '/image',
           
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};



class NewCreator extends Component {
      constructor (props) {
        super(props)
        this.state = {
          viewport: {
            width: 400,
            height: 400,
            latitude: 41.2995,
            longitude: 69.2401,
            zoom: 8
          },
          name: 'a',
          description: 'a',
          file:'a',
          title:'a',
          tNumber:'a',
          url:'a',
          type:'a',
          cost:'200000',
          regionType:'Ташкент',
          recomended:false,
          brief:'a',
          typeS:1,
          regionTypeS:1,
          errors: [],
          image:"",
          imageRef:""
        }
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleCreateNewProject = this.handleCreateNewProject.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleImage = this.handleImage.bind(this);
      }

      handleUpload(){
        const data = new FormData()
        data.append("file",this.state.image);
        axios.post('/image',data)
        .then(response=>{message.success("uploaded");console.log(response.message);})
        .catch(error=>message.error(`please check file format and size :${error.message}`));
      }
        
      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
      handleImage (event) {
        this.setState({
          image: event.target.files[0]
        })
      }
      handleFieldCheck (e) {
        this.setState({
          recomended: e.target.checked
        })
      }
      handleTypeChange (value,selected) {
        console.log(value)
        this.setState({
          type: value[0],
          typeS:parseInt(value[1]),
        })
      }
      handleRegionChange (value,selected) {
        console.log(value)
        this.setState({
          regionType: "Ташкент",
          regionTypeS:parseInt(value[0])
        })
      }

      handleCreateNewProject (event) {
        event.preventDefault();

        const { history } = this.props;


        axios.post('/api/courses', {
            name:this.state.name,
            description:this.state.description,
            type:this.state.type,
            typeS:this.state.typeS,
            title:this.state.title,
            tNumber:this.state.tNumber,
            url:this.state.url,
            cost:this.state.cost,
            brief:this.state.brief,
            recomended:this.state.recomended,
            regionType:this.state.regionType,
            regionTypeS:this.state.regionTypeS,
            imageRef:this.state.imageRef
        }
        )
          .then(response => {
            // redirect to the homepage
            history.push('/');
          })
          .catch(error => {
            message.error(error.response)
            })
      }

      hasErrorFor (field) {
        return !!this.state.errors[field]
      }

      renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
          return (
            <span className='invalid-feedback'>
              <strong>{this.state.errors[field][0]}</strong>
            </span>
          )
        }
      }

      render () {
        return (
          <div  style={{backgroundColor:"#fff",margin:10,borderStyle:'solid',borderWidth:1,borderRadius:4,borderColor:"#b5c4b9"}}>
            
             <Divider orientation="left">Name of the Course center</Divider>
            <div style={{ margin: 16 }}>
            <Input onChange={this.handleFieldChange} placeholder="Name" name="name" size="large"/>
            </div>

            <Divider orientation="left">Title</Divider>
            <div style={{ margin: 16 }}>
            <TextArea 
                onChange={this.handleFieldChange}
                name="title"
                size="large"
                placeholder="Title"
                autoSize={{ minRows: 2, maxRows: 6 }}
              />
            </div> 

            <Divider orientation="left">Brief Description</Divider>
            <div style={{ margin: 16 }}>
            <TextArea
                onChange={this.handleFieldChange}
                size="large"
                name="brief"
                placeholder="Brief Description"
              />
            </div> 

            <Divider orientation="left">Description</Divider>
            <div style={{ margin: 16 }}>
            <TextArea
                onChange={this.handleFieldChange}
                size="large"
                name="description"
                placeholder="Description"
              />
            </div> 

            <Divider orientation="left">Telephone Number</Divider>
             <div style={{ margin: 16 }}>
                 <Input onChange={this.handleFieldChange} name="tNumber" addonBefore="+998" size="large" placeholder="Phone Number"  />
             </div>
             <Divider orientation="left">Cost</Divider>
             <div style={{ margin: 16 }}>
                 <Input onChange={this.handleFieldChange} name="cost"  size="large" placeholder="300000" addonAfter="UZS"  />
             </div>

            <Divider orientation="left">Website URL</Divider>
             <div style={{ margin: 16 }}>
                 <Input onChange={this.handleFieldChange} name="url" addonBefore="www." size="large" addonAfter=".uz" placeholder="example" />
             </div>


             <Divider orientation="left">Is recomended</Divider>
             <div style={{ margin: 16 }}>
             <Checkbox name='recomended'  onChange={(e)=>this.handleFieldCheck(e)}>{this.state.recomended?"recomended":"default"}</Checkbox>
             </div>

             <Divider orientation="left">Image of Center</Divider>
             <div style={{ margin: 16 }}>
            
            <form>
              <input  onChange={this.handleImage} type="file" id="image" name="image" />
              <label for="image">Choose a file</label>
              <h6>format:jpg,jpeg,png max:2MB</h6>
            <Button onClick={this.handleUpload}>Upload </Button>
            </form>
            </div>
            <Divider orientation="left">Type</Divider>
              <div style={{ margin: 16 }}>
              <Cascader name="type" changeOnSelect={true} onChange={(value,selected)=>{this.handleTypeChange(value,selected)}} options={options} placeholder="Please select type" style={{width:'40vw'}} size='large'/>
                </div>

             <Divider orientation="left">Region</Divider>
              <div style={{ margin: 16 }}>
              <Cascader name="region" changeOnSelect={true} onChange={(value,selected)=>{this.handleRegionChange(value,selected)}} options={regionOptions} placeholder="Please select region" style={{width:'40vw'}} size='large'/>
                </div>

            <Divider orientation="left">Point a map</Divider>
            
            
            <Button onClick={this.handleCreateNewProject} type="primary" block>
            SUBMIT
            </Button>
          </div>
        )
      }
    }

    export default withRouter(NewCreator);

//lwqlllxRLxJ3XB(IY*UB