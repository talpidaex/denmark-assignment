//------Include npm packages----
const express = require("express");
const bodyParser = require("body-parser");
const commentRouter = require("./API/comments");
const postsRouter = require("./API/posts");
const fileUpload = require("express-fileupload");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(fileUpload());

//Bonus requirements,views files.
app.get("/",(req,res)=>{
        res.render("homePage");
})

app.get("/triangle",(req,res)=>{
    
    const a = req.query.a;
    const b = req.query.b;
    const c = req.query.c;

    if(a === b && b === c){
        res.json("Equilateral Triangle"); 
    }
    else if(a === b || a === c || b === c){
        res.json("Isosceles Triangle");
    }else{
        res.json("Scalene Triangle");  
    }
});

app.use(commentRouter);
app.use(postsRouter);


//-----Server information-----
app.listen(3000,function(){
    console.log("Server port : 3000");
});

//this exports is neccessary for testing our project!
module.exports = app;