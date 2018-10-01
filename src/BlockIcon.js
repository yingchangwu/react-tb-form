//@flow
import React from "react";
import{ ShortText,LongText,YesNo,MultipleChoice,Rating,DropdownList,FileUpload,DatePicker,Statement,Scheduler} from 'react-tb-icons'
import {BlockType,BlockTypeName} from './BlockType'
import { EnumSymbol } from "./Enum";
const styles={
  blockSvgOrderedIcon:{
    width:'52px',
    display:'inline-flex',
    alignItems:'center',
    height:'24px',
    borderRadius:'2px',
    padding:'0 6px',
    cursor:'pointer',
    justifyContent: 'center'
  },
  blockSvgIcon:{
    display:'inline-flex',
    alignItems:'center',
    borderRadius:'2px',
    padding:'0 6px',
    cursor:'pointer',
    justifyContent: 'center'
  },
  tiny:{
    height:'24px',
    width:'24px',
  },
  small:{
    height:'32px',
    width:'32px',
  },
  shortText:{
    backgroundColor:'#E4BA3F'
  },
  longText:{
    backgroundColor:'#CB732B'
  },
  yesNo:{
    backgroundColor:'#C75875'
  },
  choice:{
    backgroundColor:'#76AEBD'
  },
  rating:{
    backgroundColor:'#D0A463'
  },
  dropdownList:{
    backgroundColor:'#76AEBD'
  },
  fileUpload:{
    backgroundColor:'#8093A6'
  },
  datetimePicker:{
    backgroundColor:'#EF8A78'
  },
  statement:{
    backgroundColor:'#D8F0C4'
  },
  scheduler:{
    backgroundColor: '#EF8A78'
  },
  blockIconText:{
    color: '#fff',
    fontSize:'11px',
    lineHeight:'16px',
    fontWeight:'700',
    display:'block',
    cursor:'pointer',
    paddingLeft: '10px'
  }
}

type Props = {
  order? :number;
  type: EnumSymbol,
  size?: 'small' | "tiny"
}

export class BlockIcon extends React.PureComponent<Props> {
  renderIcon(type:EnumSymbol){
    switch(type){
      case BlockType[BlockTypeName.ShortText]:
        return <ShortText />
      case BlockType[BlockTypeName.LongText]:
        return <LongText />
      case BlockType[BlockTypeName.YesNo]:
        return <YesNo />
      case BlockType[BlockTypeName.MultipleChoice]:
        return <MultipleChoice />
      case BlockType[BlockTypeName.DropdownList]:
        return <DropdownList />
      case BlockType[BlockTypeName.FileUpload]:
        return <FileUpload />
      case BlockType[BlockTypeName.Rating]:
        return <Rating />
      case BlockType[BlockTypeName.DateTimePicker]:
        return <DatePicker />
      case BlockType[BlockTypeName.Statement]:
        return <Statement />
        case BlockType[BlockTypeName.Scheduler]:
          return <Scheduler />
      default:
        return <ShortText />
    }
  }
  setBlockStyle(type:EnumSymbol,order?:number,size?:'small'|'tiny'){
    if(order){
      switch(type){
        case BlockType[BlockTypeName.ShortText]:
          return {...styles.blockSvgOrderedIcon, ...styles.shortText}
        case BlockType[BlockTypeName.LongText]:
          return {...styles.blockSvgOrderedIcon, ...styles.longText}
        case BlockType[BlockTypeName.YesNo]:
          return {...styles.blockSvgOrderedIcon, ...styles.yesNo}
        case BlockType[BlockTypeName.MultipleChoice]:
          return {...styles.blockSvgOrderedIcon, ...styles.choice}
        case BlockType[BlockTypeName.Rating]:
          return {...styles.blockSvgOrderedIcon, ...styles.rating}
        case BlockType[BlockTypeName.DropdownList]:
          return {...styles.blockSvgOrderedIcon, ...styles.dropdownList}
        case BlockType["DatePicker"]:
          return {...styles.blockSvgOrderedIcon, ...styles.datetimePicker}
        case BlockType[BlockTypeName.FileUpload]:
          return {...styles.blockSvgOrderedIcon, ...styles.fileUpload}
        case BlockType[BlockTypeName.Statement]:
          return {...styles.blockSvgOrderedIcon, ...styles.statement}
        case BlockType[BlockTypeName.Scheduler]:
          return {...styles.blockSvgOrderedIcon, ...styles.scheduler}
        default:
          return {...styles.blockSvgOrderedIcon, ...styles.shortText}
      }
    }else{
      let sizeStyle = styles.tiny;
      switch(size){
        case 'small':
          sizeStyle = styles.small;
          break;
        default:
          sizeStyle = styles.tiny;
      }

      switch(type){
        case BlockType[BlockTypeName.ShortText]:
          return {...styles.blockSvgIcon, ...sizeStyle, ...styles.shortText}
        case BlockType[BlockTypeName.LongText]:
          return {...styles.blockSvgIcon, ...sizeStyle, ...styles.longText}
        case BlockType[BlockTypeName.YesNo]:
          return {...styles.blockSvgIcon, ...sizeStyle, ...styles.yesNo}
        case BlockType[BlockTypeName.MultipleChoice]:
          return {...styles.blockSvgIcon, ...sizeStyle, ...styles.choice}
        case BlockType[BlockTypeName.Rating]:
          return {...styles.blockSvgIcon, ...sizeStyle, ...styles.rating}
        case BlockType[BlockTypeName.DropdownList]:
          return {...styles.blockSvgIcon, ...sizeStyle, ...styles.dropdownList}
        case BlockType[BlockTypeName.DateTimePicker]:
          return {...styles.blockSvgIcon, ...sizeStyle, ...styles.datetimePicker}
        case BlockType[BlockTypeName.FileUpload]:
          return {...styles.blockSvgIcon, ...sizeStyle, ...styles.fileUpload}
        case BlockType[BlockTypeName.Statement]:
          return {...styles.blockSvgOrderedIcon, ...sizeStyle, ...styles.statement}
        case BlockType[BlockTypeName.Scheduler]:
          return {...styles.blockSvgOrderedIcon, ...sizeStyle, ...styles.scheduler}
        default:
          return {...styles.blockSvgIcon, ...sizeStyle, ...styles.shortText}
      }
    }
  }
  render() {
    const { order, type,size } = this.props;
    const blockStyle = this.setBlockStyle(type,order,size);
    return <div style={blockStyle}>
      <div className="blockIcon">
        <span className="SVGInline">
          {this.renderIcon(type)}
        </span>    
      </div>
      {
        order  && <div style={styles.blockIconText}>{order}</div>
      }
    </div>
  }
}
