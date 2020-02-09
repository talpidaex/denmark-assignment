
//------Include npm packages----
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/",(req,res)=>{

    res.send("HomePage");
});

app.get("/triangle",(req,res)=>{
    
    const a = req.query.a;
    const b = req.query.b;
    const c = req.query.c;

    if(a === b && b === c){
        res.send("Equilateral Triangle"); 
    }
    else if(a === b || a === c || b === c){
        res.send("Isosceles Triangle");
    }else{
        res.send("Scalene Triangle");  
    }
});



//-----Server information-----
app.listen(3000,function(){
    console.log("Server port : 3000");
});