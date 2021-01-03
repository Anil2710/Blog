const express = require("express");
const mongoose = require("mongoose");
const post = require('./routes/post.js');
const db = "mongodb+srv://anil:anil8305@cluster0.6q7fr.mongodb.net/rest?retryWrites=true&w=majority"
const port = 4000;
const app = express();
app.use(express.json());

mongoose
.connect(db,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(()=>{
    console.log("mongodb connected");
})
.catch((err)=>{
    console.log({err: err });
});

app.get('/',(req,res)=>{
res.send("hello")
})

app.use('/Post ', Post);
app.listen(port,(err)=>{
    if(err){
        console.log( {err : err});
    }
    console.log("server running on port" +port);
    });