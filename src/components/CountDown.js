import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

	const Completionist = () => <span>Started already</span>;
	const CountFrom = ({ days, hours, minutes,seconds, done }) => {
	    if (done) {
	        return <Completionist />;
	    } else {
	        // Render a countdown
	        var months = Math.floor(days/30);
	        days = days % 30;
	        return <span>{months} months {days} days {hours} hours  {minutes} minutes and {seconds} seconds</span>;
	    }
	};

export default class CountDown extends Component {
	    render(){
	        return(
	            <Countdown date={new Date('2020-04-01T10:00:00')}
	                renderer={CountFrom} />

	        )
    }
}
