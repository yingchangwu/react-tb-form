import React, {Component} from 'react'
import { BuildQuestionEditModel } from '../Models'
import { BlockIcon } from '../BlockIcon'
import { ContentEditor } from './Fields/ContentEditor'
export default class RatingEditor extends Component{

    constructor(props){
        super(props);
        this.state = {
            editing: false
        };
        this.edit = this.edit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.showBlockInfo = this.showBlockInfo.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(this.props.question.text !== nextProps.question.text || (this.props.question.choices != undefined && nextProps.question.choices != undefined &&(this.props.question.choices.length !== nextProps.question.choices.length))){
            this.props.focus(nextProps.question);
        }
    }
    edit(editing){
        this.setState({editing: editing});
    }
    handleSave(text){
        const question = BuildQuestionEditModel(this.props.question);
        question.text = text;
        if(this.props.save){
            this.props.save(question);
        }
    }
    showBlockInfo(){
        if(this.props.focus){
            this.props.focus(this.props.question);
        }
    }
    render(){
    
        const {question} = this.props;

        const defaultValue = "enter your rating question ..."
        const questionTypeEditingStyle = question.type.key() +"-editing editor-block-container ";
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
