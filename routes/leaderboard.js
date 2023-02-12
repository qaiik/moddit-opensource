const path = require("path")

module.exports = function({app}) {
	app.get('/leaderboard', (req,res) => {
		res.sendFile('leaderboard.html', { root: path.join(__dirname, '../views/') })
	})
}
