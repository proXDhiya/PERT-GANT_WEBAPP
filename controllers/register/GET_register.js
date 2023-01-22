const get = (req, res) => {
    if(require('../auth/checkAuth').checkAuth(req, res))
        return;

    res.render('register', { title: 'Register' });
};

module.exports = get;
