import {BlockTypes} from '../BlockTypesEnum'
import {DefaultQuestionEditModel} from './DefaultQuestionEditModel'
export class AddressLookupEditModel extends DefaultQuestionEditModel{
    constructor(text,id,order,description = "",isRequired = false,showDescription=false){
        super(BlockTypes.AddressLookup,text,id,order,description,isRequired,showDescription);
    }
}
