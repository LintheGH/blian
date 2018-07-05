require.config({
    paths:{
        'jquery':'../lib/jquery'
    }
})

define(['jquery'],function($){
    return {
        start:function(fn,node1,node2,idx){

            return setInterval(function(){
                if(idx >= (node1.length+1)){
                    idx = 1;
                }
                // for(let i=0;i<node1.length;i++){
                //     if(node1[i].dataset.tridx == idx){
                //         node1[i].style.opacity = 1;
                //         node2[i].style.boxShadow = `0 0 0 4px #ccc`; 
                //     }else{
                //         node1[i].style.opacity = 0;
                //         node2[i].style.boxShadow = `0 0 0 0`;
                //     }
                // }
                fn(node1,node2);
                idx++;
            },2000)
        },
        stop:function(timer){
            clearInterval(timer);
        }
    }
})