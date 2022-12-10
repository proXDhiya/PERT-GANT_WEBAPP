exports.checkAuth = (req, res) => {
    if (req.session.user) {
        return res.render('dashboard', {
            user: req.session.user
        });
    }
};
