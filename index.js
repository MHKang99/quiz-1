const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const usersRouter = require('./routes/user')
const clucksRouter = require('./routes/clucks')

const path = require('path');


const app = express();

app.set("view engine", "ejs");
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger("dev"));
app.use(cookieParser())

// req.body middleware
app.use(express.urlencoded({extended: true}));


// grab the username from cookies and store it into locals
app.use((req,res, next)=> {
    const username = req.cookies.username;
    res.locals.username = "";
    if (username) {
        res.locals.username = username;
    }
    next();
})


app.use('/', clucksRouter)

app.use('/', usersRouter)

const PORT = 3000;
const DOMAIN = 'localhost';
app.listen(PORT, DOMAIN, ()=> {
    console.log(`server running on http://${DOMAIN}:${PORT}`)
})