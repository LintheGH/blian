require.config({
    paths:{
        'jquery':'../lib/jquery',
        'http':'./httpclient',
        'cookie':'./cookieOperate'
    }
});

require(['jquery','http','cookie'],function($,http,cookie){
    $(function(){
        let arr = window.location.search.slice(1).split('=');
        let indexid = Number(arr[1]);
        let data = {};

        //请求传递过来的商品信息
        http.get('getitem.php',{
            indexid:indexid
        }).then(function(res){
                    let obj = window.eval('(' + res + ')')[0];
                    $('.ii-mainpic').find('img')[0].src = `${obj.picture}`;
                    $('.minpic').find('img')[0].src = `${obj.picture}`;
                    $('.goodsid').find('span')[0].innerText = `${obj.id}`;
                    $('.goodsid')[0].setAttribute('data-idxid',`${obj.indexid}`);
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

        //加入购物车按钮
        $('.addtocar').on('click',function(){
            let id = $('.goodsid')[0].dataset.idxid;
            let checkid = cookie.check(id);
            if(checkid){
                data = cookie.read();
                data[id] = checkid + Number($('.isb-count').val());
                cookie.set(data);
            }else{    
                data = cookie.read();
                if(data){
                    data[id] = Number($('.isb-count').val());
                    cookie.set(data);
                }else{
                    data = {};
                    data[id] = Number($('.isb-count').val());
                    cookie.set(data);
                }
            }
        });

        //立即购买按钮
        $('.buynow').on('click',function(){
            let id = $('.goodsid')[0].dataset.idxid;
            let checkid = cookie.check(id);
            if(checkid){
                data = cookie.read();
                data[id] = checkid + Number($('.isb-count').val());
                cookie.set(data);
            }else{
                
                data = cookie.read();
                if(data){
                    data[id] = Number($('.isb-count').val());
                    cookie.set(data);
                }else{
                    data = {};
                    data[id] = Number($('.isb-count').val());
                    cookie.set(data);
                }
            }
            window.location.href = './car.html';
        })



        //数量增加函数
        var plus = function(){
            let num = Number($('.isb-count').val());
            num++;
            $('.isb-count').val(num);
            $('#minus-btn').unbind('click');
            $('#minus-btn').bind('click',minus);
            let isb = Number($('.isb-count').val());
            let n = Number($('#item-number').text())-1;
            console.log(isb,n)
            if(isb >= n ){
                $('#plus-btn').unbind('click');
            }
            else{
                $('#plus-btn').unbind('click');
                $('#plus-btn').bind('click',plus);
            }
        }

        //数量减少函数
        var minus = function(){
            let num = Number($('.isb-count').val());
            num--;
            $('.isb-count').val(num);
            $('#plus-btn').unbind('click');
            $('#plus-btn').bind('click',plus);
            let isb = Number($('.isb-count').val());
            console.log(isb)
            if(isb <= 2){
                $('#minus-btn').unbind('click');
            }else{
                $('#minus-btn').unbind('click');
                $('#minus-btn').bind('click',minus);

            }
        }
    
        //数量增加事件
        $('#plus-btn').bind('click',plus);

        //数量减少事件
        $('#minus-btn').bind('click',minus)


        //到达时间
        var getDate = function(){
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let nowDate = `${year}-${month}-${day+3}`;
            return nowDate;
        }
        
        $('.reach-day').text(getDate());



    })
    
})

