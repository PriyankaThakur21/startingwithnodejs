const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app=express();

const addproductRoutes = require('./routes/addproduct');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');

const errorController = require('./controllers/errors');

app.use(bodyParser.urlencoded({extended:true}));//urlencoded() is a inbuilt middleware function
app.use(express.static(path.join(__dirname, 'public')));

app.use(addproductRoutes);

app.use(shopRoutes);

app.use(contactRoutes);

app.use(errorController.get404);

app.listen(3000);