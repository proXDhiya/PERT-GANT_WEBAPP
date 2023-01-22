const express = require('express');

// Configure router
const router = express.Router();

// GET /register
router.get('/', require('../controllers/register/GET_register'));

// POST /register
router.post('/', require('../controllers/register/POST_register'));

// Export router
module.exports = router;
