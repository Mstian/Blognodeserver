define({ "api": [
  {
    "type": "post",
    "url": "/article/edit",
    "title": "修改文章",
    "name": "修改文章",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>作者</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>作者id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/article/articleRouter.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/editcraft",
    "title": "修改草稿箱",
    "name": "修改草稿箱",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>作者</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>作者id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>草稿文章id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content_md",
            "description": "<p>md内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/article/articleRouter.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/article/getbykw",
    "title": "关键字查询文章",
    "name": "关键字查询文章",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kw",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/article/articleRouter.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/write",
    "title": "写文章",
    "name": "写文章",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>作者</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>作者id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content_md",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/article/articleRouter.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/article/getbycate",
    "title": "分类查询文章",
    "name": "分类查询文章",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>分类id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/article/articleRouter.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/deletebyid",
    "title": "删除一条文章",
    "name": "删除一条文章",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/article/articleRouter.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/deletecraft",
    "title": "删除草稿箱",
    "name": "删除草稿箱",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>作者id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>草稿箱文章id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/article/articleRouter.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/publishtocraft",
    "title": "已发布文章保存为草稿",
    "name": "已发布文章保存为草稿",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>作者</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>作者id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/article/articleRouter.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/add",
    "title": "新增分享文章",
    "name": "新增分享文章",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>文章链接</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shareUser",
            "description": "<p>分享人</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>分享人id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>分类id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/article/articleRouter.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/addcraft",
    "title": "新增草稿箱",
    "name": "新增草稿箱",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>作者</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>作者id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content_md",
            "description": "<p>md内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/article/articleRouter.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/article/getbyid",
    "title": "根据id查询文章",
    "name": "根据id查询文章",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/article/articleRouter.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/article/getcraftbyid",
    "title": "根据id查询草稿箱文章",
    "name": "根据id查询草稿箱文章",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>草稿箱文章id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/article/articleRouter.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/usershare",
    "title": "用户分享文章列表",
    "name": "用户分享文章列表",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/article/articleRouter.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/userpublish",
    "title": "用户发布文章列表",
    "name": "用户发布文章列表",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/article/articleRouter.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/usercraft",
    "title": "获取用户草稿箱列表",
    "name": "用户草稿箱列表",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/article/articleRouter.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/publishcraft",
    "title": "草稿箱发布",
    "name": "草稿箱发布",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>作者</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>作者id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>草稿箱文章id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/article/articleRouter.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/get",
    "title": "获取文章列表",
    "name": "获取文章列表",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageIndex",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/article/articleRouter.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/banner/delete",
    "title": "删除banner",
    "name": "删除banner",
    "group": "Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>bannerid</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/banner/banner.js",
    "groupTitle": "Banner"
  },
  {
    "type": "post",
    "url": "/banner/add",
    "title": "添加banner",
    "name": "添加banner",
    "group": "Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>banner图链接地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>banner跳转地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/banner/banner.js",
    "groupTitle": "Banner"
  },
  {
    "type": "get",
    "url": "/banner/get",
    "title": "获取banner列表",
    "name": "获取banner列表",
    "group": "Banner",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/banner/banner.js",
    "groupTitle": "Banner"
  },
  {
    "type": "post",
    "url": "/comment/delete",
    "title": "删除一条留言",
    "name": "删除一条留言",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>留言id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/comment/comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "/comment/add",
    "title": "新增留言",
    "name": "新增留言",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "commentator",
            "description": "<p>留言用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>留言内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/comment/comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "/comment/get",
    "title": "获取留言",
    "name": "获取留言",
    "group": "Comment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/comment/comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "/friend/delete",
    "title": "删除友链",
    "name": "删除友链",
    "group": "Friend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>链接id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/friend/friendRouter.js",
    "groupTitle": "Friend"
  },
  {
    "type": "post",
    "url": "/friend/add",
    "title": "增加友链",
    "name": "增加友链",
    "group": "Friend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>链接</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/friend/friendRouter.js",
    "groupTitle": "Friend"
  },
  {
    "type": "get",
    "url": "/friend/get",
    "title": "获取友链",
    "name": "获取友链",
    "group": "Friend",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/friend/friendRouter.js",
    "groupTitle": "Friend"
  },
  {
    "type": "post",
    "url": "/study/addcategory",
    "title": "新增学习分类",
    "name": "新增学习分类",
    "group": "Study",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryName",
            "description": "<p>分类名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/study/studyCategoryRouter.js",
    "groupTitle": "Study"
  },
  {
    "type": "post",
    "url": "/study/addstudy",
    "title": "添加学习",
    "name": "添加学习",
    "group": "Study",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>学习名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryid",
            "description": "<p>学习分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>学习链接</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/study/study.js",
    "groupTitle": "Study"
  },
  {
    "type": "get",
    "url": "/study/getstudy",
    "title": "获取学习",
    "name": "获取学习",
    "group": "Study",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryid",
            "description": "<p>学习分类id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/study/study.js",
    "groupTitle": "Study"
  },
  {
    "type": "get",
    "url": "/study/getcategory",
    "title": "获取学习分类",
    "name": "获取学习分类",
    "group": "Study",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/study/studyCategoryRouter.js",
    "groupTitle": "Study"
  },
  {
    "type": "get",
    "url": "/study/getallstudy",
    "title": "获取所有学习",
    "name": "获取所有学习",
    "group": "Study",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/study/study.js",
    "groupTitle": "Study"
  },
  {
    "type": "post",
    "url": "/tools/addtools",
    "title": "增加工具",
    "name": "增加工具",
    "group": "Tools",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>工具名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>工具链接</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/tools/tools.js",
    "groupTitle": "Tools"
  },
  {
    "type": "get",
    "url": "/tools/gettools",
    "title": "获取工具",
    "name": "获取工具",
    "group": "Tools",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/tools/tools.js",
    "groupTitle": "Tools"
  },
  {
    "type": "post",
    "url": "/user/reg",
    "title": "注册",
    "name": "注册",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rps",
            "description": "<p>确认密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/user/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "登录",
    "name": "登录",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/user/userRouter.js",
    "groupTitle": "User"
  }
] });
