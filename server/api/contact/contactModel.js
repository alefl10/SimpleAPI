const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const {
  Schema,
} = mongoose;

const contactSchema = new Schema({
});

module.exports = mongoose.model('contact', contactSchema);
