const mongoose = require('mongoose');

const Users = mongoose.Schema({
    name: { type: String },
    email: { type: String},
    password: { type: String},
    todo: { type: Array },
    currentLevel: {type: String},
    tasksDone: {type: Number},
    bag: {type: Array}

}, { versionKey: false });
module.exports.User = mongoose.model('user', Users);