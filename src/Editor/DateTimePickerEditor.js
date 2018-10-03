//@flow
import React, {Component} from 'react'
import { ModelBuilder } from '../Models/ModelBuilder'
import {DateTimePickerEditModel} from '../Models/DateTimePickerEditModel'
import {BlockIcon} from '../BlockIcon'
import ContentEditor from './Fields/ContentEditor'
type Props = {
    question: DateTimePickerEditModel,
    save: (question:DateTimePickerEditModel)=>void,
    focus:(question:DateTimePickerEditModel)=>void
}

type State = {
    editing: boolean
}
export default class DateTimePickerEditor extends Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state = {
            editing: false
        };
        this.edit = this.edit.bind(this);
        this.showBlockInfo = this.showBlockInfo.bind(this);
    }
    handleSave = (text:string):void =>{
        const question = this.props.question;
        question.text = text;
        const buildModel = new ModelBuilder(question);
        if(this.props.save){
            this.props.save(buildModel.toDateTimePicker());
        }
    }
    edit = (editing:boolean):void =>{
        this.setState({editing: editing});
    }
    showBlockInfo = ():void =>{
        if(this.props.focus){
            this.props.focus(this.props.question);
        }
    }
    render(){
    
        const {question} = this.props;

        const defaultValue = "enter your date time question ..."
        const questionTypeEditingStyle = question.type.getName() +"-editing editor-block-container ";
        const {editing} = this.state;
        return <div className={editing ? questionTypeEditingStyle : "editor-block-container"}  onClick={this.showBlockInfo}>
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
