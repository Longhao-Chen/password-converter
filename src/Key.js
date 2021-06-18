//键盘事件的处理
import React from 'react';

export default class Key extends React.Component {
	componentDidMount() {
		document.addEventListener("keydown", this.onKeyDown)
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.onKeyDown)
	}

	onKeyDown = (e) => {
		if (e.key.toLowerCase() === this.props.keyName.toLowerCase() &&	//不区分大小写
			!(e.ctrlKey ^ this.props.ctrlKey) &&
			!(e.shiftKey ^ this.props.shiftKey) &&
			!(e.altKey ^ this.props.altKey)) {
			this.props.func();
		}
	}

	render() {
		return ('');
	}
}

Key.defaultProps = {
	ctrlKey: false,
	shiftKey: false,
	altKey: false
}