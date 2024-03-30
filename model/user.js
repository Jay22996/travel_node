const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_model = new Schema({
  name : String,
  email : String,
  password : String,
  contact : String
});
module.exports = mongoose.model('user', user_model); 