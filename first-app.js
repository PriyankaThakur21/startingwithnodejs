const express = require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:false}));//urlencoded() is a inbuilt middleware function

app.use('/',(req,res,next)=>{
    res.send('<h1>Welcome</h1>');
    next();
})

app.use('/add-product',(req, res, next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="name"><button>Add Product</button></form>');
})

app.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.listen(9090);