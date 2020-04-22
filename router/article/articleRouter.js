const express = require('express');
const router = express.Router();
const utils = require('../../utils/index');
const Article = require('../../db/model/article/articleModel');
const ArticleCraft = require('../../db/model/article/articleCraftModel');
//新增分享文章
/**
 * @api {post} /article/add 新增分享文章
 * @apiName 新增分享文章
 * @apiGroup Article
 *
 * @apiParam {String} title 文章标题 
 * @apiParam {String} link 文章链接
 * @apiParam {String} shareUser 分享人
 * @apiParam {String} uid 分享人id
 * @apiParam {String} categoryId 分类id
 * 
 *
 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.post('/add', (req, res) => {
    const { uid,title, link, shareUser, categoryId } = req.body;
    if (!title || !link || !shareUser || !categoryId.length < 0 || !uid) {
        res.send({
            err: -1,
            msg: '数据错误'
        })
    } else {
        Article.find({ title })
            .then((data) => {
                if (data.length > 0) {
                    res.send({
                        err: -1,
                        msg: "此名称的文章已存在，换个文章名称吧"
                    })
                } else {
                    Article.insertMany({
                        title,
                        link,
                        shareUser,
                        uid,
                        categoryId,
                        shareTime: Date.now()
                    }).then((data) => {
                        if (data) {
                            res.send({
                                err: 0,
                                msg: '分享成功，请等待管理员审核'
                            })
                        }
                    }).catch((err) => {
                        res.send({
                            err: -1,
                            msg: "网络连接错误，请稍后重试"
                        })
                    })
                }
            })

    }
})
//获取文章列表
/**
 * @api {post} /article/get 获取文章列表
 * @apiName 获取文章列表
 * @apiGroup Article
 * @apiParam {String} pageIndex 页码
 * @apiParam {String} pageSize 页数
 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.post('/get', (req, res) => {
    let pageIndex = req.body.pageIndex || 1;
    let pageSize = req.body.pageSize || 2;
    let count = 0;
    Article.find()
        .then((data) => {
            if (data) {
                count = data.length;
                return Article.find().sort({'_id':-1}).limit(Number(pageSize)).skip(Number((pageIndex - 1) * pageSize))
            }
        })
        .then((data) => {
            if (data) {
                res.send({
                    err: 0,
                    msg: '获取数据成功',
                    info: {
                        data: data,
                        count: count,
                        curpage: pageIndex,
                        allpage: Math.ceil(count / pageSize)
                    }
                })
            }
        })
});

//id查询文章
/**
 * @api {get} /article/getbyid 根据id查询文章
 * @apiName 根据id查询文章
 * @apiGroup Article
 * @apiParam {String} id 文章id
 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */
router.get('/getbyid', (req, res) => {
    let { id } = req.query;
    Article.findById(id)
        .then((data) => {
            if (data) {
                if (data) {
                    res.send({
                        err: 0,
                        msg: '获取数据成功',
                        data: data
                    })
                }
            }
        })
        .catch((err) => {
            res.send({
                err: -1,
                msg: '网络连接错误，请稍后重试'
            })
        })
});

//id查询草稿箱文章
/**
 * @api {get} /article/getcraftbyid 根据id查询草稿箱文章
 * @apiName 根据id查询草稿箱文章
 * @apiGroup Article
 * @apiParam {String} id 草稿箱文章id
 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */
router.get('/getcraftbyid', (req, res) => {
    let { id } = req.query;
    ArticleCraft.findById(id)
        .then((data) => {
            if (data) {
                if (data) {
                    res.send({
                        err: 0,
                        msg: '获取数据成功',
                        data: data
                    })
                }
            }
        })
        .catch((err) => {
            res.send({
                err: -1,
                msg: '网络连接错误，请稍后重试'
            })
        })
});


//关键字查询
/**
 * @api {get} /article/getbykw 关键字查询文章
 * @apiName 关键字查询文章
 * @apiGroup Article
 * @apiParam {String} kw 关键字
 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.get('/getbykw', (req, res) => {
    let { kw } = req.query;
    let reg = new RegExp(kw);
    Article.find({ title: { $regex: reg } })
        .then((data) => {
            if (data) {
                res.send({
                    err: 0,
                    msg: '查询成功',
                    data,
                })
            }
        })
        .catch((err) => {
            res.send({
                err: -1,
                msg: '网络连接错误，请稍后重试'
            })
        })
})
/**
 * @api {get} /article/getbycate 分类查询文章
 * @apiName 分类查询文章
 * @apiGroup Article
 * @apiParam {String} categoryId 分类id
 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */
router.get('/getbycate', (req, res) => {
    let { categoryId } = req.query;
    Article.find({ categoryId })
        .then((data) => {
            if (data) {
                res.send({
                    err: 0,
                    msg: "查询成功",
                    data
                })
            }
        })
        .catch((err) => {
            res.send({
                err: -1,
                msg: "网络连接错误，请稍后重试"
            })
        })
})

