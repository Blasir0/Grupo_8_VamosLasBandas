function authMiddleware(req,res,next){
    if(!req.session.userLogged){
        return req.redirect('detailUser')
    }
    next();
}

module.exports = authMiddleware