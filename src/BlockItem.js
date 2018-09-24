import React from 'react'
import { BlockTypes } from './BlockTypesEnum'
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

  
export const BlockItem = ({
                            question, 
                            isActive,
                            save,
                            total,
                            focus,
                            edit,
                            addUpdateChoice}) =>{
        let result = <div>INCORRECT QUESTION TYPE</div>;
        switch(question.type){
            case BlockTypes.ShortText:
                result = <ShortTextEditor question={question} 
                                        save={save}
                                        focus={focus}
                                        edit={edit} />
            break;
            case BlockTypes.LongText:
                result = <LongTextEditor question={question} 
                                        save={save}
                                        focus={focus}
                                        edit={edit} />
                break;
            case BlockTypes.YesNo:
                result = <YesNoEditor question={question} 
                                        save={save}
                                        focus={focus}
                                        edit={edit}
                                        addUpdateChoice={addUpdateChoice} />
                break;
            case BlockTypes.MultipleChoice:
            result = <MultipleChoiceEditor question={question} 
                                    isActive={isActive}
                                    save={save}
                                    focus={focus}
                                    edit={edit}
                                    addUpdateChoice={addUpdateChoice} />
            break;
            case BlockTypes.Rating:
            result = <RatingEditor question={question} 
                                    save={save}
                                    focus={focus}
                                    edit={edit} />
            break;
            case BlockTypes.DropdownList:
            result = <DropdownListEditor question={question} 
                                    isActive={isActive}
                                    save={save}
                                    focus={focus}
                                    edit={edit}
                                    addUpdateChoice={addUpdateChoice} />
            break;
            case BlockTypes.DateTimePicker:
            result = <DateTimePickerEditor question={question} 
                                    save={save}
                                    focus={focus}
                                    edit={edit} />
            break;
            case BlockTypes.FileUpload:
            result = <FileUploadEditor question={question} 
                                    save={save}
                                    focus={focus}
                                    edit={edit} />
            break;
            case BlockTypes.Statement:
            result = <StatementEditor question={question} 
                                    save={save}
                                    focus={focus}
                                    edit={edit} />
            break;
            case BlockTypes.Scheduler:
            result = <SchedulerEditor question={question} 
                                    save={save}
                                    focus={focus}
                                    edit={edit} />
            break;
            case BlockTypes.AddressLookup:
            result = <AddressLookupEditor question={question} 
                                    save={save}
                                    focus={focus}
                                    edit={edit} />
            break;
        }
        
        return result;
    }
