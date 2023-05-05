const express= require("express");
const app= express();
const port= process.env.PORT || 5000;
const user=[
    {id:1, name:"Sabana", email:"sabana@gmail.com"}
    {id:2, name:"Sabnur", email:"sabnur@gmail.com"}
    {id:3, name:"Sabila", email:"sabila@gmail.com"}
]

const cors=require("cors");
app.use(cors());
app.get("/",(req,res)=>{
    res.send("user server running")
})
app.get("/users",(req,res)=>{
    res.send(user)

})
app.listen(port,()=>
{
    console.log(`server running on port${port}`)
})