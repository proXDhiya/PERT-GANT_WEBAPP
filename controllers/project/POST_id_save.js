const { saveProjectData } = require('../../modules/projects');

const post_id_save = (req, res) => {
    if(require('../auth/checkNonAuth').checkNonAuth(req, res))
        return;

    const { id } = req.params;
    const { projectData } = req.body;

    saveProjectData(id, projectData);
    res.redirect(`/project/${id}`);
};

module.exports = post_id_save;
