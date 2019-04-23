function isArray(arr){
    return arr.constructor===Array?true:false;
}

function isFunction(fn){
    return fn.constructor===Function?true:false;
}

function cloneObject(src){
    var newsrc;

    if(src.constructor===Number||src.constructor===String||src.constructor===Boolean){
        newsrc=src;
        return newsrc;
    }

    if(src.constructor===Date){
        newsrc=new Date(src);
        return newsrc;
    }

    if(src.constructor===Array){
        newsrc=new Array();
        for(var i=0;i<src.length;i++){
            newsrc[i]=cloneObject(src[i]);
        }
        return newsrc;
    }

    if(src.constructor===Object){
        newsrc=new Object();
        for(item in src){
            newsrc[item]=cloneObject(src[item]);
        }
        return newsrc;
    }
}