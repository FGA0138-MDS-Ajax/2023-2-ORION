const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    adminId: Number,
    name: String,
    password: String
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;