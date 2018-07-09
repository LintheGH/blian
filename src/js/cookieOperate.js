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
                cke = cookie.split('; ');
                let arr = [];
                for(let i=0;i<cke.length;i++){
                    arr = cke[i].split('=');
                    if(arr[0] == 'data'){
                        cookie = arr[1];
                        break;
                    }
                }
                let dataset = JSON.parse(cookie);
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
                cke = cookie.split('; ');
                let arr = [];
                for(let i=0;i<cke.length;i++){
                    arr = cke[i].split('=');
                    if(arr[0] == 'data'){
                        cookie = arr[1];
                        break;
                    }
                }
                let dataset = JSON.parse(cookie);
                return dataset;
            } 
        }
    }
})
