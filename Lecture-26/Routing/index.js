const express = require('express');
const app = express();

app.get('/cats', (req, res) => {
    res.send('Meeooowww'); 
});

app.get('/dog', (req, res) => {
    res.send('Wooof Woof');
});

app.get('/signup', (req, res) => {
    res.send('Signing You Up: GET');
});

app.post('/signup', (req, res) => {
    res.send('Signing You Up : POST');
});

app.patch('/user/:userId', (req, res) => {
    const { userId } = req.params;
    res.send(`Updating user with userId : ${userId}`);
});

app.delete('/user/:userId', (req, res) => {
    const { userId } = req.params;
    res.send(`Deleting user with userId : ${userId}`);
})

app.listen(3000,()=>{
  console.log('server started at port 3000');
});