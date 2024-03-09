const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trip_model = new Schema({
    destination : String,
    image : String,
    places : [String],
    hotels : [String],
    Activities : [String],
    price : Number,
    ratings : Number,
    discription : String
});
module.exports = mongoose.model('trips', trip_model);
