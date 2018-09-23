import React from 'react'
import Dropzone from 'react-dropzone'
import {Table, Image, Button} from 'semantic-ui-react'
import {ImgUploadCloud} from 'react-tb-icons'

const fileMaxSize = 1000000000
const acceptedFileTypes = 'image/x-png,image/png,image/jpg,image/jpeg,image/gif'
const acceptFileTypesArray = acceptedFileTypes.split(',').map((item)=>{return item.trim()})

export class RenderDropzoneField extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      uploadedFiles:[]
    }
  }

  verifyFile = (files) =>{
    if(files && files.length > 0){
      const currentFile = files[0]
      const currentFileType = currentFile.type
      const currentFileSize = currentFile.size
      if(currentFileSize > fileMaxSize){
        alert("This file is not allowed. " + currentFileSize + " bytes is too large.")
        return false
      }
      if(!acceptFileTypesArray.includes(currentFileType)){
        alert("This file is not allowed. only images are allowed.")
        return false;
      }
      return true;
    }
    return false;
  }

   handleOnDrop = (files, rejectedFiles) =>{
    if(rejectedFiles && rejectedFiles.length > 0){
      this.verifyFile(rejectedFiles)
    }
    if(files && files.length > 0){
      const isVerified = this.verifyFile(files);
      if(isVerified){

        const mappedFiles = files.map(file=>({
          name: file.name, file:file, uploaded:false, url:null
        }));
        this.setState(prevState=>({uploadedFiles:  [...prevState.uploadedFiles, ...mappedFiles]}));
        //this.props.input.onChange(files);
        this.handleFileUpload(files);
      }
    }
  } 

  handleFileUpload = (files) =>{
    const url = this.props.uploadEndpointUrl;
     
     files.forEach(file=>{
      const formData = new FormData();
      formData.append('file',file);
      formData.append('tags','dropzonetest');
      formData.append('lookupId','00001');
      const req = request.post(url);
      req.send(formData);
      req.end(this.uploadComplete)
     })
  }

  uploadComplete = (error, response) =>{    
    const fileName = response.body.fileName;
    const uploadedFileIdx = this.state.uploadedFiles.findIndex(file=>file.name == fileName);
    const uploadedFile = this.state.uploadedFiles[uploadedFileIdx];
    const updatedFile = Object.assign({},uploadedFile,{uploaded:true, url:response.body.url,file:null});
    //update files value in props
    const processedFiles = this.state.uploadedFiles.filter(file=>file.uploaded == true);
    this.props.input.onChange([...processedFiles, updatedFile]);
    this.setState(prevState=>({uploadedFiles: [...prevState.uploadedFiles.slice(0,uploadedFileIdx), updatedFile, ...prevState.uploadedFiles.slice(uploadedFileIdx+1)]}));

  }

  deleteFile = (e) =>{
    e.preventDefault();
    const url = this.props.deleteEndpointUrl;
    const fileName = e.target.dataset.filename;
    request.get(url)
      .query({fileName: fileName})
      .then(res =>{
        console.log(res);
        //remove the uploaded file from props by calling input.onChange
        const fileIdx = this.state.uploadedFiles.findIndex(file=>file.name == fileName);
        
        const processedFiles = this.state.uploadedFiles.filter(file=>file.uploaded == true && file.name !== fileName);
        this.props.input.onChange(processedFiles);
        this.setState(prevState=>({uploadedFiles: [...prevState.uploadedFiles.slice(0,fileIdx),...prevState.uploadedFiles.slice(fileIdx+1)]}));
      });
  }



  renderImageList = (files) =>{
    console.log('rendering images' + files);

    const fileRows =  files.map((fileModel)=>{
      return <Table.Row>
            <Table.Cell>
              {
                fileModel.uploaded ? 
                <Image src={fileModel.url} rounded size='tiny' />
                :
                <Image src={fileModel.file.preview} rounded size='tiny' />
              }
            </Table.Cell>
            <Table.Cell>
              {
                fileModel.uploaded ?
                <span><a href={fileModel.url}>{fileModel.name}</a></span>
                :
                <span>{fileModel.name}</span>
              }
            </Table.Cell>
            <Table.Cell>
              <Button onClick={this.deleteFile} data-filename={fileModel.name}>Delete</Button>
            </Table.Cell>
          </Table.Row>
    })

    return <Table>
    <Table.Body>
      {fileRows}
    </Table.Body>
  </Table>
  }

  render(){
    const {input,meta,name} = this.props;
    const {uploadedFiles} = this.state;
    const disableClick = uploadedFiles.length > 0;
    return (

      <div className="form-fileupload">
      
        <Dropzone {...input}
          name={name}
          onDrop={this.handleOnDrop}
          accept={acceptedFileTypes}
          multiple={true}
          maxSize={fileMaxSize}
          disableClick={disableClick}
          activeClassName="dropzone-active"
          className="dropzone-wrapper"
        >
        <div className="active-message">Drop files here</div>
                {
           uploadedFiles.length > 0 ?  this.renderImageList(uploadedFiles) :  <div className="dropzone-message">
          <ImgUploadCloud />
          <div className="dropzone-note">Max file size: 10MB</div>
        </div>
        }
         
        </Dropzone>
        {meta.touched &&
          meta.error &&
          <span className="error">{meta.error}</span>}
      </div>
    );
  }
}