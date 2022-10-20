const { response } = require('express');
const express = require('express');
const router = express.Router();

const ProductsService = require('../services/products.service');
const service = new ProductsService();

router.get('/search/:key', async(req, res)=> {
    const { key } = req.params;
    const response = await service.find(key);
    res.status(201).send(response);
});


module.exports = router;