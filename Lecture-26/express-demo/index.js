const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    const { searchItem ='Nothing' } = req.query;
    res.send(`You are search for ${searchItem}`); 
});

// https://leetcode.com/problemset/all/?page=2

// https://www.reddit.com/r/cats/
// https://www.reddit.com/r/dogs/
// https://www.reddit.com/r/apple/
// https://www.reddit.com/r/Watches/

app.get('/r/:subredit', (req, res) => {
    const { subredit } = req.params;
    res.send(`You are requesting ${subredit} subredit!!!!!!!!`); 
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});