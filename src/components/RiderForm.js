import React, { Component } from 'react';
import axios from 'axios'

class RiderForm extends Component {
  constructor(props){
    super(props)
    this.state ={
      first_name: this.props.rider.first_name,
      last_name: this.props.rider.last_name,
      city: this.props.rider.city,
      state: this.props.rider.state,
      lat: this.props.rider.lat,
      lng: this.props.rider.lng

    }
  }
  handleInput = (e) => {this.setState({[e.target.name]: e.target.value})}

  handleBlur =() =>{
    const rider = {first_name: this.state.first_name,last_name: this.state.last_name,city: this.state.city,state: this.state.state,lat: this.state.lat,lng: this.state.lng }
    axios.put(
      `https://boulderbike-backend.herokuapp.com/api/v1/riders/${this.props.rider.id}`,
      {rider: rider})
    .then(response=>{
      this.props.updateRider(response.data)
    })
    .catch(error => console.log(error))
  }
  render() {
    return (
       <div className ="tile">
        <form onBlur ={this.handleBlur}>
          <div className="form-group form-control">
          <input className ="input" type ="text" name = "first_name" placeholder ="first_name" value={this.state.first_name} onChange ={this.handleInput} />
          <input className ="input" type ="text" name = "last_name" placeholder ="last_name" value={this.state.last_name} onChange ={this.handleInput} />
          <input className ="input" type ="text" name = "city" placeholder ="City" value={this.state.city} onChange ={this.handleInput}/>
          <input className ="input" type ="text" name = "state" placeholder ="State" value={this.state.state} onChange ={this.handleInput}/>
          <input className ="input" type ="float" name = "lat" placeholder ="Latitude" value={this.state.lat} onChange ={this.handleInput}/>
          <input className ="input" type ="float" name = "lng" placeholder ="Longitude" value={this.state.lng} onChange ={this.handleInput}/>
          </div>
        </form>
       </div>
    );
  }
}

export default RiderForm ;
