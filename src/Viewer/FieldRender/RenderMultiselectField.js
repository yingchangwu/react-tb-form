//@flow
import React from 'react'
import Multiselect from 'react-widgets/lib/Multiselect'
import type { FieldProps } from 'redux-form'
type Props = {
    data: Array<any>,
    valueField: string,
    textField:string
} & FieldProps;

export class RenderMultiselectField extends React.Component<Props>{
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
