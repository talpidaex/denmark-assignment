//------Include npm packages----
const express = require("express");
const bodyParser = require("body-parser");
const connection = require('./models/mysqlConnection');
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

app.route("/comments")
    //GET ALL COMMENTS
    .get((req,res)=>{
        connection.query("Select * from comments",(err,results)=>{
            if(!err){
                res.json(results);
            }
        });
    })
    //POST COMMENT
    .post((req,res)=>{

        var content = req.body.content;
        var owner = req.body.owner;

        connection.query("Insert into comments SET comments_content =?,comments_owner=?",[content,owner],(err,results)=>{
            if(!err){
                res.json(results);
            }
        });
    })
    //DELETE ALL COMMENTS!
    .delete((req,res)=>{
        connection.query("Delete from comments",(err,reults)=>{
            if(!err){
                res.send("Transaction of delete is successful.")
            }
        });
    })
//---In order to be able to update, the id of the comment to be updated is required.------------
    app.route("/comments/:commentsId")
    .put((req,res)=>{
        var commentsId = req.params.commentsId;
        var content = req.body.content;
        var owner = req.body.owner;
        connection.query("Update comments SET comments_content=?,comments_owner=? where comments_id=?",[content,owner,commentsId],
        (err,results)=>{
            if(!err){
                res.json(results);
            }else {
                console.log(err);
                
            }
        });

    });
    

//-----Server information-----
app.listen(3000,function(){
    console.log("Server port : 3000");
});