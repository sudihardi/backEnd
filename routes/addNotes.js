const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.post("/mahasiswa", (req, res) => {
    const body = req.body;
    db.add(body);
    res.send(body);
});

module.exports = app