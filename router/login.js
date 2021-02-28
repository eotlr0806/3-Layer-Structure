// Login Router Page

const express = require('express');
const router  = express.Router();

router.get('/', (req,res,next) => {
    console.log(`${req.ip} is connected!`);
    res.send('This is Login Page');
});

module.exports = router;