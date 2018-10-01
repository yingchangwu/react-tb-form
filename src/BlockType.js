//@flow
import {Enum} from './Enum'

export const BlockType = new Enum({
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


export const BlockTypeName = {
    Statement: "Statement",
    ShortText: "ShortText",
    LongText: "LongText",
    MultipleChoice:"MultipleChoice",
    YesNo:"YesNo",
    Rating:"Rating",
    DropdownList:"DropdownList",
    DateTimePicker:"DateTimePicker",
    FileUpload:"FileUpload",
    Scheduler:"Scheduler",
    AddressLookup:"AddressLookup"
}