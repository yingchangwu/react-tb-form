//@flow
import React, {Component} from 'react'
import { StatementEditModel } from '../Models/StatementEditModel'

import { ModelBuilder } from '../Models/ModelBuilder'
import {BlockIcon} from '../BlockIcon'
import { ContentEditor } from './Fields/ContentEditor';

type Props = {
    question: StatementEditModel,
    save:(question:StatementEditModel) => void,
    focus:(question:StatementEditModel)=>void
}
type State = {
    editing:boolean
}
export default class StatementEditor extends Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state = {
            editing: false
        };
    }
    handleSave = (text:string):void =>{
        const question = this.props.question;
        question.text = text;
        const buildModel = new ModelBuilder(question);
        if(this.props.save){
            this.props.save(buildModel.toStatement());
        }
    }
    edit = (editing:boolean):void =>{
        this.setState({editing: editing});
    }
    showProperties = ():void =>{
        if(this.props.focus){
            this.props.focus(this.props.question);
        }
    }
    render(){
    
        const {question} = this.props;

        const defaultValue = "enter your statement ..."
        const questionTypeEditingStyle = question.type.getName() +"-editing editor-block-container ";
        const {editing} = this.state;
        return (
            <div className={editing ? questionTypeEditingStyle : "editor-block-container"}  onClick={this.showProperties}>
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
            
        )
    }
}
