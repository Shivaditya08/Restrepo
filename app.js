require('dotenv').config();
const  express =require('express');
const app = express();
const orderRoutes=require('./api/routes/order');
const productRoutes=require('./api/routes/product');
const userRoutes = require('./api/routes/user');
const morgan =require('morgan');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
// app.use((req,res,next)=>{
//     res.status(200).json({
//         msg:"This is Simple get request "
//     });
// });

app.use(morgan("dev"));

mongoose.connect("mongodb+srv://shivadityasingh0802:"+process.env.MONGO_ATLAS_PW+"@cluster0.yxakbsn.mongodb.net/",{
useNewUrlParser:true
}).then(()=>{console.log("connected successfully with mongoDB Atlas" )});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// code to habdle CORS Error
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Header","Origin,X-Requested-Width,Content-Type,Accept,Authorization");
    res.header("Access-Control-Allow-Crendentails",true);
    if(res.header==="OPTIONS"){
        res.header("Access-Control-Allow-Method","PUT","POST","DELETE","GET");
        return res.status(200).json();
    }
    next();
})

app.use("/order",orderRoutes);
app.use("/product",productRoutes);
app.use("/user",userRoutes);


app.use((req,res,next)=>{
    const error = new Error("Route not Found");
    next(error);
})
app.use((error,req,res,next)=>{
   
    res.status(500).json({
        error:error.message
    })
})


module.exports = app;