//删除文章
/**
 * @api {post} /article/deletebyid 删除一条文章
 * @apiName 删除一条文章
 * @apiGroup Article
 * @apiParam {String} id 文章id
 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.post('/deletebyid', (req, res) => {
    let { id } = req.body;

    Article.findById(id)
        .then((data) => {
            // console.log(data)
            if (data) {
                // console.log(data)
                return Article.deleteOne({_id:data._id})
            } else {
                res.send({
                    err: 0,
                    msg: "该文章不存在"
                })
            }
        })
        .then((data) => {
            if (data) {
                res.send({
                    err: 0,
                    msg: '删除成功'
                })
            }
        })
        .catch((err) => {
            res.send({
                err: -1,
                msg: "网络连接错误，请稍后重试"
            })
        })
})

//写文章
/**
 * @api {post} /article/write 写文章
 * @apiName 写文章
 * @apiGroup Article
 *
 * @apiParam {String} title 文章标题 
 * 
 * @apiParam {String} author 作者
 * @apiParam {String} uid 作者id

 * @apiParam {String} content 内容
 * @apiParam {String} content_md 内容
 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

// (req, res, next) => {
//     const { token } = req.body;
//     utils.checkToken(token)
//         .then((data) => {
//             if (data.login) {
//                 next();
//             }
//         })
//         .catch((err) => {
//             res.send({
//                 err: -999,
//                 msg: "token非法"
//             })
//         })

// }, 

router.post('/write', (req, res) => {
    // * @apiParam {Boolean} isLocal 是否本站原创 
    // * @apiParam {String} categoryId 分类id
    let { title, author, uid, content, content_md } = req.body;
    let isLocal = true;
    let categoryId = 0;

    Article.insertMany({
        title,
        author,
        uid,
        content,
        isLocal,
        categoryId,
        content_md,
        shareTime: Date.now()
    })
        .then((data) => {
            // console.log(data);
            if (data) {
                res.send({
                    err: 0,
                    data: data[0],
                    msg: "文章写入成功"
                })
            }
        })
        .catch((err) => {
            res.send({
                err: -1,
                msg: "网络连接错误，请稍后重试"
            })
        })
})

//修改文章
/**
 * @api {post} /article/edit 修改文章
 * @apiName 修改文章
 * @apiGroup Article
 * @apiParam {String} title 文章标题 
 * @apiParam {String} author 作者
 * @apiParam {String} uid 作者id
 * @apiParam {String} content 内容
 * @apiParam {String} id 文章id
 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.post('/edit', (req, res) => {
    // * @apiParam {Boolean} isLocal 是否本站原创 
    // * @apiParam {String} categoryId 分类id
    let { title, author, uid, content, id, content_md } = req.body;
    Article.updateOne({ _id: id }, { $set: { title: title, content: content, content_md } })
        .then((data) => {
            if (data) {
                // console.log(data);
                return Article.find({_id:id})

            }
        })
        .then((data)=>{
            if(data){
                res.send({
                    err: 0,
                    msg: "编辑文章成功",
                    data:data[0]
                })
            }
        })
        .catch((err) => {
            res.send({
                err: -1,
                msg: "网络连接错误，请稍后重试"
            })
        })
})

//我的分享
/**
 * @api {post} /article/usershare 用户分享文章列表
 * @apiName 用户分享文章列表
 * @apiGroup Article
 * @apiParam {String} uid 用户id
 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */
