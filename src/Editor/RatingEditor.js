//@flow

import React, {Component} from 'react'
import {RatingEditModel} from '../Models/RatingEditModel'
import { ModelBuilder } from '../Models/ModelBuilder'
import {BlockIcon} from '../BlockIcon'
import ContentEditor from './Fields/ContentEditor'

type Props = {
    question: RatingEditModel,
    save: (question:RatingEditModel) => void,
    focus: (question:RatingEditModel) => void
}
type State = {
    editing: boolean
}
export default class RatingEditor extends Component<Props, State>{

    constructor(props:Props){
        super(props);
        this.state = {
            editing: false
        };
    }
    edit = (editing:boolean) => {
        this.setState({editing: editing});
    }
    handleSave = (text:string):void => {
        const question = this.props.question;
        question.text = text;
        const buildModel = new ModelBuilder(question);
        if(this.props.save){
            this.props.save(buildModel.toRating());
        }
    }
    showBlockInfo = () => {
        if(this.props.focus){
            this.props.focus(this.props.question);
        }
    }
    render(){
    
        const {question} = this.props;

        const defaultValue = "enter your rating question ...";
        const typeName = question.type.getName();
        const questionTypeEditingStyle = typeName +"-editing editor-block-container ";
        const {editing} = this.state;
        return       <div className={editing ? questionTypeEditingStyle : "editor-block-container"}  onClick={this.showBlockInfo}>
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
