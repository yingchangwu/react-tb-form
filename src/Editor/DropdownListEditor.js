//@flow
import React, {Component} from 'react'
import { ChoiceOptionItemField } from './Fields/ChoiceOptionItemField'
import { DropdownListEditModel } from '../Models/DropdownListEditModel'
import { BuildModel } from '../Models/ModelBuilder'
import {BlockIcon} from 'react-tb-icons'
import { ContentEditor } from './Fields/ContentEditor'
import { ChoiceOptionItem } from '../Models/ChoiceOptionItem';
type Props = {
    question: DropdownListEditModel,
    save: (queston:DropdownListEditModel)=>void,
    focus:(question:DropdownListEditModel)=>void,
    addUpdateChoice: (id:string, options:ChoiceOptionItem) => void,
    isActive:boolean
}

type State = {
    editing: boolean
}
export default class DropdownListEditor extends Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state = {
            editing: false,
            isActive:false
        };
        this.edit = this.edit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.showProperties = this.showProperties.bind(this);
    }
    componentWillReceiveProps(nextProps:Props){
        if(this.props.question.text !== nextProps.question.text || (this.props.question.choices != undefined && nextProps.question.choices != undefined &&(this.props.question.choices.length !== nextProps.question.choices.length))){
            this.props.focus(nextProps.question);
        }
    }
    handleSave=(text:string):void =>{
        const question = this.props.question;
        question.text = text;
        const buildModel = new BuildModel(question);
        if(this.props.save){
            this.props.save(buildModel.toDropdownList());
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
    
        const {question, isActive} = this.props;

        const defaultValue = "enter your drop down selection question ..."
        const questionTypeEditingStyle = question.type.getName() +"-editing editor-block-container ";
        const {editing} = this.state;
        return (<div className={editing ? questionTypeEditingStyle : "editor-block-container"} onClick={this.showProperties}>
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
                            isActive={isActive} />
                    </div>
                </div>
        );

    }
}
