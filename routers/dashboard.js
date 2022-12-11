const express = require('express');

// Configure routes
const router = express.Router();

// GET /dashboard
router.get('/', require('../controllers/dashboard/GET'));

// Export the router
module.exports = router;
