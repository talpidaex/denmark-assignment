
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
    
    const aParametres = req.query.a;
    const bParametres = req.query.b;
    const cParametres = req.query.c;

    if(aParametres === bParametres && aParametres === cParametres && cParametres === bParametres){
        console.log("Eşkenar"); 
    }
    if(aParametres === bParametres || aParametres === cParametres || bParametres === cParametres){
        console.log("İkizkenar Ucgen");
    }
    
});



//-----Server information-----
app.listen(3000,function(){
    console.log("Server port : 3000");
});