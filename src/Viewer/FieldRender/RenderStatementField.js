//@flow
import React from 'react'
import type { FieldProps } from 'redux-form'
type Props = {
    text: string,
    description:string
} & FieldProps;
export const RenderStatementField = ({text,description,input}:Props) =>(
    <div className="form-statement">
        <h1>{text}</h1>
        <h3>{description}</h3>
    </div>
)




