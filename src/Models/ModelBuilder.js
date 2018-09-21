import {BlockTypes} from '../BlockTypesEnum'
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

import uuid from 'uuid/v4'

export const BuildNewQuestionEditModel = (questionType,index) => {
    const tempQuestion = new ShortTextEditModel("...",uuid(),(index + 1));
    tempQuestion.type = questionType;
    return BuildQuestionEditModel(tempQuestion);
}

export const BuildQuestionEditModel = (question) =>{
    let result = null;
    switch(question.type){
        case BlockTypes.ShortText:
            result = new ShortTextEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockTypes.LongText:
            result = new LongTextEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockTypes.MultipleChoice:
            result = new MultipleChoiceEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription,[],false);
            if(question.choices){
                result.choices = question.choices;
            }
            break;
        case BlockTypes.YesNo:
            result = new YesNoEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockTypes.Rating:
            result = new RatingEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockTypes.DropdownList:
            result = new DropdownListEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            if(question.choices){
                result.choices = question.choices;
            }
            break;
        case BlockTypes.DateTimePicker:
            result = new DateTimePickerEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockTypes.FileUpload:
            result = new FileUploadEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockTypes.Statement:
            result = new StatementEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockTypes.Scheduler:
            result = new SchedulerEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockTypes.AddressLookup:
            result = new AddressLookupEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        default:
            result = new ShortTextEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
    }
    return result;
}

export const MapQuestionEditModel = (question, type) =>{
    let result = null;
    switch(type){
        case BlockTypes.ShortText:
            result = new ShortTextEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockTypes.LongText:
            result = new LongTextEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockTypes.MultipleChoice:
            result = new MultipleChoiceEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription,[],false);
            if(question.choices){
                result.choices = question.choices;
            }
            break;
        case BlockTypes.YesNo:
            result = new YesNoEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockTypes.Rating:
            result = new RatingEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockTypes.DropdownList:
            result = new DropdownListEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            if(question.choices){
                result.choices = question.choices;
            }
            break;
        case BlockTypes.DateTimePicker:
            result = new DateTimePickerEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockTypes.FileUpload:
            result = new FileUploadEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockTypes.Statement:
            result = new StatementEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockTypes.Scheduler:
            result = new SchedulerEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        case BlockTypes.AddressLookup:
            result = new AddressLookupEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
            break;
        default:
            result = new ShortTextEditModel(question.text,question.id,question.order,question.description,question.isRequired,question.showDescription);
    }
    return result;
}
