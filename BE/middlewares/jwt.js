const jwt = require('jsonwebtoken')

//enconde data with jwt and return the token that contain this data encoded
const enconde = (data) => {

    const token = jwt.sign(data, process.env.JWT_SECRET)
    return token
}

//decode jwt data and return the payload that contain that token
const decode = (token) => {

    const payload = jwt.decode(token)
    return payload

}


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