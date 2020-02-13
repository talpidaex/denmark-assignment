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
    /* Bonus Requirement Save image on Database */

    router.post("/upload-image",(req,res)=>{

       var fileContent = req.files.images;
       var fileName = fileContent.name;
       var fileType = fileContent.mimetype;
       fileContent.mv('public/Uploads/images/'+fileName,(err)=>{
            if(!err)
            connection.query("Insert into upload_images SET images_name=?, images_mimetype=?",[fileName,fileType],(err,results)=>{
                if(!err){
                  res.redirect("/images")
                }else{
                    console.log(err);
                }
            });
       });  
    })
    router.get("/images",(req,res)=>{
            /** Get all Images on DB! */
            connection.query("Select * from upload_images",(err,rows)=>{
                    if(!err){
                        //send array from db to ejs file
                        res.render("images",{rows : rows});  
                    }
            })
           // res.render("images");
    })
    
    
module.exports = router;