const { check, validationResult } = require('express-validator')


authValidationRules = () => {
    return [ 

        check('email', 'Email must be valid').isEmail(), //checks whether emails is a valid one

        check('password', 'password required').exists(),
    ]

}



module.exports = {authValidationRules}