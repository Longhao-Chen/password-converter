# 密码生成器
![](https://github.com/Longhao-Chen/password-converter/workflows/Deploy%20Github%20pages/badge.svg)

通过 `sha512` 将可记忆的密码不可逆的转换成可安全使用的密码。

你可以在 https://longhao-chen.github.io/password-converter/ 尝试此程序。

## 这个程序解决了一个什么问题？
很多网站或程序都需要一个账号，而每一个账号都需要一个密码。如果保持所有账号的密码都一致或使用同一种模式，那么只需要有一个账号的密码发生泄漏就会影响的所有账号的安全；如果每个账号都使用不同密码，这样就会造成记忆的困难。这个程序通过散列函数，让我们能够安全的使用有便于记忆的密码来设置不同账号的密码。

## 如何使用？
首先你需要一个你能记住的密码生成方法，例如可以使用 `node+网站或应用程序名`。
然后把这个密码输入 密码生成器 中，将生成的密码作为此网站或应用程序的密码。
这样就可以保证每个网站的密码不同。

## 键盘绑定
| 键盘事件      | 操作                |
| :-----------: | :-----------:       |
| Enter         | 复制生成的密码      |
| Ctrl + C      | 复制生成的密码      |
| Ctrl + Backspace| 清除密码          |
| Alt + I       | 输入密码可见性切换  |
| Alt + O       | 生成的密码可见性切换|
| Ctrl + Delete | 覆盖剪切板20次      |

## 安全性
程序的源代码全部都是公开的，任何人都可以查看，所用的散列算法为 `sha512`。
程序所有的操作均在本地浏览器上进行，不会有任何数据会被发送到网络上。

## 算法
见 `src/Password.js`

## 开发
```
git clone https://github.com/Longhao-Chen/password-converter.git

cd password-converter

npm i

npm run start
```