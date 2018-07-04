import React, { Component } from 'react'
import { InfoWindow } from 'react-google-maps'

export class LocationInfoWindow extends Component {
  render() {
    const {first_name, last_name} = this.props

    return(
      <InfoWindow onCloseClick={this.props.closeWindow}>
        <div className="bg-dark text-light">
          <h1><strong>{first_name}</strong></h1>
          <h2><strong>{last_name}</strong></h2>
        </div>
      </InfoWindow>
    );
  }
}

export default LocationInfoWindow
