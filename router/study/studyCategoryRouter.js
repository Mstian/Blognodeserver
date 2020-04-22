const express = require('express');
const router = express.Router();
const StudyCategory = require('../../db/model/study/studyCategory');
const utils = require('../../utils/index')
/**
 * @api {post} /study/addcategory 新增学习分类
 * @apiName 新增学习分类
 * @apiGroup Study
 * @apiParam {String} categoryName 分类名称 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.post('/addcategory',(req,res)=>{
    let {categoryName} = req.body;
    if(categoryName && categoryName.length > 0){
        StudyCategory.insertMany({
            categoryName,
            categoryId:utils.random()
        })
        .then((data)=>{
            res.send({
                err:0,
                msg:"新增学习分类成功"
            })
        })
        .catch((err)=>{
            res.send({
                err:-1,
                msg:'网络连接错误，请稍后重试'
            })
        })
    }else{
        res.send({
            err:-1,
            msg:'参数错误'
        })
    }
    
});

/**
 * @api {get} /study/getcategory 获取学习分类
 * @apiName 获取学习分类
 * @apiGroup Study
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.get('/getcategory',(req,res)=>{
    StudyCategory.find()
    .then((data)=>{
        if(data){
            res.send({
                err:0,
                msg:'获取学习分类成功',
                data:data
            })
        }else{
            res.send({
                err:-1,
                msg:'网络连接错误，请稍后重试'
            })
        }
    })
    .catch((err)=>{
        res.send({
            err:-1,
            msg:'网络连接错误，请稍后重试'
        })
    })
})




module.exports = router;