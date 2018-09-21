import React from 'react'
import Multiselect from 'react-widgets/lib/Multiselect'
export class RenderMultiselectField extends React.Component{
    onBlur = () => this.props.input.onBlur();
    render(){
        const { input, data, valueField, textField } = this.props;
        return <div className="form-multiselect">
                <Multiselect {...input}
                                onBlur={this.onBlur}
                                value={input.value || []} // requires value to be an array
                                data={data}
                                valueField={valueField}
                                textField={textField}
                            />
        </div>    
    }
}
