function guestMiddleware(req,res,next){
    if(req.session.userLogged){
        return req.redirect('detailUser')
    }
    next();
}

module.exports = guestMiddleware