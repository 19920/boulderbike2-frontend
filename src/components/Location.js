import React, { Component } from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import LocationMarker from './LocationMarker';
import axios from 'axios';
import Footer from './Footer';
import  './RidersContainer.css';

const LocationMap = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{ lat: 39.95, lng: -105.34 }}
    defaultZoom={props.zoom}>
    {props.locations}
  </GoogleMap>
));

class Location extends Component {
  constructor(props) {
    super(props)

    this.zoom = 11

    this.state = {

      coordinates:[]
    };
  }
  componentDidMount(){
    axios.get('https://boulderbike-backend.herokuapp.com/api/v1/riders.json')
    .then(response => {
      console.log(response)
      this.setState({coordinates: response.data})
    })
    .catch(error => console.log(error))
  }
  render() {
    const {coordinates} = this.state;
    return(
      <div className="container-fluid">
        <h2 className="text-center">Location</h2>

        <h3 className="text-center page-header">See where your favorits are right now</h3>

      <div style={{width: `750px`, height: `750px`}}>

        <LocationMap
          locations={coordinates.map(coordinate =>(<LocationMarker lat={coordinate.lat} lng={coordinate.lng} first_name={coordinate.first_name} last_name={coordinate.last_name} />))}
          zoom={this.zoom}
          containerElement={
            <div style={{ height: `100%`,width: `1400px` }} />
          }
          mapElement={
            <div style={{ height: `100%`,width: `100%`}} />
          }
          loadingElement={
            <div style={{ height: `100%` }} />
            }
        />
    </div>
        </div>
    );
  }
}
export default Location;
