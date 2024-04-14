const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
        Name: String,
        DateCreated:Date,
        Role: String,
        Status: String
})
const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel