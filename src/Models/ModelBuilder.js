//@flow

import uuid from 'uuid/v4'


import {BlockType,BlockTypeName} from '../BlockType'
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
    const question = new ModelBuilder(tempQuestion);
    switch(questionType){
        case BlockType[BlockTypeName.Statement]: return question.toStatement();
        case BlockType[BlockTypeName.ShortText]: return question.toShortText();
        case BlockType[BlockTypeName.LongText]: return question.toLongText();
        case BlockType[BlockTypeName.MultipleChoice]: return question.toMultipleChoice();
        case BlockType[BlockTypeName.YesNo]: return question.toYesNo();
        case BlockType[BlockTypeName.Rating]: return question.toRating();
        case BlockType[BlockTypeName.DropdownList]: return question.toDropdownList();
        case BlockType[BlockTypeName.DateTimePicker]: return question.toDateTimePicker();
        case BlockType[BlockTypeName.FileUpload]: return question.toFileUpload();
        case BlockType[BlockTypeName.Scheduler]: return question.toScheduler();
        case BlockType[BlockTypeName.AddressLookup]: return question.toAddressLookup();
    }
    return question.toShortText();
}

let AllEditModel : ShortTextEditModel | LongTextEditModel | MultipleChoiceEditModel | YesNoEditModel | RatingEditModel | DropdownListEditModel | DateTimePickerEditModel | FileUploadEditModel | StatementEditModel | SchedulerEditModel | AddressLookupEditModel | ShortTextEditModel;

export class ModelBuilder{
    question: typeof AllEditModel
    constructor(question: typeof AllEditModel){
        this.question = question;
    }

    toShortText():ShortTextEditModel{
        return new ShortTextEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
    }

    toLongText():LongTextEditModel{
        return new LongTextEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
    }

    toMultipleChoice():MultipleChoiceEditModel{
        let result = new MultipleChoiceEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription,[],false);
        if(this.question.choices){
            let newChoices = ((this.question.choices : any): Array<ChoiceOptionItem>);
            result.choices = newChoices;
        }
        return result;
    }

    toDropdownList():DropdownListEditModel{
        let result = new DropdownListEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription,[]);
        if(this.question.choices){
            let newChoices = ((this.question.choices : any): Array<ChoiceOptionItem>);
            result.choices = newChoices;
        }
        return result;
    }

    toYesNo():YesNoEditModel{
        return new YesNoEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
    }

    toRating():RatingEditModel{
        return new RatingEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
    }

    toDateTimePicker():DateTimePickerEditModel{
        return new DateTimePickerEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
    }

    toStatement():StatementEditModel{
        return new StatementEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
    }

    toScheduler():SchedulerEditModel{
        return new SchedulerEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
    }

    toAddressLookup():AddressLookupEditModel{
        return new AddressLookupEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
    }

    toFileUpload():FileUploadEditModel{
        return new FileUploadEditModel(this.question.text,this.question.id,this.question.order,this.question.description,this.question.isRequired,this.question.showDescription);
    }
}


export const MapQuestionEditModel = (question: ShortTextEditModel | LongTextEditModel | MultipleChoiceEditModel | YesNoEditModel | RatingEditModel | DropdownListEditModel | DateTimePickerEditModel | FileUploadEditModel | StatementEditModel | SchedulerEditModel | AddressLookupEditModel | ShortTextEditModel, type: EnumSymbol) =>{
    let result = null;
    switch(type){
        case BlockType[BlockTypeName.ShortText]: return new ShortTextEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
        case BlockType[BlockTypeName.LongText]: return new LongTextEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
        case BlockType[BlockTypeName.MultipleChoice]:
            let choices:Array<ChoiceOptionItem> = [];
            if(question.choices){
                choices = ((question.choices : any): Array<ChoiceOptionItem>);
            }
            return new MultipleChoiceEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription,choices,false);
        case BlockType[BlockTypeName.YesNo]:
            return new YesNoEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
        case BlockType[BlockTypeName.Rating]:
            return new RatingEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
        case BlockType[BlockTypeName.DropdownList]:
            let dropdownListChoices:Array<ChoiceOptionItem> = [];
            if(question.choices){
                dropdownListChoices = ((question.choices : any): Array<ChoiceOptionItem>);
            }
            return new DropdownListEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription,dropdownListChoices);
        case BlockType[BlockTypeName.DateTimePicker]:
            return new DateTimePickerEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
        case BlockType[BlockTypeName.FileUpload]:
            return new FileUploadEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
        case BlockType[BlockTypeName.Statement]:
            return new StatementEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
        case BlockType[BlockTypeName.Scheduler]:
            return new SchedulerEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
        case BlockType[BlockTypeName.AddressLookup]:
            return new AddressLookupEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
        default:
            return new ShortTextEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
    }
}
