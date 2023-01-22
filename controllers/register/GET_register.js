const get = (req, res) => {
    if(require('../auth/checkAuth').checkAuth(req, res))
        return;

    const { error } = req.session;
    delete req.session.error;

    res.render('register', {
        error
    });
};

module.exports = get;
