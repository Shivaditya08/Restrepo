const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
 
const userSchema = Schema({
    _id:Schema.Types.ObjectId,
    userId:{type:String,require:true},
    Password:{type:String,require:true}
})
 
module.exports = mongoose.model("user",userSchema)