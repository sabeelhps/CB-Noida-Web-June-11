const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

app.get('/greet', (req, res) => {
    const { username } = req.query;
    if (username) {
        req.session.username = username;
    }
    res.send(`Hello ${username}`);
});

app.get('/get-username', (req, res) => {
    const { username = 'Anonymous' } = req.session;
    res.send(`Your username is : ${username}`);
});

app.get('/viewcount', (req, res) => {
    if (req.session.viewcount) {
        req.session.viewcount += 1;
    } else {
        req.session.viewcount = 1;
    }
    res.send(`You are viewing this page ${req.session.viewcount} times`);
})

app.listen(3000,()=>{
  console.log('server started at port 3000');
});