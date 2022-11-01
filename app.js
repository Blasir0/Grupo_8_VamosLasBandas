const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('public'));


app.listen(PORT, ()=>{
    console.log('Servidor funcionando en Puerto '+PORT);
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});