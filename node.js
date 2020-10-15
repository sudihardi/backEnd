const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
const getNotes = require('./routes/getNotes')
const editNotes = require('./routes/editNotes')
const addNotes = require('./routes/addNotes')
const deleteNotes = require('./routes/deleteNotes')
app.use(getNotes)
app.use(editNotes)
app.use(addNotes)
app.use(deleteNotes)

app.get("/", (req, res) => {
    res.send("hello there!");
});

app.listen(4000, () => {
    console.log(`server is listening on http://localhost:4000`);
});