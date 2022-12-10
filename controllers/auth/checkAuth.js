exports.checkAuth = (req, res) => {
    if (req.session.user) {
        req.session.error = 'This action is not allowed.';
        res.redirect('/dashboard');
        return true;
    }
};
