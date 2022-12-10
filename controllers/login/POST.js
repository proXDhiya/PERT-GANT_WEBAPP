const { checkAuth } = require('../../modules/users');

const post = (req, res) => {
    require('../auth/checkauth').checkAuth(req, res);
    
    const { username, password } = req.body;
    
    const user = checkAuth(username, password);
    if (user) {
        req.session.user = user;
        return res.redirect('/dashboard');
    }

    req.session.error = 'Invalid username or password';
    return res.redirect('/');
};

module.exports = post;
