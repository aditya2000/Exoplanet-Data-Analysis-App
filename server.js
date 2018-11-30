const express = require('express')
const fs = require('fs')
//const csv = require('fast-csv')
const csv = require('csvtojson')
const app = express();

csv()
    .fromFile('oec.csv')
    .then((jsonObj) => {
        //console.log(jsonObj);
        app.get('/api/data', (req, res) => {
            res.send(jsonObj);
        })
    })

const port = 5000;
app.listen(port, console.log(`Server started at port ${port}`));