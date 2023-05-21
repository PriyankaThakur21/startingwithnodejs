const rootDir = require('../util/path');
const path = require('path');

exports.getAddProduct = (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'addproduct.html'));
}
exports.postAddProduct = (req, res)=>{
    console.log(req.body);
    res.redirect('/');
}

exports.getProducts = (req,res)=>{
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}

exports.getContactUs = (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
}

exports.ContactSubmitted = (req, res)=>{
    res.send('<h1>Form Successfully Filled</h1>');
}