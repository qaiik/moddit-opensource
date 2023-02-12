const path = require("path")

module.exports = function({app}) {
	app.get('/login', (req,res) => {
		res.sendFile('login.html', { root: path.join(__dirname, '../views/') })
	})
}
