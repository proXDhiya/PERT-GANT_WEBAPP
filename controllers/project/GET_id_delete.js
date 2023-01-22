const { deleteProjectById } = require('../../modules/projects');

const post_id_delete = (req, res) => {
    if(require('../auth/checkNonAuth').checkNonAuth(req, res))
        return;

    const { id } = req.params;
    if(deleteProjectById(parseInt(id))) {
        res.redirect('/dashboard');
        return;
    }

    req.session.error = 'Project not found';
    res.redirect('/dashboard');
};

module.exports = post_id_delete;
