//计算加密后的密码
const crypto = require('crypto');

function sha512(input) {
	return crypto.createHash('sha512').update(input).digest('hex');
}

function Password(input) {
	var pass = sha512(input);
	//增加暴力破解的计算量，总共计算50次sha512
	for (var i = 1; i < 50; ++i) {
		pass = sha512(pass);
	}

	//转成Base64和加入特殊字符，防止某些要求高的地方认为密码强度不够
	var output = Buffer.from(pass, 'utf-8');
	output = output.toString('base64');
	output = output.slice(0, 4) + '-' + output.slice(4, 8) + '-' + output.slice(8, 12);
	return output;
}

export default Password;