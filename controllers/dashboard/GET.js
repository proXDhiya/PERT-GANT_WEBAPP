const get = (req, res) => {
    if(require('../auth/checkNonAuth').checkNonAuth(req, res))
        return;

    const { error } = req.session;
    delete req.session.error;

    return res.render('dashboard', { error });
};

module.exports = get;
