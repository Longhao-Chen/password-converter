import './App.css';
import React from 'react';
import Password from './Password';

class HelloMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	render() {
		var value = this.state.value;
		return <div>
			<input type="password" value={value} onChange={this.handleChange} />
			<h4>{Password(value)}</h4>
		</div>;
	}
}

function App() {
	return (
		<div className="App">
			<h1>密码转换器</h1>
			<HelloMessage />
		</div>
	);
}

export default App;
