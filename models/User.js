const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, required: true },
    cohort: { type: String, required: true },
    email: { type: String, required: true },
    discordTag: { type: String, required: true },
    strikes: { type: Number},
    reports: { type: Array}
})
const User = mongoose.model('users', schema)

module.exports = User