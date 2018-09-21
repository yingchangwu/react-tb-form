class EnumSymbol {
    sym;
    value;
    description;

    constructor(name, {value, description}) {
        this.sym = Symbol.for(name);
        if(!Object.is(value, undefined)) this.value  = value;
        if(description) this.description  = description;

        Object.freeze(this);
    }

    get display() {
        return this.description || Symbol.keyFor(this.sym);
    }

    toString() {
        return this.sym;
    }

    key(){
        return Symbol.keyFor(this.sym);
    }

    valueOf() {
        return this.value;
    }
}
export class Enum {
    constructor(enumLiterals) {
        for (let key in enumLiterals) {
            if(!enumLiterals[key]) throw new TypeError('each enum should have been initialized with atleast empty {} value');
            this[key] =  new EnumSymbol(key, enumLiterals[key]);
        }
        Object.freeze(this);
    }
    symbols(){
        let result = [];
        Object.keys(this).forEach(function(item){
            result.push(this[item]);
        },this);
        return result;
    }

    keys() {
        return Object.keys(this);
    }

    contains(sym) {
        if (!(sym instanceof EnumSymbol)) return false;
        return this[Symbol.keyFor(sym.sym)] === sym;
    }
}

export const BlockTypes = new Enum({
    Statement:{value:1, description: "Introduction"},
    ShortText:{value:2,description:'Short Text'},
    LongText:{value:3,description:"Long Text"},
    MultipleChoice:{value:4,description:"Multiple Choice"},
    YesNo:{value:5,description:"Yes/No"},
    Rating:{value:6, description:"Rating"},
    DropdownList:{value:7, description: "Dropdown List"},
    DateTimePicker:{value:8,description:'DateTime Picker'},
    FileUpload:{value:9,description:'File Upload'},
    Scheduler:{value:10,description:"Scheduler"},
    AddressLookup:{value:11,description:"Address"}
});

export const BlockTypesList = () =>{
    let options = [];
    const keys = BlockTypes.keys();
    keys.forEach(function(blockKey){
        const item = BlockTypes[blockKey];
        const text = <div className="draggable-block-content"><BlockIcon type={item} size="small"/><span className="draggable-block-text">{item.description}</span></div>
        const value = item.value;
        options.push({key: blockKey, value:value, text:text});
    });
    return options;
}