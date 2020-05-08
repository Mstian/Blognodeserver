const express = require('express');
const router = express.Router();
const utils = require('../../utils/index');
const Banner = require('../../db/model/banner');

/**
 * @api {post} /banner/add 添加banner
 * @apiName 添加banner
 * @apiGroup Banner
 *
 * @apiParam {String} url banner图链接地址
 * @apiParam {String} link banner跳转地址
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */
router.post('/add', (req, res) => {
    let { url, link } = req.body;
    if (!url || !link) {
        res.send({
            err: -1,
            msg: "参数错误"
        })
    }
    Banner.insertMany({
        url,
        link
    })
        .then((data) => {
            // console.log(data);
            if (data) {
                res.send({
                    err: 0,
                    msg: "添加banner成功"
                })
            } else {
                res.send({
                    err: -1,
                    msg: "网络连接错误，请稍后重试"
                })
            }
        })

})




/**
 * @api {get} /banner/get 获取banner列表
 * @apiName 获取banner列表
 * @apiGroup Banner
 *
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.get('/get', (req, res) => {
    Banner.find()
        .then((data) => {
            // console.log(data);
            if (data) {
                res.send({
                    err: 0,
                    msg: "获取banner成功",
                    data: data
                })
            }
        })
})

/**
 * @api {post} /banner/delete 删除banner
 * @apiName 删除banner
 * @apiGroup Banner
 * @apiParam {String} id bannerid
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */
router.post('/delete', (req, res) => {
    let { id } = req.body;
    Banner.findById(id)
        .then((data) => {
            if (data) {
                return Banner.deleteOne({ _id: data._id })
            } else {
                res.send({
                    err: -1,
                    msg: "该banner不存在"
                })
            }
        })
        .then((data) => {
            if (data && data.ok == 1) {
                res.send({
                    err: 0,
                    msg: "删除banner成功"
                })
            }
        })
})


module.exports = router;