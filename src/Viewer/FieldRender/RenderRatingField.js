import React from 'react'
import {Rating} from 'semantic-ui-react'
export class RenderRatingField extends React.Component{

    handleRating = (e, { rating, maxRating }) =>{
        this.props.input.onChange(rating);
    }
    render(){
        const {defaultRating,maxRating} = this.props;
        return <div className="form-rating">
            <Rating icon="star" defaultRating={defaultRating} maxRating={maxRating} onRate={this.handleRating} />
        </div> 
    }
}