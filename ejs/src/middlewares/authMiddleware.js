function authMiddleware(req,res,next){
    if(!req.session.userLogged){
        return req.redirect('users/detailUser')
    }
    next();
}

module.exports = authMiddleware