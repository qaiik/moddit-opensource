const path = require("path")

module.exports = function({app}) {
	app.get('/stats', (req,res) => {
		res.sendFile('stats.html', { root: path.join(__dirname, '../views/') })
	})
}
