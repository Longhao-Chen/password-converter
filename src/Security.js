import React from 'react';
import copy from 'copy-to-clipboard';
import Password from './Password';
import Key from './Key';

//得到随机的密码
function RandomPassword() {
	return Password(Math.random().toString());
}

//使用随机密码覆盖剪切板20次
export async function cover_clipboard() {
	for (var i = 0; i < 20; ++i) {
		copy(RandomPassword());
	}
}

function Security() {
	return (
		<div className="Security">
			<Key keyName={"Delete"} ctrlKey={true} func={cover_clipboard} />	{/*Ctrl+Delete*/}
		</div>
	);
}

export default Security;