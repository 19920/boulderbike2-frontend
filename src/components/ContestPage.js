import React from 'react';
import ContestForm from './ContestForm';
import './Contestpage.css';
import Footer from './Footer';

export default class ContestPage extends React.Component {
    render() {
        return (
             <div className ="contestpage container jumbotron ">

                <div className="container-fluid">

                    <ContestForm />

                    </div>

              <fieldset >
                <legend className="text-warning">Important:</legend>
                  <p>Our Riders knows well that their relationship with their sponsor does not end once they have banked their cash.
                     And how much you appreciate it.</p>

                  <p>The start and finish of this is, of course, saying thank you.It should be the start of an ongoing exchange.
                     An important part of this will be keeping their sponsor informed of how well their money is being spent..<br/>
                  </p>

              </fieldset>

            </div>
        );
    }
}
