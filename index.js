const express = require('express');
const app = express();
const path = require('path');
const sassMiddleware = require('node-sass-middleware');
require('dotenv').config()

// set sass middleware
app.use(
    sassMiddleware({
        src: path.join(__dirname, '/public/styles/scss'),
        dest: path.join(__dirname, '/public/styles'),
        debug: false,
        outputStyle: 'expanded',
        prefix: '/styles'
    }),
    express.static(__dirname + '/public')
);

// session cookie
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// parse form input from user
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// set view engine
const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

// create routes file
const applicationRouter = require('./routes/routes');
app.use('/', applicationRouter);

// create favicon
app.use('/favicon.ico', express.static('images/favicon.ico'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000. Ctrl^c to quit.');
})
