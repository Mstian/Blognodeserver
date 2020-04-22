const mongoose = require("mongoose");
var toolsModel = new mongoose.Schema({
    name:{
        type:String,
        default:''
    },
    link:{
        type:String,
        link:''
    }
})

let tools = mongoose.model('tools',toolsModel);
module.exports = tools;