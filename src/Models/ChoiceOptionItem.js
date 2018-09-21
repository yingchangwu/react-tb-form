export class ChoiceOptionItem {
    constructor(text,id){
        this.text = text;
        this.id = id;
    }
    toKeyValue(){
        return {text: this.text, value: this.id};
    }
}
