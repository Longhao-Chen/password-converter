import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Security from './Security';
import Footer from './Footer';
import Dark from './dark';

ReactDOM.render(
	<React.StrictMode>
		<div id="title">
			<h1 id="title-title">Password-converter</h1>
			<span id="title-Dark"><Dark /></span>
		</div>
		<hr />
		<App />
		<Security />
		<Footer />
	</React.StrictMode>,
	document.getElementById('root')
);