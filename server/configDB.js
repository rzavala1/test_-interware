const data = require("./data");

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/shopDb");

//codigo solo para precargar la tabla de productos
const Product = require('./models/product');
Product.collection.findOne({}, function (err, result) {
    if (!result) {
        Product.collection.insertMany(data, function (error, record) {
            if (error) throw error;
            db.close();
        });
    }
});
