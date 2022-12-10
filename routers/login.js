const express = require('express');

// Configure routes
const router = express.Router();

// GET /login
router.get('/', require('../controllers/login/GET'));

// POST /login
router.post('/', require('../controllers/login/POST'));

// Export the router
module.exports = router;
