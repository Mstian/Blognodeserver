const mongoose = require('mongoose');
var studyModel =new mongoose.Schema({
    title:{
        type:String,
        default:""
    },
    link:{
        type:String,
        default:""
    },
    categoryid:{
        type:String,
        default:'1'   
    }
}) 

var study = mongoose.model('studies',studyModel);
module.exports = study;