const { checkAuth } = require('../../modules/users');

const post = (req, res) => {
    if(require('../auth/checkAuth').checkAuth(req, res))
        return;
    
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
