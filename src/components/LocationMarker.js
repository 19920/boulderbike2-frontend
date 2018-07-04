import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
import LocationInfoWindow from './LocationInfoWindow';

export class LocationMarker extends Component {
  constructor(props) {
    super(props)

     this.state = {
      showTooltip: false,
      coordinates:[],
    }
  }

  clickTooltip() {
    this.setState({ showTooltip: !this.state.showTooltip })
  }

  closeWindow() {
    this.setState({ showTooltip: false })
  }
  render() {
    const {showTooltip} = this.state
    const {id,lat, lng, first_name, last_name} = this.props

    return(
      <Marker
        position={{
          lat: parseFloat(lat),
          lng: parseFloat(lng)
        }}
        onClick={this.clickTooltip.bind(this)}
        key={`marker${id}`}>

        {showTooltip && (
          <LocationInfoWindow key={`info${id}`}
            first_name={first_name}
            last_name={last_name}
             lat={lat}
             lng={lng}
            closeWindow={this.closeWindow.bind(this)}/>
        )}
     </Marker>
    );
  }
}

export default LocationMarker;
