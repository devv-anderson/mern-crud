const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    }
},
    {
        versionKey: false
    })

const UserModel = mongoose.model("users", UserSchema) // collection name / Schema
module.exports = UserModel
