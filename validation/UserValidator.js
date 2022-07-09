const { check, validationResult } = require('express-validator')

userValidationRules = () => {
    return [
        check('name', 'Name is required').not().isEmpty(), // checks whether this field is empty 

        check('email', 'Email must be valid').isEmail(), //checks whether emails is a valid one

        check('password', 'password lenght must be at least 4 digits').isLength({ min: 4 }),
    ]

}



module.exports = {userValidationRules}