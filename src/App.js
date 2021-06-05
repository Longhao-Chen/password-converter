import './App.css';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from 'react-bootstrap';
import Password from './Password';

class HelloMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.cleanPassword = this.cleanPassword.bind(this);
	}

	handleChange(event) {
		this.setState({
			password: Password(event.target.value),
			value: event.target.value,
			copied: false
		});
	}

	cleanPassword() {
		this.setState({
			value: '',
			password: '',
			copied: false
		});
	}

	render() {
		return <div>
			<p>在此输入您的密码：</p>
			<input autoFocus="autofocus" type="password" value={this.state.value} onChange={this.handleChange} />
			<Button variant="danger" onClick={this.cleanPassword}>清除密码</Button>
			<br />
			<p>转换后的密码：</p>
			<input readOnly="readonly" type="text" value={this.state.password} />

			<CopyToClipboard text={this.state.password}
				onCopy={() => this.setState({ copied: true })}>
				<Button>{this.state.copied ? "已复制" : "复制密码"}</Button>
			</CopyToClipboard>
		</div>;
	}
}

function App() {
	return (
		<div className="App">
			<h1>密码转换器</h1>
			<hr />
			<HelloMessage />
		</div>
	);
}

export default App;
