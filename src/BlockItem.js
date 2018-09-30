//@flow
import React from 'react'
import { BlockType } from './BlockType'
import {
    ShortTextEditor,
    MultipleChoiceEditor,
    LongTextEditor,
    YesNoEditor ,
    RatingEditor,
    DropdownListEditor,
    DateTimePickerEditor,
    FileUploadEditor,
    StatementEditor,
    SchedulerEditor,
    AddressLookupEditor} from './Editor'

import {ShortTextEditModel} from './Models/ShortTextEditModel'
import {LongTextEditModel} from './Models/LongTextEditModel'
import {MultipleChoiceEditModel} from './Models/MultipleChoiceEditModel'
import {YesNoEditModel} from './Models/YesNoEditModel'
import {RatingEditModel} from './Models/RatingEditModel'
import {DropdownListEditModel} from './Models/DropdownListEditModel'
import {DateTimePickerEditModel} from './Models/DateTimePickerEditModel'
import {FileUploadEditModel} from './Models/FileUploadEditModel'
import {SchedulerEditModel} from './Models/SchedulerEditModel'
import {StatementEditModel} from './Models/StatementEditModel'
import {AddressLookupEditModel} from './Models/AddressLookupEditModel'
import {ChoiceOptionItem} from './Models/ChoiceOptionItem'

    type blockItemProps = {
        question:  ShortTextEditModel | LongTextEditModel | MultipleChoiceEditModel | YesNoEditModel | RatingEditModel | DropdownListEditModel | DateTimePickerEditModel | FileUploadEditModel | StatementEditModel | SchedulerEditModel | AddressLookupEditModel | ShortTextEditModel, 
        isActive:boolean,
        save: (question: ShortTextEditModel | LongTextEditModel | MultipleChoiceEditModel | YesNoEditModel | RatingEditModel | DropdownListEditModel | DateTimePickerEditModel | FileUploadEditModel | StatementEditModel | SchedulerEditModel | AddressLookupEditModel | ShortTextEditModel)=>void,
        focus: (question: ShortTextEditModel | LongTextEditModel | MultipleChoiceEditModel | YesNoEditModel | RatingEditModel | DropdownListEditModel | DateTimePickerEditModel | FileUploadEditModel | StatementEditModel | SchedulerEditModel | AddressLookupEditModel | ShortTextEditModel)=>void,
        addUpdateChoice: (id:string, options:ChoiceOptionItem) => void
    }
export const BlockItem = ({question,isActive,save,focus,addUpdateChoice}: blockItemProps) =>{
        let result = <div>INCORRECT QUESTION TYPE</div>;
        switch(question.type){
            case BlockType["ShortText"]:
                result = <ShortTextEditor question={question} 
                                        save={save}
                                        focus={focus} />
            break;
            case BlockType["LongText"]:
                result = <LongTextEditor question={question} 
                                        save={save}
                                        focus={focus} />
                break;
            case BlockType["YesNo"]:
                result = <YesNoEditor question={question} 
                                        save={save}
                                        focus={focus}
                                        addUpdateChoice={addUpdateChoice} />
                break;
            case BlockType["MultipleChoice"]:
            result = <MultipleChoiceEditor question={question} 
                                    isActive={isActive}
                                    save={save}
                                    focus={focus}
                                    addUpdateChoice={addUpdateChoice} />
            break;
            case BlockType["Rating"]:
            result = <RatingEditor question={question} 
                                    save={save}
                                    focus={focus} />
            break;
            case BlockType["DropdownList"]:
            result = <DropdownListEditor question={question} 
                                    isActive={isActive}
                                    save={save}
                                    focus={focus}
                                    addUpdateChoice={addUpdateChoice} />
            break;
            case BlockType["DateTimePicker"]:
            result = <DateTimePickerEditor question={question} 
                                    save={save}
                                    focus={focus}/>
            break;
            case BlockType["FileUpload"]:
            result = <FileUploadEditor question={question} 
                                    save={save}
                                    focus={focus}/>
            break;
            case BlockType["Statement"]:
            result = <StatementEditor question={question} 
                                    save={save}
                                    focus={focus}/>
            break;
            case BlockType["Scheduler"]:
            result = <SchedulerEditor question={question} 
                                    save={save}
                                    focus={focus}/>
            break;
            case BlockType["AddressLookup"]:
            result = <AddressLookupEditor question={question} 
                                    save={save}
                                    focus={focus}/>
            break;
        }
        
        return result;
    }
