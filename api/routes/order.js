const express = require ('express');
const router = express.Router();
 const orderModelRoute = require('../controller/order.Model');
 

router.post("/",orderModelRoute.create_order);
 
 
router.get("/",orderModelRoute.get_order);

router.delete("/",orderModelRoute.delete_order);  
  
 
router.put("/:orderId",
(req, res, next) => {
    res.status(200).json({
        msg: "This is simple put request for order"
    });
});


module.exports=router;