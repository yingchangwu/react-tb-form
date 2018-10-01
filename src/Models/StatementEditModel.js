//@flow
import {BlockType,BlockTypeName} from '../BlockType'
import {DefaultQuestionEditModel} from './DefaultQuestionEditModel'
export class StatementEditModel extends DefaultQuestionEditModel{
    constructor(text:string,id:string,order:number,description:string = "",isRequired:boolean = false,showDescription:boolean=true){
        super(BlockType[BlockTypeName.Statement],text,id,order,description,isRequired,showDescription);
    }
}
