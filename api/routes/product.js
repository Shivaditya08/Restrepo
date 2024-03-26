const express = require ('express');
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./upload/');
       
    },
    filename:(req,file,cb)=>{cb(null,file.originalname)
    }
});
const upload = multer({storage:storage});
//  const mongoose =require('mongoose');
//  const product = require('../model/productModel');
 const productModelRequest=require('../controller/product.model');
// get request for product
router.get("/",productModelRequest.get_products);
// get request for single product
router.get("/:productId",productModelRequest.get_product_ById);
 
router.post("/",upload.single("productImage"),productModelRequest.create_product);
    // const productObj = {
    //     name:req.body.name,
    //     price:req.body.price
    // }
  
 
   
    // put request for single product
    router.put("/:productId",productModelRequest.update_product);
    
    // delete request for single product
    router.delete("/:productId",productModelRequest.delete_product);

module.exports=router;