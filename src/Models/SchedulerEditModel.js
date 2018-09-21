import {BlockTypes} from '../BlockTypesEnum'
import {DefaultQuestionEditModel} from './DefaultQuestionEditModel'
export class SchedulerEditModel extends DefaultQuestionEditModel{
    constructor(text,id,order,description = "",isRequired = false,showDescription=false){
        super(BlockTypes.Scheduler,text,id,order,description,isRequired,showDescription);
    }
}
