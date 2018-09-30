//@flow
import React from 'react'


import type { FieldProps } from 'redux-form'

type Props = {
    label: string,
    type:string
} & FieldProps;

export const RenderLongTextField = ({input, label, type, meta:{touched,error}}:Props) =>(
    <div className="form-longtext">
        <label>{label}</label>
        <div>
            <textarea {...input} placeholder={label} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)