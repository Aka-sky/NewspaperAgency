const mongoose = require('mongoose');
const Product = require('./product').schema;

const vendorSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    products: {
        type: [Product]
    }
}, {
    timestamps: true
});


const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;