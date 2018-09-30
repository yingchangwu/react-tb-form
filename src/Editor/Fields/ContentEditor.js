//@flow
import React from 'react';
import type { FormProps } from 'redux-form'

type Props = {
    className: string,
    onSave:(value:string) => void, 
    edit:(edit:boolean) =>void,
    placeholder:string,
    value: string
} & FormProps;

type State = {
    editing:boolean
}

export class ContentEditor extends React.Component<Props,State>{
    state = {
        editing: false
    }

    toggleEdit = (e:SyntheticEvent<HTMLDivElement>) =>{
        e.stopPropagation();
        if(this.state.editing){
            this.cancel();
        }else{
            this.edit();
        }
    }

    edit = () =>{
        const currentEditingStatus = this.state.editing;
        this.setState({
            editing: true
        }, () =>{
            if(!currentEditingStatus)
                //this.placeCursorAtEnd(this.domElm);
                this.props.edit(true);
        });  
    }
    // placeCursorAtEnd(el:?HTMLDivElement){
    //     if(el != null){
    //         el.focus();
    //         if (typeof window.getSelection != "undefined"
    //                 && typeof document.createRange != "undefined") {
    //             let range = document.createRange();
    //             range.selectNodeContents(el);
    //             range.collapse(false);
    //             let sel = window.getSelection();
    //             sel.removeAllRanges();
    //             sel.addRange(range);
    //         } else if (document.body != null && typeof document.body.createTextRange != "undefined") {
    //             let textRange = document.body.createTextRange();
    //             textRange.moveToElementText(el);
    //             textRange.collapse(false);
    //             textRange.select();
    //         }
    //     }

    // }

    save = () => {
        this.setState({
            editing:false
        }, () => {
            if(this.props.onSave){
                this.props.edit(false);
                if(this.isValueChanged() && this.domElm != null){
                    this.props.onSave(this.domElm.textContent);
                }
            }
        })
    }

    cancel = () => {
        this.setState({
          editing: false
        },()=>{
            this.props.edit(false);
        });
      };
  
    isValueChanged = ():boolean => {
        if(this.domElm != null){
            return this.props.value !== this.domElm.textContent
        }
        return false;
    };
  
    handleKeyDown = (e:SyntheticKeyboardEvent<HTMLDivElement>) => {
        const { key } = e;
        switch (key) {
            case 'Enter':
            case 'Escape':
            this.save();
            break;
        }
    };

    domElm : ?HTMLDivElement

    render() {
        const { className, onSave, edit, ...restProps } = this.props;
        const { editing } = this.state;
        var editingStyle = editing ? "editing" : "";
        return (
          <div suppressContentEditableWarning="true"
            className={`plainTextContentEditable  ${editingStyle} parentClassName`}
            onClick={this.edit}
            contentEditable={editing}
            ref={(domNode) => {
              this.domElm = domNode;
            }}
            placeholder={this.props.placeholder}
            onBlur={this.save}
            onKeyDown={this.handleKeyDown}
            {...restProps}
        >
          {this.props.value}
        </div>
        )
      }

}