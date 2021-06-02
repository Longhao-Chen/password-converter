import './App.css';
import React from 'react';
import Password from './Password';

class HelloMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
		this.handleChange = this.handleChange.bind(this);
		this.cleanPassword = this.cleanPassword.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	cleanPassword() {
		this.setState({ value: '' });
	}
	render() {
		var value = this.state.value;
		return <div>
			<p>在此输入您的密码：</p>
			<input autofocus="autofocus" type="password" value={value} onChange={this.handleChange} />
			<button onClick={this.cleanPassword}>清除密码</button>
			<br />
			<p>转换后的密码：</p>
			<input readonly="readonly" type="text" value={Password(value)}  />
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
