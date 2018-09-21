import React from 'react'
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'

Moment.locale('en')
momentLocalizer()

export const RenderDateTimePickerField = ({ input: { onChange, value }, showTime }) =>(
    <div className="form-datetimepicker">
    <DateTimePicker
    onChange={onChange}
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
    /></div>
)