const express = require('express');
const req = require('express/lib/request');
const app = express();

app.use(express.json());

var userlar = [
    {
        'name': 'Jahongir',
        'age': '19',
    },
    {
        'name': 'Abdujalil',
        'age': '25',
    },
    {
        'name' : 'Ramazon',
        'age' : '24'
    }
];

app.get('/', ((req, res) => {
    console.log('Root');
    res.end();
}));

// app.get('/users', (req, res) => {
//     console.log(req.params);

//     const topilganUser = userlar.find(user => user.id === parseInt(req.params));
//     if (topilganUser) {
//         res.json(topilganUser);
//     } else {
//         res.status(404).send("Page Not Found");
//     }
//     res.end();
// });

app.get('/users', (req, res) => {
    res.send(userlar);
})

app.post('/users', (req, res) => {
    const newUser = {
        name: req.body.name,
        token: req.body.token,
    }
    userlar.push(newUser);
    res.json(newUser);
    res.end();
});

app.listen(1111);