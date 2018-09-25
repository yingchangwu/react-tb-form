//@flow
import React, {Component} from 'react'
import { BuildQuestionEditModel, ShortTextEditModel } from '../Models'
import { BlockIcon } from '../BlockIcon'
import {BlockTypes} from '../BlockTypesEnum'
import { ContentEditor } from './Fields/ContentEditor'

type Props = {
    question: ShortTextEditModel,
    save:({question:ShortTextEditModel}) => any,
    focus:({question:ShortTextEditModel})=>any
}
type State = {
    editing:boolean
}
export default class ShortTextEditor extends Component<Props,State>{
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
    handleSave = (text:string) =>{
        const question = BuildQuestionEditModel(this.props.question);
        question.text = text;
        if(this.props.save){
            this.props.save(question);
        }
    }
    edit = (editing:boolean) =>{
        this.setState({editing: editing});
    }
    showProperties = () =>{
        if(this.props.focus){
            this.props.focus(this.props.question);
        }
    }
    render(){
        const defaultValue = "enter your short answer question ..."
        const {question} = this.props;
        const questionTypeEditingStyle = question.type.key() +"-editing editor-block-container ";
        const {editing} = this.state;
        return (
            <div className= {editing ? questionTypeEditingStyle : "editor-block-container"}  onClick={this.showProperties}>
                <div className="editor-block-icon-wrapper">
                    <BlockIcon type={question.type} order={question.order} />
                </div>
                <div className="editor-block-content">
                    <ContentEditor 
                        id={question.id}
                        placeholder= {defaultValue}
                        className="block-question-input"
                        value={question.text }
                        onSave={this.handleSave}
                        edit={this.edit} />
                </div>
            </div>
            
        )
    }
}
