const { addNewProject } = require('../../modules/projects');

const post_new = (req, res) => {
    if(require('../auth/checkNonAuth').checkNonAuth(req, res))
        return;

    const { projectName, projectDescription, projectType } = req.body;

    if(addNewProject(req.session.user.username, projectName, projectDescription, projectType)) {
        req.session.seccess = 'Project created successfully!';
        return res.redirect('/dashboard');
    }

    req.session.error = 'An error occurred while creating the project!';
    return res.redirect('/dashboard');
};

// Export controller
module.exports = post_new;
