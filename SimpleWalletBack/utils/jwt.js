require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtsecret = process.env.JWT_SECRET;

const generateToken = (user) => {
    const token = jwt.sign({ id: user._id }, jwtsecret);
    return token;
}

const verifyToken = (req, res, next) => {

    const token = req.cookies.token;

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
        return res.sendStatus(401)
        }
        req.user = user;
        next();
  });
}

module.exports = {
    generateToken,
    verifyToken
}