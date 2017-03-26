
let mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/201614crawl');
//定义骨架
var MovieSchema=new mongoose.Schema({
    name:String,
    url:String
});
//模型
module.exports=mongoose.model('Movie',MovieSchema);