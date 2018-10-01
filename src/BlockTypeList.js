//@flow
import React from 'react'
import {BlockType} from './BlockType'
import {BlockIcon} from './BlockIcon'


export const BlockTypeList = () =>{
    let options = [];
    const keys = BlockType.keys();
    keys.forEach(function(blockKey){
        const item = BlockType[blockKey];
        const text = <div className="draggable-block-content">
        <BlockIcon type={item} size="small"/><span className="draggable-block-text">{item.description}</span></div>
        const value = item.value;
        options.push({key: blockKey, value:value, text:text});
    });
    return options;
}