const mongoose = require("mongoose");
var commentModel = new mongoose.Schema({
    commentator:{
        type:String,
        default:''
    },
    uid:{
        type:String,
        default:""
    },
    content:{
        type:String,
        default:'',
    },
    commentTime:{
        type:Number,
        default:0
    }
})
let comment = mongoose.model("comments",commentModel);
module.exports = comment