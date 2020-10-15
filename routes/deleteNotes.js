const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.delete("/mahasiswa", (req, res) => {
    const query = req.query;
    const id = query.id;
    db.remove(id)
    res.send(OK)
});

app.delete("/mahasiswa/all", (req, res) => {
    db.removeAll()
    res.send(OK)
});

module.exports = app