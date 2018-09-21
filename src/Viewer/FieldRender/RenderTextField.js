import React from 'react'

export const RenderTextField = ({input, label,  meta:{touched,error}}) =>(
    <div className="form-shorttext">
        <input className="shorttext-input" {...input} placeholder={label} type="text" />
        {touched && error && <span>{error}</span>}
    </div>
)




