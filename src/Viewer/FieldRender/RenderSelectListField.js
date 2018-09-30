//@flow
import React from 'react'
import SelectList from 'react-widgets/lib/SelectList'
import type { FieldProps } from 'redux-form'
type Props = {
    multiple: boolean,
    data: Array<any>
} & FieldProps;
export class RenderSelectListField extends React.Component<Props>{
    onBlur = () => this.props.input.onBlur();
    render(){
        const {input, data, multiple= true } = this.props;
        return  <div className="form-selectlist">
            <SelectList {...input}
                    onBlur={this.onBlur}
                    multiple={multiple}
                    data={data} />
        </div>  
    }
}