const express = require('express');
const app = express();
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const products = require('../products.json');
const port = 1500;




app.get('/api/products', getProducts);

app.get('/api/product/:id', getProduct);

app.listen(port, (req, res, next) => {
    console.log(`Server listening on port: ${port}`);
});
