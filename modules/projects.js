const fs = require('fs');
const path = require('path');

exports.addNewProject = (username, name, desc, type) => {
    const project = {
        projectOwner: username,
        projectName: name,
        projectDescription: desc,
        projectType: type === 1 ? 'web' : type === 2 ? 'mobile' : 'desktop',
    }

    // get projects from file
    const projects = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/projects.json'), 'utf8'));

    // if projects is empty, set id to 1
    if (projects.length === 0) {
        project.id = 1;
    }

    // else, set id to last project id + 1
    else {
        project.id = projects[projects.length - 1].id + 1;
    }

    // last update
    project.lastUpdate = Date.now();

    // push project to projects
    projects.push(project);

    // write projects to file
    fs.writeFileSync(path.join(__dirname, '../database/projects.json'), JSON.stringify(projects, null, 4));

    return true;
};
