const express = require('express');
const app = express();

const port = 5000;

app.get('/',(req,res)=>{
    console.log("hello");
    res.send('hello world')
});

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})