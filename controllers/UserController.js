const User = require('../models/User')
const bcrypt = require('bcryptjs');


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

        user = new User({
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

getAllUsers = async (req, res) => {
    try {
        let users = await User.find({}) //maybe include array to specify the atributes I want to bring
        res.status(200).send(users)
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error)
    }
}


module.exports = {teste, register, getAllUsers};