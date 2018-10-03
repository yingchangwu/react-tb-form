//@flow
import React, { Component } from 'react'


import {blocks,editor,models} from 'react-tb-form'

export default class App extends Component<{},{}> {
  buildBlockList(){
    let result = [];    
    result.push(models.CreateNewEditModel(blocks.BlockType[blocks.BlockTypeName.Statement], 0));
    result.push(models.CreateNewEditModel(blocks.BlockType[blocks.BlockTypeName.ShortText], 1));
    result.push(models.CreateNewEditModel(blocks.BlockType[blocks.BlockTypeName.LongText], 2));
    result.push(models.CreateNewEditModel(blocks.BlockType[blocks.BlockTypeName.MultipleChoice], 3));
    result.push(models.CreateNewEditModel(blocks.BlockType[blocks.BlockTypeName.YesNo], 4));
    result.push(models.CreateNewEditModel(blocks.BlockType[blocks.BlockTypeName.Rating], 5));
    result.push(models.CreateNewEditModel(blocks.BlockType[blocks.BlockTypeName.DropdownList], 6));
    result.push(models.CreateNewEditModel(blocks.BlockType[blocks.BlockTypeName.DateTimePicker], 7));
    result.push(models.CreateNewEditModel(blocks.BlockType[blocks.BlockTypeName.FileUpload], 8));
    result.push(models.CreateNewEditModel(blocks.BlockType[blocks.BlockTypeName.Scheduler], 9));
    result.push(models.CreateNewEditModel(blocks.BlockType[blocks.BlockTypeName.AddressLookup], "hello"));
    return result;
  }
  save = () =>{
    console.log('saved')
  }
  focus = () =>{
    console.log('focused')
  }
  render () {
    const blist = this.buildBlockList();
    return (
      <div>
        {
          blist.map((bitem,key)=>{
            return <blocks.BlockItem question={bitem} key={key} isActive={true} save={this.save}  />
          })
        }
      </div>
    )
  }
}
