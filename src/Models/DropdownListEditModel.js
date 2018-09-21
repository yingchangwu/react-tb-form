import {BlockTypes} from '../BlockTypesEnum'
import {DefaultQuestionEditModel} from './DefaultQuestionEditModel'

export class DropdownListEditModel extends DefaultQuestionEditModel{
    constructor(text,id,order,description = "",isRequired = false,showDescription=false,choices=[]){
        super(BlockTypes.DropdownList,text,id,order,description,isRequired,showDescription);
        this.choices = choices;
    }
}