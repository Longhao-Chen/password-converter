import './App.css';
import React from 'react';
import copy from 'copy-to-clipboard';
import { Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faCopy, faBackspace, faCheck } from '@fortawesome/free-solid-svg-icons'
import Password from './Password';
import Key from './Key';
import { cover_clipboard } from './Security'

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			copied: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.cleanPassword = this.cleanPassword.bind(this);
		this.copyPassword = this.copyPassword.bind(this);
		this.inputRef = React.createRef();
	}

	handleChange(event) {
		this.setState({
			password: Password(event.target.value),
			value: event.target.value
		});
	}

	cleanPassword() {
		this.setState({
			value: '',
			password: ''
		});
		this.inputRef.current.focus();
	}

	copyPassword() {
		copy(this.state.password);
		this.setState({
			copied: true
		});

		//复制完成图标自动消失
		setTimeout(() => {
			this.setState({ copied: false })
		}, 2500);
		this.inputRef.current.focus();
	}

	render() {
		return <div className="container col-11 col-md-6 col-lg-5 col-xl-4">
			{/*键盘事件*/}
			<Key keyName={"Enter"} func={this.copyPassword} />	{/*Enter*/}
			<Key keyName={"c"} ctrlKey={true} func={this.copyPassword} />	{/*Ctrl+C*/}
			<Key keyName={"Backspace"} ctrlKey={true} func={this.cleanPassword} />	{/*Ctrl+Backspace*/}
			<Key keyName={"i"} altKey={true} func={
				() => { this.setState({ showInput: true ^ this.state.showInput }); }
			} />	{/*Alt+I*/}
			<Key keyName={"o"} altKey={true} func={
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
				<Button onClick={this.cleanPassword}>
					<FontAwesomeIcon icon={faBackspace} />
				</Button>
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
						() => {
							this.setState({ showOutput: true ^ this.state.showOutput });
							this.inputRef.current.focus();
						}
					} icon={this.state.showOutput ? faEyeSlash : faEye} />
				</span>
				<Button onClick={this.copyPassword}>
					<FontAwesomeIcon icon={this.state.copied ? faCheck : faCopy} />
				</Button>
				<Button variant="danger"
					disabled={this.state.cover ? 'disabled' : ''/*防止重复点击造成意外效果*/}
					onClick={
						() => {
							cover_clipboard();
							this.setState({ cover: true });
							setTimeout(() => {
								this.setState({ cover: false })
							}, 2500);
						}
					}>{this.state.cover ? '已覆盖完成' : '覆盖剪切板'}</Button>
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