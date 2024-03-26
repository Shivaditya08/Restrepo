const mongoose = require('mongoose');
const Order = require('../model/orderModel');
 
// code for creating  order
exports.create_order = async (req,res,next)=>{
     try{
     
        const orderObj = new Order({
            _id:new mongoose.Types.ObjectId(),
            product: req.body.productId,
            quantity: req.body.quantity
        });
        const data = await orderObj.save();
        res.status(200).json({
            code:1,
            message:"order created successfully",
            data:data,
            error:null
        })
     }catch(error){
        res.status(500).json({
            code:0,
            message:"Somthing went wrong",
            data:null,
            error:error
        })
     }
}
exports.get_order=async(req,res,next)=>{
    try{
        const data= await Order.find();
        if(data){
            res.status(200).json({
                code:1,
                message:"This is simple get request for product",
                data:data,
                error:null
            });

        }else{
            res.status(200).json({
                code:1,
                message:"no Data Available",
                data:data,
                error:null

            })
        }
    }catch(error){
        res.status(200).json({
            code:0,
            message:"Something Went Wrong",
            data:null,
            error:error

    })
}
}
exports.delete_order = async (req,res,next)=>{
    try{
        const data  = await Order.findByIdAndDelete(req.params.productId);
        if(!data){
           res.status(404).json({
            code:1,
            message:"No Order Found",
            data:data,
            error:null
           })
        }else{
            res.status(404).json({
                code:1,
                message:"delete request perform successfully",
                data:data,
                error:null
               })
        }
    }catch(error){
        res.status(500).json({
            code:0,
            message:"Somthing went wrong",
            data:null,
            error:error
           })
    }
}
 
 