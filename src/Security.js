import React from 'react';
import copy from 'copy-to-clipboard';
import Password from './Password';
import Key from './Key';

//得到随机的密码
function RandomPassword() {
	return Password(Math.random().toString());
}

function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

//使用随机密码覆盖剪切板20次
export function cover_clipboard() {
	for (var i = 0; i < 20; ++i) {
		sleep(250).then(copy(RandomPassword()));
	}
	return true;
}

function Security() {
	return (
		<div className="Security">
			<Key keyName={"Delete"} ctrlKey={true} func={cover_clipboard} />	{/*Ctrl+Delete*/}
		</div>
	);
}

export default Security;