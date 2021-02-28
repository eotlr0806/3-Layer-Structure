// Call back hell app.js
// const loader = require('./loader');

const express = require('express');
const app = express();
const config  = require('./config/index.js');
const router  = require('./routers/index.js');

app.get('/',(req,res,next) => {
    res.send('Welecome!');
});
app.use('/login', router.login);
app.use('/user', router.user);

app.listen(config.server.port , () => {
    console.log(`${config.server.port} is opened.!!`);
})


