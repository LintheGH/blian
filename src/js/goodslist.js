require.config({
    paths:{
        'jquery':'../lib/jquery',
        'http':'./httpclient',
        'generate':'./datagrid'
    }
})



require(['jquery','http','generate'],function($,http,gen){
    var target = $('.main').find('.container')[0];
    console.log(target);
    $(function(){
        http.get('products.php',{limit:50,order:'indexid'}).then(function(res){
            let result = window.eval('(' + res + ')')

            gen.generate_list(result,target);
        },function(err){
            console.log(err);
        });
        $('.s-fir').on('click',function(){
            target.innerHTML = '';
            http.get('products.php',{limit:50,order:'indexid'}).then(function(res){
                let result = window.eval('(' + res + ')')

                gen.generate_list(result,target);
            },function(err){
                console.log(err);
            });
        });
        $('.sellnumber').on('click',function(){
            target.innerHTML = '';
            http.get('products.php',{limit:50,order:'sellnumber'}).then(function(res){
                let result = window.eval('(' + res + ')')

                gen.generate_list(result,target);
            },function(err){
                console.log(err);
            });
        });
        $('.ssprice').on('click',function(){
            target.innerHTML = '';
            http.get('products.php',{limit:50,order:'price'}).then(function(res){
                let result = window.eval('(' + res + ')')

                gen.generate_list(result,target);
            },function(err){
                console.log(err);
            });
        });
        $('.scomment').on('click',function(){
            target.innerHTML = '';
            http.get('products.php',{limit:50,order:'comment'}).then(function(res){
                let result = window.eval('(' + res + ')')

                gen.generate_list(result,target);
            },function(err){
                console.log(err);
            });
        });
        $('.fir').on('click',function(){
            target.innerHTML = '';
            http.get('products.php',{limit:50,order:'indexid'}).then(function(res){
                let result = window.eval('(' + res + ')')

                gen.generate_list(result,target);
            },function(err){
                console.log(err);
            });
        });
        $('.sec').on('click',function(){
            target.innerHTML = '';
            http.get('products.php',{page:51,limit:100,order:'indexid'}).then(function(res){
                let result = window.eval('(' + res + ')')

                gen.generate_list(result,target);
            },function(err){
                console.log(err);
            });
        });
        $('.thr').on('click',function(){
            target.innerHTML = '';
            http.get('products.php',{page:101,limit:150,order:'indexid'}).then(function(res){
                let result = window.eval('(' + res + ')')

                gen.generate_list(result,target);
            },function(err){
                console.log(err);
            });
        });
        $('.fou').on('click',function(){
            target.innerHTML = '';
            http.get('products.php',{limit:50,order:'indexid'}).then(function(res){
                let result = window.eval('(' + res + ')')

                gen.generate_list(result,target);
            },function(err){
                console.log(err);
            });
        });
        $('.fiv').on('click',function(){
            target.innerHTML = '';
            http.get('products.php',{limit:50,order:'indexid'}).then(function(res){
                let result = window.eval('(' + res + ')')

                gen.generate_list(result,target);
            },function(err){
                console.log(err);
            });
        });
    })
})


