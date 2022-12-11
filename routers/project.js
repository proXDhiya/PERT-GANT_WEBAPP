const express = require('express');

// Configure router
const router = express.Router();

// POST /project/new
router.post('/new', require('../controllers/project/POST_new'));

// Export router
module.exports = router;
