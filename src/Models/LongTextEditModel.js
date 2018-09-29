//@flow
import {BlockType} from '../BlockType'
import {DefaultQuestionEditModel} from './DefaultQuestionEditModel'
export class LongTextEditModel extends DefaultQuestionEditModel{
    constructor(text:string,id:string,order:number,description:string = "",isRequired:boolean= false,showDescription:boolean=false){
        super(BlockType["LongText"],text,id,order,description,isRequired,showDescription);
    }
}