const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({
    mahasiswa: [],
}).write();

function getAll() {
    return db
    .get('mahasiswa')
    .value()
}

function get(id) {
    const parsedId = parseInt(id)
    return db
    .get('mahasiswa')
    .find({ id: parsedId })
    .value()
}

function add(body) {
    db.get ('mahasiswa')
    .push(body)
    .write()
}

function edit(id, body) {
const parsedId = parseInt(id)
db.get('mahasiswa')
.find({id: parsedId})
.assign(body)
.write()
}

function remove(id) {
    const parsedId = parsedInt(id)
    db.get('mahasiswa')
    .remove({ id: parsedId})
    .write()
}
// TODO 1. comment out all the route handler inside their file EXECPT the GET handler
// TODO 5. export all of created function by exporting an object
const functions = {
    getAll,
    get,
    add,
    edit,
    remove
}
module.exports = functions