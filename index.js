require('dotenv').config();
const express = require('express');

const port=4000;
const app = express();

app.get('/', (req,resp) =>{
    resp.send("Home Page");
})
app.get('/login', (req,resp) =>{
    resp.send("<h1>Login Successfully</h1>");
})
app.get('/github', (req,resp) =>{
    resp.send("<h2>Calling to github</h2>");
})
app.get('/testing', (req,resp) =>{
    resp.send("Hello world Testing");
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    
})