
var async=require('async');
var read=require('./read');
var write=require('./write');
let logger=require('debug')('crawl:main');
var url='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1&qq-pf-to=pcqq.group';
logger(`开始执行任务`);
async.waterfall([
    function(callback){
    read(url,callback);
    },
    function(movies,callback){
        write(movies,callback)
    }
],function(err,result){
    logger(`全部任务执行完毕了`)
});