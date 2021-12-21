const express = require('express');
const req = require('express/lib/request');
const app = express();

app.use(express.json());

var userlar = [
    {
        'name': 'A',
        'token': 'ksnglknfsd2lk2n',
    },
    {
        'name': 'B',
        'token': 'efsdfg78dsgsdfg',
    }
];

app.get('/', ((req, res) => {
    console.log('Root');
    res.end();
}));

app.get('/users/:id', (req, res) => {
    console.log(req.params);

    const topilganUser = userlar.find(user => user.id === parseInt(req.params.id));
    if (topilganUser) {
        res.json(topilganUser);
    } else {
        res.status(404).send("Page Not Found");
    }
    res.end();
});

app.post('/users', (req, res) => {
    const newUser = {
        name: req.body.name,
        token: req.body.token,
    }
    userlar.push(newUser);
    res.json(newUser);
    res.end();
});

app.listen(9090);