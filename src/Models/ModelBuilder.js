//@flow

import uuid from 'uuid/v4'


import {BlockType} from '../BlockType'
import {ShortTextEditModel} from './ShortTextEditModel'
import {LongTextEditModel} from './LongTextEditModel'
import {MultipleChoiceEditModel} from './MultipleChoiceEditModel'
import {YesNoEditModel} from './YesNoEditModel'
import {RatingEditModel} from './RatingEditModel'
import {DropdownListEditModel} from './DropdownListEditModel'
import {DateTimePickerEditModel} from './DateTimePickerEditModel'
import {FileUploadEditModel} from './FileUploadEditModel'
import {SchedulerEditModel} from './SchedulerEditModel'
import {StatementEditModel} from './StatementEditModel'
import {AddressLookupEditModel} from './AddressLookupEditModel'

import { EnumSymbol } from '../Enum';
import { ChoiceOptionItem } from './ChoiceOptionItem';

export const BuildNewQuestionEditModel = (questionType:EnumSymbol,index:number) => {
    const id:string = uuid();
    const tempQuestion = new ShortTextEditModel("",id,(index + 1));
    tempQuestion.type = questionType;
    return BuildQuestionEditModel(tempQuestion);
}


export const BuildQuestionEditModel = (question : ShortTextEditModel | LongTextEditModel | MultipleChoiceEditModel | YesNoEditModel | RatingEditModel | DropdownListEditModel | DateTimePickerEditModel | FileUploadEditModel | StatementEditModel | SchedulerEditModel | AddressLookupEditModel | ShortTextEditModel) =>{
    let result = null;
    switch(question.type){
        case BlockType["ShortText"]:
            result = new ShortTextEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["LongText"]:
            result = new LongTextEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["MultipleChoice"]:
            result = new MultipleChoiceEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription,[],false);
            if(question.choices){
                let newChoices = ((question.choices : any): Array<ChoiceOptionItem>);
                result.choices = newChoices;
            }
            break;
        case BlockType["YesNo"]:
            result = new YesNoEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["Rating"]:
            result = new RatingEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["DropdownList"]:
            result = new DropdownListEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            if(question.choices){
                let newChoices = ((question.choices : any): Array<ChoiceOptionItem>);
                result.choices = newChoices;
            }
            break;
        case BlockType["DateTimePicker"]:
            result = new DateTimePickerEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["FileUpload"]:
            result = new FileUploadEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["Statement"]:
            result = new StatementEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["Scheduler"]:
            result = new SchedulerEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["AddressLookup"]:
            result = new AddressLookupEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        default:
            result = new ShortTextEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
    }
    return result;
}

export const MapQuestionEditModel = (question: ShortTextEditModel | LongTextEditModel | MultipleChoiceEditModel | YesNoEditModel | RatingEditModel | DropdownListEditModel | DateTimePickerEditModel | FileUploadEditModel | StatementEditModel | SchedulerEditModel | AddressLookupEditModel | ShortTextEditModel, type: EnumSymbol) =>{
    let result = null;
    switch(type){
        case BlockType["ShortText"]:
            result = new ShortTextEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["LongText"]:
            result = new LongTextEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["MultipleChoice"]:
            result = new MultipleChoiceEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription,[],false);
            if(question.choices){
                let newChoices = ((question.choices : any): Array<ChoiceOptionItem>);
                result.choices = newChoices;
            }
            break;
        case BlockType["YesNo"]:
            result = new YesNoEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["Rating"]:
            result = new RatingEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["DropdownList"]:
            result = new DropdownListEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            if(question.choices){
                let newChoices = ((question.choices : any): Array<ChoiceOptionItem>);
                result.choices = newChoices;
            }
            break;
        case BlockType["DateTimePicker"]:
            result = new DateTimePickerEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["FileUpload"]:
            result = new FileUploadEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["Statement"]:
            result = new StatementEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["Scheduler"]:
            result = new SchedulerEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["AddressLookup"]:
            result = new AddressLookupEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        default:
            result = new ShortTextEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
    }
    return result;
}
