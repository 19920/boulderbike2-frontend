import  React, {Component} from 'react';
import './Images.css';

export default class Images extends Component {
  render(){
    return(
      <div className="container-fluid column ">

        <img className="jumbotron p-2" src={this.props.url} alt="" />
      </div>

  )
}
}
