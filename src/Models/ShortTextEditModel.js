import {BlockTypes} from '../BlockTypesEnum'
import {DefaultQuestionEditModel} from './DefaultQuestionEditModel'
export class ShortTextEditModel extends DefaultQuestionEditModel{
    constructor(text,id,order,description = "",isRequired = false,showDescription=false){
        super(BlockTypes.ShortText,text,id,order,description,isRequired,showDescription);
    }
}
