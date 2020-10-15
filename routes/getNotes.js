const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.get("/mahasiswa", (req, res) => {
    const id = req.query.id
    if (id){
        res.send(db.get(id))
    } else {
        res.send(db.getAll())
    }

});

module.exports = app

// TODO 1. add branch called "get-single-note"