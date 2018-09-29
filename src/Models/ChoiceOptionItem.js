//@flow
export class ChoiceOptionItem {
    text: string;
    id: number;
    constructor(text:string,id:number){
        this.text = text;
        this.id = id;
    }
    toKeyValue(){
        return {text: this.text, value: this.id};
    }
}
