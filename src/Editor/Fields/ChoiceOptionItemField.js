import React from 'react';
import uuid from 'uuid/v4'
import {ChoiceOptionItem} from '../../Models/'

import { Input } from 'semantic-ui-react';

export class ChoiceOptionItemField extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentInput:''
        };
    }
    handleUpdateChoice = event =>{
        const text = event.target.value;
        console.log(`your choice is:${text}`);
        const id = event.target.id;
        const choiceItem = new ChoiceOptionItem(text,id);
        this.props.addUpdateChoice(this.props.question.id,choiceItem);
    }
    handleAddChoice = event =>{
        if(event.key === 'Enter'){
            const text = event.target.value;
            event.target.value = "";
            console.log(`your choice is:${text}`);
            const id = event.target.id;
            const choiceItem = new ChoiceOptionItem(text,id);
            this.props.addUpdateChoice(this.props.question.id,choiceItem);
        }
    }
    render(){
        const {question,isActive} = this.props;
        return (
            <div className="choice-question-items">
            {  question.choices &&  question.choices.map((choice)=>{
                    return <Input
                        fluid
                        id={choice.id}
                        key={choice.id}
                        onChange={this.handleUpdateChoice} 
                        defaultValue={choice.text} 
                        disabled = {!isActive}
                    />
                })
            }
             Add Choice:   <Input
                    id={uuid()}
                    onKeyPress={this.handleAddChoice} 
                    disabled = {!isActive}
                />
            </div>
        );
    }
}