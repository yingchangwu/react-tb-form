import React, { Component } from 'react'


import {
  BlockTypes,
  BuildNewQuestionEditModel,
  BlockItem,renderValidateRules } from 'react-tb-form'


export default class App extends Component {
  buildBlockList(){
    let result = [];    
    result.push(BuildNewQuestionEditModel(BlockTypes.Statement, 0));
    result.push(BuildNewQuestionEditModel(BlockTypes.ShortText, 1));
    result.push(BuildNewQuestionEditModel(BlockTypes.LongText, 2));
    result.push(BuildNewQuestionEditModel(BlockTypes.MultipleChoice, 3));
    result.push(BuildNewQuestionEditModel(BlockTypes.YesNo, 4));
    result.push(BuildNewQuestionEditModel(BlockTypes.Rating, 5));
    result.push(BuildNewQuestionEditModel(BlockTypes.DropdownList, 6));
    result.push(BuildNewQuestionEditModel(BlockTypes.DateTimePicker, 7));
    result.push(BuildNewQuestionEditModel(BlockTypes.FileUpload, 8));
    result.push(BuildNewQuestionEditModel(BlockTypes.Scheduler, 9));
    result.push(BuildNewQuestionEditModel(BlockTypes.AddressLookup, 10));
    return result;
  }
  render () {
    const blocks = this.buildBlockList();
    return (
      <div>
        {
          blocks.map(block=>{
            return <BlockItem question={block} />
          })
        }
      </div>
    )
  }
}
