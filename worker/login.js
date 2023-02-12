const crypto = require("crypto")

function hash(pass) {
    return crypto.createHash('sha256').update(pass).end().digest('hex');
}
module.exports = ({app, db}) => {
	app.post('/worker/login', (req, res) => {
		const { username, password } = req.body;


		if (!db.exists(username)) {
			return res.json({error: true, reason: "User does not exist."})
		}

        const checkPass = db.get(username).password;
        if (hash(password) !== checkPass) return res.json({error: true, reason: "Incorrect password."})
		db.update(username, {
			lastlogin: Date.now(),
			ip: req.ip
		})
        req.session.username = username
		return res.json({error: false, data: `Logged in as ${req.session.username}`})
	})
}
