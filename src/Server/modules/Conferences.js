const mongoose = require('mongoose');

const ConferenceSchema = new mongoose.Schema({


    title:{
        type : String,
        required:true,
    },
    about:{
        type : String,
        required:true,
    },
    presentation:{
        type : String,
        required:true,
    },
    workshop:{
        type : String,
        required:true,
    },
    email:{
        type : String,
        required:true,
    },
    date:{
        type : Date,
        required:true,
    },
    from:{
        type : String,
        required:true,
    },
    to:{
        type : String,
        required:true,
    },
    place:{
        type : String,
        required:true,
    },
    amount:{
        type: Number,
        required:true,
    }
});

const Conference = mongoose.model("conferencedatas",ConferenceSchema);
module.exports = Conference;