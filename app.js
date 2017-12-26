const express = require('express');
const app = express();
const mysql = require('mysql');
const mysqlConfig = require('./config.json').mysql;
const connection = mysql.createConnection(mysqlConfig);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/playlists', function (req, res) {

    // connection.query('SELECT * from playlists', function (error, results, fields) {
    //     if (error) throw error;
    //     res.send(results);
    // });

    res.send([{
        id: 12,
        title: 'Stories',
        created: "2017-02-07T19:04:15.000Z",
        modified: "2017-02-07T20:19:56.000Z",
        user_id: 4
    }, {
        id: 13,
        title: 'Rap Fun',
        created: "2017-02-08T09:34:56.000Z",
        modified: "2017-02-08T09:34:56.000Z",
        user_id: 4
    }, {
        id: 14,
        title: 'Rap Feats',
        created: "2017-06-02T21:17:47.000Z",
        modified: "2017-06-02T21:41:03.000Z",
        user_id: 4
    }]);
});

app.post('/playlist', (req, res) => {

    // send websocket here 
});

app.listen(2612, function () {
    console.log('Example app listening on port 2612!');
});
