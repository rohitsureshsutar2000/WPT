import express from "express"
let app=express()
app.get("/",(req,res)=>{
    console.log("abhi c")
        res.send("server listeing on port...")
})
app.listen(8000,()=>{

    console.log("server listening on port 8000.....")
})
app.get("/getabhi",(req,res)=>{
    res.send("on get through server")
})
app.post("/post",(req,res)=>{
    console.log("hello yara!!")
    res.send("dude!!")
  
})
