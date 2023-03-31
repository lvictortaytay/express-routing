const express = require("express")
const mean = require("./operations.js")

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : true}))



app.get("/" , function(req , resp){
    
    return resp.send("homepage")
})

app.get("/mean" , function (req , resp){
    queryNums = req.query.nums
    
    
    let response = [
        {"mean":mean(queryNums)}
    ]
    
    return resp.send(response)
    
   
   
   
})



app.get("/median" , function (req , resp , next){
    return resp.send("find the median")
})


app.post("/post" , function (req , resp ){
    resp.send(`hello ${req.body.name} , you just turned `)
})


app.get("/mode" , function (req , resp , next){
    return resp.send("find the hello")
})










app.listen(3000 , function(req , resp){
    console.log("running on port 3000")
})