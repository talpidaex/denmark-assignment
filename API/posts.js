const express = require("express");
const connection = require("../models/mysqlConnection");
const router = express.Router();


    router.route("/posts")

    .get((req,res)=>{
        connection.query("Select * from posts",(err,results)=>{
            if(!err)
            res.json(results);
        });
    })
    .post((req,res)=>{
        var post_id = req.body.post_id;
        var post_name = req.body.post_name;
        connection.query("Insert into posts SET post_id =? , post_name=?",[post_id,post_name],(err,results)=>{
            if(!err){
                res.json(results);
            }
        });
    })
    .delete((req,res)=>{
        connection.query("Delete from posts",(err,results)=>{
            if(!err)
                res.json("Delete operation is successfully!")
        });
    })
   ////------------Special Routes----------
   router.route("/posts/:id")
    .get((req,res)=>{
            var post_id = req.params.id;
            connection.query("Select * from posts where post_id=?",post_id,(err,results)=>{
                if(!err){
                    res.json(results);
                }
            })
    })
    .put((req,res)=>{
            var post_id = req.params.id;
            var update_name = req.body.post_name;
            connection.query("Update posts SET post_name =? where post_id=?",[update_name,post_id],(err,results)=>{
                    if(!err){
                        res.json("Update is successfully!");
                    }else{
                        console.log(err);
                        
                    }
            });
    })
    .delete((req,res)=>{
        var post_id = req.params.id;
        connection.query("Delete from posts where post_id=?",post_id,(err,results)=>{
                if(!err){
                    res.json("Deleted where post_id :"+post_id);
                }
        });
    })

    
module.exports = router;