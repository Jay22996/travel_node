const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userCart_model = new Schema({
    uid: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    destination: {
        type: Schema.Types.ObjectId,
        ref: "destination"
    },
    start_date : Date,
    place : [{
        type : Schema.Types.ObjectId,
        ref : "place"
    }],
    hotels : [{
        type : Schema.Types.ObjectId,
        ref : "hotel"
    }],
    activity : [{
        type : Schema.Types.ObjectId,
        ref : "activity"
    }],
    route : String,
    current_date : 
    {
        type : Date,
        default : Date.now()
    }
});
module.exports = mongoose.model('usercart', userCart_model);