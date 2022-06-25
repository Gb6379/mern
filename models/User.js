const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
 /*   posts :{
        type:mongoose.Schema.Types.ObjectId, //in case I want to do relationships // one user can have many posts
        ref:'posts'
    }*/
});

module.exports = User = mongoose.model('user', UserSchema)