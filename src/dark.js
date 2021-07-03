//暗主题
import Config from './config'
import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

class Dark extends React.Component {
	constructor(props) {
		super(props);
		this.config = new Config('dark', 'light');
		this.state = {
			mode: this.config.read()
		};
		this.setMode = this.setMode.bind(this);
		this.setDark = this.setDark.bind(this);
		this.setDark();
	}

	setMode(mode) {
		this.setState({
			mode: mode
		});
		this.config.write(mode);
		this.setDark(mode);	//state更新似乎需要一定时间，如果调用setDark()将读取到未修改前的值
	}

	setDark() {
		this.setDark(this.state.mode);
	}

	setDark(mode) {
		if (mode === 'dark') {
			document.getElementById('body').className = 'text-light bg-dark';
		} else if (mode === 'light') {
			document.getElementById('body').className = '';
		} else {
			this.setMode('light');
		}
	}

	render() {
		return (
			<Button onClick={() => {
				if (this.state.mode === 'dark')
					this.setMode('light');
				else
					this.setMode('dark');
			}}
				variant={(this.state.mode === 'dark') ? 'dark' : 'light'}
			>
				<FontAwesomeIcon icon={(this.state.mode === 'dark') ? faMoon : faSun} />
			</Button>
		);
	}
}

export default Dark;