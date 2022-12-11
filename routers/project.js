const express = require('express');

// Configure router
const router = express.Router();

// POST /project/new
router.post('/new', require('../controllers/project/POST_new'));

// GET /project/:id
router.get('/:id', require('../controllers/project/GET_id'));

// Export router
module.exports = router;
