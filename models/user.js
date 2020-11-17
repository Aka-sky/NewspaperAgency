const mongoose = require('mongoose');
const Product = require('./product').schema

const userSchema = new mongoose.Schema({
    email: {
        type: String, required: true, unique: true
    },
    password: {
        type: String, required: true
    },
    name: {
        type: String, required: true
    },
    subscribed: {
        type: [Product], default: undefined
    },
    phone: {
        type: Number, required: true
    },
    address: {
        type: String, required: true
    },
    active: {
        type: Boolean, default: true
    }
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;