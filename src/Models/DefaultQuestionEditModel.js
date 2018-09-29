//@flow
import {EnumSymbol} from '../Enum';

export class DefaultQuestionEditModel{
    type:EnumSymbol;
    text:string;
    id:string;
    order:number;
    description:string;
    isRequired:boolean;
    showDescription:boolean;

    constructor(type:EnumSymbol,text:string,id:string,order:number,description:string,isRequired:boolean,showDescription:boolean){
        this.type=type;
        this.text = text;
        this.id = id;
        this.description = description;
        this.isRequired = isRequired;
        this.showDescription = showDescription;
        this.order = order;
    }
    toggleDescription():void{
        this.showDescription = !this.showDescription;
    }
}