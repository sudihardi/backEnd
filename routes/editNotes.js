const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.patch("/mahasiswa", (req, res) => {
    const body = req.body;
    const id = body.id;
    db.edit(id, body)
    res.send(body);
});

module.exports = app