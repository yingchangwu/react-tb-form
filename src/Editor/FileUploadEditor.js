//@flow
import React, {Component} from 'react'
import { FileUploadEditModel } from '../Models/FileUploadEditModel'

import { BuildModel } from '../Models/ModelBuilder'
import {BlockIcon} from 'react-tb-icons'
import { ContentEditor } from './Fields/ContentEditor'
type Props = {
    question: FileUploadEditModel,
    save: (FileUploadEditModel)=>void,
    focus:(FileUploadEditModel)=>void
}

type State = {
    editing: boolean
}
export default class FileUploadEditor extends Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state = {
            editing: false
        };
    }
    edit = (editing:boolean):void => {
        this.setState({editing: editing});
    }
    handleSave = (text:string):void =>{
        const question = this.props.question;
        question.text = text;
        const buildModel = new BuildModel(question);
        if(this.props.save){
            this.props.save(buildModel.toFileUpload());
        }
    }
    showBlockInfo = ():void =>{
        if(this.props.focus){
            this.props.focus(this.props.question);
        }
    }
    render(){
    
        const {question} = this.props;

        const defaultValue:string = "enter your file upload question ..."
        const questionTypeEditingStyle:string = question.type.getName() +"-editing editor-block-container ";
        const {editing} = this.state;
        return <div className={editing ? questionTypeEditingStyle : "editor-block-container"}>
                    <div className="editor-block-icon-wrapper">
                        <BlockIcon type={question.type} order={question.order} />
                    </div>
                    <div className="editor-block-content">
                        <ContentEditor 
                            id={question.id}
                            placeholder= {defaultValue}
                            className="block-question-input"
                            value={question.text}
                            onSave={this.handleSave}
                            edit={this.edit} />
                    </div>
                </div>
    }
}
