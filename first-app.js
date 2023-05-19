const express = require('express')
const app=express();
app.use((req, res, next)=>{
    console.log('first middleware');
    next();
});
app.use((req,res,next)=>{
    res.send({key1:2});
});
app.listen(3000);