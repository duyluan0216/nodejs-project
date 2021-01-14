const express = require('express');
const path = require('path');
var morgan = require('morgan');
var handlebars  = require('express-handlebars');
const { resolveSoa } = require('dns');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Connect db
db.connect();

// HTTP logger
app.use(morgan('combined'));


// Template engine
app.engine("hbs", handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

//route init
route(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})