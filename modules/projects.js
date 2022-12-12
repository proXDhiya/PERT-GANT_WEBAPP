const fs = require('fs');
const path = require('path');

exports.addNewProject = (username, name, desc, type) => {
    const project = {
        projectOwner: username,
        projectName: name,
        projectDescription: desc,
        projectType: type === '1' ? 'web' : type === '2' ? 'mobile' : 'desktop',
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

    // last update time format
    const lastUpdate = new Date();
    project.lastUpdate = lastUpdate.getFullYear() + '-' + (lastUpdate.getMonth() + 1) + '-' + lastUpdate.getDate() + ' ' + lastUpdate.getHours() + ':' + lastUpdate.getMinutes() + ':' + lastUpdate.getSeconds();

    // push project to projects
    projects.push(project);

    // write projects to file
    fs.writeFileSync(path.join(__dirname, '../database/projects.json'), JSON.stringify(projects, null, 4));

    return true;
};


exports.getProjectsByUser = (username) => {
    // get projects from file
    const projects = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/projects.json'), 'utf8'));

    // filter projects by username
    const filteredProjects = projects.filter(project => project.projectOwner === username);

    // delete projectOwner & data from projects
    filteredProjects.forEach(project => {
        delete project.projectOwner;
        delete project.lastUpdate;
    });

    // sort project by lastUpdate from latest
    

    return filteredProjects;
};


exports.getProjectById = (id) => {
    // get projects from file
    const projects = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/projects.json'), 'utf8'));

    // filter projects by id
    const filteredProjects = projects.filter(project => project.id == id);

    // if project not found
    if (filteredProjects.length === 0) {
        return null;
    }

    // else, return project
    return filteredProjects[0];
};
