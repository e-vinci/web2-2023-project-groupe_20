const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  dbUsername: { type: String, unique: true, required: true },
  dbPassword: { type: String, required: true },
});

module.exports = mongoose.model('users', userSchema);
