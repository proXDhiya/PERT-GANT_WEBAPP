const post = (req, res) => {
    if(require('../auth/checkAuth').checkAuth(req, res))
        return;

    
};

module.exports = post;
