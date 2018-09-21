import React from 'react'
import { BlockTypes } from './BlockTypesEnum'
import {
    ShortTextBlock,
    MultipleChoiceBlock,
    LongTextBlock,
    YesNoBlock ,
    RatingBlock,
    DropdownListBlock,
    DateTimePickerBlock,
    FileUploadBlock,
    StatementBlock,
    SchedulerBlock,
    AddressLookupBlock} from './Blocks'

  
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
                result = <ShortTextBlock question={question} 
                                        isActive={isActive}
                                        save={save}
                                        total={total}
                                        focus={focus}
                                        edit={edit} />
            break;
            case BlockTypes.LongText:
                result = <LongTextBlock question={question} 
                                        isActive={isActive}
                                        save={save}
                                        total={total}
                                        focus={focus}
                                        edit={edit} />
                break;
            case BlockTypes.YesNo:
                result = <YesNoBlock question={question} 
                                        isActive={isActive}
                                        save={save}
                                        total={total}
                                        focus={focus}
                                        edit={edit}
                                        addUpdateChoice={addUpdateChoice} />
                break;
            case BlockTypes.MultipleChoice:
            result = <MultipleChoiceBlock question={question} 
                                    isActive={isActive}
                                    save={save}
                                    total={total}
                                    focus={focus}
                                    edit={edit}
                                    addUpdateChoice={addUpdateChoice} />
            break;
            case BlockTypes.Rating:
            result = <RatingBlock question={question} 
                                    isActive={isActive}
                                    save={save}
                                    total={total}
                                    focus={focus}
                                    edit={edit} />
            break;
            case BlockTypes.DropdownList:
            result = <DropdownListBlock question={question} 
                                    isActive={isActive}
                                    save={save}
                                    total={total}
                                    focus={focus}
                                    edit={edit}
                                    addUpdateChoice={addUpdateChoice} />
            break;
            case BlockTypes.DateTimePicker:
            result = <DateTimePickerBlock question={question} 
                                    isActive={isActive}
                                    save={save}
                                    total={total}
                                    focus={focus}
                                    edit={edit} />
            break;
            case BlockTypes.FileUpload:
            result = <FileUploadBlock question={question} 
                                    isActive={isActive}
                                    save={save}
                                    total={total}
                                    focus={focus}
                                    edit={edit} />
            break;
            case BlockTypes.Statement:
            result = <StatementBlock question={question} 
                                    isActive={isActive}
                                    save={save}
                                    total={total}
                                    focus={focus}
                                    edit={edit} />
            break;
            case BlockTypes.Scheduler:
            result = <SchedulerBlock question={question} 
                                    isActive={isActive}
                                    save={save}
                                    total={total}
                                    focus={focus}
                                    edit={edit} />
            break;
            case BlockTypes.AddressLookup:
            result = <AddressLookupBlock question={question} 
                                    isActive={isActive}
                                    save={save}
                                    total={total}
                                    focus={focus}
                                    edit={edit} />
            break;
        }
        
        return result;
    }
