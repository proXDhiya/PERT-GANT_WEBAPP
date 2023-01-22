const { createNewUser } = require('../../modules/users');

const post = (req, res) => {
    if(require('../auth/checkAuth').checkAuth(req, res))
        return;

    const { username, password, password2 } = req.body;

    if (password !== password2) {
        req.session.error = 'Passwords do not match';
        return res.redirect('/register');
    }

    if(createNewUser(username, password)) {
        return res.redirect('/');
    }

    req.session.error = 'Username already exists';
    return res.redirect('/register');
};

module.exports = post;
