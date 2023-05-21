const express = require('express');
const router = express.Router();

const productController=require('../controllers/products');

router.get('/contact',productController.getContactUs);

router.post('/success',productController.ContactSubmitted);

module.exports=router;