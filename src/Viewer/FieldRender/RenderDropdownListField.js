import React from 'react'
import DropdownList from 'react-widgets/lib/DropdownList'
export const RenderDropdownListField = ({ input, data, valueField, textField }) =>(
    <div className="form-dropdownlist">
    <DropdownList {...input}
        data={data}
        valueField={valueField}
        textField={textField}
        onChange={input.onChange} />
    </div>
)
