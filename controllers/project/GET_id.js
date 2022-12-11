const { getProjectById } = require('../../modules/projects');

const get_id = (req, res) => {
    if(require('../auth/checkNonAuth').checkNonAuth(req, res))
        return;

    const { id } = req.params;

    // check if the user is the owner of the project
    // get project by id
    const project = getProjectById(id);

    // if project is undefined, return 404
    if(project === undefined || project === null) {
        req.session.error = 'Project not found!';
        return res.redirect('/dashboard');
    }


    // if project is not owned by the user, return 403
    if(project.projectOwner !== req.session.user.username) {
        req.session.error = 'You have no permission to access this project!';
        return res.redirect('/dashboard');
    }    


    // if project is owned by the user, return 200
    return res.render('project', {
        project: project,
    });
};

// Export controller
module.exports = get_id;
