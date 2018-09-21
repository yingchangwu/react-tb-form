import {BlockTypes} from '../BlockTypesEnum'
import {DefaultQuestionEditModel} from './DefaultQuestionEditModel'
export class LongTextEditModel extends DefaultQuestionEditModel{
    constructor(text,id,order,description = "",isRequired = false,showDescription=false){
        super(BlockTypes.LongText,text,id,order,description,isRequired,showDescription);
    }
}