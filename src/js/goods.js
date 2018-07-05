require.config({
    paths:{
        'jquery':'../lib/jquery',
        'http':'./httpclient',
        'xzoom':'../lib/jquery-xZoom/jquery.xZoom'
    }
});

require(['jquery','http'],function($,http){
    $(function(){
        let arr = window.location.search.slice(1).split('=');
        let indexid = Number(arr[1]);
        http.get('getitem.php',{
            indexid:indexid
        }).then(function(res){
                    let obj = window.eval('(' + res + ')')[0];
                    $('.ii-mainpic').find('img')[0].src = `${obj.picture}`;
                    $('.minpic').find('img')[0].src = `${obj.picture}`;
                    $('.goodsid').find('span')[0].innerText = `${obj.id}`;
                    $('.is-title').find('h2')[0].title = `${obj.title}`;
                    $('.is-title').find('h2')[0].innerHtml = `<span class="item-type">自营</span>${obj.title}`;
                    $('.is-scr')[0].innerText = `${obj.description}`;
                    $('#item-price')[0].innerText = `${obj.price}`;
                    $('#item-number')[0].innerText = `${obj.number}`;
                    $('.isc-goodcomment').find('i')[0].innerText = `${parseInt(Number(obj.goodcomment)/Number(obj.comment)*100)}`;
                    $('.isc-comments').innerText = `${obj.comment}`;
                    if(obj.type != 1){
                        $('.item-type')[0].style.display = `none`;
                    }else if(obj.type == 1){
                        $('.item-type')[0].style.display = `inline-block`;
                    }
        },function(err){
            console.log(err);
        });

        // $('.zoom').xZoom({
        //     // height:100,
        //     // position:'top'
        // })
    })
    

})