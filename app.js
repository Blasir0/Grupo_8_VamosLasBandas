//requires
const express=require('express');
const app=express();
const path=require('path')
const mainRouter = require('./routers/mainRouters')

//llamado a middle
app.use(express.static('public'));
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//llamado al puerto
PORT = 3030;
app.listen(PORT, ()=>console.log("Servidor corriendo en el puerto " + PORT))

//rutas

app.use('/', mainRouter)