var express= require('express')
var app=express();
var mongoose=require("mongoose");
const dotenv=require("dotenv");
const router=require('./routes/api');
const bodyParser=require('body-parser');
dotenv.config();

//connect to db
const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.DB_CONNECT, connectionParams)
.then(()=>console.log("connect to db"))
.catch((err)=>console.log(`error connect${err}`))

app.use('/api',router)
app.listen(3000,()=>console.log("listen to port 3000"))