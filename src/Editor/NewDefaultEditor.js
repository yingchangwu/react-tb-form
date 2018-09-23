import React, {Component} from 'react'

import {ShortTextEditModel} from '../Models'
import { BlockIcon } from '../BlockIcon'
import {BlockTypes} from '../BlockTypesEnum'
import { ContentEditor } from './Fields/ContentEditor'

export default class NewDefaultEditor extends Component{

    constructor(props){
        super(props);
        this.state = {
            text:''
        };
        this.handleSave = this.handleSave.bind(this);
        this.showProperties = this.showProperties.bind(this);
    }
    handleChange = name => event => {
        console.log(`state changed.${event.target.id}`)
        this.setState({text:event.target.value});
    };
    handleSave(text){
        if(text.trim().length == 0){
            alert("You can not have empty question.");
        }else{
            const id = this.props.fieldId;
            const order = this.props.total + 1;
            const question = new ShortTextEditModel(text,id,order);
            this.props.save(question);
        }
    }
    showProperties(){
        //new question by default is text question
        const text = this.state.text;
        const id = event.target.id;
        const order = this.props.total + 1;
        const question = new ShortTextEditModel(text,id,order);
        this.props.focus(question);
    }
    render(){
        const {fieldId} = this.props;
        const order = this.props.total + 1;
        
        return      <div className="editor-block-container"  onClick={this.showProperties}>
                        <div className="editor-block-icon-wrapper">
                            <BlockIcon type={BlockTypes.ShortText} order={order} />
                        </div>
                        <div className="editor-block-content">
                            <ContentEditor 
                                id={fieldId}
                                className="BlockQuestionInput"
                                value=""
                                onSave={this.handleSave} />
                        </div>
                    </div>
    }
}