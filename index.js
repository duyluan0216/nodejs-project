const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
var morgan = require('morgan');
var handlebars  = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Connect db
db.connect();

// HTTP logger
app.use(morgan('combined'));


// Template engine
app.engine("hbs", handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a+b,
    }
}));
app.set('view engine', 'hbs');

//route init
route(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})