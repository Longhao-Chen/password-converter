import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Security from './Security';
import Footer from './Footer';

ReactDOM.render(
	<React.StrictMode>
		<App />
		<Security />
		<Footer />
	</React.StrictMode>,
	document.getElementById('root')
);