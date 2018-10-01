import React, { Component } from 'react'


import {
  BlockType,
  BlockTypeName,
  BuildNewQuestionEditModel,
  BlockItem,renderValidateRules } from 'react-tb-form'


export default class App extends Component {
  buildBlockList(){
    let result = [];    
    result.push(BuildNewQuestionEditModel(BlockType[BlockTypeName.Statement], 0));
    result.push(BuildNewQuestionEditModel(BlockType[BlockTypeName.ShortText], 1));
    result.push(BuildNewQuestionEditModel(BlockType[BlockTypeName.LongText], 2));
    result.push(BuildNewQuestionEditModel(BlockType[BlockTypeName.MultipleChoice], 3));
    result.push(BuildNewQuestionEditModel(BlockType[BlockTypeName.YesNo], 4));
    result.push(BuildNewQuestionEditModel(BlockType[BlockTypeName.Rating], 5));
    result.push(BuildNewQuestionEditModel(BlockType[BlockTypeName.DropdownList], 6));
    result.push(BuildNewQuestionEditModel(BlockType[BlockTypeName.DateTimePicker], 7));
    result.push(BuildNewQuestionEditModel(BlockType[BlockTypeName.FileUpload], 8));
    result.push(BuildNewQuestionEditModel(BlockType[BlockTypeName.Scheduler], 9));
    result.push(BuildNewQuestionEditModel(BlockType[BlockTypeName.AddressLookup], 10));
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
