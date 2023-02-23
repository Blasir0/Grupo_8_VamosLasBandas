function guestMiddleware(req,res,next){
    if(req.session.userLogged){
        res.redirect('/users/detailUser')
    }
    next();
}

module.exports = guestMiddleware