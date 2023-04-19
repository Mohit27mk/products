const mongoose =require('mongoose');
const{Schema}=mongoose;
const ProductSchema=new Schema({
 title:{
    type:String,
    required:true
 },
 description:{
    type:String,
    required:true,
 },
 price:{
    type:Number,
 },
 discount:{
type:Number
 },
 sku:{
    type:Number
     },
     available:{
        type:Number
         },
 date:{
    type:Date,
    default:Date.now
 }
})

const Product =mongoose.model('Product',ProductSchema);
module.exports=Product;