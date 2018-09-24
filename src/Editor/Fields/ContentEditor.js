import React from 'react';

export class ContentEditor extends React.Component{
    state = {
        editing: false
    }

    toggleEdit = (e) =>{
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
                this.placeCursorAtEnd(this.domElm);
                this.props.edit(true);
        });  
    }

    placeCursorAtEnd(el){
        el.focus();
        if (typeof window.getSelection != "undefined"
                && typeof document.createRange != "undefined") {
            let range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            let sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.body.createTextRange != "undefined") {
            let textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(false);
            textRange.select();
        }
    }

    save = () => {
        this.setState({
            editing:false
        }, () => {
            if(this.props.onSave){
                this.props.edit(false);
                if(this.isValueChanged()){
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
  
    isValueChanged = () => {
    return this.props.value !== this.domElm.textContent
    };
  
    handleKeyDown = (e) => {
        const { key } = e;
        switch (key) {
            case 'Enter':
            case 'Escape':
            this.save();
            break;
        }
    };
    getClassName() {
        var placeholder = this.props.value === "" ? "comPlainTextContentEditable--has-placeholder" : "";
        var editing = this.state.editing ? "editing" : "";
        return `comPlainTextContentEditable ${placeholder} ${editing} ${this.props.className}`;
      }
    render() {
        const { className, onSave, edit, restProps } = this.props;

        const { editing } = this.state;

        return (
          <div suppressContentEditableWarning="true"
            className={this.getClassName()}
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