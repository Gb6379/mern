const jwt = require('jsonwebtoken')
require('dotenv').config()

getAuthentication = (req, res, next) => {
    const token = req.header('x-auth-token')
    //check whether token is valid
    if(!token) {
        return res.status(401).json({msg: 'Not Authorized'})
    }

    //validates token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded.user;
        
        next();
    } catch (error) {
        res.status(401).json({msg: "Invalid token"})
    }
}

module.exports = { getAuthentication }