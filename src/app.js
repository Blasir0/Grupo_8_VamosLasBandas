//requires
const express=require('express');
const app=express();
const path=require('path')
const mainRouter = require('./routers/mainRouters')
const methodOverride =  require('method-override')

//llamado a middle
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//llamado al puerto
PORT = 3030;
app.listen(PORT, ()=>console.log("Servidor corriendo en el puerto " + PORT))

//rutas

app.use('/', mainRouter)
app.use(methodOverride('_method'))
app.use(express.json());