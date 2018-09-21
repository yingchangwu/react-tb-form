import React from 'react' 
import PlacesAutocomplete,{
  geocodeByAddress,
  getLatLng,
}  from 'react-places-autocomplete'
import {Input} from 'semantic-ui-react'

import ReactDependentScript from "react-dependent-script"

const searchOptions = {
  componentRestrictions: { country: ['nz'] },
  types:['address']
};

export class RenderAutoCompleteAddress extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            address:''
        }
    }
    handleChange = address => {
      this.setState({ address });
    };
  
    handleSelect = address => {
        this.props.input.onChange(address);
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => this.handleLatLng(address,latLng))
        .catch(error => console.error('Error', error));
    };
    handleLatLng = (address,latLng) =>{
        console.log(address);
        console.log(latLng);
        const addressResult = {address:address,latLng:latLng};
        this.props.input.onChange(addressResult);
    }
    render(){
        return <div>
    <ReactDependentScript
      scripts={[
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyCIfAR_yv9QdX2PCucS0LklfbTWmN-dB20&libraries=places"
      ]}
    >
                        <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="location-search-wrapper">
            <Input
                {...getInputProps({
                    placeholder: 'Enter your address',
                    className: 'location-search-input',
                })}
             loading={loading} />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                ); 
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete> 
      </ReactDependentScript>
        </div>
    }
}