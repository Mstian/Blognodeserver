const mongoose = require('mongoose');
var userModel = new mongoose.Schema({
    us:{
        type:String,
        default:''
    },
    ps:{
        type:String,
        default:'',
    },
    uid:{
        type:String,
        default:''
    }
})

var user = mongoose.model('users',userModel);
module.exports = user;