

const express = require('express');

var app = express();


app.get('/',(req, res) => {
    res.send({
        name : 'Bharath',
        likes : [
            'Driving',
            'Coding',
            'Travelling'
        ]
    });
});


app.get('/about',(req, res) => {
    res.send('<h3>About Page<h3>');
});

app.get('/bad', (req, resp) => {
    resp.send({errorMessage : 'Bad request'});
    
});

app.listen(3000);

