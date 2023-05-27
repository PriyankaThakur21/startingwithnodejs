const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app=express();

const sequelize = require('./util/database');

const addproductRoutes = require('./routes/addproduct');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');

const errorController = require('./controllers/errors');

const Product = require('./models/products');
const User =  require('./models/users');
const cart = require('./models/cart');
const cartItems = require('./models/cartItems');

app.use(bodyParser.urlencoded({extended:true}));//urlencoded() is a inbuilt middleware function
app.use(express.static(path.join(__dirname, 'public')));

app.use(async(req, res, next)=>{
    try{
    const user = await User.findByPk(1);
    req.user=user;
    }
    catch(error){
        console.log(error);
    }
})

app.use(addproductRoutes);

app.use(shopRoutes);

app.use(contactRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);
User.hasOne(cart);
cart.belongsToMany(Product, {through: cartItems});
Product.belongsToMany(cart, {through: cartItems});

sequelize.sync({force:true}) //make new table and deletes previous ones
.then((res)=>{
    return User.findByPk(1);
})
.then((user)=>{
    if(!user){
        return User.create({name: 'John', email: 'john54@getMaxListeners.com'});
    }
    return user;
})
.then((user)=>{
    console.log(user);
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
})
