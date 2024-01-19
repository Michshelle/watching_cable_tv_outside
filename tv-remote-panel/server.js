const express = require('express')
const app = express()
// express.basicAuth is gone
// basic-auth-connect is deprecated
// basic-auth doesn't have any logic
// http-auth is an overkill
// express-basic-auth is what you want
const basicAuth = require('express-basic-auth')
const port = 9988 // 自定义端口号（不要与已存在端口冲突）
app.use(
	basicAuth({
	users: { admin: 'admin' },
	challenge: true
	}));
app.use(
	express.static('dist')
	) // dist 是项目的打包资源路径，一般为根目录下dist
app.listen(port, () => console.log(`服务器 ${port} 开启成功!`))
