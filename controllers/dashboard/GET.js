const get = (req, res) => {
    if(require('../auth/checkNonAuth').checkNonAuth(req, res))
        return;

    const { error, user } = req.session;
    delete req.session.error;

    return res.render('dashboard', {
        error,
        user
    });
};

module.exports = get;
