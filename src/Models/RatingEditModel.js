//@flow
import {BlockType,BlockTypeName} from '../BlockType'
import {DefaultQuestionEditModel} from './DefaultQuestionEditModel'
export class RatingEditModel extends DefaultQuestionEditModel{
    constructor(text:string,id:string,order:number,description:string = "",isRequired:boolean = false,showDescription:boolean=false){
        super(BlockType[BlockTypeName.Rating],text,id,order,description,isRequired,showDescription);
    }
}