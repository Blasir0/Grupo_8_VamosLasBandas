function userLoggedMiddleware(req,res,next){
    res.locals.isLogged = true

    next();
}

module.exports = userLoggedMiddleware