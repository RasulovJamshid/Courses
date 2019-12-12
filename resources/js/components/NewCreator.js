import axios from 'axios'
import React, { Component } from 'react'
import { Upload, Icon, message ,Input,Divider,Cascader,Button,Checkbox} from 'antd';
import { withRouter } from "react-router";
import ReactMapGL from "react-map-gl";
import {options,regionOptions} from '../options';
const { Dragger } = Upload;
const {TextArea}=Input;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
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
          cost:'a',
          regionType:'a',
          recomended:false,
          brief:'a',
          errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleTypeChange = this.handleTypeChange.bind(this)
        this.handleCreateNewProject = this.handleCreateNewProject.bind(this)
        
      }

      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
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
          type: value
        })
      }
      handleRegionChange (value,selected) {
        console.log(value)
        this.setState({
          regionType: value
        })
      }

      handleCreateNewProject (event) {
        event.preventDefault();

        const { history } = this.props;


        axios.post('/api/courses', {
            name:this.state.name,
            description:this.state.description,
            type:this.state.type,
            title:this.state.title,
            tNumber:this.state.tNumber,
            url:this.state.url,
            cost:this.state.cost,
            brief:this.state.brief,
            recomended:this.state.recomended,
            regionType:this.state.regionType
        }
        )
          .then(response => {
            console.log(response);
            // redirect to the homepage
            history.push('/');
          })
          .catch(error => {
            console.log(error.response)
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
            <Dragger name="file" {...props}>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                  band files
                </p>
            </Dragger>
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
            <div style={{justifyContent:"center",margin:16,alignItems:'center',display: 'flex'}}>
            <ReactMapGL name="location"
                        mapboxApiAccessToken='pk.eyJ1IjoiamFtc2hpZHIiLCJhIjoiY2syenphYTVrMGtraTNjbW1vNG00NGswMSJ9.XiP2WhMZReZ8NlZS4YcREA'
                      {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
            </div>
            
            <Button onClick={this.handleCreateNewProject} type="primary" block>
            SUBMIT
            </Button>
          </div>
        )
      }
    }

    export default withRouter(NewCreator);

//lwqlllxRLxJ3XB(IY*UB