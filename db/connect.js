const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect('mongodb://localhost/app',{ useNewUrlParser: true,useUnifiedTopology: true });
db.on('error',console.error.bind(console,'connection error:'));
db.on('open',()=>{
    console.log('db connection')
})