//@flow
export class ChoiceOptionItem {
    text: string;
    id: number | string;
    constructor(text:string,id:number|string){
        this.text = text;
        this.id = id;
    }
    toKeyValue(){
        return {text: this.text, value: this.id};
    }
}
