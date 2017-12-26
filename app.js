const express = require('express');
const app = express();
const mysql = require('mysql');
const mysqlConfig = require('./config.json').mysql;
const connection = mysql.createConnection(mysqlConfig);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/playlists', function (req, res) {

    connection.query('SELECT * from playlists', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    });
});

app.listen(2612, function () {
    console.log('Example app listening on port 2612!');
});
