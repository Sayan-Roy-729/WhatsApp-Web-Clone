const mongoose = require('mongoose');

const schema = mongoose.Schema;

const whatsappSchema = schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
});

module.exports = mongoose.model('messagecontents', whatsappSchema);