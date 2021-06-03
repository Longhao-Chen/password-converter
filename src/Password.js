//计算加密后的密码
const crypto = require('crypto');

function sha512(input) {
	return crypto.createHash('sha512').update(input).digest('base64');
}

function Password(input) {
	var pass = input;
	//增加暴力破解的计算量，总共计算50次sha512
	for (var i = 0; i < 50; ++i) {
		pass = sha512(input + pass + input);
	}

	pass = pass.slice(0, 4) + ':' + pass.slice(4, 8) + '$' + pass.slice(8, 12);
	return pass;
}

export default Password;