router.post('/usershare', (req, res) => {
    let { uid } = req.body;
    Article.find({ uid, isLocal: false }).sort({'_id':-1})
        .then((data) => {
            if (data) {
                res.send({
                    err: 0,
                    msg: '获取用户分享文章成功',
                    data: data
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

//我的发布
/**
 * @api {post} /article/userpublish 用户发布文章列表
 * @apiName 用户发布文章列表
 * @apiGroup Article
 * @apiParam {String} uid 用户id
 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */
router.post('/userpublish', (req, res) => {
    let { uid } = req.body;
    // console.log(uid);
    Article.find({ uid, isLocal: true }).sort({'_id':-1})
        .then((data) => {
            if (data) {
                res.send({
                    err: 0,
                    msg: '获取用户发布文章成功',
                    data: data
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

//新增草稿箱
/**
 * @api {post} /article/addcraft 新增草稿箱
 * @apiName 新增草稿箱
 * @apiGroup Article
 *
 * @apiParam {String} title 文章标题 
 * 
 * @apiParam {String} author 作者
 * @apiParam {String} uid 作者id

 * @apiParam {String} content 内容
 * @apiParam {String} content_md md内容
 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.post('/addcraft', (req, res) => {
    let { title, author, uid, content, content_md } = req.body;
    let isLocal = true;
    let categoryId = 0;
    ArticleCraft.insertMany({
        title,
        author,
        uid,
        content,
        isLocal,
        categoryId,
        content_md
    })
        .then((data) => {
            // console.log(data);
            if (data) {
                res.send({
                    err: 0,
                    msg: "草稿箱写入成功",
                    data: data[0]
                })
            }
        })
        .catch((err) => {
            res.send({
                err: -1,
                msg: "网络连接错误，请稍后重试"
            })
        })
})


//修改草稿箱
/**
 * @api {post} /article/editcraft 修改草稿箱
 * @apiName 修改草稿箱
 * @apiGroup Article
 * @apiParam {String} title 文章标题 
 * @apiParam {String} author 作者
 * @apiParam {String} uid 作者id
 * @apiParam {String} content 内容
 * @apiParam {String} id 草稿文章id
 * @apiParam {String} content_md md内容
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.post('/editcraft', (req, res) => {
    // * @apiParam {Boolean} isLocal 是否本站原创 
    // * @apiParam {String} categoryId 分类id
    let { title, author, uid, content, id, content_md } = req.body;
    ArticleCraft.updateOne({ _id: id }, { $set: { title: title, content: content, content_md: content_md } })
        .then((data) => {
            if (data) {
                res.send({
                    err: 0,
                    msg: "编辑草稿成功"
                })
            }
        })
        .catch((err) => {
            res.send({
                err: -1,
                msg: "网络连接错误，请稍后重试"
            })
        })
})

//草稿箱发布
/**
 * @api {post} /article/publishcraft 草稿箱发布
 * @apiName 草稿箱发布
 * @apiGroup Article
 *
 * @apiParam {String} title 文章标题 
 * 
 * @apiParam {String} author 作者
 * @apiParam {String} uid 作者id
 * @apiParam {String} id 草稿箱文章id
 * @apiParam {String} content 内容

 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.post('/publishcraft', (req, res) => {
    let { title, author, uid, content, id, content_md } = req.body;
    let isLocal = true;
    let categoryId = 0;
    ArticleCraft.find({ _id: id })
        .then((data) => {
            // console.log(data);
            if (data.length > 0) {
                return ArticleCraft.deleteOne({
                    _id: id,
                })
            } else {
                res.send({
                    err: -1,
                    msg: "文章不存在"
                })
            }
        })
        .then((data) => {
            if (data) {
                return Article.insertMany({
                    title,
                    author,
                    uid,
                    content,
                    isLocal,
                    categoryId,
                    content_md
                })
            }
        })
        .then((data) => {
            if (data) {
                res.send({
                    err: 0,
                    msg: "发布成功",
                    data:data[0]
                })
            }
        })
        .catch((err) => {
            res.send({
                err: -1,
                msg: "网络连接错误，请稍后重试"
            })
        })
})


/**
 * @api {post} /article/publishtocraft 已发布文章保存为草稿
 * @apiName 已发布文章保存为草稿
 * @apiGroup Article
 *
 * @apiParam {String} title 文章标题 
 * 
 * @apiParam {String} author 作者
 * @apiParam {String} uid 作者id
 * @apiParam {String} id 文章id
 * @apiParam {String} content 内容
 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.post('/publishtocraft', (req, res) => {
    let { title, author, uid, content, id, content_md } = req.body;
    let isLocal = true;
    let categoryId = 0;
    Article.find({ _id: id })
        .then((data) => {
            // console.log(data);
            if (data.length > 0) {
                return Article.deleteOne({
                    _id: id,
                })
            } else {
                res.send({
                    err: -1,
                    msg: "文章不存在"
                })
            }
        })
        .then((data) => {
            if (data) {
                return ArticleCraft.insertMany({
                    title,
                    author,
                    uid,
                    content,
                    isLocal,
                    categoryId,
                    content_md
                })
            }
        })
        .then((data) => {
            if (data) {
                res.send({
                    err: 0,
                    msg: "转存草稿箱成功",
                    data:data[0]
                })
            }
        })
        .catch((err) => {
            res.send({
                err: -1,
                msg: "网络连接错误，请稍后重试"
            })
        })
})


//删除草稿箱
/**
 * @api {post} /article/deletecraft 删除草稿箱
 * @apiName 删除草稿箱
 * @apiGroup Article
 *
 * @apiParam {String} uid 作者id
 * @apiParam {String} id 草稿箱文章id
 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */

router.post('/deletecraft', (req, res) => {
    let { uid, id } = req.body;
    ArticleCraft.find({ _id:id})
        .then((data) => {
            if (data.length > 0) {
                return ArticleCraft.deleteOne({
                    _id: id,
                    uid: uid
                })
            } else {
                res.send({
                    err: -1,
                    msg: "此文章不存在"
                })
            }
        })
        .then((data) => {
            if (data) {
                res.send({
                    err: 0,
                    msg: "删除草稿箱成功"
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

//
//我的草稿箱
/**
 * @api {post} /article/usercraft 获取用户草稿箱列表
 * @apiName 用户草稿箱列表
 * @apiGroup Article
 * @apiParam {String} uid 用户id
 * 
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 信息.
 */
router.post('/usercraft', (req, res) => {
    let { uid } = req.body;
    ArticleCraft.find({ uid, fromCraft: true }).sort({'_id':-1})
        .then((data) => {
            if (data) {
                res.send({
                    err: 0,
                    msg: '获取用户草稿箱成功',
                    data: data
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