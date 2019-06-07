const mongoose = require('mongoose');

const Subscription = new mongoose.Schema({
  email: String,
});

module.exports = mongoose.model('Subscription', Subscription);