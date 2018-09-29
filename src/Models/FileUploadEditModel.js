//@flow
import {BlockType} from '../BlockType'
import {DefaultQuestionEditModel} from './DefaultQuestionEditModel'
export class FileUploadEditModel extends DefaultQuestionEditModel{
    constructor(text:string,id:string,order:number,description:string = "",isRequired:boolean = false,showDescription:boolean=false){
        super(BlockType["FileUpload"],text,id,order,description,isRequired,showDescription);
    }
}