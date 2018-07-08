/*

    请求操作封装

*/

require.config({
    paths:{
        'jquery':'../lib/jquery'
    }
});

define(['jquery'],function($){
    
        let baseUrl = 'http://localhost:90/api/'
        let urlFilter = function(url){
            if(url.startsWith('http')){
                return url;
            }else{
                return baseUrl + url;
            }
        }
        return {
            get:function(_url,data,async=true){
                return new Promise(function(resolve,reject){
                    $.ajax({
                        url:urlFilter(_url),
                        data:data || {},
                        type:'GET',
                        async:async,
                        success:function(res){
                            resolve(res);
                        },
                        error:function(error){
                            reject(error);
                        }
                    })
                })
            },
            post:function(_url,data,async=true){
                return new Promise(function(resolve,reject){
                    $.ajax({
                        url:urlFilter(_url),
                        data:data || {},
                        type:'POST',
                        async:async,
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