//@flow
import React, {Component} from 'react'
import { ChoiceOptionItemField } from './Fields/ChoiceOptionItemField'

import { ChoiceOptionItem } from '../Models/ChoiceOptionItem';
import { ModelBuilder } from '../Models/ModelBuilder'
import {BlockIcon} from '../BlockIcon'
import { MultipleChoiceEditModel } from '../Models/MultipleChoiceEditModel'
import { ContentEditor } from './Fields/ContentEditor'
type Props = {
    question: MultipleChoiceEditModel,
    save: (MultipleChoiceEditModel)=>void,
    focus:(MultipleChoiceEditModel)=>void,
    addUpdateChoice: (string, ChoiceOptionItem) => void,
    isActive:boolean
}

type State = {
    editing: boolean
}
export default class MultipleChoiceEditor extends Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state = {
            editing: false
        };
    }
    componentWillReceiveProps(nextProps:Props){

        if(this.props.question.text !== nextProps.question.text || (this.props.question.choices != undefined && nextProps.question.choices != undefined &&(this.props.question.choices.length !== nextProps.question.choices.length))){
            this.props.focus(nextProps.question);
        }
    }
    edit = (editing:boolean):void => {
        this.setState({editing: editing});
    }
    handleSave = (text:string):void => {
        const question = this.props.question;
        question.text = text;
        const buildModel = new ModelBuilder(question);
        if(this.props.save){
            this.props.save(buildModel.toMultipleChoice());
        }
    }
    showBlockInfo = ():void => {
        if(this.props.focus){
            this.props.focus(this.props.question);
        }
    }
    render(){
    
        const {question} = this.props;

        const defaultValue = "enter your choice question ..."
        const questionTypeEditingStyle = question.type.getName() +"-editing editor-block-container ";
        const {editing} = this.state;
        return (<div className={editing ? questionTypeEditingStyle : "editor-block-container"}>
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
                            
                        <ChoiceOptionItemField
                            question = {question}
                            addUpdateChoice = {this.props.addUpdateChoice} 
                            isActive = {this.props.isActive}/>
                    </div>
                </div>
        );

    }
}
