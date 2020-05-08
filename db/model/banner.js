const mongoose = require('mongoose');
const bannerModel = new mongoose.Schema({
    url:{
        type:String,
        default:""
    },
    link:{
        type:String,
        default:"http://www.tianleilei.cn"
    }
})
let banner = mongoose.model('banners',bannerModel);
module.exports = banner;
