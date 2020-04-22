const express = require('express');
const router = express.Router();
const Tools = require('../../db/model/toolsModel');


/**
 * @api {post} /tools/addtools 增加工具
 * @apiName 增加工具
 * @apiGroup Tools
 *
 * @apiParam {String} name 工具名 
 * @apiParam {String} link 工具链接
 *  
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.post('/addtools', (req, res) => {
    let { name, link } = req.body;
    Tools.insertMany({
        name,
        link
    })
        .then((data) => {
            if (data) {
                res.send({
                    err: 0,
                    msg: "添加工具成功"
                })
            }
        })
        .catch(() => {
            res.send({
                err: -1,
                msg: "网络连接，请稍后重试"
            })
        })

})
/**
 * @api {get} /tools/gettools 获取工具
 * @apiName 获取工具
 * @apiGroup Tools
 *
 *  
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

 router.get('/gettools',(req,res)=>{
    Tools.find()
    .then((data)=>{
        if(data){
            res.send({
                err:0,
                msg:"获取工具成功",
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


module.exports = router;