const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    _id: String,
    isActive: Boolean,
    price: Number,
    name: String,
    about: String,
    tags: Array
});

module.exports = mongoose.model("products", productSchema);
