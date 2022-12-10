const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

exports.checkAuth = (username, password) => {
    // read json file
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8'));

    // check if user exists
    const user = users.find(user => user.username === username);

    // if user exists, check password
    if (user) {
        const match = bcrypt.compareSync(password, user.password);
        if (match) {
            return user;
        }
    }

    return false;
};
