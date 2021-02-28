// This is User Router Page

const express = require('express');
const router  = express.Router();

// ip:port/user
router.get('/', (req,res,next) =>{
    console.log(`${req.ip} is connected in /user`);
    res.send('hahaha user page');
});

module.exports = router;