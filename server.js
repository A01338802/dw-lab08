var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [{name: 'David', phone: 5512345, email: 'david@david.com', id: 'david312'},
{name: 'Juan', phone: 55666777, email: 'juan@david.com', id: 'juanito'}];

var waiting = [{name: 'X', phone: 123455, email: 'x@david.com', id: 'x456'}];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/api/tables', (req, res) => {
    res.json(tables);
});

app.get('/api/waiting', (req, res) => {
    res.json(waiting);
});

app.post('/api/tables', (req, res) => {
    var newReserve = req.body;
    if (tables.length <5) {
        tables.push(newReserve);
        res.json({success: true});
    } else {
        waiting.push(newReserve);
        res.json({success: false});
    }
    
    
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})