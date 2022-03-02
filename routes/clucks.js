const express = require('express');
const knex = require('../db/client')


const router = express.Router();

router.get('/tasks', (req,res)=> {
    // res.render('tasks/index')
    knex('tasks')
    .select("*")
    .orderBy("created_at", "desc")
    .then(data => {
        res.render("tasks/index", {
            tasks: data
        })
    })
})



router.get('/', (req, res) => {
    knex('clucks')
    .select('*')
    .orderBy('created_at',"desc")
    .then(data => {
        res.render('clucks', {
            clucks: data
        })
    })
})

router.get('/newCluck', (req, res)=> {
    res.render("newCluck")
})

router.post('/makeNew', (req, res)=> {
    const newCluck = {
        username: req.cookies.username,
        img_url: req.body.img_url,
        content: req.body.content
    }
    knex('clucks')
    .insert(newCluck)
    .then(data => {
        res.redirect('/')
    })
})












module.exports = router