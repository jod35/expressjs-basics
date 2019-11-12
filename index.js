const express=require('express');
const path=require('path');

const PORT =process.env.PORT || 8080;

const app=express();
const users= [
    {
        name:"Jonathan",
        age:20,
        uni:"MUK"
    },
    {
        name:"Jonathan",
        age:20,
        uni:"MUK"
    },
    {
        name:"Jon",
        age:17,
        uni:"MUK"
    },
    {
        name:"Jodes",
        age:24,
        uni:"MUK"
    },
];

app.use(express.static(path.join(__dirname,'public')));

app.get('/api/members',(req,res)=>{
  res.json(users);
});
app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);

});