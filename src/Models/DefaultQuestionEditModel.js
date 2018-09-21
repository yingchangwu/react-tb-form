
export class DefaultQuestionEditModel{
    constructor(type,text,id,order,description,isRequired,showDescription){
        this.type=type;
        this.text = text;
        this.id = id;
        this.description = description;
        this.isRequired = isRequired;
        this.showDescription = showDescription;
        this.order = order;
    }
    toggleDescription(){
        this.showDescription = !this.showDescription;
    }
}