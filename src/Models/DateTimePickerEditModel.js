//@flow
import {BlockType,BlockTypeName} from '../BlockType'
import {DefaultQuestionEditModel} from './DefaultQuestionEditModel'
export class DateTimePickerEditModel extends DefaultQuestionEditModel{
    constructor(text:string,id:string,order:number,description:string = "",isRequired:boolean = false,showDescription:boolean=false){
        super(BlockType[BlockTypeName.DateTimePicker],text,id,order,description,isRequired,showDescription);
    }
}