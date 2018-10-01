//@flow
import {BlockType,BlockTypeName} from '../BlockType'
import {DefaultQuestionEditModel} from './DefaultQuestionEditModel'
import { ChoiceOptionItem } from './ChoiceOptionItem';

export class MultipleChoiceEditModel extends DefaultQuestionEditModel{
    choices:Array<ChoiceOptionItem>;
    isMultipleChoices:boolean;
    constructor(text:string,id:string,order:number,description:string = "",isRequired:boolean = false,showDescription:boolean=false,choices:Array<ChoiceOptionItem>=[],isMultipleChoices:boolean=false){
        super(BlockType[BlockTypeName.MultipleChoice],text,id,order,description,isRequired,showDescription);
        this.choices = choices;
        this.isMultipleChoices = isMultipleChoices;
    }
}