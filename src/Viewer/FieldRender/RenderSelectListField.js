import React from 'react'
import SelectList from 'react-widgets/lib/SelectList'
export class RenderSelectListField extends React.Component{
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