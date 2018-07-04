require.config({
    paths:{
        'jquery':'../lib/jquery'
    }
})
require(['jquery'],function($){
    let list_details = $('.list-detail');
    let lists = $('.all-list').find('li');
    let lis = $('.top-roll').find('li');
    let lics = $('.tr-idx').find('li');
    let timer;
    let idx = 1;
    let basemovel  = -171;
    let basemover = 171;
    let block = $('.b-lists')[0];
    for(let i=0;i<lists.length;i++){
        lists[i].onmouseover = function(){
            for(let j=0;j<list_details.length;j++){
                if(list_details[i].className.indexOf(this.className) > 0){
                    list_details[i].style.display = 'block';
                }else{
                    list_details[i].style.display = 'none';
                }
            }
        }
    }
    $('.all-list').on('mouseout',function(){
        for(let i=0;i<list_details.length;i++){
                list_details[i].style.display = 'none';
        }
    })
    
    function start(){

        return setInterval(function(){
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
        },2000)
    }

    function stop(){
        clearInterval(timer);
    }

    timer = start();

    for(let i=0;i<lics.length;i++){
        lics[i].onmouseover = function(){
            stop();
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
            timer = start();
        }
    }

    $('.arrowl').on('click',function(){
        $('.arrowr')[0].style.display = 'block';
        let margin_status = Number(block.style.marginLeft.slice(0,-2));
        
        $('.b-lists')[0].style.marginLeft = (margin_status + basemovel) + 'px';
        margin_status = Number(block.style.marginLeft.slice(0,-2));
        if(margin_status <= -1920){
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