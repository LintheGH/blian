require.config({
    paths:{
        'jquery':'../lib/jquery'
    }
});

define(['jquery'],function($){
    return {
        generate_list:function(res,target){

                    let dataset = res.data1;
                    for(let i=0;i<dataset.length;i++){
                        if(dataset[i].type == 1){
                            var type = '百联自营';
                        }else{
                            var type = '';
                        }
                        let html = `<div class="main-item" data-idx="${dataset[i].indexid}">
                                        <div class="mi-pic"><a href="../html/goods.html?indexid=${dataset[i].indexid}"><img src="${dataset[i].picture}" alt=""></a></div>
                                        <div class="mi-price">￥${dataset[i].price}</div>
                                        <div class="mi-title"><a href="../html/goods.html?indexid=${dataset[i].indexid}">${dataset[i].title}</a></div>
                                        <div class="mi-msg">${dataset[i].description}</div>
                                        <div class="mi-com"><span class="mi-com-commit"><a href="javascript:"><i class="fa fa-file-text-o"></i>${dataset[i].comment}</a></span><span class="mi-com-good"><a href="javascript:"><i class="fa fa-thumbs-o-up"></i>${parseInt(Number(dataset[i].goodcomment)/Number(dataset[i].comment)*100)}%</a></span></div>
                                        <div class="mi-type">${type}</div>
                                        <div class="addcar"><a href="javascript:">加入购物车</a></div>
                                    </div>`
                        
                        $(html).appendTo(target);
                    }
                },
        index_generate_list:function(res,target){
                        let dataset = res.data1;
                        for(let i=0;i<dataset.length;i++){
                            if(dataset[i].type == 1){
                                var type = '百联自营';
                            }else{
                                var type = '';
                            }
                            let html = `<li>
                                            <div class="g-item-img"><a href="../html/goods.html?indexid=${dataset[i].indexid}"><img src="${dataset[i].picture}" alt=""></a></div>
                                            <div class="g-item-title" title="${dataset[i].title}"><a href="./html/goods.html?indexid=${dataset[i].indexid}">${dataset[i].title}</a></div>    
                                            <div class="g-item-main">
                                                <span class="price">￥${dataset[i].price}</span>
                                                <span class="collect fr">
                                                    <a href="javascript:">
                                                        <i class="fa fa-heart-o"></i>
                                                        收藏
                                                    </a>
                                                </span>
                                            </div>
                                        </li>`
                            
                            $(html).appendTo(target);
                        }
        }
    }
    
});

