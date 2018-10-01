//@flow
import {BlockType,BlockTypeName} from '../BlockType'
import {DefaultQuestionEditModel} from './DefaultQuestionEditModel'
export class AddressLookupEditModel extends DefaultQuestionEditModel{
    constructor(
        text:string,
        id:string,
        order:number,
        description:string,
        isRequired:boolean,
        showDescription:boolean
    ):AddressLookupEditModel
    {
        super(BlockType[BlockTypeName.AddressLookup],text,id,order,description,isRequired,showDescription);
        return this;
    }
}
