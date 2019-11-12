const express= require('express');

const app=express();
const handlebars= require('express3-handlebars')
                  .create({defaultLayout:'main'});

app.engine('handlebars',handlebars.engine);
app.set('viewengine','handlebars');

app.set('port',process.env.PORT || 3000);


app.get('/',(req,res)=>{
      res.render('home');
});

app.get('/about',(req,res)=>{
  res.render('about');
});


//these are middleware functions
//custom 404 route
app.use((req,res)=>{
  res.type('text/plain');
  res.status(404);
  res.render('404');
});

//custom 505 route

app.use((err,req,res)=>{
 res.type('text/plain');
 res.status(500);
 res.render('505');
});


app.listen(app.get('port'),()=>{
   console.log("Server is running at port 8080");
   
});


