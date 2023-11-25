const express = require('express');
const app = express();

// app.use((req, res, next) => {
//     res.send('HIJACK BY MY APP.USE!!!');
// });

app.use((req, res, next) => {
    req.magicNumber = 37;
    console.log('My first middleware');
    return next();
    console.log('First middlware after calling next');
});

app.use((req, res, next) => {
    console.log('My second middleware');
    next();
})

app.get('/hello', (req, res) => {
    const { magicNumber } = req;
    console.log('Inside Hello route')
    res.send(`Hello from the server, Magic number : ${magicNumber}`);
});

app.get('/cat', (req, res) => {
    res.send('Mooouuwwwww');
});


const verify = (req, res, next) => {
    const { password } = req.query;
    if (password !== 'apple') {
        return res.send('Invalid Password');
    }
    return next();
}

app.get('/secret',verify, (req, res) => {
    res.send('Sometime i wear headphone in public so that i dont have to talk to anyone!');
});


app.listen(3000,()=>{
  console.log('server started at port 3000');
});