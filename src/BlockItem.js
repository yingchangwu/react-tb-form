//@flow
import React from 'react'
import { BlockType,BlockTypeName } from './BlockType'
import {default as ShortTextEditor} from './Editor/ShortTextEditor'
import {default as MultipleChoiceEditor} from './Editor/MultipleChoiceEditor'
import {default as LongTextEditor} from './Editor/LongTextEditor'
import {default as YesNoEditor} from './Editor/YesNoEditor'
import {default as RatingEditor} from './Editor/RatingEditor'
import {default as DropdownListEditor} from './Editor/DropdownListEditor'
import {default as DateTimePickerEditor} from './Editor/DateTimePickerEditor'
import {default as FileUploadEditor} from './Editor/FileUploadEditor'
import {default as StatementEditor} from './Editor/StatementEditor'
import {default as SchedulerEditor} from './Editor/SchedulerEditor'
import {default as AddressLookupEditor} from './Editor/AddressLookupEditor'
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

    let  AllEditModel:ShortTextEditModel | LongTextEditModel | MultipleChoiceEditModel | YesNoEditModel | RatingEditModel | DropdownListEditModel | DateTimePickerEditModel | FileUploadEditModel | StatementEditModel | SchedulerEditModel | AddressLookupEditModel | ShortTextEditModel;

    type blockItemProps = {
        question:  typeof AllEditModel, 
        isActive:boolean,
        save: (question: typeof AllEditModel)=>void,
        focus: (question: typeof AllEditModel)=>void,
        addUpdateChoice: (id:string, options:ChoiceOptionItem) => void
    }
export const BlockItem = ({question,isActive,save,focus,addUpdateChoice}: blockItemProps) =>{
        let result = <div>INCORRECT QUESTION TYPE</div>;
        if(question instanceof ShortTextEditModel){
            return <ShortTextEditor question={question} 
            save={save}
            focus={focus} />
        }
        else if(question instanceof LongTextEditModel){
            return <LongTextEditor question={question} save={save} focus={focus} />
        }
        else if(question instanceof MultipleChoiceEditModel){
            return <MultipleChoiceEditor question={question} 
                                        isActive={isActive}
                                        save={save}
                                        focus={focus}
                                        addUpdateChoice={addUpdateChoice}/>
        }
        else if(question instanceof YesNoEditModel){
            return <YesNoEditor question={question} save={save} focus={focus} />
        }
        else if(question instanceof RatingEditModel){
            return <RatingEditor question={question} save={save} focus={focus} />
        }
        else if(question instanceof DropdownListEditModel){
            return <DropdownListEditor question={question} 
                                        isActive={isActive}
                                        save={save}
                                        focus={focus}
                                        addUpdateChoice={addUpdateChoice} />
        }
        else if(question instanceof DateTimePickerEditModel){
            return <DateTimePickerEditor question={question} save={save} focus={focus} />
        }
        else if(question instanceof FileUploadEditModel){
            return <FileUploadEditor question={question} save={save} focus={focus} />
        }
        else if(question instanceof SchedulerEditModel){
            return <SchedulerEditor question={question} save={save} focus={focus} />
        }
        else if(question instanceof StatementEditModel){
            return <StatementEditor question={question} save={save} focus={focus} />
        }
        else if(question instanceof AddressLookupEditModel){
            return <AddressLookupEditor question={question} save={save} focus={focus} />
        }
    }
