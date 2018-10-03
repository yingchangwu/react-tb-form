//@flow
import React, {Component} from 'react'

import {ShortTextEditModel} from '../Models/ShortTextEditModel'

import { ModelBuilder } from '../Models/ModelBuilder'
import {BlockIcon} from '../BlockIcon'
import {BlockType,BlockTypeName} from '../BlockType'
import ContentEditor from './Fields/ContentEditor'
type Props = {
    save: (question:ShortTextEditModel)=>void,
    //focus:(question:ShortTextEditModel)=>void,
    isActive:boolean,
    fieldId: string,
    total:number
}

type State = {
    text:string,
    editing:boolean
}
export default class NewDefaultEditor extends Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state = {
            text:'',
            editing: false
        };
    }

    edit = (editing:boolean):void =>{
        this.setState({editing: editing});
    }
    handleSave = (text:string):void =>{
        if(text.trim().length == 0){
            alert("You can not have empty question.");
        }else{
            const id = this.props.fieldId;
            const order = this.props.total + 1;
            const question:ShortTextEditModel = new ShortTextEditModel(text,id,order);
            if(this.props.save){
                this.props.save(question);
            }
        }
    }
    // showProperties = (event):void =>{
    //     //new question by default is text question
    //     const text = this.state.text;
    //     const id = event.target.id;
    //     const order = this.props.total + 1;
    //     const question = new ShortTextEditModel(text,id,order);
    //     this.props.focus(question);
    // }
    render(){
        const {fieldId} = this.props;
        const order = this.props.total + 1;
        const defaultValue = "enter your question ..."
        
        return      <div className="editor-block-container" >
                        <div className="editor-block-icon-wrapper">
                            <BlockIcon type={BlockType[BlockTypeName.ShortText]} order={order} />
                        </div>
                        <div className="editor-block-content">
                            <ContentEditor 
                                id={fieldId}
                                placeholder= {defaultValue}
                                className="block-question-input"
                                value=""
                                edit={this.edit}
                                onSave={this.handleSave} />
                        </div>
                    </div>
    }
}