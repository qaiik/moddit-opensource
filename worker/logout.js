const crypto = require("crypto")

function hash(pass) {
    return crypto.createHash('sha256').update(pass).end().digest('hex');
}
module.exports = ({app}) => {
	app.get('/worker/logout', (req, res) => {
        if (req.session.username) req.session.username = undefined;
        res.json({error: false})
    })
}
