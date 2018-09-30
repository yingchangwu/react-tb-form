//@flow
import React from 'react'
import type { FieldProps } from 'redux-form'

type Props = {
    label: string,
    type:string
} & FieldProps;
export const RenderTextField = ({input, label,  meta:{touched,error}}:Props) =>(
    <div className="form-shorttext">
        <input className="shorttext-input" {...input} placeholder={label} type="text" />
        {touched && error && <span>{error}</span>}
    </div>
)




