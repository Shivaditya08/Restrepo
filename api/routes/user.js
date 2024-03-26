
const express = require ('express');
const router = express.Router();
const multer  = require('multer');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload = multer({storage:storage})
 
const userModelRequest = require('../controller/user.Model')
 
 
 
//get request
router.get("/",userModelRequest.get_users);
 
 
 
//post request for user
router.post("/",upload.single('userImg'),userModelRequest.create_user);
 
 
//put request
router.put("/:userId",userModelRequest.update_user);
 
 
 
//get for single user
router.get("/:userId",userModelRequest.get_user_ById);
 
 
//delete user
router.delete("/:userId",userModelRequest.delete_user);
 
 
module.exports = router;