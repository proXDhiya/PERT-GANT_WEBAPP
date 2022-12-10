exports.checkAuth = (req, res) => {
    if (req.session.user) {
        return res.render('dashboard', {
            user: req.session.user
        });
    }

    return res.render('/login', {
        error: 'You must be logged in to view this page.'
    });
};
