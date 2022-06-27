import React from 'react';

function Footer() {
	return (
		<div className="center">
			<hr />
			<footer className="footer navbar-fixed-bottom ">
				<div className="container">
					<table Style="margin: 0 auto">
						<thead>
							<tr>
								<th align="center">键盘事件</th>
								<th align="center">操作</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td align="center">Enter</td>
								<td align="center">复制生成的密码</td>
							</tr>
							<tr>
								<td align="center">Ctrl + C</td>
								<td align="center">复制生成的密码</td>
							</tr>
							<tr>
								<td align="center">Ctrl + Backspace</td>
								<td align="center">清除密码</td>
							</tr>
							<tr>
								<td align="center">Alt + I</td>
								<td align="center">输入密码可见性切换</td>
							</tr>
							<tr>
								<td align="center">Alt + O</td>
								<td align="center">生成的密码可见性切换</td>
							</tr>
							<tr>
								<td align="center">Ctrl + Delete</td>
								<td align="center">覆盖剪切板20次</td>
							</tr>
						</tbody>
					</table>
					<hr />
					项目主页及说明文档：
					<a href="https://github.com/Longhao-Chen/password-converter/">
						https://github.com/Longhao-Chen/password-converter/
					</a>
				</div>
			</footer>
		</div>
	);
}

export default Footer;