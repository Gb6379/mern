const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
require('dotenv').config()



teste = (req,res) => {
    console.log("got in")
    res.send('hi')
}


register = async (req,res) => {
    //that way we don't need to prefix with 'req.body' every single attribute
    const {name, email, password} = req.body;
    try {
        let user = await User.findOne({ email });
        if(user != null) {
           return res.status(400).json({ errors: [{ msg: 'User already exists' }]})
        }

        user = new User({ // or just pass req.body in here
            name,
            email,
            password
        })
        //length to generate or salt to use
        user.password = await bcrypt.hashSync(password, process.env.CRYPT_SALT)     
        await user.save();

     

        res.status(200).json({success: [{ msg: `User ${name} sucessefull created`}]})
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error)
    }

}

login = async (req,res) => {
    const {email, password} = req.query;
    let user = await User.findOne({ email });
    if(!user){
        res.status(400).json({fail: [{ msg: `User ${email} not registered on our system`}]})
        return
    }

    if(!bcrypt.compareSync(password, user.password)){
        res.status(400).json({fail: [{ msg: `User ${password} wrong`}]})
        return
      }

    const payload = {
        user: {
            id: user._id
        }
    }

    jwt.sign(
        payload, 
        'jwtSecret',
        {expiresIn: 720000},
        (err, token) => {
            if(err) throw err;
            res.json({token})
            }
    )
}

getAllUsers = async (req, res) => {
    try {
        let users = await User.find({}) //maybe include array to specify the atributes I want to bring
        res.status(200).send(users)
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error)
    }
}


module.exports = {teste, register, getAllUsers, login};