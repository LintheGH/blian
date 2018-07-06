require.config({
    paths:{
        'jquery':'../lib/jquery'
    }
});

define(['jquery'],function($){
    
        let baseUrl = 'http://localhost:89/src/api/'
        let urlFilter = function(url){
            if(url.startsWith('http')){
                return url;
            }else{
                return baseUrl + url;
            }
        }
        return {
            get:function(_url,data){
                return new Promise(function(resolve,reject){
                    $.ajax({
                        url:urlFilter(_url),
                        data:data || {},
                        type:'GET',
                        success:function(res){
                            resolve(res);
                        },
                        error:function(error){
                            reject(error);
                        }
                    })
                })
            },
            post:function(_url,data){
                return new Promise(function(resolve,reject){
                    $.ajax({
                        url:urlFilter(_url),
                        data:data || {},
                        type:'POST',
                        success:function(res){
                            resolve(res);
                        },
                        error:function(error){
                            reject(error);
                        }
                    })
                })
            }
        }
    
})