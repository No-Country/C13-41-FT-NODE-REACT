const jwt = require('jsonwebtoken')


//verify the token isn't corrupt or expired and continue with the request otherwise throw an error
const verify = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) { throw new Error('Not authorization header inside the request') }
        const token = authorization.split(' ')[1]
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        next()
    } catch (error) {
        return res.status(400).json({ error: "JWT", message: error.message }).end()
    }
}

module.exports = {
    enconde,
    decode,
    verify
}