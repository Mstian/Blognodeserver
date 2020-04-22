const express = require("express");
const router = express.Router();
const Comment = require('../../db/model/comment');
const utils = require('../../utils/index')
//新增留言
/**
 * @api {post} /comment/add 新增留言
 * @apiName 新增留言
 * @apiGroup Comment
 *
 * @apiParam {String} commentator 留言用户名 
 * @apiParam {String} content 留言内容 
 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.post('/add', (req, res) => {
    let { commentator, content, uid } = req.body;
    let commentTime = Date.now();
    // console.log(req.body);
    Comment.insertMany({
        commentator: commentator,
        content: content,
        uid: uid,
        commentTime: commentTime,
    })
        .then((data) => {
            if (data) {
                res.send({
                    err: 0,
                    msg: "留言成功"
                })
                utils.sendMail(commentator,content);
            } else {
                res.send({
                    err: -1,
                    msg: "网络连接错误，请稍后重试"
                })
            }
        })
        .catch(() => {
            res.send({
                err: -1,
                msg: "网络连接错误，请稍后重试"
            })
        })
});


//获取留言
/**
 * @api {post} /comment/get 获取留言
 * @apiName 获取留言
 * @apiGroup Comment
 *
 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */
router.get('/get', (req, res) => {
    Comment.find({}).sort({'_id':-1})
        .then((data) => {
            if (data) {
                res.send({
                    err: 0,
                    msg: "获取留言成功",
                    data: data
                })
            } else {
                res.send({
                    err: -1,
                    msg: "网络连接错误，请稍后重试",
                })
            }
        })
        .catch(() => {
            res.send({
                err: -1,
                msg: "网络连接错误，请稍后重试",
            })
        })
});



//删除一条留言
/**
 * @api {post} /comment/delete 删除一条留言
 * @apiName 删除一条留言
 * @apiGroup Comment
 * @apiParam {String} id 留言id
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.post('/delete', (req, res) => {
    let { id } = req.body;
    Comment.find({ _id: id })
        .then((data) => {
            if (data.length > 0) {
                return Comment.deleteOne({ _id: id })
            }
            // 5e95cb2da70096052ce2b44c
        })
        .then((data) => {
            if (data) {
                res.send({
                    err: 0,
                    msg: "删除留言成功"
                })
            } else {
                res.send({
                    err: -1,
                    msg: "网络连接错误，请稍后重试"
                })
            }
        })
        .catch(() => {
            res.send({
                err: -1,
                msg: "网络连接错误，请稍后重试"
            })
        })
})
module.exports = router;

