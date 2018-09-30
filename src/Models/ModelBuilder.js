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
    const question = new BuildModel(tempQuestion);
    return question.toShortText();
}

export function BuildModel(question:  ShortTextEditModel | LongTextEditModel | MultipleChoiceEditModel | YesNoEditModel | RatingEditModel | DropdownListEditModel | DateTimePickerEditModel | FileUploadEditModel | StatementEditModel | SchedulerEditModel | AddressLookupEditModel | ShortTextEditModel){
    this.question = question;
}

BuildModel.prototype.toShortText = function():ShortTextEditModel{
    return new ShortTextEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
}

BuildModel.prototype.toLongText = function():LongTextEditModel{
    return new LongTextEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
}

BuildModel.prototype.toMultipleChoice = function():MultipleChoiceEditModel{
    let result = new MultipleChoiceEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription,[],false);
    if(this.question.choices){
        let newChoices = ((this.question.choices : any): Array<ChoiceOptionItem>);
        result.choices = newChoices;
    }
    return result;
}


BuildModel.prototype.toDropdownList = function():DropdownListEditModel{
    let result = new DropdownListEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription,[]);
    if(this.question.choices){
        let newChoices = ((this.question.choices : any): Array<ChoiceOptionItem>);
        result.choices = newChoices;
    }
    return result;
}

BuildModel.prototype.toYesNo = function():YesNoEditModel{
    return new YesNoEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
}

BuildModel.prototype.toRating = function():RatingEditModel{
    return new RatingEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
}

BuildModel.prototype.toDateTimePicker = function():DateTimePickerEditModel{
    return new DateTimePickerEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
}

BuildModel.prototype.toStatement = function():StatementEditModel{
    return new StatementEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
}

BuildModel.prototype.toScheduler = function():SchedulerEditModel{
    return new SchedulerEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
}

BuildModel.prototype.toAddressLookup = function():AddressLookupEditModel{
    return new AddressLookupEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
}

BuildModel.prototype.toFileUpload = function():FileUploadEditModel{
    return new FileUploadEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
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
            // if(question.choices){
            //     let newChoices = ((question.choices : any): Array<ChoiceOptionItem>);
            //     result.choices = newChoices;
            // }
            break;
        case BlockType["YesNo"]:
            result = new YesNoEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["Rating"]:
            result = new RatingEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockType["DropdownList"]:
            result = new DropdownListEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            // if(question.choices){
            //     let newChoices = ((question.choices : any): Array<ChoiceOptionItem>);
            //     result.choices = newChoices;
            // }
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
