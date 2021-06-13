import './App.css';
import React from 'react';
import copy from 'copy-to-clipboard';
import { Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Password from './Password';
import Key from './Key';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.cleanPassword = this.cleanPassword.bind(this);
		this.copyPassword = this.copyPassword.bind(this);
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

	copyPassword() {
		copy(this.state.password, {
			message: ''
		});
		this.setState({ copied: true });
	}

	render() {
		return <div className="container col-11 col-md-6 col-lg-5 col-xl-4">
			{/*键盘事件*/}
			<Key keyCode={13} func={this.copyPassword} />	{/*Enter*/}
			<Key keyCode={67} ctrlKey={true} func={this.copyPassword} />	{/*Ctrl+C*/}
			<Key keyCode={8} ctrlKey={true} func={this.cleanPassword} />	{/*Ctrl+Backspace*/}
			<Key keyCode={73} altKey={true} func={
				() => { this.setState({ showInput: true ^ this.state.showInput }); }
			} />	{/*Alt+I*/}
			<Key keyCode={79} altKey={true} func={
				() => { this.setState({ showOutput: true ^ this.state.showOutput }); }
			} />	{/*Alt+O*/}
			<InputGroup>
				<input placeholder="在此输入您的密码"
					autoFocus="autofocus"
					className="form-control"
					type={this.state.showInput ? "text" : "password"}
					value={this.state.value}
					onChange={this.handleChange}
					ref={this.inputRef} />
				<span className="input-group-text">
					<FontAwesomeIcon onClick={
						() => {
							this.setState({ showInput: true ^ this.state.showInput });
							this.inputRef.current.focus();
						}
					} icon={this.state.showInput ? faEyeSlash : faEye} />
				</span>
				<Button variant="danger" onClick={this.cleanPassword}>清除</Button>
			</InputGroup>
			<hr />

			<h6>转换后的密码为：</h6>
			<InputGroup>
				<input placeholder="转换后的密码"
					readOnly="readonly"
					className="form-control"
					type={this.state.showOutput ? "text" : "password"}
					value={this.state.password} />
				<span className="input-group-text">
					<FontAwesomeIcon onClick={
						() => this.setState({ showOutput: true ^ this.state.showOutput })
					} icon={this.state.showOutput ? faEyeSlash : faEye} />
				</span>
				<Button onClick={this.copyPassword} >{this.state.copied ? "已复制" : "复制"}</Button>
			</InputGroup>
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