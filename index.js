const express= require('express');

const app=express();

app.set('port',process.env.PORT || 3000);


app.get('/',(req,res)=>{
      res.send("Home");
});

app.get('/about',(req,res)=>{
  res.send("The About Page");
});

//custom 404 route
app.use((req,res)=>{
  res.type('text/plain');
  res.status(404);
  res.send("404 Not Found");
});

//custom 505 route

app.use((err,req,res)=>{
 res.type('text/plain');
 res.status(500);
 res.send("Internal Server Error!")
});


app.listen(app.get('port'),()=>{
   console.log("Server is running at port 8080");
   
});


