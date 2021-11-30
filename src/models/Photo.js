const { Schema , model } = require('mongoose')

const Photo = new Schema({
    title: {type:String, default:'Default title'},
    description: {type: String, default: 'Default description'},
    imageUrl: String,
    public_id: String
})

module.exports = model('Photo', Photo);