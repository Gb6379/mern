const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config()

getAuth = async (req,res) => {//getauth
    try {
        const user = await (User.findById(req.user.id)).select('-password')//-password excluders the password from being returned
        res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('server error')
    }
}

authUser = async (req,res) => {//login with authentication
    const {email, password} = req.body;
    try {
        let user = await User.findOne({email})
        if(!user){
           return res.status(400).json({errors: [{msg: 'invalid credentials'}]})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({errors: [{msg: 'invalid credentials'}]})
        }

        const payload = {
            user: {
                id: user._id
            }
        }
    
        jwt.sign(
            payload, 
            process.env.JWT_SECRET,
            {expiresIn: 720000},
            (err, token) => {
                if(err) throw err;
                res.json({token})
                }
        )
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error')
    }
}


module.exports = { getAuth, authUser }