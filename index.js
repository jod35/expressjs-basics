const express=require('express');
const path=require('path');
const users=require('./members');
const moment=require('moment');
const PORT =process.env.PORT || 8080;

const app=express();

//a middleware

const logger= (req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}${moment().format()}`);
    next();
    
};

//makes a static directory 'public'
app.use(express.static(path.join(__dirname,'public')));

//init logger
app.use(logger);

//simple api route returns json 
app.get('/api/members',(req,res)=>{
  res.json(users);
});

//starts our server on the specified port
app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);

});