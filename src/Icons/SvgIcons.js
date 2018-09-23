import React from 'react'
import ShortTextSvg from './short-text.svg'
import LongTextSvg from './long-text.svg'

export const ShortText = () => {
    return <ShortTextSvg />;
}

export const YesNo = () => {
    return (
        <svg  className="SVGInline-svg" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14zM7 2a5 5 0 1 0 0 10V2z" fillRule="evenodd" /></svg>
    );
}
export const MultipleChoice = () => {
    return <svg className="SVGInline-svg" width="14" height="11" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.707 4.293L.293 5.707 5 10.414l8.707-8.707L12.293.293 5 7.586z" fillRule="nonzero" /></svg>
}
export const LongText = () => {
    return <LongTextSvg />
}

export const Rating = () => {
    return    <svg className="SVGInline-svg" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 9.972L2.674 13l1.613-4.953L0 4.966l5.323-.033L7 0l1.677 4.933L14 4.966l-4.287 3.08L11.326 13z" /></svg>
}

export const DropdownList = () => {
    return    <svg className="SVGInline-svg" width="12" height="8" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.707.293L.293 1.707 6 7.414l5.707-5.707L10.293.293 6 4.586z" fillRule="nonzero" /></svg>
}

export const DateTimePicker = () => {
    return  <svg className="SVGInline-svg" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V0h2v2h6V0h2v2zM2 6v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6H2z" fillRule="evenodd" /></svg>
}

export const FileUpload = () => {
    return  <svg className="SVGInline-svg" width="14" height="12" xmlns="http://www.w3.org/2000/svg">
    <g fillRule="evenodd">
    <path d="M0 3h13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3zM1 0h4a1 1 0 0 1 1 1v1H0V1a1 1 0 0 1 1-1z" /></g></svg>
}

export const Statement = () => {
    return  <svg className="SVGInline-svg" width="14" height="12" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.586 5L3.293 2.707l1.414-1.414L9.414 6l-4.707 4.707-1.414-1.414L5.586 7H0V5h5.586zM10 0h4v12h-4V0z" fillRule="evenodd" />></svg>
}

export const Scheduler = () => {
    return  <svg className="SVGInline-svg" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 2h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V0h2v2h6V0h2v2zM2 6v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6H2z" fillRule="evenodd" /></svg>
}
