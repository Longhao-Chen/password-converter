import './App.css';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Password from './Password';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.cleanPassword = this.cleanPassword.bind(this);
		this.inputRef = React.createRef();
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
		this.inputRef.current.focus();
	}

	render() {
		return <div>
			<p>在此输入您的密码：</p>
			<input autoFocus="autofocus" type={this.state.showInput?"text":"password"} value={this.state.value} onChange={this.handleChange} ref={this.inputRef} />
			<FontAwesomeIcon onClick={
				() => this.setState({ showInput: true ^ this.state.showInput })
			} icon={this.state.showInput?faEyeSlash:faEye} />

			<Button variant="danger" onClick={this.cleanPassword}>清除</Button>
			<br />

			<p>转换后的密码：</p>
			<input readOnly="readonly" type={this.state.showOutput?"text":"password"} value={this.state.password} />
			<FontAwesomeIcon onClick={
				() => this.setState({ showOutput: true ^ this.state.showOutput })
			} icon={this.state.showOutput?faEyeSlash:faEye} />

			<CopyToClipboard text={this.state.password}
				onCopy={() => this.setState({ copied: true })}>
				<Button>{this.state.copied ? "已复制" : "复制"}</Button>
			</CopyToClipboard>
		</div>;
	}
}

function App() {
	return (
		<div className="App">
			<h1>密码转换器</h1>
			<hr />
			<Main />
		</div>
	);
}

export default App;