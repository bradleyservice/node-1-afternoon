const express = require('express');
const app = express();
const products = require('../products.json');
const ctrl = require('./getProducts');

app.use(express.json());

app.get('/api/products', ctrl.getProducts);

app.get('/api/products/:id', ctrl.getItem)

app.listen(4042, () => {
    console.log('server running great')
})