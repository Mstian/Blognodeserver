const mongoose = require("mongoose");
var friendchainModel = new mongoose.Schema({
    link:{
        type:String,
        default:"",
    },
    name:{
        type:String,
        default:""
    },
})

let friendChain = mongoose.model('friends',friendchainModel)
module.exports = friendChain;
