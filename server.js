const express = require('express');
const app = express();
const path = require("path");
const db = require('./db/connect');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./router/user/userRouter');
const articleRouter = require('./router/article/articleRouter');
const studyCategoryRouter = require('./router/study/studyCategoryRouter')
const studyRouter = require('./router/study/study');
const toolsRouter = require('./router/tools/tools');
const commentRouter = require("./router/comment/comment");
const friendChainRouter = require('./router/friend/friendRouter');
const bannerRouter = require('./router/banner/banner');
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use('/user',userRouter);
app.use('/article',articleRouter);
app.use('/study',studyCategoryRouter);
app.use('/study',studyRouter);
app.use('/tools',toolsRouter);
app.use('/comment',commentRouter);
app.use('/friend',friendChainRouter);
app.use('/banner',bannerRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.listen('3000',(err)=>{
    console.log('server start')
})