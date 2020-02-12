//This class has created for Testing our API routes.
//'supertest' package was chosen in npm packages.
const request = require("supertest");
const app = require("../app");

/** ----------------COMMENTS ENDPOINT TEST STEPS---------  */ 

/* Testing get all comments endpoint */
describe('GET /comments', function () {
    it('respond with json containing a list of all users', function (done) {
        request(app)
            .get('/comments')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
/* Testing post */
describe("POST /comments", function(){

    let data = {
        "content" :"mocha testing ",
        "owner" : "Oguzhan Bayrak - mocha testing"
    }
    it("respond with 201 code created a new data",function(done){
            request(app)
                .post("/comments")
                .send(data)
                .set("Accept","application/json")
                .expect("Content-Type",/json/)
                .expect(200)
                .end((err)=>{
                   if(err)
                    return done(err);
                    done();
                });
    });
});
/* Testing delete  */
describe("DELETE /comments",function(){
    it("delete testing ",function(done){
        request(app)
            .del("/comments")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
})
/** Testing put operation  */
describe("PUT /comments/:id", function(){

    let data = {
        "content" :"mocha testing put oper.",
        "owner" : "Oguzhan Bayrak - mocha testing"
    }
    it("respond with 200 code created a new data",function(done){
            request(app)
                .put("/comments/U001")
                .send(data)
                .set("Accept","application/json")
                .expect("Content-Type",/json/)
                .expect(200)
                .end((err)=>{
                   if(err)
                    return done(err);
                    done();
                });
    });
});
/** ----------POSTS ENDPOINT  TEST  STEPS ----------------*/
describe('GET /posts', function () {
    it('respond with json containing a list of all users', function (done) {
        request(app)
            .get('/posts')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe("POST /posts", function(){

    let data = {
        "post_id" :"1234",
        "post_name" : "Oguzhan Bayrak - mocha testing"
    }
    it("respond with 201 code created a new data",function(done){
            request(app)
                .post("/posts")
                .send(data)
                .set("Accept","application/json")
                .expect("Content-Type",/json/)
                .expect(200)
                .end((err)=>{
                   if(err){
                    return err;
                   }
                   done();
                    
                });
    });
});

describe("DELETE /posts",function(){
    it("delete testing ",function(done){
        request(app)
            .del("/posts")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

/** POSTS ENDPOINT SPECIAL URL */

describe("GET /posts/:id",function(){
    it('respond with json containing a single user', function (done) {
        request(app)
            .get('/posts/U001')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe("DELETE /posts/:id",function(){
    it("delete testing ",function(done){
        request(app)
            .del("/posts/U001")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe("PUT /comments/:id", function(){

    let data = {
        "id" :"321",
        "post_name" : "Oguzhan Bayrak - mocha testing"
    }
    it("respond with 200 code created a new data",function(done){
            request(app)
                .put("/comments/U001")
                .send(data)
                .set("Accept","application/json")
                .expect("Content-Type",/json/)
                .expect(200)
                .end((err)=>{
                   if(err)
                    return done(err);
                    done();
                });
    });
});


