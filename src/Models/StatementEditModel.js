import {BlockTypes} from '../BlockTypesEnum'
import {DefaultQuestionEditModel} from './DefaultQuestionEditModel'
export class StatementEditModel extends DefaultQuestionEditModel{
    constructor(text,id,order,description = "",isRequired = false,showDescription=true){
        super(BlockTypes.Statement,text,id,order,description,isRequired,showDescription);
    }
}
