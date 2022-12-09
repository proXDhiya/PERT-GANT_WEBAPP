const express = require('express');
const session = require('express-session');

// Create an express app
const app = express();

// Configure body-parser to read POST data
app.use(express.urlencoded({ extended: true }));

// Configure public folder
app.use(express.static('public'));

// Configure view engine
app.set('view engine', 'pug');

// Configure view folder
app.set('views', 'views');

// Configure no-cache headers
app.use((req, res, next) => {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
});

// Configure session    
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    sameSite: true
}));

// Configure routes


// Start the server
const port = process.env.PORT || 3000;
app.listen(port);
