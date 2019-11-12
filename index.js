const express= require('express');

app=express();

app.set('port',process.env.PORT || 3000);

app.listen(app.get('port'),()=>{
   console.log("Server is running at port 3000");
   
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