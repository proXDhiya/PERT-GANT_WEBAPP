const express = require('express');

// Configure router
const router = express.Router();

// POST /project/new
router.post('/new', require('../controllers/project/POST_new'));

// POST /project/:id/save
router.post('/:id/save', require('../controllers/project/POST_id_save'));

// GET /project/:id/delete
router.get('/:id/delete', require('../controllers/project/GET_id_delete'));

// GET /project/:id
router.get('/:id', require('../controllers/project/GET_id'));

// Export router
module.exports = router;
