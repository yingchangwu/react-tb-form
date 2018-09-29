//@flow
import React from 'react'
import DropdownList from 'react-widgets/lib/DropdownList'
import type { FieldProps } from 'redux-form'

type DropdownFieldProps = {
    data: Array<{[key:string]:string}>,
    valueField: string,
    textField: string
} & FieldProps;

export const RenderDropdownListField = ({ input, data, valueField, textField } : DropdownFieldProps) =>(
    <div className="form-dropdownlist">
    <DropdownList {...input}
        data={data}
        valueField={valueField}
        textField={textField}
        onChange={input.onChange} />
    </div>
)
