import React, { Component } from 'react';
import './Home.css';
import CountDown from './CountDown';
import Footer from'./Footer';


class Home extends Component {
  render() {
    return (
         <div className="cover">
             <div id="HomePage">
                        <div className="col-lg-7 align-self-center text-lg-center  text-center " id ="page">
                            <h3 className="mb-0 mt-4 name">Rocky Mountains, Colorado</h3>
                            <p className="mb-5 lead date">First April 2020</p>
                            <h1><strong>starts in:</strong></h1>
                             <CountDown />
                        </div>
                        </div>
             </div>

        )

  }
}
export default Home;
