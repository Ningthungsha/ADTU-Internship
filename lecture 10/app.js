const express = require('express');

const app = express();


app.get('/', (req,res)=>{
    // res.send('hello world ')
    res.sendFile('C:\\Users\\HP\\OneDrive\\Desktop\\ADTU INTERNSHIP\\lecture 1\\index.html')
})

app.get('/about', (req,res)=>{
    res.send('hello about page ')
})


// app listen on port 

app.listen(3001,()=>{
    console.log('server started ');
})