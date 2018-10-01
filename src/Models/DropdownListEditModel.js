//@flow
import {BlockType,BlockTypeName} from '../BlockType'
import {DefaultQuestionEditModel} from './DefaultQuestionEditModel'
import { ChoiceOptionItem } from './ChoiceOptionItem';

export class DropdownListEditModel extends DefaultQuestionEditModel{
    choices: Array<ChoiceOptionItem>;
    constructor(text:string,id:string,order:number,description:string = "",isRequired:boolean = false,showDescription:boolean=false,choices:Array<ChoiceOptionItem>=[]){
        super(BlockType[BlockTypeName.DropdownList],text,id,order,description,isRequired,showDescription);
        this.choices = choices;
    }
}