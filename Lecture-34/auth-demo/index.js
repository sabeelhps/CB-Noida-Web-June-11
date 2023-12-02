const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcrypt');
const User = require('./models/User');
const session = require('express-session');


mongoose.connect('mongodb://127.0.0.1:27017/auth-demo-june23')
    .then(() => console.log('Connection Open!'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'we need a better secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

const isLoggedIn = (req, res, next) => {
    const { user_id } = req.session;
    if (!user_id) {
        return res.redirect('/login');
    }
    return next();
}

app.get('/register', (req, res) => {
    res.render('signup');
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await User.find({ username: username });
    if (existingUser.length) {
        return res.send('User with this username is aleady registered!');
    }
    if (!password) {
        return res.send('Empty Password')
    }

    const passwordHash = await bcrypt.hash(password, 10);
    await User.create({ username: username, hash: passwordHash });
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async(req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.send('Empty username or password!');
    }
    const user = await User.find({ username: username });
    if (!user) {
        return res.send('Invalid Username or Password');
    }

    const isValidPassword = await bcrypt.compare(password, user[0].hash);

    if (!isValidPassword) {
        return res.send('Invalid Usernam or Password!');
    }

    // Storing the identifier of a user to user's session
    req.session.user_id = user[0]._id;
    res.redirect('/secret');
})

app.get('/secret', isLoggedIn, (req, res) => {
    res.render('secret');
});

app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        return res.redirect('/login');
    })
})

app.listen(3000,()=>{
  console.log('server started at port 3000');
});