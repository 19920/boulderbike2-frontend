import React, { Component } from 'react';
import {Table} from 'reactstrap'
import axios from 'axios';
import update from 'immutability-helper';
import AllRider from './AllRider';




class RidersContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      riders: [],
      editingRiderId: null
    }
  }
  componentDidMount(){
    axios.get('https://boulderbike-backend.herokuapp.com/api/v1/riders.json')
    .then(response => {
      console.log(response)
      this.setState({riders: response.data})
    })
    .catch(error => console.log(error))
  }
  addNewRider = () => {
    axios.post('https://boulderbike-backend.herokuapp.com/api/v1/riders',{rider: {first_name: '',last_name: '',city: '',state: '',lat:'',lng:''}})
    .then(response => {
      const riders = update(this.state.riders,{$splice: [[0,0, response.data]]})
      this.setState({riders: riders, editingRiderId: response.data.id})
    })
    .catch(error => console.log(error))

  }

  updateRider=(rider)=>{
    const riderIndex = this.state.riders.findIndex(x=>x.id=== rider.id)
    const riders = update(this.state.riders, {[riderIndex]: {$set: rider }})
    this.setState({riders: riders, notification: 'All changes saved'})

  }
  deleteRider=(id)=>{
    axios.delete(`https://boulderbike-backend.herokuapp.com/api/v1/riders/${id}`)
    .then(response => {
      const riderIndex = this.state.riders.findIndex(x => x.id === id)
      const riders = update(this.state.riders,{$splice: [[riderIndex,1]]})
      this.setState({riders: riders})
    })
    .catch(error => console.log(error))
  }

  enableEditing=(id)=>{
    this.setState({editingRiderId: id})

  }
  render() {
    return (
      <div className = "container-fluid">
          <h3 className="text-center page-header bg-info ">Riders</h3>
          <Table className ="table table-bordered table-hover table-condensed" id="rider">

            <thead>
              <tr className="text-primary bg-warning">
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
            {this.state.riders.map( (rider) => {
            return (
              <AllRider rider={rider} key={rider.id} />
            )}
          )}
           </tbody>
          </Table>
        </div>
    );
  }
}

export default RidersContainer;
