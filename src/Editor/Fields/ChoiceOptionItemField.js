//@flow
import React from 'react';
import uuid from 'uuid/v4'
import {ChoiceOptionItem, MultipleChoiceEditModel, DropdownListEditModel} from '../../Models/'

import { Input } from 'semantic-ui-react';

type Props = {
    isActive: boolean,
    question: MultipleChoiceEditModel | DropdownListEditModel,
    addUpdateChoice: Function,

}
type States = {
    currentInput: string
}
export class ChoiceOptionItemField extends React.Component<Props,States>{
    constructor(props:Props){
        super(props);
        this.state = {
            currentInput:''
        };
    }
    handleUpdateChoice = (event:SyntheticEvent<HTMLInputElement>):void =>{
        const text = event.currentTarget.value;
        console.log(`your choice is:${text}`);
        const id = event.currentTarget.id;
        const choiceItem = new ChoiceOptionItem(text,id);
        this.props.addUpdateChoice(this.props.question.id,choiceItem);
    }
    handleAddChoice = (event:SyntheticKeyboardEvent<HTMLInputElement>):void  =>{
        if(event.key === 'Enter'){
            const text = event.currentTarget.value;
            event.currentTarget.value = "";
            console.log(`your choice is:${text}`);
            const id = event.currentTarget.id;
            const choiceItem = new ChoiceOptionItem(text,id);
            this.props.addUpdateChoice(this.props.question.id,choiceItem);
        }
    }
    render(){
        const {question,isActive} = this.props;
        return (
            <div className="choice-question-items">
            {  question.choices &&  question.choices.map((choice)=>{
                    return <div className="choice-question-item-input">
                        <span>-</span>
                        <Input
                        fluid
                        id={choice.id}
                        key={choice.id}
                        onChange={this.handleUpdateChoice} 
                        defaultValue={choice.text} 
                        disabled = {!isActive}
                    />
                        </div>
                })
            }
            <div className="choice-question-item-input">
                <span className="choice-input-prefix">-</span>
             <Input
                    id={uuid()}
                    className="choice-input"
                    onKeyPress={this.handleAddChoice} 
                    disabled = {!isActive}
                    defaultValue="options"
                />
            </div>
            </div>
        );
    }
}