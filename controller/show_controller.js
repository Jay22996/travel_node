var destination = require("../model/destintation")
var hotel = require("../model/hotels")
var places = require("../model/place")
var cart = require('../model/userCart')
var jwt = require('jsonwebtoken');
// var Storage = require('node-persist');Storage.init()

exports.add_destination = async (req,res) => {

    var uid = await jwt.verify(req.headers.token, 'pass');
    req.body.uid = uid.id
    var did = req.params.id;
    req.body.did = did;
    var data = await cart.create(req.body)

    res.status(201).json({
        status : "Success",
        message : "Destination Added",
        data
    })
}

exports.show_places = async (req,res) => {

    var d_id = req.params.d_id

    var places = await destination.findById(d_id).populate("place");

    res.status(201).json({
        status : "Success",
        message : "Places to Visit",
        places
    })
}

exports.add_places = async (req,res) => {

    var p_id = req.body.pid;

    var data = await cart.findOneAndUpdate({"place" : place},req.body)

    res.status(201).json({
        status : "Success",
        message : "Places Added by User",
        data
    })
}

exports.view_hotels = async (req,res) => {

    var pid = req.body.pid
    var hotels = []
    for(var p_id of pid)
    {
        var data = await places.findById(p_id).populate("hotel")
        hotels.push(data)
    }

    res.status(201).json({
        status : "Success",
        message : "Hotels to Checkout",
        hotels
    })
}

exports.add_hotels = async (req,res) => {

    var h_id = req.body.hid;

    var data = await cart.findOneAndUpdate({"hotel" : hotel},req.body)

    res.status(201).json({
        status : "Success",
        message : "Hotels Added by User",
        data
    })
}

exports.view_activity = async (req,res) => {

    var pid = req.body.pid
    var activities = []
    for(var p_id of pid)
    {
        var data = await places.findById(p_id).populate("activity")
        activities.push(data)
    }

    res.status(201).json({
        status : "Success",
        message : "Fun Activities",
        activities
    })
}

exports.add_activities = async (req,res) => {

    var a_id = req.body.aid;

    var data = await cart.findOneAndUpdate({"activity" : activity},req.body)

    res.status(201).json({
        status : "Success",
        message : "Activities Added by User",
        data
    })
}