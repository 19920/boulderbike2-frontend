import React, { Component } from 'react';

import RidersContainer from './RidersContainer';
import Footer from './Footer';
import  './RidersContainer.css';

export default class Riders extends Component {
    render(){
        return(
          <div className="container-fluid">

            <div className="row">

              <RidersContainer />
            </div>


          </div>
        )
    }

}
