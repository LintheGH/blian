require.config({
    paths:{
        'jquery':'../lib/jquery',
        'generate':'./datagrid',
        'http':'./httpclient',
        'banner':'./indexBanner'
    }
})
require(['jquery','generate','http','banner'],function($,gen,http,banner){
    
    let basemovel  = -160;
    let basemover = 160;
    let block = $('.b-lists')[0];
    let target = $('.guess-lists')[0];


    //推荐商品请求
    http.get('products.php',{limit:20,order:'indexid'}).then(function(res){
        let result = window.eval('(' + res + ')')

        gen.index_generate_list(result,target);
    },function(err){
        console.log(err);
    })


    //news部分箭头点击效果
    $('.arrowl').on('click',function(){
        $('.arrowr')[0].style.display = 'block';
        let margin_status = Number(block.style.marginLeft.slice(0,-2));
        
        block.style.marginLeft = (margin_status + basemovel) + 'px';
        margin_status = Number(block.style.marginLeft.slice(0,-2));
        if(margin_status <= -960){
            $('.arrowl')[0].style.display = 'none'
        }
    });
    $('.arrowr').on('click',function(){
        $('.arrowl')[0].style.display = 'block';
        let margin_status = Number(block.style.marginLeft.slice(0,-2));
        
        block.style.marginLeft = (margin_status + basemover) + 'px';
        margin_status = Number(block.style.marginLeft.slice(0,-2));
        if(margin_status >= 0){
            $('.arrowr')[0].style.display = 'none'
        }
    })


    //吸顶菜单
    let absordtop = $('#absordtop');
    function scroll(){
        if(window.scrollY >= 170){
            absordtop.css({'top':'0'});
        }else{
            absordtop.css({'top':'-75px'})
        }
    }
    scroll();
    window.onscroll = scroll;
    
    
})