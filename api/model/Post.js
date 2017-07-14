/**
 * Created by danielhollcraft on 7/14/17.
 */
const mongoose = require('mongoose');

const model = mongoose.model('Post', new mongoose.Schema({
  title:  String,
  body:   String
}));

module.exports = model;