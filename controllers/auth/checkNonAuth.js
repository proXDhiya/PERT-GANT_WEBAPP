exports.checkNonAuth = (req, res) => {
    if (!req.session.user) {
        req.session.error = 'You must be logged in to view this page.';
        res.redirect('/');
        return true;
    }
};
