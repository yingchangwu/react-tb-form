import {BlockTypes} from '../BlockTypesEnum'
import {DefaultQuestionEditModel} from './DefaultQuestionEditModel'

export class MultipleChoiceEditModel extends DefaultQuestionEditModel{
    constructor(text,id,order,description = "",isRequired = false,showDescription=false,choices=[],isMultipleChoices=false){
        super(BlockTypes.MultipleChoice,text,id,order,description,isRequired,showDescription);
        this.choices = choices;
        this.isMultipleChoices = isMultipleChoices;
    }
}