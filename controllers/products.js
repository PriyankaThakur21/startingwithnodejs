const rootDir = require('../util/path');
const path = require('path');

const Product = require('../models/products');

exports.getAddProduct = (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'addproduct.html'));
}
exports.postAddProduct = (req, res)=>{
    const product = new Product(req.body.name);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req,res)=>{
    const products = Product.fetchAll();
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}

exports.getContactUs = (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
}

exports.ContactSubmitted = (req, res)=>{
    res.send('<h1>Form Successfully Filled</h1>');
}