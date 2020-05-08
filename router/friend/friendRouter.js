const express = require('express');
const router = express.Router();
const utils = require('../../utils/index');
const Friend = require('../../db/model/friendchain');

/**
 * @api {post} /friend/add 增加友链
 * @apiName 增加友链
 * @apiGroup Friend
 *
 * @apiParam {String} link 链接
 * @apiParam {String} name 名称
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.post('/add', (req, res) => {
    let { link, name } = req.body;
    if (!link || !name) {
        res.send({
            err: -1,
            msg: "缺少参数"
        })
    }
    Friend.insertMany({
        link,
        name
    })
        .then((data) => {
            console.log(data);
            if (data) {
                res.send({
                    err: 0,
                    msg: "新增友链成功"
                })
            }
        })

})

/**
 * @api {get} /friend/get 获取友链
 * @apiName 获取友链
 * @apiGroup Friend
 *
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.get('/get', (req, res) => {
    Friend.find()
        .then((data) => {
            // console.log(data);
            if (data) {
                res.send({
                    err: 0,
                    msg: "获取友链成功",
                    data: data
                })
            }
        })
})

/**
 * @api {post} /friend/delete 删除友链
 * @apiName 删除友链
 * @apiGroup Friend
 * @apiParam {String} id 链接id
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */


router.post('/delete', (req, res) => {
    let { id } = req.body;
    if (!id) {
        res.send({
            err: -1,
            msg: "缺少参数"
        })
    }
    Friend.findById(id)//5eb565f45838a117203bfc80
        .then((data) => {
            if (data) {
                return Friend.deleteOne({ _id: data._id })
            } else {
                res.send({
                    err: -1,
                    msg: "该数据不存在"
                })
            }
        })
        .then((data) => {
            // console.log(data);
            if (data && data.ok == 1) {
                res.send({
                    err: 0,
                    msg: "删除友链成功"
                })
            }
        })
})

module.exports = router;
