# denmark-assignment
Denmark Backend Assignment

  This project which has 3 endpoint has been created for Assignment of Sport Compass.<br>
  This endpoints <strong>'/triangle'  , '/posts' ,'/comments'</strong>
  
  -> <strong> 'Supertest' </strong> was chosen for creating unit test and MySQL and Node JS have chosen for back-end and Database. 
  
  -> Express.js has been chosen for framework and app.js which has got /triangle endpoint is  main router on our project.
   
  <strong> /triangle </strong>,
      it has three parametres a,b,c and those is edge our Tringle. If 2 of them is equals each others we are returning 'Isosceles Triangle' or 3 of them is equals each others we are returning 'Equilateal Triangle'. If any parametres doesn't equals each others we are returning 'Scalene Triangle'
      
   
  <strong> /comments </strong>
      it has 3 methods <strong><em> .GET </em></strong> , <strong><em> .POST </em></strong>,<strong><em> .DELETE </em></strong>,<strong><em> .PUT </em></strong>
       
   <strong> NOTE : </strong> If we want to work in the database we should connect our database therefore I was created 'models' folder and also created connection.js file. This file has been created for creating connection  nodejs between database. and I have been used 'mysql' npm package.
   
All methods are served for same goal. Communication with Database. .GET methods is used for Select all data in DB, .POST methods is used for creating new Data, .PUT methods is used for Update any data in DB and .DELETE is used for delete Data.
      
-> If we want to update any comments,we should get comments id like '/commets/comments_id' because 'PUT' methods is want comment_id. 
  
<strong> /posts </strong>
   this endpoint API was created like 'rest' architecture. 3 methods for all /posts and 3 methods for special Routes.<em> /posts/:id </em>
    Special routes means, we can take some data with using it's id. The same rule applies to other methods.

<hr>
<h3>Bonus Requirement - Image adding in Mysql Database</h3>
 <h6>Process Steps</h6>
First of all I have downloaded 'express-fileupload' package of npm that We use some methods when we upload image. (.mv method comes from this package)
I have created a post which has 'upload-image' endpoint. I took all information about files through 'req.files' and  I have saved all image data set on our root folder and inside of database with the aid of .mv method.Should mention that, Just image names and image mimetypes have been saved on Database. I could have saved other information which comes on files. Last things, Image name and mime types information come from database and It is being shown on '/images' endpoint.
