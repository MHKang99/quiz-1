const express = require('express');
const router = express.Router();

// set up for using cookie
const cookieParser = require('cookie-parser')
router.use(cookieParser());

router.get('/login',(req,res)=> {
    res.render("login")
})

router.post('/sign_in', (req, res)=> {
    const username = req.body.username;
    res.cookie('username',username,{maxAge: 1000 * 60 * 60 * 24 * 7});
    res.redirect("/");
})

router.post("/sign_out", (req, res) => {
    res.clearCookie("username");
    res.redirect("/");
})








module.exports = router