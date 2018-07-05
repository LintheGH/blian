require.config({
    paths:{
        'jquery':'../lib/jquery',
        'generate':'./datagrid',
        'http':'./httpclient'
    }
})
require(['jquery','generate','http'],function($,gen,http){
    let my_ul = $('.adv-my-banner').find('ul')[0];
    let gs_ul = $('.adv-gs-banner').find('ul')[0];
    let my_lis = $('.adv-my-banner').find('li');
    let gs_lis = $('.adv-gs-banner').find('li');
    let lis = $('.top-roll').find('li');
    let lics = $('.tr-idx').find('li');
    let timer;
    let timer2;
    let timer3;
    let idx = 1;
    let idx2 = 1;
    let idx3 = 1;
    let basemovel  = -160;
    let basemover = 160;
    let block = $('.b-lists')[0];
    let target = $('.guess-lists')[0];

    http.get('products.php',{limit:20,order:'indexid'}).then(function(res){
        let result = window.eval('(' + res + ')')

        gen.index_generate_list(result,target);
    },function(err){
        console.log(err);
    })
    // for(let i=0;i<lists.length;i++){
    //     lists[i].onmouseover = function(){
    //         for(let j=0;j<list_details.length;j++){
    //             if(list_details[i].className.indexOf(this.className) > 0){
    //                 list_details[i].style.display = 'block';
    //             }else{
    //                 list_details[i].style.display = 'none';
    //             }
    //         }
    //     }
    //     list_details[i].onmouseover = function(){
    //         for(let i=0;i<list_details.length;i++){
    //             list_details[i].style.display = 'block';
    //         }
    //     }
    //     list_details[i].onmouseout = function(){
    //         for(let i=0;i<list_details.length;i++){
    //             list_details[i].style.display = 'none';
    //         }
    //     }
    // }
    // $('.all-list').on('mouseout',function(){
    //     for(let i=0;i<list_details.length;i++){
    //             list_details[i].style.display = 'none';
    //     }
    // });
    function troll(){
        if(idx >= 7){
            idx = 1;
        }
        for(let i=0;i<lis.length;i++){
            if(lis[i].dataset.tridx == idx){
                lis[i].style.opacity = 1;
                lics[i].style.boxShadow = `0 0 0 4px #ccc`; 
            }else{
                lis[i].style.opacity = 0;
                lics[i].style.boxShadow = `0 0 0 0`;
            }
        }
        idx++;
    }
    function myroll(){
        if(idx2 >= 4){
            idx2 = 0;
            my_ul.style.transition = 'all 0s';
            my_ul.style.marginLeft = '0';
        }else{
            my_ul.style.transition = 'all 1s';
        }
        my_ul.style.marginLeft = `-${idx2*306}px`;

        idx2++;
    }
    function gsroll(){
        if(idx3 >= 4){
            idx3 = 0;
            gs_ul.style.transition = 'all 0s';
            gs_ul.style.marginLeft = '0';
        }else{
            gs_ul.style.transition = 'all 1s' ;

        }
        gs_ul.style.marginLeft = `-${idx3*306}px`;
        
        idx3++;
    }



    function start(fn){
        return setInterval(function(){
            fn();
        },2000)
    }
    function stop(timer){
        clearInterval(timer);
    }

    timer = start(troll);
    timer2 = start(myroll);
    timer3 = start(gsroll);

    for(let i=0;i<lics.length;i++){
        lics[i].onmouseover = function(){
            stop(timer);
            for(let j=0;j<lics.length;j++){
                if(this == lics[j]){
                     idx = lics[j].dataset.tridx;
                     lis[j].style.opacity = 1;
                     lics[j].style.boxShadow = `0 0 0 4px #ccc`; 
                }else{
                    lis[j].style.opacity = 0;
                    lics[j].style.boxShadow = `0 0 0 0`;
                }
            }
        }
        lics[i].onmouseout = function(){
            timer = start(troll);
        }
    }
    for(let i=0;i<gs_lis.length;i++){
        gs_lis[i].onmouseover = function(){
            stop(timer3);
        }
        gs_lis[i].onmouseout = function(){
            timer3 = start(gsroll);
        }
    }
    for(let i=0;i<my_lis.length;i++){
        my_lis[i].onmouseover = function(){
            stop(timer3);
        }
        my_lis[i].onmouseout = function(){
            timer3 = start(myroll);
        }
    }



    $('.arrowl').on('click',function(){
        $('.arrowr')[0].style.display = 'block';
        let margin_status = Number(block.style.marginLeft.slice(0,-2));
        
        $('.b-lists')[0].style.marginLeft = (margin_status + basemovel) + 'px';
        margin_status = Number(block.style.marginLeft.slice(0,-2));
        if(margin_status <= -960){
            $('.arrowl')[0].style.display = 'none'
        }
    });
    $('.arrowr').on('click',function(){
        $('.arrowl')[0].style.display = 'block';
        let margin_status = Number(block.style.marginLeft.slice(0,-2));
        
        $('.b-lists')[0].style.marginLeft = (margin_status + basemover) + 'px';
        margin_status = Number(block.style.marginLeft.slice(0,-2));
        if(margin_status >= 0){
            $('.arrowr')[0].style.display = 'none'
        }
    })



    
})