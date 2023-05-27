const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app=express();

const sequelize = require('./util/database');

const addproductRoutes = require('./routes/addproduct');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');

const errorController = require('./controllers/errors');

const productModel = require('./models/products');
const userModel =  require('./models/users');

app.use(bodyParser.urlencoded({extended:true}));//urlencoded() is a inbuilt middleware function
app.use(express.static(path.join(__dirname, 'public')));

app.use(addproductRoutes);

app.use(shopRoutes);

app.use(contactRoutes);

app.use(errorController.get404);

productModel.belongsTo(userModel, {constraints: true, onDelete: 'CASCADE'});
userModel.hasMany(productModel);

sequelize.sync({force:true}) //make new table and deletes previous ones
.then((res)=>{
    console.log(res);
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
})
