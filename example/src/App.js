import React, { Component } from 'react'


import {
  BlockTypes,
  BuildNewQuestionEditModel,
  BlockItem,renderValidateRules } from 'react-tb-form'


export default class App extends Component {
  buildBlockList(){
    let result = [];
    result.push(BuildNewQuestionEditModel(BlockTypes.LongText, 1));
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
