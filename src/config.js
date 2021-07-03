//配置文件存储(localStorage)

class Config {
	constructor(key, default_var) {	//default_var为默认值，如果此配置不存在，则设为默认值
		this.key = key;
		if (this.read() === null)
			this.write(default_var);
	}
	write(data) {
		window.localStorage.setItem('config_' + this.key, data);
	}

	read() {
		return window.localStorage.getItem('config_' + this.key);
	}

	clear() {
		window.localStorage.removeItem('config_' + this.key);
	}
}

export default Config;