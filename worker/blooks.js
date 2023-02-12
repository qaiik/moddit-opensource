module.exports = ({app, db}) => {
    app.get('/worker/blooks', (req,res) => {
        res.json(require("../game-blooks"))
    })
}