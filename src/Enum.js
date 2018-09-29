//@flow

type EnumDescriptionType = {
    value: number | string,
    description: string
}

export class EnumSymbol {
    sym : Symbol;
    value: number | string;
    description: string;

    constructor(name:string, {value, description}: EnumDescriptionType) {
        this.sym = Symbol.for(name);
        this.value  = value;
        this.description  = description;

        Object.freeze(this);
    }

    getName():string{
        let name = Symbol.keyFor(this.sym);
        if(name !== null && name !== undefined){
            return name;
        }
        return "";
    }

    getValue(): number | string {
        return this.value;
    }

    getDescription():string{
        return this.description;
    }
}
export class Enum {
    $key:string;
    $value: EnumSymbol;
    constructor(enumLiterals:{[key:string]:EnumDescriptionType}) {
        for (let key in enumLiterals) {
            if(!enumLiterals[key]) throw new TypeError('each enum should have been initialized with atleast empty {} value');
            this[key] =  new EnumSymbol(key, enumLiterals[key]);
        }
        Object.freeze(this);
    }
    data():Array<EnumSymbol>{
        let result:Array<EnumSymbol> = [];
        Object.keys(this).forEach(function(item:string){
            result.push(this[item]);
        },this);
        return result;
    }

    keys():Array<string> {
        return Object.keys(this);
    }

    contains(sym:EnumSymbol):boolean {
        if (!(sym instanceof EnumSymbol)) return false;
        const sybls: ?string = Symbol.keyFor(sym.sym);
        if(sybls != null){
            return this[sybls] === sym;
        }
        return false;
    }
}