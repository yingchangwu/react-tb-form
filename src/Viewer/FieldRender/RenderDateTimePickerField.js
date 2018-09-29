//@flow
import React from 'react'
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'

Moment.locale('en')
momentLocalizer()

type Props = {
    input: {
        onChange: Function,
        value?: string
    },
    showTime: boolean
}

export const RenderDateTimePickerField = ({ input: { onChange, value }, showTime }: Props) =>(
    <div className="form-datetimepicker">
    <DateTimePicker
    onChange={onChange}
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
    /></div>
)