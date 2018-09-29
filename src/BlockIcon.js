import React from "react";
import{ ShortText,LongText,YesNo,MultipleChoice,Rating,DropdownList,FileUpload,DatePicker,Statement,Scheduler} from 'react-tb-icons'
import {BlockTypes} from './BlockType'
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

export class BlockIcon extends React.PureComponent {
  renderIcon(type){
    switch(type){
      case BlockTypes.ShortText:
        return <ShortText />
      case BlockTypes.LongText:
        return <LongText />
      case BlockTypes.YesNo:
        return <YesNo />
      case BlockTypes.MultipleChoice:
        return <MultipleChoice />
      case BlockTypes.DropdownList:
        return <DropdownList />
      case BlockTypes.FileUpload:
        return <FileUpload />
      case BlockTypes.Rating:
        return <Rating />
      case BlockTypes.DateTimePicker:
        return <DatePicker />
      case BlockTypes.Statement:
        return <Statement />
        case BlockTypes.Scheduler:
          return <Scheduler />
      default:
        return <ShortText />
    }
  }
  setBlockStyle(type,order,size){
    if(order){
      switch(type){
        case BlockTypes.ShortText:
          return {...styles.blockSvgOrderedIcon, ...styles.shortText}
        case BlockTypes.LongText:
          return {...styles.blockSvgOrderedIcon, ...styles.longText}
        case BlockTypes.YesNo:
          return {...styles.blockSvgOrderedIcon, ...styles.yesNo}
        case BlockTypes.MultipleChoice:
          return {...styles.blockSvgOrderedIcon, ...styles.choice}
        case BlockTypes.Rating:
          return {...styles.blockSvgOrderedIcon, ...styles.rating}
        case BlockTypes.DropdownList:
          return {...styles.blockSvgOrderedIcon, ...styles.dropdownList}
        case BlockTypes.DatePicker:
          return {...styles.blockSvgOrderedIcon, ...styles.datetimePicker}
        case BlockTypes.FileUpload:
          return {...styles.blockSvgOrderedIcon, ...styles.fileUpload}
        case BlockTypes.Statement:
          return {...styles.blockSvgOrderedIcon, ...styles.statement}
        case BlockTypes.Scheduler:
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
        case BlockTypes.ShortText:
          return {...styles.blockSvgIcon, ...sizeStyle, ...styles.shortText}
        case BlockTypes.LongText:
          return {...styles.blockSvgIcon, ...sizeStyle, ...styles.longText}
        case BlockTypes.YesNo:
          return {...styles.blockSvgIcon, ...sizeStyle, ...styles.yesNo}
        case BlockTypes.MultipleChoice:
          return {...styles.blockSvgIcon, ...sizeStyle, ...styles.choice}
        case BlockTypes.Rating:
          return {...styles.blockSvgIcon, ...sizeStyle, ...styles.rating}
        case BlockTypes.DropdownList:
          return {...styles.blockSvgIcon, ...sizeStyle, ...styles.dropdownList}
        case BlockTypes.DateTimePicker:
          return {...styles.blockSvgIcon, ...sizeStyle, ...styles.datetimePicker}
        case BlockTypes.FileUpload:
          return {...styles.blockSvgIcon, ...sizeStyle, ...styles.fileUpload}
        case BlockTypes.Statement:
          return {...styles.blockSvgOrderedIcon, ...sizeStyle, ...styles.statement}
        case BlockTypes.Scheduler:
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
