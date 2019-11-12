const express= require('express');

app=express();

app.set('port',process.env.PORT || 3000);

app.listen(app.get('port'),()=>{
   console.log("Server is running at port 3000");
   
});