const express = require("express");
const connection = require('../models/mysqlConnection');
const router = express.Router();

router.route("/comments")
    //GET ALL COMMENTS
    .get((req,res)=>{
        connection.query(" 0Select * from comments",(err,results)=>{
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
router.route("/comments/:commentsId")
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
    
    module.exports = router;