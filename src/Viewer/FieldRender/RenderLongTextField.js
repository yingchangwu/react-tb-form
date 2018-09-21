import React from 'react'
export const RenderLongTextField = ({input, label, type, meta:{touched,error}}) =>(
    <div className="form-longtext">
        <label>{label}</label>
        <div>
            <textarea {...input} placeholder={label} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)