const mongoose=require('mongoose');
const schema=mongoose.Schema;


const albumSchema=new schema({

title:{
    type:String,
    required:true
},
url:{
    type:String,
    default:''
},
thumbnailUrl:{
    type:String,
    required:true
},
id:{
    type:Number,
    required:true
},
albumId:{
    type:Number,
    required:false,
    default:1    
}
},
{
    timestamps:true
})

module.exports=mongoose.model('Album',albumSchema);