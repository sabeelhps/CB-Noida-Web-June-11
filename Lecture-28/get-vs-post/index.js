const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true,limit:'10mb', parameterLimit:'5000' }));
app.use(express.json({limit:'10mb'}));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/users', (req, res) => {
    const { email, city } = req.query;
    res.send(`You are making request from city : ${city} via email: ${email}`);
});

app.post('/users', (req, res) => {
    console.log(req.body);
    res.send('YOU MADE THE POST REQUEST!!!');
});


app.listen(3000,()=>{
  console.log('server started at port 3000');
});