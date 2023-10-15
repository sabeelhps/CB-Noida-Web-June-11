const express = require('express');
const app = express();

const response = {
    responseCode: 200,
    products: [
        {
            id: 1,
            name: 'Macbook'
        },
        {
            id: 2,
            name: 'Iphone'
        }
    ]
}

// app.use((req, res) => {
//     // console.log(req);
//     // console.log(res);
//     // res.send('Hello from express server!')
//     // res.send('<h1>This is some h1</h1>')
//     res.send(response);
// })

app.get('/cat', (req, res) => {
    res.send("Meeowwww");
});

app.get('/dog', (req, res) => {
    res.send("Woof WOof!!!");
});

app.all("*", (req, res) => {
    res.send('You are requesting the wrong url!');
})

app.listen(3000, () => {
    console.log('express server started at port : 3000');
})






