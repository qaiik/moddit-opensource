module.exports = ({app, db}) => {
    app.get('/worker/claim', (req,res) => {
        if (!req.session.username) return res.json({error: true, reason: 'Unauthorized.'})
        const t = db.get(req.session.username).tokens
        db.update(req.session.username, {
            tokens: t + 500
        })

        console.log("claimed: " + req.session.username)
        // if (req.session.username == "y" || req.session.username == "d") {
        //     // db.update("alicialol", {
        //     //     tokens: (t + 500) + - .1
        //     // })
            
        // }

        return res.json({error: false, tokens: t + 500})
    })
}