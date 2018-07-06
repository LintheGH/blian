require.config({
    paths:{
        'jquery':'../lib/juqery'
    }
})


/*
    data = {indexid:number}
*/
define(['jquery'],function($){
    return {
        set:function(data={}){
            var date = new Date();
            date.setDate(date.getDate()+7);
            document.cookie = `data=${JSON.stringify(data)};expires=${date.toUTCString()}`;
        },
        check:function(paramas){
            let cookie = document.cookie;
            if(!cookie){
                return null;
            }else{
                console.log(cookie)
                let arr = cookie.split('=')[1];
                let dataset = JSON.parse(arr);
                console.log(dataset)
                for(var key in dataset){
                    if(key == paramas){
                        return dataset[key];
                    }else{
                        return null;
                    }
                }
            } 
        },
        read:function(){
            let cookie = document.cookie;
            if(!cookie){
                return null;
            }else{
                let arr = cookie.split('=')[1];
                let dataset = JSON.parse(arr);
                return dataset;
            } 
        }
    }
})
