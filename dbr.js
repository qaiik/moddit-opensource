const f = require("mdt-fbase")
require("dotenv").config()
module.exports = new f.instance(
    file = "db/moddit_current.edb",
    encodingf = f.AES_ENCODER(process.env.DB_PASS),
    decodingf = f.AES_DECODER(process.env.DB_PASS)
)