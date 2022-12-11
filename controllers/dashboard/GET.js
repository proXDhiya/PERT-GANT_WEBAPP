const get = (req, res) => {
    if(require('../auth/checkNonAuth').checkNonAuth(req, res))
        return;

    let { error, user, seccess } = req.session;

    delete req.session.error;
    delete req.session.seccess;

    return res.render('dashboard', {
        error,
        user,
        seccess
    });
};

module.exports = get;
