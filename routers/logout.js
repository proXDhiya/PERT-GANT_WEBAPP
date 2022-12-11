const express = require('express');

// Configure router
const router = express.Router();

// GET /logout
router.get('/', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// Export router
module.exports = router;
