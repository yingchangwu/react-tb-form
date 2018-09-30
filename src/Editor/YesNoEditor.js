//@flow
import React, {Component} from 'react'
import {YesNoEditModel} from '../Models/YesNoEditModel'
import { BuildModel } from '../Models/ModelBuilder'
import {BlockIcon} from 'react-tb-icons'
import { ContentEditor } from './Fields/ContentEditor'

type Props = {
    question: YesNoEditModel,
    save:(question:YesNoEditModel) => void,
    focus:(question:YesNoEditModel)=>void
}
type State = {
    editing:boolean
}
export default class YesNoEditor extends Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state = {
            editing: false
        };
    }
    handleSave = (text:string):void =>{
        const question = this.props.question;
        question.text = text;
        const buildModel = new BuildModel(question);
        buildModel.toShortText
        if(this.props.save){
            this.props.save(buildModel.toYesNo());
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
    
        const defaultValue = "enter your yes/no question ..."
        const {question} = this.props;

        const questionTypeEditingStyle = question.type.getName() +"-editing editor-block-container ";
        const {editing} = this.state;
        return (
                <div className={editing ? questionTypeEditingStyle : "editor-block-container"}  onClick={this.showBlockInfo}>
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
                        edit={this.edit}/>
                </div>
            </div>
        )
    }
}
