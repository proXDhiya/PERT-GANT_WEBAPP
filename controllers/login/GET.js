const get = (req, res) => {
    require('../auth/checkauth').checkAuth(req, res);

    const { error } = req.session;
    delete req.session.error;
    
    res.render('login', { error });
};

module.exports = get;
