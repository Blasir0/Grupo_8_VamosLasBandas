//requires
const express=require('express');
const app=express();
const path=require('path')
const mainRouter = require('./routers/mainRouters')
const methodOverride =  require('method-override')

//llamado a middle
app.use(express.static('public'));
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//llamado al puerto
PORT = 3030;
app.listen(PORT, ()=>console.log("Servidor corriendo en el puerto " + PORT))

//rutas

app.use('/', mainRouter)
app.use(methodOverride('_method'))
app.use(express.json());
app.use(cookieParser());

//error 404
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.path = req.path;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});