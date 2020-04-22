const mongoose = require("mongoose");
var articleCraftModel = new mongoose.Schema({
    title:{ //标题
        type:String,
        default:''
    },
    link:{ //链接
        type:String,
        default:''
    },
    shareUser:{ //分享人
        type:String,
        default:''
    },
    author:{
        type:String,
        default:''
    },
    uid:{ //用户id
        type:String,
        default:''
    },
    shareTime:{ //分享时间
        type:String,
        default:Date.now()
    },
    categoryName:{ //类别
        type:String,
        default:''
    },
    categoryId:{
        type:Number,
        default:''
    },
    check:{ //审核
        type:Boolean,
        default:true
    },
    isHot:{ //是否热门
        type:Boolean,
        default:false
    },
    isLocal:{ //是否本站
        type:Boolean,
        default:true
    },
    content:{ //文章内容
        type:String,
        default:''
    },
    fromCraft:{
        type:Boolean,
        default:true
    },
    content_md:{//md格式
        type:String,
        default:''
    }
})

var articleCraft = mongoose.model('articleCrafts',articleCraftModel);

module.exports = articleCraft;