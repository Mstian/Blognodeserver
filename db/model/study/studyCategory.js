const mongoose = require('mongoose');

var studyCategoryModel = new mongoose.Schema({
    categoryName:{
        type:String,
        default:'',
    },
    categoryId:{
        type:String,
        default:''
    }
})
var studyCategory = mongoose.model('studyCategories',studyCategoryModel);
module.exports = studyCategory;