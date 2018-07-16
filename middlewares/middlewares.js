var middlewares = {};

// Check if a user is logged in.
middlewares.isLoggedIn = function (req, res, next) {
    console.log(req.isAuthenticated());
    
    if (req.isAuthenticated()) {
        return next();
    }
    console.log('TOBE REDIRECTED');
    //res.redirect('/signin');
}

module.exports = middlewares;
