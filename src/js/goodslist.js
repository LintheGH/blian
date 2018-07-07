require.config({
    paths:{
        'jquery':'../lib/jquery',
        'http':'./httpclient',
        'generate':'./datagrid',
        'cookie':'./cookieOperate'
    }
})



require(['jquery','http','generate','cookie'],function($,http,gen,cookie){
    var target = $('.main').find('.container')[0];
    console.log(target);
    $(function(){
        //加载第1页50个商品
        http.get('products.php',{limit:50,order:'indexid'}).then(function(res){
            let result = window.eval('(' + res + ')')
            gen.generate_list(result,target);
        },function(err){
            console.log(err);
        });

        //加入购物车按钮
        $('.main').on('click',function(evt){
            if($(evt.target).parent().hasClass('addcar')){
                let checkid = null;
                let id = $(evt.target).parent().parent().data('idx');
                checkid = cookie.check(id);// null || 商品数量
                if(checkid){
                    data = cookie.read();
                    data[id] = checkid+1;
                    cookie.set(data);
                }else{
                    data = cookie.read();//undefinded || {}
                    if(data){
                        data[id] = 1;
                        cookie.set(data);
                    }else{
                        data = {};
                        data[id] = 1;
                        cookie.set(data);
                    }
                }
            }
            
        })
    })
})


