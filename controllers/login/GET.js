const get = (req, res) => {
    if(require('../auth/checkAuth').checkAuth(req, res))
        return;

    const { error } = req.session;
    delete req.session.error;
    
    return res.render('login', { error });
};

module.exports = get;
