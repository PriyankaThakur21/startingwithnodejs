const rootDir = require('../util/path');
const path = require('path');

const Product = require('../models/products');

exports.getAddProduct = (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'addproduct.html'));
}
exports.postAddProduct = (req, res)=>{
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const imageurl = req.body.imageurl;
    const product = new Product(null, name, price, description, imageurl);
    product.save()
    .then(()=>{
        res.redirect('/');
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.getProducts = (req,res,next)=>{
    Product.fetchAll()
    .then(([data])=>{
        console.log(data);
    })
    .catch(err=>console.log(err));
}

exports.getContactUs = (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
}

exports.ContactSubmitted = (req, res)=>{
    res.send('<h1>Form Successfully Filled</h1>');
}

exports.getProductById = (req, res, next)=>{
    const prodId = req.params.productId;
    Product.findById(prodId).then(([product])=>{
        console.log(product[0]);
    })
    .catch((err)=>{
        console.log(err);
    })
}