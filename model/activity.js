const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activity_model = new Schema({
  name : String,
  image : String,
  description : String,
  place : {
    type : Schema.Types.ObjectId,
    ref : "place"
  },
  price : String
});
module.exports = mongoose.model('activity', activity_model);