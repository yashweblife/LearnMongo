const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const db = require('./db');
app.use(bodyParser.json());

const collection = "todo";
db.connect((err)=>{
    if(err){
        console.log("Error Connecting To DB")
        process.exit(1)
    }else{
        app.listen(3000,()=>{
            console.log("Connected to DB at 3000")
        })
    }
})
app.get('/',(req, res)=>{
    res.send("<h1>Hello</h1>")
})
app.get('/lists',(req, res)=>{
    console.log(req)
    res.send("Works")
})
app.get('users',(req, res)=>{
    res.send("No Users")
})

app.listen(3000,()=>{
    console.log("Working")
})