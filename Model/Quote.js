const mongoose = require('mongoose');
const { Schema } = mongoose;

const quoteSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  sdg: {
    type: [Number],
    required: true,
  },
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
