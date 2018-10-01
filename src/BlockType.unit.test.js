import {BlockType,BlockTypeName} from './BlockType'
import { EnumSymbol } from './Enum';

describe("Block Type",()=>{
    test("block key",()=>{
        const keys = BlockType.keys();
        console.log(keys);
        for(var name in BlockTypeName){
            const blockTypeName = BlockTypeName[name];
            const type = BlockType[blockTypeName];
            expect(type).toBeInstanceOf(EnumSymbol);
        }
    })
})