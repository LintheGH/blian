require.config({
    paths:{
        'jquery':'../lib/jquery',
        'cookie':'./cookieOperate',
        'http':'./httpclient',
        'generate':'./datagrid'
    }
});


require(['jquery','cookie','http','generate'],function($,cookie,http,gen){
    console.log(gen.car_generate_list)
    $(function(){
        var cookieObj = cookie.read();
        var ul = $('.list-main')[0];
        if(!cookieObj){
            return;
        }else{
            var arr = Object.keys(cookieObj);
            var num = [];
            for(var key in cookieObj){
                num.push(cookieObj[key]);
            }
            http.get('getitems.php',{
                indexids:arr
            }).then(function(res){
                let result = window.eval('(' + res + ')');
                console.log(result);
                gen.car_generate_list(result,ul,num);
            },function(err){
                console.log(err)
            })
        }
    })
})