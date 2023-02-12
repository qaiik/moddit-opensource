module.exports = ({app, db}) => {
	app.get('/worker/leaderboard', (req, res) => {
		const users = db.listInclusive()

        const sorted = users.map(e => e[1]).filter(u => "tokens" in u).sort((a,b) => b.tokens - a.tokens).slice(0,10)
        return res.json(
            sorted.map(player => {
                return {
                    username: player.username,
                    role: player.role,
                    tokens: player.tokens
                }
            })
        )
	})
}
