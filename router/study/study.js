
const express = require('express');
const router = express.Router();
const Study = require('../../db/model/study/studyModel');
const StudyCategory = require('../../db/model/study/studyCategory');
/**
 * @api {post} /study/addstudy 添加学习
 * @apiName 添加学习
 * @apiGroup Study
 * @apiParam {String} title 学习名称
 * @apiParam {String} categoryid 学习分类id
 * @apiParam {String} link 学习链接
 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */
router.post('/addstudy',(req,res)=>{
    var {title,link,categoryid} = req.body;
    Study.find({title})
    .then((data)=>{
        if(data.length>0){
            res.send({
                err:-1,
                msg:"此名称已使用"
            })
        }else{
            return Study.insertMany({title,link,categoryid})
        }
    })
    .then((data)=>{
        if(data){
            res.send({
                err:0,
                msg:"学习添加成功"
            })
        }
    })
    .catch(()=>{
        res.send({
            err:-1,
            msg:"网络连接错误，请稍后重试"
        })
    })
});

/**
 * @api {get} /study/getstudy 获取学习
 * @apiName 获取学习
 * @apiGroup Study
 * @apiParam {String} categoryid 学习分类id
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */
router.get("/getstudybyid",(req,res)=>{
    let {categoryid} = req.query;
    Study.find({categoryid})
    .then((data)=>{
        if(data.length > 0){
            res.send({
                err:0,
                msg:"查询成功",
                data:data
            })
        }
    })
    .catch(()=>{
        res.send({
            err:-1,
            msg:"网络连接错误，请稍后重试"
        })
    })
})

/**
 * @api {get} /study/getallstudy 获取所有学习
 * @apiName 获取所有学习
 * @apiGroup Study
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */
// StudyCategory
// Study
router.get('/getallstudy',(req,res)=>{
    let cateidarr = [];
    let studyarr = [];
    var resInfo = [];
    StudyCategory.find()
    .then((data)=>{
        // console.log(data)
        if(data.length<=0){
            res.send({
                err:-1,
                msg:"数据为空"
            })
        }else{
            data.forEach((element,index) => {
                // console.log(index);
                cateidarr.push(element.categoryId)
                resInfo[index] = {};
                resInfo[index].categoryid = element.categoryId
                resInfo[index].categoryname = element.categoryName
            });
        }
        
    })
    .then((data)=>{
        cateidarr.forEach((el,ind)=>{
            Study.find({
                categoryid:el
            }).then((data)=>{
                resInfo[ind].data = data;
                // console.log(resInfo);
                if(ind == cateidarr.length - 1){
                    res.send({
                        err:0,
                        msg:"获取学习成果",
                        data:resInfo
                    })
                }
            })
        })
    })
    .then((data)=>{
    })
})
module.exports = router;