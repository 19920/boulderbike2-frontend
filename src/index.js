import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Location from './components/Location';
import ContestPage from './components/ContestPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery'
import {BrowserRouter,Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<div className ="container-fluid">
		   <div>
			<Header />
			</div>
			<Route>
			<div>
			<Route path ='/App'component={App} />
			<Route exact component={Home} path ='/' />
			<Route path ='/Home'component={Home} />
			<Route path ='/Location'component={Location} />
			<Route path ='/ContestPage'component={ContestPage} />
			<Route path ='/Gallery'component={Gallery} />
			<div>
				<Footer />
			</div>

			</div>
			</Route>

		</div>
	</BrowserRouter>,
	document.getElementById('root'));
registerServiceWorker();
