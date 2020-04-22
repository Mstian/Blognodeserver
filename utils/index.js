
const jwt = require('jsonwebtoken');
const secret = 'tianleilei123';
const nodemailer = require("nodemailer")

let utils = {
    random: function () {
        var Num = "";
        for (var i = 0; i < 6; i++) {
            Num += Math.floor(Math.random() * 10);
        }
        // console.log(Num)
        return Num
    },
    createToken(payload){
        payload.ctime = Date.now();
        return jwt.sign(payload,secret);
    },
    checkToken(token){
        return new Promise((resolve,reject)=>{
            jwt.verify(token,secret,(err,data)=>{
                if(err){
                    reject('token验证失败')
                }else{
                    resolve(data);
                }
            })
        })
    },
    sendMail(user,msg) {
        // 创建一个发送器
        let transporter = nodemailer.createTransport({
            host: "smtp.qq.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "572410049@qq.com", // 发送者邮箱地址
                pass: 'pwuepzqfdpjybeid' // 发送者SMTP密码
            }
        });
    
        // 配置发送信息对象
        var emailconfig = {
            from: "572410049@qq.com", // 发送者邮箱地址
            to: "572410049@qq.com", // 接受者邮箱地址
            subject: "留言", // 主题
            text: `${user} 给你留言了，他说：${msg}`, // 内容 只能是纯文本 与 html 配置项只能存在一个
            // html: "<b>Hello world?</b>" // html body
        }
    
        // 调用sendMail()方法
        transporter.sendMail(emailconfig);
    }
}

module.exports = utils