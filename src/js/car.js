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
        //请求 cookie 中保存的商品id 所在的商品信息
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


        //事件
        $('.list-main').bind('click',function(evt){
            let clt = $(evt.target)[0];
            console.log(clt);
            let minusBtn = $('#minus-btn')[0];
            let plusBtn = $('#plus-btn')[0];
            let delBtn = $('#li-del')[0];
            if(clt.parentNode == minusBtn){
                console.log(clt)
            }
            if(clt.parentNode == plusBtn){

            }
            if(clt == delBtn){
                
            }
        })
    })
})