const express = require('express');
const router = express.Router();
const utils = require('../../utils/index');
const User = require('../../db/model/userModel');

/**
 * @api {post} /user/reg 注册
 * @apiName 注册
 * @apiGroup User
 *
 * @apiParam {String} us 用户名 
 * @apiParam {String} ps 密码
 * @apiParam {String} rps 确认密码
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */
router.post('/reg',(req,res)=>{
    let{us,ps,rps} = req.body;
    if(!us || !ps || !rps){
        res.send({
            err:-1,
            msg:"参数错误"
        })
    }else if(ps!= rps){
        res.send({
            err:-1,
            msg:'密码与确认密码不符'
        })
    }else{
        User.find({us})
        .then((data)=>{
            if(data.length >= 1){
                res.send({
                    err:-1,
                    msg:"该用户名已注册"
                })
            }else{
              return User.insertMany({us,ps})
            }
        })
        .then((data)=>{
            if(data){
                res.send({
                    err:0,
                    msg:'注册成功'
                })
            }
            // console.log(data,'insert')
        })
        .catch((err)=>{
            res.send({
                err:-1,
                msg:'系统内部错误，请稍后重试'
            })
        })
    }
})

/**
 * @api {post} /user/login 登录
 * @apiName 登录
 * @apiGroup User
 *
 * @apiParam {String} us 用户名 
 * @apiParam {String} ps 密码
 *
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 * @apiSuccess {String} us 用户名.
 * @apiSuccess {String} uid 用户id.
 * 
 */

router.post('/login',(req,res)=>{
    let {us,ps} = req.body;
    if(!us || !ps){
        res.send({
            err:-1,
            msg:'参数错误'
        })
    }else{
        User.find({us,ps})
        .then((data)=>{
            let token = utils.createToken({login:true,us:us});
            if(data){
                // console.log(data);
                res.send({
                    err:0,
                    msg:'登录成功',
                    us:data[0].us,
                    uid:data[0]._id,
                    token:token
                })
            }
        })
        .catch((err)=>{
            res.send({
                err:-1,
                msg:'用户名或密码错误'
            })
        })
    }
})
module.exports = router;
