/*

    cookie 的改查

*/

/*
    cookie形状：
        data = {indexid:number}
*/
require.config({
    paths:{
        'jquery':'../lib/juqery'
    }
})

define(['jquery'],function($){
    return {
        set:function(data={}){
            var date = new Date();
            date.setDate(date.getDate()+7);
            document.cookie = `data=${JSON.stringify(data)};expires=${date.toUTCString()}`;
        },
        check:function(paramas){
            let cookie = document.cookie;
            paramas = String(paramas)
            let result=null;
            if(!cookie){ //undefinded || other
                return null;
            }else{
                let arr = cookie.split('=')[1];
                let dataset = JSON.parse(arr);
                for(var key in dataset){
                    if(key == paramas){
                        return dataset[key];
                    }
                }
                return result;
            } 
        },
        read:function(){
            let cookie = document.cookie;
            if(!cookie){//undefinded || other
                return null;
            }else{
                let arr = cookie.split('=')[1];
                let dataset = JSON.parse(arr);
                return dataset;
            } 
        }
    }
})
