const express = require('express');

// Configure routes
const router = express.Router();

// GET /login
router.get('/', (req, res) => {
    require('./auth/checkauth').checkAuth(req, res);
    
    res.render('login');
});

// POST /login
router.post('/', (req, res) => {

});

// Export the router
module.exports = router;
