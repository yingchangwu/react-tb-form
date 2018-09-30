//@flow
import React from 'react'
import {Rating} from 'semantic-ui-react'
import type { FieldProps } from 'redux-form'
type Props = {
    defaultRating: number,
    maxRating: number
} & FieldProps;

export class RenderRatingField extends React.Component<Props>{

    handleRating = (e:SyntheticEvent<HTMLElement>, { rating, maxRating}:{rating:number,maxRating:number}) =>{
        this.props.input.onChange(rating);
    }
    render(){
        const {defaultRating,maxRating} = this.props;
        return <div className="form-rating">
            <Rating icon="star" defaultRating={defaultRating} maxRating={maxRating} onRate={this.handleRating} />
        </div> 
    }
}