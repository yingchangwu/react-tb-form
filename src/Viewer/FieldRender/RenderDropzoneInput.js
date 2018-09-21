import React from 'react'
import Dropzone from 'react-dropzone'
import {Table, Image, Button} from 'semantic-ui-react'

const fileMaxSize = 1000000000
const acceptedFileTypes = 'image/x-png,image/png,image/jpg,image/jpeg,image/gif'
const acceptFileTypesArray = acceptedFileTypes.split(',').map((item)=>{return item.trim()})

export class RenderDropzoneInput extends React.Component{
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
        this.props.handleFileUpload(files);
        //this.handleFileUpload(files);
      }
    }
  } 
/*
  handleFileUpload = (files) =>{
    const url = 'http://localhost:56279/api/FileService/UploadFile';
     

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
    const url = 'http://localhost:56279/api/FileService/DeleteFile';
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

*/

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
          <svg width="132px" height="85px" viewBox="0 0 132 85">
            <path d="M79,66 L90.0059907,66 C92.2100423,66 92.9101127,64.5747628 91.5656686,62.8166435 L70.4343314,35.1833565 C69.0840859,33.4176507 66.9101127,33.4252372 65.5656686,35.1833565 L44.4343314,62.8166435 C43.0840859,64.5823493 43.7881789,66 45.9940093,66 L57,66 L57,85 L79,85 L79,66 Z M21,29.5 C21,20.9395864 27.9395864,14 36.5,14 C42.0635264,14 46.942436,16.9311929 49.6766493,21.333499 C53.9053637,8.92508495 65.6603992,0 79.5,0 C96.8969696,0 111,14.1030304 111,31.5 C111,32.4685402 110.956288,33.426871 110.870729,34.373127 C122.871557,36.445984 132,46.906961 132,59.5 C132,73.4162144 120.852491,84.7287886 107,84.9951959 L26,85 C25.8337182,84.9983938 25.6670467,85 25.5,85 C11.4167389,85 0,73.5832611 0,59.5 C0,46.6910327 9.44417086,36.0878698 21.7490942,34.2739295 C21.2627606,32.7701159 21,31.1657435 21,29.5 Z" fillRule="evenodd" stroke="#0000000" />
          </svg>
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